import { db } from "@/db";
import { mentorshipApplications } from "@/db/schema";

export const dynamic = "force-dynamic";

const requiredFields = [
  "name",
  "email",
  "phone",
  "experienceLevel",
  "currentStage",
  "investmentCapacity",
  "primaryGoals",
  "helpNeeded",
  "timeCommitment",
] as const;

type ApplicationPayload = Record<(typeof requiredFields)[number], string>;

function isApplicationPayload(value: unknown): value is ApplicationPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return requiredFields.every(
    (field) => typeof data[field] === "string" && data[field].trim().length > 0,
  );
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();

    if (!isApplicationPayload(payload)) {
      return Response.json(
        { error: "Please complete every application field." },
        { status: 400 },
      );
    }

    const email = payload.email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    const [application] = await db
      .insert(mentorshipApplications)
      .values({
        name: payload.name.trim().slice(0, 120),
        email: email.slice(0, 255),
        phone: payload.phone.trim().slice(0, 40),
        experienceLevel: payload.experienceLevel.trim().slice(0, 80),
        currentStage: payload.currentStage.trim().slice(0, 3000),
        investmentCapacity: payload.investmentCapacity.trim().slice(0, 80),
        primaryGoals: payload.primaryGoals.trim().slice(0, 3000),
        helpNeeded: payload.helpNeeded.trim().slice(0, 3000),
        timeCommitment: payload.timeCommitment.trim().slice(0, 100),
      })
      .returning({ id: mentorshipApplications.id });

    return Response.json({ ok: true, applicationId: application.id });
  } catch (error) {
    console.error("Unable to create mentorship application", error);
    return Response.json(
      { error: "We could not submit your application. Please try again." },
      { status: 500 },
    );
  }
}