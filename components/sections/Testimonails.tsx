import TesCard from "../blocks/testmonials/TesCard"
import Titles from "../blocks/title/Titles"

const Testimonails = () => {
  
  return (
    <div id="testimonails" className="bg-black flex flex-col items-center pb-28">
        <Titles heading="Testimonials" title="Trusted by satisfied clients" subtitle="Discover how we’ve driven growth and innovation.y" />

        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full gap-10 p-5">
            <TesCard text="Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!" name="John Doe" image="/images/testimonials/1.png" works="CEO" at="Tech Innovations" />
            <TesCard text="Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!" name="John Doe" image="/images/testimonials/1.png" works="CEO" at="Tech Innovations" />
            <TesCard text="Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!" name="John Doe" image="/images/testimonials/1.png" works="CEO" at="Tech Innovations" />
            <TesCard text="Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!" name="John Doe" image="/images/testimonials/1.png" works="CEO" at="Tech Innovations" />
            <TesCard text="Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!" name="John Doe" image="/images/testimonials/1.png" works="CEO" at="Tech Innovations" />
            <TesCard text="Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!" name="John Doe" image="/images/testimonials/1.png" works="CEO" at="Tech Innovations" />
        </div>
    </div>
  )
}

export default Testimonails















