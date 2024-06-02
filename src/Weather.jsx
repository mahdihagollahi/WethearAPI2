import React from "react";


const Weather =({WeatherData})=> {
  return (
    <div>
       {WeatherData.name !== undefined &&
            <div className="w-[500px] h-[250px] bg-gray-300 
            shadow-lg rounded-xl m-auto relative px-6 top-[10%]   ">

                <div className="flex justify-between w-full">

                  <div className="w-1/2 my-4 mx-auto flex justify-between items-center ">

                    <div className="flex flex-col items-start justify-between h-full">

                      <div>
                            <p className="text-xl ">
                              {WeatherData.name} , 
                              {/* {WeatherData.sys.country} */}
                            </p>

                            {WeatherData.main ?       <p className="text-sm">
                            {WeatherData.main.temp.toFixed()}
                              </p>: null}
                      </div>

                      <div>

                        <h1 className="text-6xl font-semibold">{WeatherData.main.temp.tofixed()}C°</h1>

                      </div>





                    </div>

                  </div>

                        <div className="w-1/2 flex flex-col justify-between items-end">

                            <div className="relative"></div>
                            {/* <img src="" alt="" className="w-[120px]" /> */}




                        </div>

                </div>

            </div>
      }
    </div>
  )
}
export default Weather 
