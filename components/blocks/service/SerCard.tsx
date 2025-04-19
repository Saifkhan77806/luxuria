interface SerCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}


const SerCard = ({title,description, children}:SerCardProps) => {
  return (
    <div className="center flex-col ">
        <h1 className="text-2xl font-bold self-start">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-col ">
            {children}
        </div>
    </div>
  )
}

export default SerCard