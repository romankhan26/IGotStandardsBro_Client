"use client"
import { useAtom } from "jotai"
import { APIResponse } from "../data"

const Results = () => {
  const [responseData]= useAtom(APIResponse)
  console.log(responseData,"response data in result page by romi khan");
 return (
    <div>{responseData.height_base_samples}</div>
  )
}

export default Results