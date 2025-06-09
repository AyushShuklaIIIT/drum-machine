import React, { useRef, useContext, useEffect } from 'react'
import { displayContext } from '../context/contexts';

const padMap = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open HH",
    Z: "Kick n' Hat",
    X: "Kick",
    C: "Closed HH"
}

const DrumPad = ({ keyTrigger, audioId, audioSrc, volume }) => {
    const { setDisp, checked } = useContext(displayContext);
    const audioRef = useRef(null);

    useEffect(() => {
      if(audioRef.current) {
        audioRef.current.volume = volume;
      }
    }, [volume])
    

    const playSound = () => {
        const audio = audioRef.current;
        if (audio) {

            audio.currentTime = 0;
            audio.play();
            setDisp(padMap[audio.id]);
        }
    }
    return (
        <button className='drum-pad' onClick={playSound} id={audioId} disabled={!checked}>
            <p>{keyTrigger}</p>
            <audio ref={audioRef} src={audioSrc} className='clip' id={keyTrigger}>
                <track kind='captions'></track>
            </audio>
        </button>
    )
}

export default DrumPad
