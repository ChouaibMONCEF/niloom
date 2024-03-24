"use client"
import Image from "next/image"
import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import Check from "../../public/Images/Check.webp"
import Note from "../../public/Images/Note.webp"
import Edit from "../../public/Images/Edit.webp"

export default function Card({ name, status, title, description, id, order, deleteTask }) {
  const shortName = name[0] + name.split(" ")[1][0]

  return (
    <>
      <Draggable key={id} draggableId={String(id)} index={order}>
        {(provided, snapshot) => (
          <div
            onDoubleClick={() => deleteTask(id)}
            ref={provided.innerRef}
            className={`${snapshot.isDragging ? "rotate-12 " : ""}
          bg-white w-full h-fit shadow-sm p-7 my-2 rounded-md`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className='grid grid-flow-col place-content-start'>
              <div className='mr-5 mt-1'>
                <Image
                  src={Check}
                  width={"auto"}
                  height={22}
                  alt='Board Icon'
                />
              </div>
              <div>
                <div className='font-semibold text-slate-700 text-2xl'>
                  {title}
                </div>
                <div className='font-semibold text-slate-500 text-lg flex items-center'>
                  Description
                  <div className='ml-2'>
                    <Image
                      src={Edit}
                      width={"auto"}
                      height={14}
                      alt='Board Icon'
                    />
                  </div>
                </div>
                <div className='font-medium text-slate-500 text-sm w-auto mb-2'>
                  {description}
                </div>
                <div
                  className={`${
                    status == "1"
                      ? "bg-orange-300 text-slate-900 "
                      : status == "2"
                      ? "bg-blue-400 text-white "
                      : status == "3"
                      ? "bg-yellow-100 text-slate-900 "
                      : status == "4"
                      ? "bg-green-500 text-white "
                      : ""
                  } font-medium text-ms rounded-full w-fit px-3 my-4`}
                >
                  {status == "1"
                    ? "To-Do"
                    : status == "2"
                    ? "In Progress"
                    : status == "3"
                    ? "Review"
                    : status == "4"
                    ? "Completed"
                    : ""}
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
        )}
      </Draggable>
    </>
  )
}
