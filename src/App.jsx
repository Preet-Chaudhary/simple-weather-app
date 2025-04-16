import axios from "axios";
import { useEffect, useState } from "react"
import Weather from "./components/Weather";
const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
function App() {
    const [location, setlocation] = useState("")
    const [latitude, setlatitude] = useState(0)
    const [longitude, setlongitude] = useState(0)
    const [inpval, setinpval] = useState("")
    useEffect(() => {
      if(latitude!=0&&longitude!=0){
        getweather();
        console.log(latitude,longitude)
      }
    }, [latitude,longitude])
    
        const [weather, setweather] = useState("")
    const handlesub=(e)=>{
        e.preventDefault();
        setinpval(location);
        getcoordinates();
        setlocation("");
    
    }
    const getcoordinates=async()=>{
        try {
            const res=await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`)
            if(res.data.length==0)
            {
                alert("location not found")
                return ;
            }
            setlatitude(res.data[0].lat);
            setlongitude(res.data[0].lon);
            
        } catch (error) {
            console.log("failed")
            console.log(error.message)
        }

    }
  const getweather=async()=>{
             try {
                const wthr=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
               setweather(wthr.data.main.temp);
             } catch (error) { 
                console.log(error.message)
             }
    }
    return (
        <div className="flex flex-col gap-2 bg-black min-h-full p-4 align-middle justify-center border-2 border-fuchsia-400">
            <div className="flex flex-col gap-2 p-4 border-1 bg-white text-black border-pink-300">
            <form onSubmit={handlesub} action="">
                <input value={location} placeholder="enter the location" className="border-2 border-fuchsia-400 m-2 p-2 " onChange={(e)=>setlocation(e.target.value)} type="text" />
                <button className="border-2-purple-800 rounded-4xl p-3 bg-purple-500"  type="submit">SUBMIT</button>
            </form>
            </div>
           {
           inpval && weather !="" &&
           <Weather city={inpval} temp={weather}  />
}
        </div>
    )
}
export default App