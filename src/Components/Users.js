"use client"
import { useState } from "react"
import Image from "next/image"
import User from "./Atoms/User"
import UserHolder from "./Atoms/UserHolder"

export default function Users({ icon, name }) {
  const [imageSize, setImageSize] = useState(15)
  return (
    <>
      <User name={name} />
      <UserHolder icon={icon} />
      <UserHolder icon={icon} />
    </>
  )
}
