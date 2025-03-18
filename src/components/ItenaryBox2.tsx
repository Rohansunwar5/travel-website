"use client"

import { useState } from "react"
import { Map, Compass, Plane, Palmtree, Car, PlaneTakeoff , TicketCheck, CircleX, Telescope, Backpack   } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ActionBox } from "@/components/ActionBox"
import type React from "react"
import AnimatedTitle from "./AnimatedTitle"
import Image1 from "../../public/boat.png"

export default function ItenaryBox2() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Plane className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 1: GUWAHATI TO NAMERI [4 HR 22 MIN (220.9 KM) VIA NH 27]",
      description: "Welcome to Guwahati Airport for your much awaited Tawang Sangti tour package! Upon your arrival at the Guwahati Airport, our friendly team will extend a warm greeting and ensure a smooth transition to the first leg of your journey.",
      details:
        "Embark on a picturesque 5-hour drive to Nameri National Park, a destination renowned for its forests, ancient giant trees, and the majestic Jia Bhoroli River. The journey itself unfolds a panorama of breath-taking landscapes, setting the tone for an immersive travel experience. \n\nUpon reaching Nameri National Park, check into the carefully selected hotel or resort, seamlessly blending with the natural surroundings. This serene haven will be your base for the night, offering a peaceful retreat amidst the enchanting forest. For those seeking an extra dose of adventure, an optional morning trek through the forest is available, allowing you to connect with nature in its purest form. \n\n For enthusiasts of river rafting, consider an early arrival to indulge in the thrill of rafting on the Jia Bhoroli River, a perfect option to avoid a late-night arrival in Dirang on the next day. Your Tawang Sangti tour begins with a balance of nature trolling and adventures, ensuring a customized and unforgettable travel experience.",
      image: {Image1},
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Map className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 2: NAMERI TO DIRANG [4 HR 9 MIN | 156.1 KM]",
      description: "As the sun rises, your Tawang Sangti Tour starting from Guwahati unfolds another day of exploration and adventure.",
      details:
        "As the sun rises, your Tawang Sangti Tour starting from Guwahati unfolds another day of exploration and adventure. Early risers have the opportunity to delve into the rich biodiversity of Nameri National Park, where optional activities include bird watching, tiger spotting, and the chance to encounter rare species like the White Winged Wood Duck. Immerse yourself in the natural wonders of this protected area, capturing moments of serenity and wildlife fascination. \n\n Following a hearty breakfast, adventure seekers can choose to elevate their adrenaline with a thrilling rafting experience on the Jia Bhoroli River. Please note that due to transfer times, only one of these exhilarating activities can be accommodated on this day, ensuring a seamless flow of your travel itinerary. \n\nPost-activity, embark on a journey uphill to Dirang, crossing into the picturesque landscapes of Arunachal Pradesh. Marvel at the breath-taking valleys, misty rivers, and stunning waterfalls that dot the route. Your Tawang Sangti tour unfolds not just as a journey but as an immersive experience into the heart of Northeast India. \n\nAfter a day filled with exploration, enjoyment and long drive, check into a carefully selected hotel in Dirang for a comfortable overnight stay. Let the charm of this region and the adventures of the day linger as you prepare for the next leg of your unforgettable journey. Please note that Nameri National Park is officially open for exploration from November to April, aligning with the natural cycles of this pristine habitat.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Compass className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 3: EX DIRANG SANGTI VALLEY AND MANDALA TOP EXPLORATION",
      description: "Start your day with a sumptuous breakfast, setting the stage for an immersive exploration of Sangti Valley, a hidden jewel merely 15 km from Dirang.",
      details:
        "Start your day with a sumptuous breakfast, setting the stage for an immersive exploration of Sangti Valley, a hidden jewel merely 15 km from Dirang. Nestled in the Himalayas, Sangti Valley unfolds a mesmerizing landscape of lush greenery, meandering streams, and snow-capped peaks. A leisurely stroll through Sangti Valley reveals a picturesque canvas adorned with apple and kiwi orchards. The vibrant hues against the mountainous backdrop, accompanied by the fragrant mountain air, create a sensory experience that embodies the essence of this Himalayan retreat. Renowned for its diverse birdlife, Sangti Valley captivates birdwatchers with the opportunity to spot various Himalayan bird species. The tranquil ambiance and unspoiled natural surroundings make it an ideal spot for observing and photographing these winged wonders.\n\n The afternoon unfolds as you venture to Mandala Top, a mystical destination revered for its spiritual significance and panoramic views. Just 26km away from Dirang, this place is adorned with 108 stupas. Mandala Top offers a sense peace and inner happiness, providing a captivating vantage point to appreciate the grandeur of the valleys and peaks. Explore the birding hotspot of Mandala Top, where the 108 stupas stand as a testament to the spiritual heritage of the region. Each stupa carries a unique energy, contributing to the serene ambiance of the area. Take a moment for introspection, absorb the spiritual vibrations, and capture the essence of this sacred place through your lens. \n\n As the day concludes, return to Dirang with the echoes of Sangti Valley and the spiritual aura of Mandala Top lingering in your memory. Check into your accommodation for a night of restful repose, rejuvenated by the day's exploration of nature's wonders and cultural treasures. Please note that Mandala Top sightseeing is subject to road clearance, ensuring your safety and a seamless travel experience on this captivating day of your Tawang Sangti trip. ",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Palmtree className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Days 4: DIRANG TO TAWANG TRANSFER [4 HR 27 MIN (139.2 KM) VIA NH13]",
      description: "Today is going to be the most awesome day among all as we will proceed to Tawang tour. Wake up early, fuel up with a delicious breakfast and explore the beautiful Dirang Valley once again. ",
      details:
        "Today is going to be the most awesome day among all as we will proceed to Tawang tour. Wake up early, fuel up with a delicious breakfast and explore the beautiful Dirang Valley once again. The valley, adorned with lush fruit orchards, is a delightful blend of nature and local life. Take a leisurely stroll through the orchards, interact with locals, and capture the essence of this picturesque valley. \n\n Then embark on a scenic journey to Tawang, a town gracefully nestled on the slopes of the Himalayan Mountains. The road unfolds a tapestry of natural wonders, providing glimpses of the rich cultural and historical heritage of the region. Keep your camera ready to capture the breath-taking landscapes that unfold during this picturesque drive. \n\n EN ROUTE TO SELA PASS (13700 FT.) : As you ascend towards Tawang trip, make a stop at the majestic Sela Pass, standing tall at an elevation of 13700 ft. Enveloped in fog, the pass creates an ethereal atmosphere. Despite the challenging roads, the ascent to Sela Pass rewards you with panoramic views of snow-capped peaks and pristine landscapes. This experience becomes a highlight of your Tawang tour from Guwahati. \n\n EN ROUTE TO SELA PASS (13700 FT.) : As you ascend towards Tawang trip, make a stop at the majestic Sela Pass, standing tall at an elevation of 13700 ft. Enveloped in fog, the pass creates an ethereal atmosphere. Despite the challenging roads, the ascent to Sela Pass rewards you with panoramic views of snow-capped peaks and pristine landscapes. This experience becomes a highlight of your Tawang tour from Guwahati. \n\n JASWANT GARH WAR MEMORIAL : Pay homage to the courage of Indian soldiers by visiting Jaswant Garh War Memorial. This memorial, dedicated to the heroes of the 1962 Indo-Chinese War, holds historical significance. Explore the memorial grounds, learn about the bravery displayed, and take a moment for reflection. \n\n As the day unfolds, you'll finally arrive in Tawang, a town with a unique blend of history, spirituality, and natural beauty. Ideal for leisurely walks, Tawang invites you to explore its charming streets, visit local markets, and soak in the cultural richness. The town also holds historical significance from the Indo-Chinese war of 1962, adding depth to your exploration. \n\n Check into your carefully selected accommodation for a comfortable overnight stay, surrounded by the serene ambiance of Tawang. The fourth day of your Tawang Sangti Tour Package concludes with a perfect blend of scenic beauty, historical exploration, and the promise of more enchanting discoveries in the days to come.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Telescope  className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 5: TAWANG SIGHTSEEING",
      description: "As the penultimate day of your Tawang Sangti tour package unfolds, immerse yourself in a journey that delves deep into the enchanting landscapes and hidden wonders of Tawang. ",
      details:
        "As the penultimate day of your Tawang Sangti tour package unfolds, immerse yourself in a journey that delves deep into the enchanting landscapes and hidden wonders of Tawang. This day promises a symphony of natural beauty, offering a harmonious blend of serene lakes and breath-taking vistas. Embrace the allure of the Eastern Himalayas as your exploration takes you to Tawang, a region steeped in cultural richness and adorned with the splendour of unspoiled nature. The Tawang Sangti combined tour unveils a canvas of diverse experiences, and on this fifth day, prepare to be captivated by the pristine beauty that defines Tawang's landscapes.\n\Then embark on a scenic journey to Tawang, a town gracefully nestled on the slopes of the Himalayan Mountains. The road unfolds a tapestry of natural wonders, providing glimpses of the rich cultural and historical heritage of the region. Keep your camera ready to capture the breath-taking landscapes that unfold during this picturesque drive.\n\n SHONGA-TSER LAKE [MADHURI LAKE]: Begin your day at the mesmerizing Shonga-tser Lake, affectionately known as Madhuri Lake, a jewel cradled amid towering peaks. Named after Bollywood icon Madhuri Dixit, who graced its shores for a film sequence, the lake is a testament to tranquility and natural beauty. Crystal-clear waters reflect azure skies and snow-capped peaks, creating a picturesque ambiance. A leisurely stroll along the shoreline allows you to absorb panoramic views and appreciate the peaceful surroundings. Madhuri Lake, frozen during winter, adds an extra layer of charm, showcasing the pristine wonders of Tawang.\n\n BUM LA PASS : Journey to the prestigious Bum La Pass, a significant Indo-China border point standing tall in the Himalayas. Perched at a high altitude, the pass offers awe-inspiring panoramic views of the peaks and valleys, shrouded in mist. Its strategic importance and military presence provide insights into the geopolitical context of the region. Bum La Pass transcends being a geographical landmark; it symbolizes the harmonious coexistence of natural wonders and historical narratives in the Tawang region. \n\n HEART LAKE : Nestled in the serene landscapes of Tawang, Heart Lake unveils its captivating beauty with a heart-shaped formation. Surrounded by lush greenery and embraced by majestic mountains, this alpine lake offers a picturesque setting for those seeking a peaceful escape. The heart-shaped outline adds a touch of romance, making it a favored spot for nature enthusiasts. A leisurely stroll along the lake's periphery provides breathtaking views, and the clear waters mirror the serene landscape. Heart Lake stands as a testament to the natural wonders of Tawang, inviting visitors to immerse themselves in its quietude and appreciate the simple yet profound beauty.\n\n PTSO LAKE : Situated in the pristine landscapes of Tawang, PTSO Lake captivates with its high-altitude glacial charm. Named after the initials of Pankang Teng Tso, the lake features crystal-clear waters reflecting snow-capped peaks. Surrounded by alpine meadows and embraced by the majestic Himalayas, PTSO Lake provides a tranquil escape for nature enthusiasts. The journey to PTSO Lake is as enchanting as the destination, with picturesque views along the way. Visitors can savor the crisp mountain air and enjoy moments of solitude in this pristine setting. Whether for quiet contemplation or photography against stunning vistas, PTSO Lake offers a peaceful and rejuvenating experience amidst the natural wonders of Tawang.\n\n NAGHULA LAKE : Tucked away in scenic landscapes near Tawang, Naghula Lake is a hidden gem accessible with a local taxi, providing a peaceful retreat surrounded by meadows and natural beauty. Its secluded location adds to the allure, offering a quieter and more intimate experience. The pristine waters reflect the verdant surroundings and clear skies, creating a tranquil and idyllic setting. Naghula Lake stands as a testament to the untouched beauty of the Tawang region, providing a serene escape for those seeking solace in the unspoiled charm of the Himalayan landscape. \n\n Each site visited on this day boasts unique natural beauty, providing moments of awe and reflection. As the day concludes, return to Tawang, a place of cultural richness and scenic splendor, ensuring a comfortable and restful overnight stay. Let the echoes of nature's elegance linger, promising unforgettable memories from your Tawang Sangti Tour Package.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Car className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 6: FULL DAY TAWANG SIGHTSEEING TOUR",
      description: "Embark on the Sixth day of your Tawang sightseeing tour, a journey that unravels the rich cultural tapestry of Tawang through a mesmerizing sightseeing experience.",
      details:
        "CRAFT CENTRE: Your cultural odyssey commences at the Craft Centre, a vibrant haven where the soulful expressions of Tawang's artistic heritage come to life. Marvel at the intricate craftsmanship and traditional art forms that weave tales of the region's identity. Engage intimately with local artisans, gaining profound insights into the meticulous creation of handmade crafts, textiles, and artifacts that encapsulate the very essence of Tawang's cultural legacy. \n\n TAWANG WAR MEMORIAL [EVENING LIGHT AND SOUND SHOW] : Journey into the heart of history at the Tawang War Memorial, a solemn tribute standing tall in honor of the valor and sacrifice of Indian soldiers during the 1962 Indo-China War. As dusk settles, partake in the evening light and sound show – a poignant narrative that elevates the historical significance of the memorial. Immerse yourself in the heroic tales of sacrifice, as the memorial transforms into a powerful storyteller under the canvas of the evening skies.\n\n URGELLING MONASTERY : Next, find serenity at the Urgelling Monastery, a tranquil oasis and the sacred birthplace of the Sixth Dalai Lama. Meander through the monastery's serene surroundings, absorbing the spiritual ambiance that echoes through its historical and cultural corridors. \n\n TAWANG MONASTERY : Continue your exploration to the awe-inspiring Tawang Monastery, a majestic sanctuary perched at an elevation of approximately 3,048 meters (10,000 feet) above sea level. Be captivated by the panoramic views of the surrounding mountains and valleys as you delve into the intricate architecture, vibrant murals, and sacred scriptures housed within the monastery. Allow the spiritual aura to envelop you in this sanctuary of divine tranquillity. \n\n TAWANG MONASTERY : Continue your exploration to the awe-inspiring Tawang Monastery, a majestic sanctuary perched at an elevation of approximately 3,048 meters (10,000 feet) above sea level. Be captivated by the panoramic views of the surrounding mountains and valleys as you delve into the intricate architecture, vibrant murals, and sacred scriptures housed within the monastery. Allow the spiritual aura to envelop you in this sanctuary of divine tranquillity. \n\n Conclude this enchanting day of cultural exploration with a comfortable overnight stay in Tawang. Let the serene beauty and spiritual essence of this Himalayan town create a sanctuary for reflection and relaxation, promising memories that linger long after the stars blanket the sky.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Backpack  className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 7: TAWANG TO BOMDILA [190 KM / 8 HRS]",
      description: "Embark on the seventh day of your Tawang Dirang tour package, as you bid farewell to the Himalayan haven of Tawang and venture towards the serene town of Bomdila.  ",
      details:
        "Embark on the seventh day of your Tawang Dirang tour package, as you bid farewell to the Himalayan haven of Tawang and venture towards the serene town of Bomdila. Post a hearty breakfast, set forth on a picturesque journey from Tawang to Bomdila, spanning approximately 190 kilometers. Allow the scenic landscapes to unfold as you traverse through the winding roads, revealing the ever-changing beauty of the Eastern Himalayas.\n\n BOMDILA EXPLORATION: Upon reaching Bomdila, immerse yourself in the local charm and cultural allure. Explore the Buddhist monasteries that grace the landscape, each echoing with spiritual resonance and adorned with traditional Tibetan architecture. Delve into the tranquil ambiance of these sacred spaces, absorbing the serene energy that permeates the surroundings.\n\nCRAFT CENTER DISCOVERY : Uncover the artistic expressions of Bomdila at the Craft Centre. Here, witness the skilled craftsmanship that produces intricate handicrafts and traditional artefacts. Engage with local artisans to gain insights into the unique artistry that defines Bomdila's cultural identity\n\nEVENING MARKET DELIGHT : As the day gracefully transitions into the evening, partake in the vibrant atmosphere of Bomdila's evening market. Enjoy the kaleidoscope of colours, aromas, and sounds as you peruse through local stalls offering a variety of handicrafts, souvenirs, and delectable local cuisines. Immerse yourself in the lively spirit of the market, making it a delightful precursor to your overnight stay. \n\n Conclude this day's journey with a tranquil overnight stay in Bomdila. Allow the essence of this charming town to seep into your soul, promising a restful night amidst the Himalayan tranquillity that defines Bomdila.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <PlaneTakeoff  className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 8: BOMDILA TO GUWAHATI WITH SWEET MEMORIES",
      description: "Bid adieu to Bomdila at sunrise, as your journey back to Guwahati commences. Traverse the familiar landscapes, each turn resonating with laughter, sights witnessed, and bonds forged during your Tawang Sangti sojourn. ",
      details:
        "Bid adieu to Bomdila at sunrise, as your journey back to Guwahati commences. Traverse the familiar landscapes, each turn resonating with laughter, sights witnessed, and bonds forged during your Tawang Sangti sojourn. The 350-kilometer drive becomes a symphony of nostalgia, with every mile painting a canvas of gratitude for the beauty encountered and experiences embraced. Arrive in Guwahati in the evening, where the city orchestrates a grand farewell. The final notes play softly during the airport drop, leaving you with a heart full of gratitude and the lingering melody of your Tawang Sangti trip.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-[280px] xl:h-[320px]",
      icon: <TicketCheck className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "TAWANG SANGTI TOUR PACKAGE INCLUDES",
      description: "",
      details:
        "•	Shared accommodation with specified meals. \n\n•	AC vehicle with driver for all transfers. \n\n•	Complimentary breakfast. \n\n •	Inner Line Permit for Arunachal Pradesh. \n\n •	Guwahati Airport/Railway Station/Bus Station pickup and drop.\n\n•	Comprehensive coverage of sightseeing.\n\n•	Inclusive of driver allowance, tolls, parking, taxes, fuel charges.\n\n •	Complimentary stay for children below 5 years (as per hotel rules).",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-[280px] xl:h-[320px]",
      icon: <CircleX className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "TAWANG SANGTI TOUR PACKAGE EXCLUDES",
      description: "",
      details:
        "•	Personal expenses and unspecified activities. \n\n •	Meals not in the itinerary. \n\n•	Optional Tawang sightseeing taxi fare.\n\n •	Entry fees, camera fees, and optional activity costs.\n\n •	Cost which is not mentioned in 'Inclusions.'\n\n •	Additional charges for Foreign Nationals not covered ",
    },
  ]

  return (
    <div className="relative min-h-screen py-12 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 text-center">
        {/* <p className="font-general text-[#E8BCB9] text-sm uppercase md:text-[20px]">
          Packages we offer
        </p> */}
        <AnimatedTitle
        title="Dirange, <b>T</b>awang  <br /> and <b>S</b>hangti"
        containerClass="mt-5 !text-black text-center"
      />
          {/* <p className="max-w-3xl mx-auto text-lg" style={{ color: "#E8BCB9" }}>
            Experience the best of France with our carefully curated 8-day itinerary, featuring exclusive accommodations
            and unforgettable experiences.
          </p> */}
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <GridItem key={index} {...card} onClick={() => setActiveCard(index)} />
          ))}
        </div>
      </div>

      {activeCard !== null && (
        <ActionBox
          title={cards[activeCard].title}
          details={cards[activeCard].details}
          onClose={() => setActiveCard(null)}
        />
      )}

      {/* Background decorative elements - keeping these but adjusting colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full filter blur-3xl opacity-10 animate-blob"
          style={{ backgroundColor: "#E8BCB9" }}
        ></div>
        <div
          className="absolute top-[40%] right-[10%] w-72 h-72 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"
          style={{ backgroundColor: "#E8BCB9" }}
        ></div>
        <div
          className="absolute bottom-[15%] left-[25%] w-80 h-80 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"
          style={{ backgroundColor: "#E8BCB9" }}
        ></div>
      </div>
    </div>
  )
}

interface GridItemProps {
  size: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  onClick: () => void
}

const GridItem = ({ size, icon, title, description, onClick }: GridItemProps) => {
  return (
    <div className={`${size} relative`}>
      <button className="w-full h-full text-left group" onClick={onClick}>
        <div
          className="relative h-full rounded-2xl border p-2 md:p-3 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-xl bg-[#292253]"
          style={{ borderColor: "rgba(232, 188, 185, 0.2)" }}
        >
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div
                className="w-fit rounded-lg border p-2.5 transition-colors group-hover:border-opacity-70"
                style={{ borderColor: "rgba(232, 188, 185, 0.3)" }}
              >
                {icon}
              </div>
              <div className="space-y-3">
                <h3
                  className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance transition-colors"
                  style={{ color: "#E8BCB9" }}
                >
                  {title}
                </h3>
                <h2
                  className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem]"
                  style={{ color: "rgba(232, 188, 185, 0.8)" }}
                >
                  {description}
                </h2>
              </div>
              <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-sm font-medium" style={{ color: "#E8BCB9" }}>
                  View details →
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

