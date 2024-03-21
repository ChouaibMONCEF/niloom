"use client"
import { useState } from "react"
import Image from "next/image"
import User from "./User"

export default function UserHolder({ icon, name }) {
  const [imageSize, setImageSize] = useState(15)
  return (
    <>
      <button className='w-10 h-10 rounded-full border-dashed border-2 border-gray-400 font-semibold flex flex-row justify-center items-center'>
        {icon && (
          <div>
            <Image
              src={icon}
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
