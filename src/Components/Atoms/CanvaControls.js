"use client"
import { useState } from "react"
import More from "../../../public/Images/More.webp"
import Plus from '../../../public/Images/Plus.webp'
import Image from "next/image"

export default function CanvaControls({ text, icon }) {
  const [imageSize, setImageSize] = useState(20)
  return (
    <>
      <div className='mb-5 text-xl font-semibold flex justify-between items-center text-gray-500'>
        <div className='flex items-center'>
          {icon && (
            <div className='mr-3'>
              <Image
                src={icon}
                width={"auto"}
                height={imageSize}
                alt='Board Icon'
              />
            </div>
          )}
          <div>{text}</div>
        </div>
        <div className='flex items-center'>
          <button className='mr-2'>
            <Image src={Plus} width={"auto"} height={19} alt='Board Icon' />
          </button>
          <button>
            <Image src={More} width={"auto"} height={4} alt='Board Icon' />
          </button>
        </div>
      </div>
    </>
  )
}
