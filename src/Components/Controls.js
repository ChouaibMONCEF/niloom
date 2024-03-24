"use client"
import { useState } from "react"
import Button from "./Atoms/Button"
import Users from "./Users"
import HeavyPlus from "../../public/Images/HeavyPlus.webp"
import Share from "../../public/Images/Share.webp"
import Profile from "../../public/Images/Profile.webp"

export default function Controls({ setAdding }) {
  return (
    <>
      <div className='flex gap-4'>
        <Button
          text={"Add Task"}
          icon={HeavyPlus}
          setAdding={setAdding}
        />
        <Button text={"Filter"} />
      </div>
      <div className='flex gap-2 items-center'>
        <Users name={"Chouaib Moncef"} icon={Profile} />
        <Button text={"Share"} icon={Share} />
      </div>
    </>
  )
}
