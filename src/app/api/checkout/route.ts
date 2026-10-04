import { db } from "@/db";
import { mentorshipApplications } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function configuredCheckoutUrl(offer: "lifetime" | "mentorship") {
  const value =
    offer === "lifetime"
      ? process.env.LIFETIME_CHECKOUT_URL
      : process.env.MENTORSHIP_CHECKOUT_URL;

  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const offer = request.nextUrl.searchParams.get("offer");

  if (offer !== "lifetime" && offer !== "mentorship") {
    return NextResponse.json({ error: "Unknown checkout offer." }, { status: 400 });
  }

  if (offer === "mentorship") {
    const applicationId = request.nextUrl.searchParams.get("applicationId");
    if (!applicationId) {
      return NextResponse.redirect(new URL("/?application=required#mentorship", request.url));
    }

    const [application] = await db
      .select({ id: mentorshipApplications.id })
      .from(mentorshipApplications)
      .where(eq(mentorshipApplications.id, applicationId))
      .limit(1);

    if (!application) {
      return NextResponse.redirect(new URL("/?application=required#mentorship", request.url));
    }
  }

  const checkoutUrl = configuredCheckoutUrl(offer);
  if (checkoutUrl) {
    return NextResponse.redirect(checkoutUrl);
  }

  return NextResponse.redirect(
    new URL(`/?checkout=not-configured#${offer}`, request.url),
  );
}