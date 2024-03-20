"use client"
import { useState } from "react"
import Image from "next/image"

export default function Users({ image, name }) {
  const shortName = name[0] + name.split(' ')[1][0]
  const [imageSize, setImageSize] = useState(15)
  return (
    <>
      <button
        className={`w-10 h-10 bg-orange-500 rounded-full font-semibold flex flex-row justify-center items-center text-white`}
      >
        {shortName}
      </button>
      <button className='w-10 h-10 rounded-full border-dashed border-2 border-gray-400 font-semibold flex flex-row justify-center items-center'>
        {image && (
          <div>
            <Image
              src={image}
              width={"auto"}
              height={imageSize}
              alt='Board Icon'
            />
          </div>
        )}
      </button>
      <button className='w-10 h-10 rounded-full border-dashed border-2 border-gray-400 font-semibold flex flex-row justify-center items-center'>
        {image && (
          <div>
            <Image
              src={image}
              width={"auto"}
              height={imageSize}
              alt='Board Icon'
            />
          </div>
        )}
      </button>
    </>
  )
}
