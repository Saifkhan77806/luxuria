'use client'
import { CiImageOn } from "react-icons/ci"
import SerCard from "./SerCard"
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const ImgImg = () => {

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleLabelClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected file:', file.name);
        }
    };

    const textFileInputRef = useRef<HTMLInputElement | null>(null);

    const textHhandleLabelClick = () => {
        fileInputRef.current?.click();
    };

    const textHandleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Selected file:', file.name);
        }
    };

    return (
        <div className=" flex flex-col items-center  p-4">
            <SerCard title="Img to img" description="Whether it’s a doodle or a product shot, our AI upgrades your images into polished, high-quality visuals.">
                <div className="relative flex max-md:flex-col gap-2 my-5">
                    <label onClick={handleLabelClick} htmlFor="Upload" className=" border max-md:w-full w-1/2 border-gray-400 rounded-lg">
                        <CiImageOn className="w-full h-full font-extralight" />
                    </label>
                    <input type="file" className="hidden" ref={fileInputRef}
                        onChange={handleFileChange} name="Upload" />

                    <textarea placeholder="Enter valid prompt" className="relative max-md:w-full w-1/2 p-2 mx-auto border border-gray-400 rounded-lg" cols={50} rows={10}>

                    </textarea>
                    <label htmlFor="uploadText" className="absolute bottom-2 text-lg left-[52%] cursor-pointer">
                    <CiImageOn onClick={textHhandleLabelClick} className="w-full h-full font-extralight" />
                    </label>
                    <input type="file" onChange={textHandleFileChange} hidden ref={textFileInputRef} />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Generate</Button>
                <div className="p-2 w-[95%] grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 my-5">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="w-full lg:w-[30%] h-48 bg-gray-200 rounded-xl animate-pulse"
                        ></div>
                    ))}
                </div>
            </SerCard>
        </div>
    )
}

export default ImgImg