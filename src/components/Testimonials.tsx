import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import AnimatedTitle from "./AnimatedTitle";

export function Testimonials() {
    const testimonials = [
        {
          quote:
            "Nomads Land planned the most unforgettable trip for us. The attention to detail and unique experiences made it truly exceptional.",
          name: "Sarah Chen",
          designation: "Adventure Enthusiast",
          src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "I never knew traveling could be so stress-free until Nomads Land handled everything. Highly recommended for anyone looking for a seamless travel experience.",
          name: "Michael Rodriguez",
          designation: "Travel Blogger",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Nomads Land made our dream vacation come true. From start to finish, every detail was taken care of. Exceptional service!",
          name: "Emily Watson",
          designation: "Corporate Professional",
          src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "From personalized itineraries to prompt support, Nomads Land exceeded all expectations. This is the travel agency to trust.",
          name: "James Kim",
          designation: "Luxury Traveler",
          src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          quote:
            "Our family vacation was flawless, thanks to Nomads Land. Their recommendations and planning made it a trip to cherish forever.",
          name: "Lisa Thompson",
          designation: "Family Traveler",
          src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
      
  return (
    <>
    <AnimatedTitle
          title="What people say"
          containerClass="mt-5 !text-black text-center"
    />
    <AnimatedTestimonials testimonials={testimonials} />
    
    </>

)
}
