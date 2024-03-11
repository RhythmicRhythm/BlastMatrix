import React from 'react'
import Navbar from './Navbar'

const AppHero = () => {
  return (
    <div className="apphero">
        <Navbar />
        <div className="flex justify-center items-center">
            <div className="">
                <div className="text-center">
                    <h1 className="text-white text-4xl nexa">@Rhythm_bfc</h1>
                </div>
                <div className="flex flex-row gap-4 mt-24">
                    <div className="bg-red-400 p-24 rounded-full"></div>
                    <div className="bg-red-400 p-24 rounded-full"></div>
                    <div className="bg-red-400 p-24 rounded-full"></div>
                </div>
                <div className="p-8 mt-20 px-10 w-full nexa  text-white flex flex-col sm:flex-row justify-between gap-2 bg-white bg-opacity-20 hover:bg-opacity-80">
                    <div className="text-center">
                        <h1 className="">Total Refferals</h1>
                        <p className="mt-2">0</p>
                    </div>
                    <div className="text-center">
                        <h1 className="">Total Refferals</h1>
                        <p className="mt-2">0</p>
                    </div>
                    <div className="text-center">
                        <h1 className="">Total Refferals</h1>
                        <p className="mt-2">0</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppHero