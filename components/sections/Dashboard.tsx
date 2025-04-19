
import CardContainer from "../blocks/dashboard/Card"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
    { month: "aug", desktop: 73 },
    { month: "sept", desktop: 209 },
    { month: "oct", desktop: 214 },
    { month: "nov", desktop: 73 },
    { month: "decem", desktop: 209 },
    { month: "jan", desktop: 214 },
    { month: "feb", desktop: 73 },
    { month: "march", desktop: 209 },
    { month: "april", desktop: 214 },
    { month: "jun", desktop: 73 },
    { month: "july", desktop: 209 },
    { month: "august", desktop: 214 },
]


const Dashboard = () => {

    return (
        <div className="-ml-1.5 min-h-[100vh]">
            <div className="ml-5 my-4">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p>Welcome to the dashboard!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-4">
                <CardContainer data={chartData} title={"Img to img"} description={"You had generated no. of images"} dateRange={`${chartData[0].month} - ${chartData[chartData.length - 1].month}`} />
                <div className="border border-gray-200 rounded-md p-4 text-xl shadow-md">
                    <h2 className="text-xl font-semibold">Text to Image</h2>
                    <p className="text-gray-400">Generation token left: 20</p>
                    <p className="text-gray-600">Last generated: {chartData[chartData.length - 1].month}</p>
                    <p className="text-gray-600">Total generated: {chartData.reduce((acc, curr) => acc + curr.desktop, 0)}</p>
                </div>
                <CardContainer data={chartData} title={"Img to img"} description={"You had generated no. of images"} dateRange={`${chartData[0].month} - ${chartData[chartData.length - 1].month}`} />

            </div>
        </div>
    )
}

export default Dashboard