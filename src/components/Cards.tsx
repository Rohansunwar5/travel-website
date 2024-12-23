"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import AnimatedTitle from "./AnimatedTitle";
import { ActionButton } from "./ActionButton";
import Tawang1 from "../../public/destinations/Tawang1.jpg"
import Tawang2 from "../../public/destinations/Tawang2.jpg"
import Tawang3 from "../../public/destinations/Tawang3.jpg"
import Tawang4 from "../../public/destinations/Tawang4.jpg"

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
              src={Tawang1}
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
              src={Tawang2}
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
              src={Tawang3}
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
              src={Tawang4}
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
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
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
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
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
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
          <ActionButton/>

    </>
  );
};
const DummyContent2 = () => {
  return (
    <>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Discover Mechuka – A Hidden Gem of Arunachal Pradesh
              </span> <br />
             <p>
  Located at the Indo-China border in the West Siang district, Mechuka is often referred to as the &ldquo;Switzerland of India&rdquo; due to its mesmerizing landscapes of snow-capped peaks, lush valleys, and meandering rivers.
</p>

            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Why Visit Mechuka?
              </span>{" "} 
              <br />1. Mesmerizing Scenic Views: Mechuka is a haven for nature lovers, offering some of the most stunning landscapes in India. With its vast green meadows, towering mountains, crystal-clear rivers, and peaceful villages, it feels like a dream come to life. The beauty of the region changes with the seasons – lush and vibrant in the summer and enveloped in a blanket of snow during winter.
              <br />2. Rich Tribal Culture: Home to the Memba tribe, Mechuka offers an authentic glimpse into the culture of the indigenous people. Their traditions, handicrafts, and way of life are deeply rooted in Tibetan Buddhism, and visitors can explore local monasteries and participate in cultural festivals. The hospitality of the locals is unmatched, and a visit to their homes provides a warm and personal experience.
              <br /> 3. Adventure and Peaceful Retreat: Whether you&apos;re an adventure enthusiast or someone seeking peace, Mechuka has something to offer. The region is perfect for trekking, camping, fishing, and even river rafting. The unspoiled environment and peaceful surroundings also make it an ideal spot for meditation and soul-searching, offering a serene escape from the stresses of modern life.
              <br /> 4. Indo-China Border Proximity:
              Mechuka holds a strategic position near the Indo-China border and offers a unique chance to visit a border area. Though access is restricted to authorized visitors, the nearby Lipunla Pass gives a glimpse into India&apos;s frontier defense and its importance in the region&apos;s geopolitical landscape.
            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Top Attractions in Mechuka
              </span>{" "}  
              <br />1. Mechuka Valley: 
              The heart of Mechuka, the valley offers breathtaking views of the surrounding hills, rivers, and the mighty Himalayas. The valley is dotted with small villages and is perfect for trekking and exploring the natural beauty of the region.

              <br />2. Samten Yongcha Monastery: 
              The Samten Yongcha Monastery, situated atop a hill, offers panoramic views of the entire valley. The monastery&rsquo;s calm and serene environment makes it a spiritual retreat, with its Tibetan Buddhist architecture and peaceful surroundings. It&apos;s a great place for introspection and prayer.

              <br />3. River Siyom: 
              The Siyom River, also known as the &quot;Mechuka River,&quot; flows through the valley, offering crystal-clear waters and opportunities for activities like fishing and boating. The river also adds a tranquil touch to the surrounding beauty of the region.

              <br />4. Riwot Waterfall: 
              A hidden gem, the Riwot Waterfall is a peaceful and serene spot located a short distance from the town. It offers a perfect backdrop for photography, nature walks, and quiet moments of relaxation amidst the natural beauty of Mechuka.

              <br />5. Lipunla Pass: 
              For those interested in history and geography, Lipunla Pass offers a rare opportunity to explore a strategic location near the Indo-China border. Though access is restricted, the region around the pass gives an insight into the strategic importance of the area.
            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Best Time to Visit Mechuka
              </span>{" "} <br />
              The best time to visit Mechuka is from March to October, when the weather is pleasant and the region is accessible for sightseeing and outdoor activities. For those interested in witnessing snowfall and experiencing winter, the months of November to February bring snow to the area, making it a winter wonderland, though some roads may be challenging during this season.
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
              How to Reach Mechuka
              </span>{" "} <br />
              By Air: The nearest airport to Mechuka is Dibrugarh Airport in Assam, about 300 km away. From Dibrugarh, you can take a road trip to Mechuka.
              <br />By Train: The nearest railway station is Tinsukia, around 250 km from Mechuka, which is well-connected to major cities in India. From Tinsukia, a scenic drive through the countryside will take you to Mechuka.
              <br />By Road: Mechuka is well-connected by road to various parts of Arunachal Pradesh and Assam. The journey to Mechuka itself is an adventure, with winding roads offering breathtaking views of the hills, rivers, and valleys.

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
              Accommodation in Mechuka
              </span>{" "} <br />
              Though a relatively remote destination, Mechuka offers a range of accommodations to suit different preferences. From basic guesthouses to charming homestays, visitors can enjoy warm local hospitality. For a more comfortable stay, there are a few hotels and resorts offering modern amenities while still maintaining the traditional charm of the region.
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
              Experience the Magic of Mechuka
              </span>{" "} <br />
              Mechuka is one of those rare places that remain untouched by the rush of modern tourism. Its beauty, peace, and rich cultural heritage make it a must-visit destination for anyone looking to experience the true essence of Arunachal Pradesh. Whether you are an adventurer, a nature lover, or a cultural enthusiast, Mechuka promises a journey that will stay with you forever.



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
const DummyContent3 = () => {
  return (
    <>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Discover Mago and Thingbu – Hidden Treasures of Arunachal Pradesh
              </span> <br />
              Nestled in the tranquil beauty of Arunachal Pradesh, Mago and Thingbu are two small, picturesque villages that offer an off-the-beaten-path experience for those seeking an escape into nature. Located in the West Kameng district, these villages lie near the Indo-China border and are known for their pristine landscapes, vibrant culture, and serene atmosphere. Ideal for nature lovers, trekkers, and those seeking to experience the rural charm of Northeast India, Mago and Thingbu promise an unforgettable journey.

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
              Why Visit Mechuka?
              </span>{" "} 
              <br />1. Untouched Natural Beauty: 
Mago and Thingbu are surrounded by lush green forests, meandering rivers, and snow-capped peaks. The area offers stunning views of the Eastern Himalayas and is ideal for photography, trekking, and enjoying the great outdoors. The pristine environment of these villages remains largely untouched by commercialization, making it a perfect destination for those looking to explore nature in its purest form.

              <br />2. Seclusion and Peace: 
Unlike more popular tourist destinations, Mago and Thingbu offer complete tranquility, making it a perfect retreat for those seeking peace and solitude. The calm atmosphere, fresh mountain air, and serene surroundings allow visitors to disconnect from the hustle of daily life and rejuvenate in a quiet, natural setting.

              <br />3. Unique Cultural Experience: 
Mago and Thingbu are home to the indigenous people of the area, mainly from the Monpa tribe. The region’s rich cultural heritage is evident in the villages’ lifestyle, customs, and festivals. Visitors can immerse themselves in local traditions, interact with the friendly villagers, and experience the authentic culture of Arunachal Pradesh.

              <br /> 4. Trekking and Adventure: 
For adventure enthusiasts, Mago and Thingbu offer incredible trekking opportunities. The journey to these villages itself is an adventure, with scenic treks through dense forests, along rivers, and across mountain passes. The surrounding mountains and valleys offer several trails for both beginners and seasoned trekkers.

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
              Top Attractions Near Mago and Thingbu
              </span>{" "}  <br />
              1. The Surrounding Himalayas: 
              The towering peaks of the Eastern Himalayas serve as a stunning backdrop for Mago and Thingbu. The mountains provide excellent trekking and exploration opportunities, and their beauty makes the region a must-visit for those interested in nature and adventure.

              <br />2. Mago Monastery: 
              One of the cultural highlights of the region is the Mago Monastery, a beautiful Buddhist monastery that offers insight into the spiritual practices of the Monpa tribe. The monastery is perched on a hilltop, providing breathtaking views of the surrounding landscape. It&rsquo;s a peaceful spot for reflection and learning about the region&apos;s Buddhist traditions.

              <br />3. Hot Springs in Thingbu: 
              Thingbu is known for its natural hot springs, which are believed to have medicinal properties. Visitors can relax in these hot springs, surrounded by nature, and enjoy a rejuvenating experience. The warm waters of the springs are a unique natural feature of the region and offer a tranquil retreat.

              <br />4. Trek to the Indo-China Border: 
              Mago and Thingbu&apos;s proximity to the Indo-China border makes it an interesting area for those interested in exploring the strategic significance of the region. While access is restricted, the surrounding mountains and passes provide breathtaking views of the border and a sense of adventure.
            </p>
            {/* <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Best Time to Visit Mago and Thingbu
              </span>{" "} <br />
              The best time to visit Mago and Thingbu is from March to October, when the weather is relatively warm, and the region is accessible for trekking and exploration. Winters (November to February) bring snow and make the region look magical, though temperatures can drop significantly, and the area may be more challenging to access due to snow.
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
              How to Reach Mago and Thingbu
              </span>{" "} <br />
              By Air: The nearest airport is in Tezpur, Assam, approximately 200 km from Mago and Thingbu. From there, you can hire a taxi or take a local bus to reach the villages.
              <br />By Train: The nearest railway station is Tezpur, which is well-connected to major cities in India. From Tezpur, a road journey will take you to Mago and Thingbu.
              <br />By Road: Mago and Thingbu are accessible by road, with the nearest town being Bomdila. The journey to these villages takes visitors through scenic mountain roads, offering picturesque views of the landscape along the way.

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
              Accommodation in Mago and Thingbu
              </span>{" "} <br />
              Accommodation in Mago and Thingbu is limited, with options mostly available in the form of basic guesthouses, homestays, and campsites. Staying with the local people provides an opportunity to experience their warm hospitality and traditional lifestyle. For more comfortable accommodations, you can stay in Bomdila, the nearest town, and plan a day trip to explore the villages.
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
              Experience the Tranquility of Mago and Thingbu
              </span>{" "} <br />
              Mago and Thingbu offer an authentic, off-the-beaten-path experience that combines natural beauty, adventure, and culture. Whether you are a nature enthusiast, a photographer, a trekker, or someone seeking peace away from the crowded tourist spots, these villages provide the perfect escape into the heart of Arunachal Pradesh.
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
    category: "Mechuka",
    title: "A Hidden Gem of Arunachal Pradesh",
    src: "https://images.unsplash.com/photo-1672399452793-fff07b0d6bce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent2 />,
  },
  {
    category: "Mago",
    title: "Hidden Treasures of Arunachal Pradesh",
    src: "https://images.unsplash.com/photo-1672399444836-3f2d667ded8e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent3 />,
  },
  // {
  //   category: "Sangti Valley",
  //   title: "Valleys",
  //   src: "https://images.unsplash.com/photo-1648963799905-b44ad0123233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
];
