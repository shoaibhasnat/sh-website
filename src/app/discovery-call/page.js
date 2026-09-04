import { redirect } from "next/navigation";

const FALLBACK_BOOKING_LINK =
  "https://calendar.app.google/ZnSSS2B9R7mkmfBc6";

export const metadata = {
  title: "Discovery Call",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DiscoveryCallPage() {
  const bookingLink =
    process.env.BOOKING_CALENDAR_LINK?.trim() || FALLBACK_BOOKING_LINK;

  redirect(bookingLink);
}
