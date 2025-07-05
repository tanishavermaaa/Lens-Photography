import MinimalHeader from "../components/MinimalHeader";
import HeroSection from "../components/HeroSection";
import QuoteSection from "../components/QuoteSection";
import PhotographersSection from "../components/PhotographersSection";
import OneStopSection from "../components/OneStopSection";
import ExhibitionsSection from "../components/ExhibitionsSection";
import ArtistsGridSection from "../components/ArtistsGridSection";
import PartnersSection from "../components/PartnersSection";
import NewsletterSection from "../components/NewsletterSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <MinimalHeader />
      <HeroSection />
      <QuoteSection />
      <PhotographersSection />
      <OneStopSection />
      <ExhibitionsSection />
      <ArtistsGridSection />
      <PartnersSection />
      <NewsletterSection />
    </div>
  );
}
