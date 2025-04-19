import { Button } from "@/components/ui/button"
import { CiImageOn } from "react-icons/ci"
import Browserline from "../Browserline"

const Cardimg2 = () => {
  return (
    <div  className="bg-gray-400 overflow-hidden h-60 flex flex-col items-center rounded-lg relative">
        {/* browser line */}
        <Browserline />

        {/* Text to img */}
        <div className="my-1 w-[97%] h-full rounded-md mx-1 flex flex-col items-center bg-gray-300">
            <div className="w-[60%] flex gap-1">
            <div className="h-16 w-[70%] text-white font-bold text-sm bg-gray-500 mt-5 rounded-md p-1 relative">
            Text
            <div className="w-6 h-6 bg-gray-500 absolute bottom-0 left-0 rounded-bl-md border-t-4 border-gray-300 border-r-4 rounded-tr-md">
            <CiImageOn className="w-full h-full" />
            </div>
            </div>
            <div className="h-16 w-[30%] text-white font-bold text-sm bg-gray-500 mt-5 rounded-md p-1">
            <CiImageOn className="w-full h-full" />
            </div>
            </div>
            <div className="my-2">
                <Button className="bg-purple-600 cursor-pointer hover:bg-purple-700">Generate</Button>
            </div>
            <div className="w-[60%] h-16 grid grid-cols-3 gap-1">
                <div className="bg-gray-400 rounded-md"></div>
                <div className="bg-gray-400 rounded-md"></div>
                <div className="bg-gray-400 rounded-md"></div>
            </div>
        </div>
    </div>
  )
}

export default Cardimg2