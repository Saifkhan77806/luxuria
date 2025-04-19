import Link from "next/link"

interface navLinkProp {
    text: String;
    id: String;
    isSideBar?: boolean;
}


export const Navlink = ({text, id, isSideBar}: navLinkProp) => {
  return (
    <Link href={isSideBar ? `#${id}`: `${id}`} className="text-gray-100 pt-[0.8] pb-[0.8] pl-1.5 pr-1.5 rounded-sm hover:bg-[#8c8ca14f]  hover:text-white  transition-all">
        {text}
    </ Link>
  )
}
