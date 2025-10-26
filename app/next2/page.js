import { AnimatedMarqueeHero } from "@/components/hero-3";

export default function Next2Page() {
  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop",
  ];

  return (
    <div className="min-h-screen">
      <AnimatedMarqueeHero
        tagline="Introducing our latest innovation"
        title="Beautiful Design Meets Performance"
        description="Experience the perfect blend of aesthetics and functionality. Built for creators who demand excellence."
        ctaText="Get Started"
        images={images}
      />
    </div>
  );
}
