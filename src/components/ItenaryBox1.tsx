"use client"

import { useState } from "react"
import { Map, Compass, Plane, Palmtree, Car, PlaneTakeoff , TicketCheck, CircleX, Telescope, Backpack   } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ActionBox } from "@/components/ActionBox"
import type React from "react"
import AnimatedTitle from "./AnimatedTitle"
import Image1 from "../../public/boat.png"

export default function ItenaryBox1() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Plane className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 1: PICKUP FROM GUWAHATI AIRPORT AND TRANSFER TO DIRANG",
      description: "Begin your adventure with the Tawang Dirang Shergaon package tour as we welcome you at the Guwahati airport .",
      details:
        "Begin your adventure with the Tawang Dirang Shergaon package tour as we welcome you at the Guwahati airport . A scenic 9-hour drive transports you to the serene beauty of Dirang, cradled in the Himalayan foothills. Explore the captivating Dirang-Dzong monastery, experience Tibetan architectures, and unwind in a rejuvenating hot water spring. Conclude your day by settling in for a peaceful night, surrounded by the tranquil ambiance of Dirang.",
      image: {Image1},
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Map className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 2: SANGTI VALLEY AND MANDALA TOP SIGHTSEEING",
      description: "Embark on the second day of your Tawang Dirang Shergaon tour package with a delightful post-breakfast adventure",
      details:
        "Embark on the second day of your Tawang Dirang Shergaon tour package with a delightful post-breakfast adventure. Immerse yourself in the beauty of the picturesque Sangti Valley, renowned for its lush fruit orchards and vibrant birdlife. Take a leisurely stroll, savoring the serenity and observing migratory birds. Ascend to Mandala Top, a birding haven adorned with 108 stupas. Conclude your day by returning to Dirang for a restful overnight stay. Please note that the visit to Mandala Top is subject to road clearance, ensuring your safety and comfort throughout the journey.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Compass className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 3: DIRANG TO TAWANG TRANSFER",
      description: "This is another day of exploration in your Tawang Dirang Shergaon tour after a delightful breakfast.",
      details:
        "This is another day of exploration in your Tawang Dirang Shergaon tour after a delightful breakfast. Immerse yourself in the captivating valley of Dirang, surrounded by lush fruit orchards. Your journey continues to Tawang, featuring a thrilling passage through the challenging Sela Pass (13,700 ft.). Enchanting stops await at the Nuranang Waterfalls and the poignant Jaswant Garh War Memorial. Explore the serene beauty of Tawang, offering an ideal setting for leisurely walks, before settling in for a comfortable night. This carefully curated day ensures a perfect blend of adventure and relaxation on your memorable tour.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Palmtree className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Days 4: AROUND TAWANG EXCURSION",
      description: "On day four of your Tawang Dirang Shergaon tour packages, the morning unfolds with a visit to the enchanting Shonga-tser Lake. ",
      details:
        "On day four of your Tawang Dirang Shergaon tour packages, the morning unfolds with a visit to the enchanting Shonga-tser Lake, fondly known as Madhuri Lake, surrounded by towering peaks and offering a tranquil escape. The journey continues to the prestigious Bum La Pass, a significant Indo-China border point, where panoramic views of majestic mountains and valleys await. Optional sightseeing opportunities present themselves with Heart Lake, a serene alpine escape, PTSO Lake, featuring pristine glacial waters, and Naghula Lake, a hidden gem accessible with a local taxi. \n\n Madhuri Lake - Madhuri Lake, locally known as Shonga-tser Lake, is a mesmerizing high-altitude lake nestled amid the breathtaking landscapes of Tawang, Arunachal Pradesh. Named after the Bollywood actress Madhuri Dixit, who shot a song sequence for a film here, the lake is a haven of tranquility and natural beauty. Surrounded by towering mountains, the crystal-clear waters of Madhuri Lake reflect the pristine blue skies and snow-capped peaks, creating a picturesque and serene ambiance. Visitors can enjoy a leisurely stroll along the lake's shoreline, taking in the panoramic views and appreciating the peaceful surroundings. The lake is frozen during the winter months, adding an additional layer of charm to its already captivating allure. Madhuri Lake is not only a visual delight but also a testament to the pristine natural wonders that characterize the Tawang region.  \n\n Bum La Pass - Bum La Pass stands as a testament to the strategic and historic significance of the Tawang region, serving as an Indo-China border point. Situated at a high altitude, the pass offers awe-inspiring panoramic views of the surrounding Himalayan peaks and lush valleys. Its strategic importance is evident from the military presence in the area, showcasing its role in border security. Visitors to Bum La Pass not only witness the stunning natural beauty but also gain insights into the geopolitical context of the region. The pass is often enveloped in mist, adding an ethereal touch to the landscape. As one stands at this border point, the crisp mountain air and the vast expanse of pristine wilderness create a profound and contemplative experience. Bum La Pass is more than a geographical landmark; it is a symbol of the region's historical narratives and the harmonious coexistence of natural wonders and strategic importance.  \n\n Heart Lake - Heart Lake, nestled in the serene landscapes of Tawang, is a captivating alpine lake known for its tranquil beauty and heart-shaped formation. Surrounded by lush greenery and framed by majestic mountains, the lake provides a picturesque setting for visitors seeking a peaceful escape. The heart-shaped outline of the lake adds a touch of romance to its charm, making it a favored spot for those looking to connect with nature and enjoy moments of serenity. A leisurely stroll along the lake's periphery offers breathtaking views, and  the clear, reflective waters mirror the surrounding landscape. Heart Lake stands as a testament to the natural wonders that adorn Tawang, inviting visitors to immerse themselves in its quietude and appreciate the simple yet profound beauty of this hidden gem.  \n\n PTSO Lake - PTSO Lake, situated in the pristine landscapes of Tawang, is a high-altitude glacial lake that captivates visitors with its serene beauty. The lake derives its name from the initials of the Pankang Teng Tso, P.T.S.O. The crystal-clear waters of PTSO Lake reflect the surrounding snow-capped peaks, creating a mesmerizing sight. Surrounded by alpine meadows and embraced by the majestic Himalayas, the lake provides a tranquil escape for nature enthusiasts. The journey to PTSO Lake is as enchanting as the destination itself, with picturesque views along the way. Visitors can savor the crisp mountain air and enjoy moments of solitude in this pristine setting. Whether for quiet contemplation or photography against the backdrop of stunning vistas, PTSO Lake offers a peaceful and rejuvenating experience amidst the natural wonders of Tawang.  \n\n Naghula Lake - Naghula Lake, tucked away in the scenic landscapes near Tawang, is a hidden gem awaiting exploration. Accessible with the assistance of a local taxi, this lake offers a peaceful retreat surrounded by meadows and natural beauty. Its secluded location adds to the allure, providing visitors with a quieter and more intimate experience. The pristine waters of Naghula Lake reflect the verdant surroundings and the clear skies above, creating a tranquil and idyllic setting. Those seeking a break from the more frequented spots will find solace here, as the lake invites moments of quiet contemplation and connection with nature \n\n Naghula Lake stands as a testament to the untouched beauty that the Tawang region harbors, offering a serene escape for those looking to immerse themselves in the unspoiled charm of the Himalayan landscape. \n\n Each site boasts unique natural beauty, providing moments of awe and reflection. Conclude this day of exploration with a return to Tawang, a place of cultural richness and scenic splendor, ensuring a comfortable and restful overnight stay.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Telescope  className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 5: TAWANG SIGHTSEEING",
      description: "On the fifth day of your Tawang Dirang tour package with Shergaon, immerse yourself in the rich cultural and historical tapestry of Tawang with a comprehensive sightseeing experience.",
      details:
        "On the fifth day of your Tawang Dirang tour package with Shergaon, immerse yourself in the rich cultural and historical tapestry of Tawang with a comprehensive sightseeing experience.\n\n Begin your exploration at the Craft Centre, where you can witness the intricate craftsmanship and traditional art forms that showcase the cultural heritage of the region. This visit provides an opportunity to engage with local artisans and appreciate the skillful creation of handmade crafts, textiles, and artifacts.\n\n Next, delve into the poignant history at the Tawang War Memorial, a tribute to the Indian soldiers who sacrificed their lives during the 1962 Indo-China War. Attend the evening light and sound show at the memorial, a moving experience that narrates the heroic tales of valor and sacrifice, enhancing the historical significance of the site.\n\n Proceed to the Urgelling Monastery, a serene and spiritually significant location as the birthplace of the Sixth Dalai Lama. Explore the monastery's tranquil surroundings and gain insights into its historical and cultural importance.\n\n The journey continues to the imposing Tawang Monastery, one of the largest and oldest monasteries in India. Perched at an elevation of approximately 3,048 meters (10,000 feet) above sea level, the monastery offers breathtaking views of the surrounding mountains and valleys. Explore the intricate architecture, vibrant murals, and sacred scriptures within the monastery, immersing yourself in the spiritual ambiance.\n\n As the day unfolds, enjoy a captivating light and sound show that pays tribute to the valor of the Indian Army. This immersive experience brings to life the heroic tales and sacrifices made by the armed forces, fostering a deep appreciation for their dedication and bravery.\n\n Conclude this day of cultural exploration with a comfortable overnight stay in Tawang, surrounded by the serene beauty and spiritual aura of this Himalayan town.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Car className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 6: TAWANG TO BOMBDILA TRANSFER",
      description: "Embark on the sixth day of your Dirang Shergaon tour with Tawang with a delightful journey from Tawang to Bomdila",
      details:
        "Embark on the sixth day of your Dirang Shergaon tour with Tawang with a delightful journey from Tawang to Bomdila. Following a hearty breakfast, set out on a scenic drive to Bomdila, a town celebrated for its Buddhist Monasteries and Craft Center. \n\n As you approach Bomdila, the picturesque landscapes unfold, offering panoramic views of rolling hills and verdant valleys. Upon reaching this charming town, delve into the serene ambiance of its Buddhist Monasteries, each adorned with unique architectural details and vibrant prayer flags fluttering in the mountain breeze. Immerse yourself in the spiritual tranquility that these monastic structures exude. \n\n Take time to explore the Craft Center in Bomdila, where local artisans showcase their traditional crafts, handwoven textiles, and intricate artwork. The center provides an opportunity to witness the rich cultural heritage of the region and perhaps acquire unique souvenirs crafted with skill and dedication. \n\n In the afternoon, wander through the local market, absorbing the vibrant atmosphere and indulging in the flavors of regional cuisine. The market offers a glimpse into the daily life of the locals and provides an array of handicrafts, textiles, and local produce. \n\n As the day concludes, settle in for a comfortable night in Bomdila, surrounded by the serene beauty and cultural richness of this Himalayan town. This marks another enriching day in your journey through the diverse landscapes and cultural treasures of Arunachal Pradesh.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Backpack  className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 7: BOMDILA TO SHERGAON, SHERGAON SIGHTSEEING",
      description: "Embark on the seventh day of your enriching journey, transitioning from Bomdila to the captivating realm of Shergaon, nestled near the Bhutan border. ",
      details:
        "Embark on the seventh day of your enriching journey, transitioning from Bomdila to the captivating realm of Shergaon, nestled near the Bhutan border. Shergaon, an offbeat destination, beckons with its unique allure.\n\n The road to Shergaon unveils panoramic vistas, gradually revealing the Bhutanese border region. As you arrive, prepare to be captivated by the distinct charm that sets Shergaon apart.\n\nImmerse yourself in the agricultural tapestry of the region with a visit to horticulture farms. Here, the fertile lands yield a bounty of local produce, providing a firsthand experience of the area's agricultural abundance. Engage with local farmers, gaining insights into their traditional practices and fostering a connection with the vibrant community.\n\nContinue your exploration with a visit to a 300-year-old Gompa, a silent witness to Shergaon's rich cultural legacy. The ancient monastery exudes a timeless spirituality, its architectural nuances telling stories of a bygone era. \n\n Discover a hidden gem—a breathtaking waterfall amidst meandering landscapes, adding a touch of natural grandeur to Shergaon's picturesque setting. \n\n As the day unfolds, immerse yourself in the heart of Shergaon by spending the night in a homestay. Here, traditional hospitality intertwines with the charm of the village, offering an authentic experience that goes beyond the ordinary. Savor local flavors, partake in cultural exchanges, and relish the warmth of community living.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <PlaneTakeoff  className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 8: SHERGAON TO GUWAHATI, AIRPORT DROP",
      description: "On the final day of your Tawang Dirang Shergaon tour which was started from Guwahati Airport, awaken to the option of an early morning hike to Choskorong waterfall, where the pristine cascades greet the day with natural splendor ",
      details:
        "On the final day of your Tawang Dirang Shergaon tour which was started from Guwahati Airport, awaken to the option of an early morning hike to Choskorong waterfall, where the pristine cascades greet the day with natural splendor. Following a delightful breakfast, commence your journey back to Guwahati, retracing the scenic landscapes that have painted the canvas of your Arunachal Pradesh exploration. As the landscapes transition, bidding adieu becomes inevitable. Allow us the privilege of dropping you at the Guwahati airport, where the echoes of your enchanting North East Tour linger, serving as a mosaic of memories that will forever resonate with the beauty and diversity of this mesmerizing region.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-[280px] xl:h-[320px]",
      icon: <TicketCheck className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "TAWANG DIRANG SHERGAON TOUR PACKAGE INCLUDES",
      description: "",
      details:
        "Cozy shared accommodation with specified meals. \n\nEffortless travel in an AC vehicle with a skilled driver. \n\nInclusive daily breakfast for a delightful start. \n\n Hassle-free journey with Arunachal Pradesh Inner Line Permit and processing fees included. \n\n Convenient pickup/drop from Guwahati Airport/Railway/Bus station.\n\nComplete coverage of sightseeing, efficient land and inter-hotel transfers.\n\nAll-inclusive: driver, tolls, parking, fuel, and more.\n\n24x7 Guest Service Support",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-[280px] xl:h-[320px]",
      icon: <CircleX className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "TAWANG DIRANG SHERGAON TOUR PACKAGE EXCLUDES",
      description: "",
      details:
        "Personal expenses and activities not in the itinerary. \n\n Meals outside the provided plan. \n\nInclusive daily breakfast for a delightful start. \n\n 5% GST applied to the total cost. \n\n Taxi fare for optional Tawang sightseeing.\n\nEntry fees, camera fees, and costs for optional activities not covered.\n\nAnything not in the 'Inclusions' is not part of the package.\n\nForeign Nationals: Excluded - national park fees, Protected Area Permit, and mandatory guide fees for Arunachal Pradesh package tour.",
    },
  ]

  return (
    <div className="relative min-h-screen py-12 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 text-center">
        <p className="font-general text-[#E8BCB9] text-sm uppercase md:text-[20px]">
          Packages we offer
        </p>
        <AnimatedTitle
        title="Dirange, <b>T</b>awang  <br /> and <b>S</b>hergaon "
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

