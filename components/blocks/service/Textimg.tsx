'use client'
import { CiImageOn } from "react-icons/ci"
import SerCard from "./SerCard"
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const TextImg = () => {

    

    const textFileInputRef = useRef<HTMLInputElement | null>(null);

    const textHhandleLabelClick = () => {
        textFileInputRef.current?.click();
    };

    const textHandleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected file:', file.name);
        }
    };

    return (
        <div className="center">
            <SerCard title="Text to img" description="Whether it’s a doodle or a product shot, our AI upgrades your images into polished, high-quality visuals.">
                <div className="relative flex gap-2 my-5">
                   
                    <textarea placeholder="Enter valid prompt" className="relative w-[80%] p-2 mx-auto border border-gray-400 rounded-lg" cols={80} rows={10}>

                    </textarea>
                    <label htmlFor="uploadText" className="absolute bottom-2 text-lg left-[12%] cursor-pointer">
                    <CiImageOn onClick={textHhandleLabelClick} className="w-full h-full font-extralight" />
                    </label>
                    <input type="file" name="uploadText" onChange={textHandleFileChange} hidden ref={textFileInputRef} />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Generate</Button>
                <div className="w-full   grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 mt-5">
                    <div className="bg-gray-400 h-48 animate-pulse rounded-lg"></div>
                    <div className="bg-gray-400 h-48 animate-pulse rounded-lg"></div>
                    <div className="bg-gray-400 h-48 animate-pulse rounded-lg"></div>
                </div>
            </SerCard>
        </div>
    )
}

export default TextImg