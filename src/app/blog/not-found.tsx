import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mt-40">
      <div className="flex gap-2 justify-center items-center">
        <Frown size={40}/>
        <h2 className='text-4xl font-bold'>404</h2>
      </div>
      <p className="text-center mt-5">blog not found</p>
    </div>
  )
}