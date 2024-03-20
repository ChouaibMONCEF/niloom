"use client"
import { useState } from "react"
import Button from "./Button"
import Users from "./Users"
import HeavyPlus from "../../public/Images/HeavyPlus.webp"
import Share from "../../public/Images/Share.webp"
import Profile from "../../public/Images/Profile.webp"

export default function Controls() {
  return (
    <>
      <div className='px-40 py-10 flex flex-row justify-between'>
        <div className='flex gap-4'>
          <Button text={"Add Task"} image={HeavyPlus} />
          <Button text={"Filter"} />
        </div>
        <div className='flex gap-2 items-center'>
          <Users name={"Chouaib Moncef"} image={Profile} />
          <Button text={"Share"} image={Share} />
        </div>
      </div>
    </>
  )
}
