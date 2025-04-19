"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

interface ChartDatum {
    month: string;
    desktop: number;
  }
  
  interface ChartProps {
    data: ChartDatum[];
    title: string;
    description: string;
    dateRange: string;
  }


const CardContainer = ({data, title, description, dateRange}: ChartProps) => {
    return (
        <div>
            <Card className="px-1 py-3">
                <CardHeader className="px-2">
                    <CardTitle className="font-bold text-purple-600">{title}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={data}
                            margin={{
                                left: 8,
                                right: 8,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Area
                                dataKey="desktop"
                                type="natural"
                                fill="var(--color-desktop)"
                                fillOpacity={0.4}
                                stroke="var(--color-desktop)"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="px-2">
                    <div className="flex w-full items-start text-sm">
                        <div>
                            <div className="text-center ml-2 text-purple-600 leading-none font-semibold">
                                {dateRange}
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CardContainer