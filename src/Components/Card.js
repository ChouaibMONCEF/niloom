"use client"
import Image from "next/image"
import { useState } from "react"
import Check from "../../public/Images/Check.webp"
import Note from "../../public/Images/Note.webp"
import Edit from "../../public/Images/Edit.webp"

export default function Card({ name }) {
  const shortName = name[0] + name.split(" ")[1][0]
  return (
    <>
      <div className='bg-white w-full h-fit shadow-sm p-7 rounded-md'>
        <div className='grid grid-flow-col items-start'>
          <div className='mr-5 mt-1'>
            <Image src={Check} width={"auto"} height={22} alt='Board Icon' />
          </div>
          <div>
            <div className='font-semibold text-slate-700 text-2xl'>Task #1</div>
            <div className='font-semibold text-slate-500 text-lg flex items-center'>
              Description
              <div className='ml-2'>
                <Image src={Edit} width={"auto"} height={14} alt='Board Icon' />
              </div>
            </div>
            <div className='font-medium text-slate-500 text-sm w-auto mb-2'>
              Having good product descriptions on your online shop is as
              important as having great images or a technically flawless
              website. Not only does it contribute to a positive customer
              experience, but it contributes to the credibility of your store,
              it can help your online shop rank higher, and boost conversions
              for your site’s visitors.
            </div>
            <div className='bg-yellow-500 font-medium text-slate-900 text-md rounded-full w-fit py-1 px-4 my-4'>
              Medium
            </div>
            <div className='font-semibold text-slate-500 flex items-center'>
              <button
                className={`w-10 h-10 bg-yellow-500 rounded-full text-md font-semibold flex flex-row justify-center items-center text-slate-900 mr-3`}
              >
                {shortName}
              </button>
              <div className='text-xl'>27 - February</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
