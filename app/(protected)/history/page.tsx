import React from 'react'

const history=[
    {prompt: "Generate a cat", 
        image:[
        "https://images.unsplash.com/photo-1593642633279-3a2b8e1f4c0b",
        "https://images.unsplash.com/photo-1593642633279-3a2b8e1f4c0b",
        "https://images.unsplash.com/photo-1593642633279-3a2b8e1f4c0b",
    ], 
    time: "2023-10-01 12:00:00",
    type: "text-to-image"},
    {prompt: "Generate a cat", 
        image:[
        "https://images.unsplash.com/photo-1593642633279-3a2b8e1f4c0b",
        "https://images.unsplash.com/photo-1593642633279-3a2b8e1f4c0b",
    ], 
    time: "2023-10-01 12:00:00",
    type: "image-to-image"},
    {prompt: "Generate a cat", 
        image:[
        "https://images.unsplash.com/photo-1593642633279-3a2b8e1f4c0b",
    ], 
    time: "2023-10-01 12:00:00",
    type: "image-to-image"},
]

const History = () => {
  return (
    <div className='min-h-screen ml-5 max-md:ml-0'>
        <h1 className='text-3xl font-bold text-white'>
        History
        </h1>
        <p className='text-gray-400 text-sm my-2'>
                Your history of generations will be displayed here.
            </p>
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {history.map((item, index) => (
                <div key={index} className='my-3 max-sm:ml-4.5 w-full p-2 bg-gray-800 rounded-md'>
                    <h1 className='text-lg font-bold text-white'>{item.prompt}</h1>
                    <p className='text-gray-400 text-sm my-2'>
                        {item.time}
                    </p>
                    <p className='text-gray-400 text-sm my-2'>
                        Type: {item.type}
                    </p>
                    <div className='flex gap-2'>
                        {item.image.map((img, index) => (
                            <img key={index} src={img} alt="generated" className='w-24 h-24 rounded-md' />
                        ))}
                    </div>
                </div>
            ))}

            
        </div>
    </div>
  )
}

export default History