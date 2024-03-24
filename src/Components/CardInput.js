"use client"
import Image from "next/image"
import { useState } from "react"
import Check from "../../public/Images/Check.webp"
import Note from "../../public/Images/Note.webp"
import Edit from "../../public/Images/Edit.webp"

export default function CardInput({ name, addTask }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  return (
    <>
      <div
        onDoubleClick={() => deleteTask(id)}
        className={`
          bg-white w-full h-fit shadow-sm p-7 my-2 rounded-md`}
      >
        <div className='grid grid-flow-col place-content-start'>
          <div className='mr-5 mt-1'>
            <Image src={Check} width={"auto"} height={22} alt='Board Icon' />
          </div>
          <div>
            <input
              className='font-semibold text-slate-500 text-2xl border-b-2 mb-5'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder='Write task name'
            />
            <input
              className='font-semibold text-slate-500 text-2xl border-b-2'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder='Description'
            />
            <button
              className='mt-4 bg-sky-500 py-2 px-4 text-white rounded-md'
              onClick={() => addTask(title, description)}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
