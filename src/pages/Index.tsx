
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FeaturesExpanded } from "@/components/sections/features-expanded";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FeaturesExpanded />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
