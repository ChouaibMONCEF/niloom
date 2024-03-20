"use client"
import {useState} from "react"
import Image from "next/image"
import BoardImage from "../../public/Images/Board.webp"

export default function Board() {
  const [imageSize, setImageSize] = useState(45)
  return (
    <>
      <div className='bg-white w-full h-20 sticky p-5 flex items-center shadow-sm'>
        <Image
          src={BoardImage}
          width={imageSize}
          height={imageSize}
          alt='Board Icon'
        />
        <hr width='35' className='bg-slate-900 text-gray-900 rotate-90' />
        <div className='text-xl font-semibold'>Board</div>
      </div>
    </>
  )
}
