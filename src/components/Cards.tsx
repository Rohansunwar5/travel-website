"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import AnimatedTitle from "./AnimatedTitle";
import { ActionButton } from "./ActionButton";

export default function Cards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full relative py-20">
       <AnimatedTitle
          title="Top <b>P</b>laces  <br /> to <b>V</b>isit "
          containerClass="mt-5 !text-black text-center"
        />
  <Carousel items={cards} />
</div>

  );
}

const DummyContent = () => {
  return (
    <>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              A Land of Serenity and Beauty
              </span> <br />
              Nestled in the easternmost part of India, Tawang is a picturesque town in Arunachal Pradesh, located at an altitude of 10,000 feet. Surrounded by snow-capped mountains, deep valleys, 
              and vibrant monasteries, Tawang offers a unique blend of natural beauty, cultural richness, and tranquility. Whether you are an adventure seeker, a history enthusiast, or someone looking for 
              peaceful retreats, Tawang has something for everyone.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Why Visit Tawang?
              </span>{" "} 
              <br /> 1. Scenic Beauty Tawang is a paradise for nature lovers, offering stunning views of the Himalayan range. Its landscape is adorned with lush green forests, pristine lakes, and breathtaking waterfalls. Whether you are trekking in the mountains, strolling along scenic valleys, or just admiring the panoramic vistas, Tawang’s natural beauty is sure to captivate your heart.
              <br /> 2. Rich Tibetan Culture Tawang is home to one of the largest Buddhist monasteries in India, the Tawang Monastery. The culture and lifestyle of the local people reflect deep Tibetan roots, offering visitors a unique opportunity to explore monasteries, prayer wheels, and vibrant festivals like Losar (Tibetan New Year).
              <br /> 3. Adventure Activities For the thrill-seekers, Tawang is a hub for various adventure activities. From trekking, camping, and river rafting to exploring off-road trails, the region offers numerous outdoor experiences for every level of adventurer.
              <br /> 4. Historical Significance Tawang holds great historical importance, particularly in the context of the 1962 India-China war. The Tawang War Memorial and the associated historical sites allow visitors to learn about the region’s strategic significance and the brave soldiers who fought for the nation.

            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Top Attractions in Tawang
              </span>{" "} <br />
              1. Tawang Monastery Tawang Monastery, also known as the Galden Namgey Lhatse, is the largest monastery in India and the second-largest in the world. Founded in the 17th century, 
              this vibrant monastery houses numerous Buddhist scriptures, paintings, and a grand statue of Lord Buddha.
              <br />2. Sela Pass At an altitude of 13,700 feet, Sela Pass is a must-visit for its enchanting beauty. The pass connects Tawang to the rest of Arunachal Pradesh and offers panoramic views of snow-clad peaks. It is a popular stop for travelers due to its picturesque surroundings.
              <br />3. Madhuri Lake Madhuri Lake (or Shonga-tser Lake), surrounded by lush green forests and high mountains, is a serene spot perfect for a peaceful day outing. Its calm waters and scenic views make it an ideal spot for nature photography and relaxation.
              <br />4. Bumla Pass For those interested in exploring Tawang’s military significance, Bumla Pass is the ultimate destination. Located close to the Indo-China border, this site offers stunning views and an insight into the strategic role played by this remote location during the 1962 war.
              <br />5. Nuranang Waterfall A hidden gem, the Nuranang Waterfall is a breathtaking two-tiered waterfall, cascading down from a height of over 100 meters. It is a popular spot for nature enthusiasts and photographers, offering a serene environment amidst the dense forest.

            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Best Time to Visit Tawang
              </span>{" "} <br />
              The best time to visit Tawang is from March to October when the weather is pleasant, and the roads are accessible. Winters (November to February) bring snow and sub-zero temperatures, 
              making it a great time for snow sports and witnessing a winter wonderland, but the roads may be difficult to travel due to snow accumulation.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              How to Reach Tawang
              </span>{" "} <br />
              By Air: The nearest airport to Tawang is in Tezpur (Assam), about 300 km away. You can take a flight to Guwahati and then a road trip to Tawang.
              <br />By Train: The nearest railway station is in Tezpur or Guwahati, both of which are well-connected to major cities across India.
              <br />By Road: Tawang is well-connected by road to nearby towns and cities. The journey offers a chance to witness some of the most picturesque landscapes of the northeastern region.

            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Accommodation in Tawang
              </span>{" "} <br />
              From cozy homestays to luxury hotels, Tawang offers a range of accommodations to suit every budget. Visitors can enjoy warm hospitality and delicious local cuisine in various guesthouses and resorts in the town. For a more authentic experience, consider staying at a traditional Tibetan-style lodge.

            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Experience the Magic of Tawang
              </span>{" "} <br />
              Tawang is not just a destination; it’s a journey into the heart of the Himalayas, where you can experience peace, spirituality, adventure, and breathtaking beauty. Whether you are looking for a quiet retreat or a thrilling adventure, Tawang has it all.
              Plan your visit today and explore the hidden gem of Arunachal Pradesh!



            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
          <ActionButton/>

    </>
  );
};

const data = [
  {
    category: "Tawang",
    title: "A Land of Serenity and Beauty",
    src: "https://plus.unsplash.com/premium_photo-1664361480975-4c63828f5d88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Bumla Pass",
    title: "Hiking Trails",
    src: "https://images.unsplash.com/photo-1672399452793-fff07b0d6bce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Tawang Buddhist Monestry",
    title: "Religious site",
    src: "https://images.unsplash.com/photo-1672399444836-3f2d667ded8e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Nuranang Falls",
    title: "WaterFalls",
    src: "https://images.unsplash.com/photo-1626761627604-f27d98885f4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Tawang war Memorial ",
    title: "Monuments and statues",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Sangti Valley",
    title: "Valleys",
    src: "https://images.unsplash.com/photo-1648963799905-b44ad0123233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
