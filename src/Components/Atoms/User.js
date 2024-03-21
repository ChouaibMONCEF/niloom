"use client"
import { useState } from "react"
import Image from "next/image"

export default function User({ name }) {
  const shortName = name[0] + name.split(" ")[1][0]
  return (
    <>
      <button
        className={`w-10 h-10 bg-orange-500 rounded-full font-semibold flex flex-row justify-center items-center text-white`}
      >
        {shortName}
      </button>
    </>
  )
}
