
import axios from "axios";
import { useState } from "react";

function App()
{
  const[City,setcity]= useState()
  const[weather,setweather]=useState()
  const[temperature,settemperature]=useState("")
  const [description,setdesc]=useState("")
 function handlecity(event){
  setcity(event.target.value)
 }
 function getweather(){
  var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=3b297d047d5c56b228dc6d8fdeefd35f`)
  data.then(function(userdata)
  {
    console.log(userdata.data)
    setweather(userdata.data.weather[0].main)
    settemperature(userdata.data.main.temp)
    setdesc(userdata.data.weather[0].description)
  })
 }


  return(<div className="bg-blue-100 p-20">
    <div className="bg-red-400 p-10 rounded-md">
      <h1>weather report</h1>
      <p> I can give you a weather report about a city!</p>
      <input onChange={handlecity} className="mt-2 border-black rounded p-2" placeholder="enter your ciy name"></input>
      <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-2">get report</button>
      <div className="p-2">
      <p><b>weather:</b>{weather}</p>
      <p><b>temperature:</b>{temperature}</p>
      <p><b>description:</b>{description}</p>
    </div>
    </div>
  </div>)

}


export default App;
