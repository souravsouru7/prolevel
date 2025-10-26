import SyntheticHero from "@/components/synthetic-hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SyntheticHero
        title="An experiment in light, motion, and the quiet chaos between."
        description="Experience a new dimension of interaction — fluid, tactile, and alive. Designed for creators who see beauty in motion."
        badgeText="React Three Fiber"
        badgeLabel="Experience"
        ctaButtons={[
          { text: "Explore the Canvas", href: "#explore", primary: true },
          { text: "Learn More", href: "#learn-more" },
        ]}
        microDetails={[
          "Immersive shader landscapes",
          "Hand-tuned motion easing",
          "Responsive, tactile feedback",
        ]}
      />
    </div>
  );
}
