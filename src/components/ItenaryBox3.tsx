"use client"

import { useState } from "react"
import { Map, Compass, Plane, Palmtree, Car, PlaneTakeoff , TicketCheck, CircleX, Telescope, Backpack   } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ActionBox } from "@/components/ActionBox"
import type React from "react"
import AnimatedTitle from "./AnimatedTitle"
import Image1 from "../../public/boat.png"

export default function ItenaryBox3() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Plane className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 1: ARRIVE AT GHY AIRPORT / GUWAHATI TO TAWANG",
      description: "You will arrive at guwahati airport where you ll meet our representative and will guide you to the designated vehicle.",
      details:
        "You will arrive at guwahati airport where you ll meet our representative and will guide you to the designated vehicle.Overnight stay at Guwahati \n\n OR \n\nUpon arrival at guwahati airport or railway station , our representative will receive you and guide to your vechile and will be transferred to bomdila [257 km ] which will be of 7 hrs drive. After reaching bomdila check in at hotel for your over night stay",
      image: {Image1},
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Map className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 2:BOMDILA  TO TAWANG VIA SELA TUNNEL ",
      description: "Post breakfast we will start our journey for  tawang [176 km ] which is of 5 hours drive on the way we will going to visit nyukmadung war memorial",
      details:
        "Post breakfast we will start our journey for  tawang [176 km ] which is of 5 hours drive on the way we will going to visit nyukmadung war memorial ,sela tunnel longest bi tunnel in the world at 13000 feet, Jaswant Garh war memorial in honour of rifleman Jaswant singh rawat who alone fought the battle of nuranang in 1962 indo-china war, nuranang falls. After reaching tawang check in hotel for over night stay ",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Compass className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 3: TAWANG SIGHTSEEING ",
      description: "Start your day with a sumptuous breakfast, setting the stage for an immersive exploration of Sangti Valley, a hidden jewel merely 15 km from Dirang.",
      details:
        "Post breakfast visit to tawang monastery(galden Namgyal lhatse ) Asia second largest monastery and India’s largest monastery which was built in 17 th century . explore age old artefacts related to tawang monstery and monpa people of tawang.then we move on to the tawang war memorial a beautiful stupa built in memory of the brave soilders who sacrificed their lives in 1962 sino Indian war.then we will  head to carft center emporium to see the handicraft and hand loom item. By evening you can visit the local market where you can buy local handicrafts and woolen and souvernirs .you can also try some authentic food & enjoy lightshow at war memorial. After that we will drop you at the hotel for your overnight stay.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 h-[280px] xl:h-[320px]",
      icon: <Palmtree className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Days 4: AROUND TAWANG SIGHT SEEING",
      description: "Post breakfast, start your day with breathtaking view of Shonga-tser Lake (Madhuri Lake), surrounded by snow-capped mountains and the valley offer a spectacular view.",
      details:
        "Post breakfast, start your day with breathtaking view of Shonga-tser Lake (Madhuri Lake), surrounded by snow-capped mountains and the valley offer a spectacular view. Next move on to Bum La Pass about 37km away from Tawang, it is the indo-china border that lies at 15,200 ft above sea level. On your way back stop by heart lake, PTSO lake, Naghula lake, which will surely make your day. After this return to your hotel for comfortable overnight stay in Tawang.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-[280px] xl:h-[320px]",
      icon: <Telescope  className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 5: TAWANG TO DIRANG VIA SELA LAKE ",
      description: "Post break fast transfer to dirang via sela lake (140 km ) 4 hrs of drive on the way visit to sela lake a stunning panoramic views",
      details:
        "Post break fast transfer to dirang via sela lake (140 km ) 4 hrs of drive on the way visit to sela lake a stunning panoramic views, which is located at 13700 feet, after reaching we will explore  dirang hot spring and dirang monastery  and check in in hotel for your overnight stay.",
    },
    {
      size: "col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-[280px] xl:h-[320px]",
      icon: <Car className="h-5 w-5 text-[#E8BCB9] dark:text-neutral-400" />,
      title: "Day 6: DIRANG TO GUWAHATI ",
      description: "Post breakfast we will leave for Guwahati 298 km Finally we will drop you by Guwahati Airport in accordance and convenience of your departure time, with sweet memories.",
      details:
        "Post breakfast we will leave for Guwahati 298 km Finally we will drop you by Guwahati Airport in accordance and convenience of your departure time, with sweet memories.",
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
        title="<b>T</b>awang  <br /> and <b>D</b>irang"
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

