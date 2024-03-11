import React from 'react'
import AppHero from '../components/AppHero'
import MatrixRainingCode from "../components/MatrixRainingEffect";

const Application = () => {
  return (
    <>
 <div className="">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <AppHero />
        
      </div>
    </div>
    </>
  )
}

export default Application