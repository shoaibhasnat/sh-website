const getMediaImage = (mediaId, imageId) =>
  `/images/pages/media/${mediaId}/${imageId}.avif`;

export const MediaData = {
  hero: {
    title: "SH Media",
    description:
      "Explore System Heuristics updates, product stories, technical insights, AI automation ideas, software development lessons, and company highlights in one curated media hub.",
    bannerImage: "/images/pages/media/1/1",
  },
  mediaItems: [
    {
      id: 1,
      title: "Building Reliable AI Intake Experiences for Healthcare Teams",
      date: "15 May, 2026",
      dateISO: "2026-05-15",
      summary:
        "A practical look at how AI-assisted patient intake workflows reduce repetitive admin work, collect structured context, and keep clinical teams in control.",
      description: `# AI-Powered Patient Intake

AIDN helps clinics collect patient information before appointments using a smart, guided intake flow that organizes patient context before the visit.

## Key Benefits

- Faster patient onboarding
- Better clinical context before visits
- Reduced admin workload
- Secure and structured health data collection
- More consistent pre-visit summaries for care teams

## How It Works

1. Patient starts onboarding
2. AIDN asks relevant medical and lifestyle questions
3. Responses are validated and organized
4. Doctor receives a clean summary before the appointment

## Example Use Case

**Before:** Staff manually calls patients and collects information.

**After:** AIDN automatically collects the required details and prepares the intake summary.

> AIDN is designed to support clinical teams, not replace medical professionals.

### Supported Inputs

You can respond using:

- Text answers
- Multiple-choice options
- Consent responses like \`I AGREE\`
- Navigation commands like \`Ask AIDN\`

---

For more information, visit [Ask AIDN](https://askaidn.com).

\`Secure intake. Smarter workflows. Better care.\``,
      category: "Healthcare AI",
      primaryImage: getMediaImage(1, 1),
      secondaryImages: [getMediaImage(1, 2), getMediaImage(1, 3)],
    },
  ],
};
