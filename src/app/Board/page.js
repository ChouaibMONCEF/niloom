"use client"
import { useEffect, useState } from "react"
import Header from "@/Components/Header"
import Controls from "@/Components/Controls"
import Canva from "@/Components/Canva"
import { DragDropContext } from "react-beautiful-dnd"
import Tasks from "../../data/Tasks.json"
import { reorder, move } from "@/utilities/functions"

export default function Board() {
  const [data, setData] = useState(Tasks)
  const [adding, setAdding] = useState(false)
  const [firstStatus, setFirstStatus] = useState(Tasks)
  const [secondStatus, setSecondStatus] = useState(Tasks)
  const [thirdStatus, setThirdStatus] = useState(Tasks)
  const [fourthStatus, setFourthStatus] = useState(Tasks)

  function sortEachStatus(data) {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].status == 1) {
        arr1.push(data[i])
      } else if (data[i].status == 2) {
        arr2.push(data[i])
      } else if (data[i].status == 3) {
        arr3.push(data[i])
      } else if (data[i].status == 4) {
        arr4.push(data[i])
      }
    }
    setFirstStatus(
      arr1.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    )
    setSecondStatus(
      arr2.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    )
    setThirdStatus(
      arr3.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    )
    setFourthStatus(
      arr4.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    )
  }

  useEffect(() => {
    sortEachStatus(data)
  }, [data])

  function deleteTask(id) {
    if (confirm("Are you sure you want to delete ?")) {
      let tasks = [].concat(
        firstStatus,
        secondStatus,
        thirdStatus,
        fourthStatus
      )
      const objWithIdIndex = tasks.findIndex((obj) => obj.id === id)
      tasks.splice(objWithIdIndex, 1)
      sortEachStatus(tasks)
    }
  }

  function addTask(title, description) {
    let ranId = Math.random() * (10000 - 50) + 50
    let tasks = [].concat(
      firstStatus,
      [
        {
          id: ranId,
          title,
          description,
          status: 1,
          order: 1,
        },
      ],
      secondStatus,
      thirdStatus,
      fourthStatus
    )
    let reOrderedData = reorder(tasks, ranId, 1, 1)
    let sorted = reOrderedData.sort(
      (a, b) => parseFloat(a.status) - parseFloat(b.status)
    )
setAdding(false)
    sortEachStatus(sorted)
  }

  function onDragEnd(result) {
    let tasks = [].concat(firstStatus, secondStatus, thirdStatus, fourthStatus)
    const { source, destination, draggableId } = result

    if (!destination) {
      return
    }
    const sInd = +source.droppableId
    const dInd = +destination.droppableId
    const oldIndex = +source.index
    const newIndex = +destination.index

    let sorted
    if (dInd > sInd) {
      sorted = tasks.sort((a, b) => parseFloat(b.status) - parseFloat(a.status))
    } else {
      sorted = tasks.sort((a, b) => parseFloat(a.status) - parseFloat(b.status))
    }
    if (sInd === dInd) {
      let reOrderedData = reorder(sorted, draggableId, dInd, newIndex)
      sorted = reOrderedData.sort(
        (a, b) => parseFloat(a.status) - parseFloat(b.status)
      )
      sortEachStatus(sorted)
    } else {
      let movedData = move(sorted, draggableId, dInd, sInd, newIndex)
      sorted = movedData.sort(
        (a, b) => parseFloat(a.status) - parseFloat(b.status)
      )
      sortEachStatus(sorted)
    }
  }

  return (
    <>
      <div>
        <Header />
        <div className='px-10 pb-7 pt-10 flex flex-row justify-between 2xl:px-40'>
          <Controls addTask={addTask} setAdding={setAdding} />
        </div>
        <div className='px-10 flex flex-row justify-between gap-10 2xl:px-40'>
          <DragDropContext onDragEnd={onDragEnd}>
            <Canva
              icon={true}
              text={"To-Do"}
              id={1}
              tasks={firstStatus && firstStatus}
              deleteTask={deleteTask}
              adding={adding}
              addTask={addTask}
            />
            <Canva
              icon={false}
              text={"In Progress"}
              id={2}
              tasks={secondStatus && secondStatus}
              deleteTask={deleteTask}
              addTask={addTask}
            />
            <Canva
              icon={false}
              text={"Review"}
              id={3}
              tasks={thirdStatus && thirdStatus}
              deleteTask={deleteTask}
              addTask={addTask}
            />
            <Canva
              icon={false}
              text={"Completed"}
              id={4}
              tasks={fourthStatus && fourthStatus}
              deleteTask={deleteTask}
              addTask={addTask}
            />
          </DragDropContext>
        </div>
      </div>
    </>
  )
}
