'use client'
import PlansCard from "@/components/blocks/plans/PlansCard"
import { useState } from "react"
import { PiStack, PiStackPlus } from "react-icons/pi"
import { BiCustomize } from "react-icons/bi";
import { RxStack } from "react-icons/rx"


const page = () => {

  
      const [isLeft, setIsLeft] = useState(true)
  

  return (
    <div className="min-h-screen ml-2">
      <h1 className="text-2xl font-bold mt-4">Top up</h1>
      <p className="text-gray-500">
        Top up your account with one of the following plans
      </p>
      <div className="grid grid-cols-3 max-[900]:grid-cols-2 max-sm:grid-cols-1 w-full gap-10 p-5">
            <PlansCard
            icon={<RxStack />} 
            time={isLeft?"monthly" : "annually"}
            title="Basic" 
            description="Essential tools and features for starting your journey with ease."
            price={isLeft?"480" : "2000" }
            features={[
             "Baisc workflow automation",
             "Basic chatbot development",
             "60 content request",
             "E-mail support",
             "1 consultation a month"]} />

            <PlansCard 
            icon={<PiStack />}
            time={isLeft?"monthly" : "annually"}
            title="Professional" 
            description="Essential tools and features for starting your journey with ease."
            price={isLeft?"960" : "9600" }
            features={[
             "Baisc workflow automation",
             "Basic chatbot development",
             "60 content request",
             "E-mail support",
             "1 consultation a month"]} />

            <PlansCard 
            icon={<PiStackPlus />}
            time={isLeft?"monthly" : "annually"}
            title="Enterprises" 
            description="Essential tools and features for starting your journey with ease."
            price={isLeft?"1440" : "14400" }
            features={[
             "Baisc workflow automation",
             "Basic chatbot development",
             "60 content request",
             "E-mail support",
             "1 consultation a month"]} />

<PlansCard 
            icon={<BiCustomize />}
            time={isLeft?"monthly" : "annually"}
            title="Custom" 
            description="Essential tools and features for starting your journey with ease."
            price={isLeft?"1440" : "14400" }
            features={[
             "Baisc workflow automation",
             "Basic chatbot development",
             "60 content request",
             "E-mail support",
             "1 consultation a month"]} />


        </div>
    </div>
  )
}

export default page