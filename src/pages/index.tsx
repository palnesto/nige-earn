import BankSection from "@/components/smart-agri/BankLoan";
import BlogSection from "@/components/smart-agri/Blogs";
import { ContactForm } from "@/components/smart-agri/Contact";
import MediaGrid from "@/components/smart-agri/Grid";
import { HelicopterDrone } from "@/components/smart-agri/HelicopterDrone";
import HeroSection from "@/components/smart-agri/Hero";
import ImageSlider from "@/components/smart-agri/ImageSlider";
import IndustrialRelations from "@/components/smart-agri/IndustrialRelation";
import MeetFounder from "@/components/smart-agri/MeetFounder";
import MobileFrame from "@/components/smart-agri/Mobile";
import Specifications from "@/components/smart-agri/Specifications";
import TrainingVideo from "@/components/smart-agri/TrainingVideo";

export default function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <MediaGrid />
      <HelicopterDrone />
      <MobileFrame />
      <ImageSlider />
      <Specifications />
      <TrainingVideo />
      <BlogSection />
      <MeetFounder />
      <IndustrialRelations />
      <BankSection />
      <ContactForm />
    </main>
  );
}
