"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Activity, CheckCircle, Globe, Heart, Plus, Shield, Star, Truck, User } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Products",
          id: "products",
        },
      ]}
      brandName="Diplomatt Pharmacy"
      button={{
        text: "Get Care",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Care You Can Trust, Quality You Can Rely On"
      description="Diplomatt Pharmacy brings world-class health standards to Kyengera. Your well-being is our community's priority."
      buttons={[
        {
          text: "Our Services",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/two-pharmacists-making-medicines-revision-drugstore_259150-57966.jpg?_wi=1"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/sunshine-male-connection-holiday-city_1134-1222.jpg",
          alt: "Community member 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/manager-preparing-store-reopening_23-2149142179.jpg",
          alt: "Community member 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pharmacist-providing-products-clients_482257-75482.jpg",
          alt: "Community member 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-working-as-pharmacist_23-2151734606.jpg",
          alt: "Community member 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/corridor-professional-collar-curly-confident_1262-2275.jpg",
          alt: "Community member 5",
        },
      ]}
      avatarText="Trusted by 5000+ residents"
    />
  </div>

  <div id="marquee" data-section="marquee">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Expert Care",
          description: "100+ years combined experience",
          bentoComponent: "marquee",
          centerIcon: Star,
          variant: "text",
          texts: [
            "Global Quality",
            "Community Focus",
            "Expert Advice",
            "Fast Service",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/medical-personnel-set_1284-4174.jpg?_wi=1",
          imageAlt: "health service medical icon",
        },
      ]}
      title="Our Commitment"
      description="Excellence in every prescription and consultation."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "The Diplomatt Difference",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/abstract-blur-furniture-shop-store-interior_1203-8577.jpg",
          alt: "About Diplomatt",
        },
        {
          type: "text",
          content: "\"The only pharmacy I trust for my family's needs in Uganda.\" — Patient Review",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Medication Review",
          description: "Personalized health analysis",
          bentoComponent: "reveal-icon",
          icon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/fuzzy-counter-shop_1203-719.jpg",
          imageAlt: "Fuzzy counter of a shop",
        },
        {
          title: "Vaccinations",
          description: "Certified immunizations",
          bentoComponent: "reveal-icon",
          icon: Shield,
          imageSrc: "http://img.b2bpic.net/free-photo/two-pharmacists-making-medicines-revision-drugstore_259150-57966.jpg?_wi=2",
          imageAlt: "Fuzzy counter of a shop",
        },
        {
          title: "Health Screenings",
          description: "Reliable testing",
          bentoComponent: "reveal-icon",
          icon: Activity,
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-furniture-shop-store-interior_1203-8577.jpg?_wi=1",
          imageAlt: "Fuzzy counter of a shop",
        },
        {
          title: "Home Delivery",
          description: "Convenient access",
          bentoComponent: "reveal-icon",
          icon: Truck,
          imageSrc: "http://img.b2bpic.net/free-vector/medical-personnel-set_1284-4174.jpg?_wi=2",
          imageAlt: "Fuzzy counter of a shop",
        },
        {
          title: "Wellness Advice",
          description: "Holistic support",
          bentoComponent: "reveal-icon",
          icon: Heart,
          imageSrc: "http://img.b2bpic.net/free-photo/vitamin-b12-injection-glass-bottle-with-pink-liquid_53876-97342.jpg?_wi=1",
          imageAlt: "Fuzzy counter of a shop",
        },
        {
          title: "First Aid Supply",
          description: "Emergency preparedness",
          bentoComponent: "reveal-icon",
          icon: Plus,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-smiling-with-top-hat-thumbs-up_1187-1549.jpg?_wi=1",
          imageAlt: "Fuzzy counter of a shop",
        },
      ]}
      title="Our Clinical Services"
      description="Comprehensive health solutions for every generation."
    />
  </div>

  <div id="why" data-section="why">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Global Standards",
          description: "Curated UK/US inventory",
          bentoComponent: "icon-info-cards",
          items: [
            {
              icon: Globe,
              label: "Origin",
              value: "Global",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/medical-expert-explaining-human-anatomy-patient-cabinet_482257-101575.jpg",
          imageAlt: "Medical expert explaining the human anatomy to patient in cabinet",
        },
        {
          title: "Personalized Care",
          description: "We know our patients",
          bentoComponent: "icon-info-cards",
          items: [
            {
              icon: User,
              label: "Patients",
              value: "1000+",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/two-pharmacists-making-medicines-revision-drugstore_259150-57966.jpg?_wi=3",
          imageAlt: "Medical expert explaining the human anatomy to patient in cabinet",
        },
        {
          title: "Trusted Ratings",
          description: "4.8 Star satisfaction",
          bentoComponent: "icon-info-cards",
          items: [
            {
              icon: Star,
              label: "Trust",
              value: "4.8★",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-furniture-shop-store-interior_1203-8577.jpg?_wi=2",
          imageAlt: "Medical expert explaining the human anatomy to patient in cabinet",
        },
      ]}
      title="Why Diplomatt?"
      description="International quality, local compassion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Patrick Mugenyi",
          handle: "@pat_m",
          testimonial: "Diplomatt changed everything for my health management.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-smiling-with-top-hat-thumbs-up_1187-1549.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Sarah Nalubega",
          handle: "@sarah_n",
          testimonial: "Always kind, always stocked with exactly what I need.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-working-nurse_23-2150829865.jpg",
        },
        {
          id: "3",
          name: "John Ouma",
          handle: "@ouma_john",
          testimonial: "The best pharmacy experience in Kyengera.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-pharmacist-doing-his-job_23-2150348264.jpg",
        },
        {
          id: "4",
          name: "Grace Akello",
          handle: "@grace_a",
          testimonial: "Professional, clean, and truly compassionate.",
          imageSrc: "http://img.b2bpic.net/free-photo/women-being-love-side-view_23-2149834527.jpg",
        },
        {
          id: "5",
          name: "David Kabugo",
          handle: "@dkabugo",
          testimonial: "Highly recommended for their expert advice.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-suffering-from-infertility_23-2149430773.jpg",
        },
      ]}
      title="Voices of the Community"
      description="Real stories from people we serve."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Wellness Vitamins",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/vitamin-b12-injection-glass-bottle-with-pink-liquid_53876-97342.jpg?_wi=2",
        },
        {
          id: "p2",
          name: "Daily Minerals",
          price: "$20",
          imageSrc: "http://img.b2bpic.net/free-photo/brain-booster-pills-container-still-life_23-2150760047.jpg",
        },
        {
          id: "p3",
          name: "Natural Supplements",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-covid19-vaccine-bottle_23-2148961583.jpg",
        },
        {
          id: "p4",
          name: "Skincare Essentials",
          price: "$30",
          imageSrc: "http://img.b2bpic.net/free-photo/brain-booster-pills-container-still-life_23-2150760036.jpg",
        },
        {
          id: "p5",
          name: "Immune Boosters",
          price: "$18",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetics-bottles-holiday-decoration-white-background_187299-47167.jpg",
        },
        {
          id: "p6",
          name: "Pain Relief",
          price: "$12",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-argan-product-composition_23-2148955785.jpg",
        },
      ]}
      title="Premium Health Products"
      description="High-grade selection for daily wellness."
    />
  </div>

  <div id="location" data-section="location">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Kyengera Mall",
          description: "Open Mon-Sat, 9AM-8PM",
          bentoComponent: "map",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-restaurant_1203-2850.jpg",
          imageAlt: "Abstract blur restaurant",
        },
      ]}
      title="Visit Us"
      description="Located in the heart of Kyengera Mall."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "cell-wave",
      }}
      tag="Contact"
      title="Need Professional Advice?"
      description="Send us a message and our lead pharmacist will assist you."
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/patient-consulting-doctor_1170-2096.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Diplomatt Pharmacy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
