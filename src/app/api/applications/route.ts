import { db } from "@/db";
import { mentorshipApplications } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, string | undefined>;

    if (!payload || typeof payload !== "object") {
      return Response.json(
        { error: "Invalid application submission." },
        { status: 400 },
      );
    }

    const name = (payload.name ?? "").trim();
    const email = (payload.email ?? "").trim().toLowerCase();

    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    let applicationId = `app_${Date.now()}`;

    if (db) {
      const [application] = await db
        .insert(mentorshipApplications)
        .values({
          name: name.slice(0, 120),
          email: email.slice(0, 255),
          phone: (payload.phone ?? "").trim().slice(0, 40),
          experienceLevel: (payload.experienceLevel ?? "Developing").trim().slice(0, 80),
          currentStage: (payload.currentStage ?? "").trim().slice(0, 3000),
          investmentCapacity: (payload.investmentCapacity ?? "Under $1,000").trim().slice(0, 80),
          primaryGoals: (payload.primaryGoals ?? "").trim().slice(0, 3000),
          helpNeeded: (payload.helpNeeded ?? "").trim().slice(0, 3000),
          timeCommitment: (payload.timeCommitment ?? "").trim().slice(0, 100),
        })
        .returning({ id: mentorshipApplications.id });

      if (application) {
        applicationId = application.id;
      }
    }

    return Response.json({ ok: true, applicationId });
  } catch (error) {
    console.error("Application submission error:", error);
    return Response.json(
      { error: "Unable to process application. Please try again." },
      { status: 500 },
    );
  }
}