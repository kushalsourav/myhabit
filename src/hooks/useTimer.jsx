import { useEffect, useState } from "react"

const useTimer = (initial, defaultTime) => {
    const currentTime =  new Date().getTime() + defaultTime
    const countDownTime = new Date(currentTime).getTime();
    const [timer, setTimer] = useState(countDownTime - new Date().getTime());
    const handleTimerout = () => {
        !initial && setTimer(defaultTime)
        initial &&  setTimer(countDownTime - new Date().getTime())
    }
    useEffect(() => {
        handleTimerout()
        const interval = setInterval(handleTimerout)
        !initial && clearInterval(interval)
        return () => clearInterval(interval);
    },[initial,defaultTime])
    return calculateTime(timer);
}

const calculateTime = (countDownTime) => {
    const minutes = Math.floor((countDownTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDownTime % (1000 * 60)) / 1000);
    return [ minutes, seconds, countDownTime];
}

export default useTimer;