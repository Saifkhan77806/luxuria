'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Browserline from '@/components/blocks/Browserline'

const data = [
  { day: 'Day 1', value: 30 },
  { day: 'Day 2', value: 50 },
  { day: 'Day 3', value: 40 },
  { day: 'Day 4', value: 60 },
  { day: 'Day 5', value: 55 },
  { day: 'Day 6', value: 45 },
  { day: 'Day 7', value: 70 },
]
const Cardimgfour = () => {
  
  return (
    <div className="bg-[#1c1c1c] rounded-xl  w-full max-w-md text-white shadow-md overflow-hidden">
       <Browserline />

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white font-semibold text-lg mx-2">
          Work Efficiency
        </h2>
        <span className="text-white text-sm font-semibold">+23%</span>
      </div>

      {/* Animated Chart Wrapper */}
      <div className="relative h-48 ">
        

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              stroke="#aaa"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#aaa"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#2c2c2c',
                borderColor: '#444',
                color: '#fff',
                fontSize: '0.75rem',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              dot={{ r: 4, stroke: '#6366F1', strokeWidth: 2, fill: '#1c1c1c' }}
              activeDot={{ r: 6 }}
              isAnimationActive={false} // we control animation manually
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
    </div>
  )
}


export default Cardimgfour