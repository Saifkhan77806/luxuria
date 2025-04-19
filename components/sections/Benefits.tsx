import { MdOutlineDone } from "react-icons/md";
import Bencard from "../blocks/cards/Bencard"
import Titles from "../blocks/title/Titles"
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";


const Benefits = () => {
  return (
    <div id="benefits" className="flex flex-col items-center w-full bg-black">
        
        <Titles heading={"BENEFITS"} title={"Maximize efficiency and impact"} subtitle={"Discover the key benefits of partnering with us."}  />

        <div className="my-5 px-12 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Bencard icons={<BsGraphDownArrow />} title={"Cost reduction"} description={"Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency."} />
            <Bencard icons={<MdOutlineDone />} title={"Increased productivity"} description={"Enhance productivity and performance by leveraging advanced technologies and innovative solutions."} />
            <Bencard icons={<BsGraphUpArrow />} title={"Improved quality"} description={"Ensure high-quality deliverables through rigorous testing and quality assurance processes."} />
        </div>̥̥
    </div>
  )
}

export default Benefits