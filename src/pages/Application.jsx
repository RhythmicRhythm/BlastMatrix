import React from 'react'
import AppHero from '../components/AppHero'
import MatrixRainingCode from "../components/MatrixRainingEffect";
import Tasks from '../components/Tasks';


const Application = () => {
  return (
    <>
 <div className="overflow-x-hidden overflow-y-hidden">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <AppHero />
        <div className="mb-48"></div>
        <Tasks />
        
        
      </div>
    </div>
    </>
  )
}

export default Application