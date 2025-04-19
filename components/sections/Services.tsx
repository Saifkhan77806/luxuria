import Card from "../blocks/cards/Card"
import  Cardimg  from "@/components/blocks/service/Cardimg"
import Titles from "../blocks/title/Titles"
import Cardimg2 from "../blocks/service/Cardimg2"
import Cardimg3 from "../blocks/service/Cardimg3"

const Services = () => {
  return (
    <div id="service" className="flex flex-col bg-black items-center">
        <Titles heading={"SERVICES"} title={"Your path to excellence"} subtitle={"A simple, effective approach to deliver excellence"}  />

        <div className="card-container my-5 grid grid-cols-3 max-[1110px]:grid-cols-2 max-[810px]:grid-cols-1  gap-4">

        <Card service={true} href="/img-to-text" cardTitle={"Text to img"} cardText={"Turn any idea into a high-quality image using AI. Just type your prompt and watch it come to life." }>
            <Cardimg />
        </Card>
        <Card service={true} href="/img-to-img" cardTitle={"Img to img"} cardText={"Whether it’s a doodle or a product shot, our AI upgrades your images into polished, high-quality visuals." }>
            <Cardimg2 />
        </Card>
        <Card service={true} href="/text-to-img" cardTitle={"Img to text"} cardText={"Create custom visuals with simple text. Fast, easy, and powered by cutting-edge AI."}>
            <Cardimg3 />
        </Card>
        </div> 
    </div>
  )
}

export default Services