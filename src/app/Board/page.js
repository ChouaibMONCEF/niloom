import Header from "@/Components/Header"
import Controls from "@/Components/Controls"
import Canva from "@/Components/Canva"

export default function Board() {
  return (
    <div>
      <Header />
      <div className='px-10 pb-7 pt-10 flex flex-row justify-between 2xl:px-40'>
        <Controls />
      </div>
      <div className='px-10 flex flex-row justify-between gap-10 2xl:px-40'>
        <Canva icon={true} text={"To-Do"} />
        <Canva icon={false} text={"In Progress"} />
        <Canva icon={false} text={"Review"} />
        <Canva icon={false} text={"Completed"} />
      </div>
    </div>
  )
}
