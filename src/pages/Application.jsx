import React from 'react'
import AppHero from '../components/AppHero'
import MatrixRainingCode from "../components/MatrixRainingEffect";
import Tasks from '../components/Tasks';


const Application = () => {
  return (
    <>
 <div className="">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <AppHero />
        <div className="mb-48"></div>
        <Tasks />
        <div className="mb-48"></div>
        
      </div>
    </div>
    </>
  )
}

export default Application