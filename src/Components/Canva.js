"use client"
import { useState } from "react"
import Todo from '../../public/Images/Todo.webp'
import CanvaControls from "./Atoms/CanvaControls"
import Card from './Card'

export default function Canva({icon, text}) {
  return (
    <>
      <div className='w-4/12'>
        <CanvaControls icon={icon ? Todo : false} text={text} />
        <div className='bg-gray-100 h-[70vh] p-3 rounded-lg font-semibold flex flex-row justify-center focus:bg-sky-100 outline-none shadow-md'>
          <Card name={"Chouaib Moncef"}/>
        </div>
      </div>
    </>
  )
}
