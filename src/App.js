import react, { useEffect, useState } from "react";
import useIterator from "./useIterator";
import Homepage from "./Components/Homepage";
import Aboutpage from "./Components/Aboutpage";

function App() {
  const [time, setTime] = useState("");
  const [timer, setTimer] = useState({
    hours: "00",
    minutes: "0",
    seconds: "00",
  });

  var secondstime = '60';
  var timerr = "";
  useEffect(() => {
    if (timer.minutes !== "0" && time!=="") {
      timerr = setInterval(() => {
        if (secondstime === Number('00')) {
          secondstime = 60;
          const minutes = timer.minutes - 1;
          setTimer({ ...timer, minutes:minutes });
        } else {
          secondstime = secondstime - 1;
          setTimer({ ...timer, seconds: secondstime>=10 ? secondstime : "0"+secondstime});
        }
      }, 1000);
    }
  if(timer.minutes===Number('0'))
    {
       setTimer({
        hours: "00",
        minutes: "0",
        seconds: "00",
      })
     
    }
    
    return () => {
      clearInterval(timerr);
    };
  }, [timer.minutes]);

useEffect(()=>{
  if(time==='')
  {
    setTimer({
      hours: "00",
      minutes: "0",
      seconds: "00",
    })
  }
  else return 
},[time])

  return (
    <div className="App">
      <Homepage/>
      <Aboutpage/>
      <div>
        <input
          type="text"
          value={time}
          onChange={(e) => {
            setTime(e.target.value)
            setTimer({ ...timer, minutes:e.target.value-1})}}
        />
      </div>
      
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>

        {timer.hours}:{Number(time)>=10 ? timer.minutes:'0'+timer.minutes}:{timer.seconds}
      </span>
    </div>
  );
}

export default App;
