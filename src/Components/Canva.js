"use client"
import { useState } from "react"
import Todo from "../../public/Images/Todo.webp"
import CanvaControls from "./Atoms/CanvaControls"
import CardInput from "./CardInput"
import Card from "./Card"
import { Droppable } from "react-beautiful-dnd"

export default function Canva({
  icon,
  text,
  id,
  tasks,
  deleteTask,
  adding,
  addTask,
}) {
  return (
    <>
      <Droppable key={id} droppableId={`${id}`}>
        {(provided, snapshot) => (
          <div className='w-4/12'>
            <CanvaControls icon={icon ? Todo : false} text={text} />
            <div
              ref={provided.innerRef}
              className='bg-gray-100 h-[65vh] p-3 rounded-lg font-semibold focus:bg-sky-100 outline-none shadow-md overflow-auto'
              {...provided.droppableProps}
            >
              {adding && id == 1 && (
                <>
                  <CardInput addTask={addTask} />
                </>
              )}
              {tasks &&
                tasks.map(
                  (item, index) =>
                    item.status == id && (
                      <Card
                        name={"Chouaib Moncef"}
                        status={item.status}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                        order={item.order}
                        index={index}
                        deleteTask={deleteTask}
                      />
                    )
                )}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}
