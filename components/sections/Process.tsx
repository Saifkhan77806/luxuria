"use client"
import  Card  from "@/components/blocks/cards/Card"
import { Cardimg } from "@/components/blocks/cards/Cardimg"
import  Cardimgtwo  from "@/components/blocks/cards/CardImg2"

import Cardimgthree from "../blocks/cards/Cardimgthree"
import Titles from "../blocks/title/Titles"

export const Process = () => {
  return (
    <div id="process" className="relative w-full flex flex-col py-9 items-center bg-black">

<div className="absolute w-30 h-20 bg-purple-600 opacity-30 rounded-full blur-3xl top-20 left-20 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-24 bg-purple-600 opacity-30 rounded-full blur-3xl z-0" />
<div className="absolute w-50 h-20 bg-purple-600 opacity-30 rounded-full blur-3xl bottom-10 right-10 z-0"></div>

       <Titles heading={"PROCESS"} title={"Your path to excellence"} subtitle={"A simple, effective approach to deliver excellence"}  />

        <div className="card-container my-5 grid grid-cols-3 max-[1110px]:grid-cols-2 max-[810px]:grid-cols-1  gap-4">

        <Card cardTitle={"Our Analysis"} cardText={"We dive deep into your needs, exploring ideas and defining strategies for long-term success." }>
            <Cardimg />
        </Card>
        <Card cardTitle={"Development & Test"} cardText={"We craft tailored solutions for your goals and rigorously test them for top-notch reliability." }>
            <Cardimgtwo />
        </Card>
        <Card cardTitle={"Launch & Maintain"} cardText={"We deploy your solution seamlessly and ensure its continued performance with ongoing care."}>
            <Cardimgthree />
        </Card>
        </div>
    </div>
  )
}
