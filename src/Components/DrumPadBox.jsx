import React, { useEffect, useContext } from 'react'
import DrumPad from './DrumPad'
import { displayContext } from '../context/contexts';

const DrumPadBox = () => {
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

    const {setDisp, volume} = useContext(displayContext);
    const handleKeyDown = (e) => {
        const key = e.key.toUpperCase();
        const audio = document.getElementById(key);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
            setDisp(padMap[key]);
            const pad = audio.closest('.drum-pad');
            pad?.classList.add('active');
            setTimeout(() => pad?.classList.remove('active'), 150);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    return (
        <div className="drum-pad-box w-[326px] flex flex-wrap gap-3">
            <DrumPad keyTrigger="Q" audioId="Heater-1" audioSrc="/assets/Heater-1.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="W" audioId="Heater-2" audioSrc="/assets/Heater-2.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="E" audioId="Heater-3" audioSrc="/assets/Heater-3.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="A" audioId="Heater-4" audioSrc="/assets/Heater-4_1.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="S" audioId="Clap" audioSrc="/assets/Heater-6.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="D" audioId="Open-HH" audioSrc="/assets/Dsc_Oh.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="Z" audioId="Kick_n_Hat" audioSrc="/assets/Kick_n_Hat.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="X" audioId="Kick" audioSrc="/assets/RP4_KICK_1.mp3" volume={volume}></DrumPad>
            <DrumPad keyTrigger="C" audioId="Closed-HH" audioSrc="/assets/Cev_H2.mp3" volume={volume}></DrumPad>
        </div>
    )
}

export default DrumPadBox
