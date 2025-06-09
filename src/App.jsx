import DrumPadBox from "./Components/DrumPadBox"
import { useState, useMemo, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { displayContext } from "./context/contexts";
import PowerButton from "./Components/PowerButton";
function App() {
  const [disp, setDisp] = useState("");
  const [volume, setVolume] = useState(0.5);
  const [checked, setChecked] = useState(true)
  const contextValue = useMemo(() => ({ setDisp, volume, checked, setChecked }), [setDisp, volume, checked, setChecked]);

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    setDisp(`Volume: ${(volume * 100).toFixed(0)}`);
    setTimeout(() => setDisp(""), 1000);
  }

  useEffect(() => {
    setDisp("");
  }, [checked])
  
  return (
    <displayContext.Provider value={contextValue}>
      <div id="drum-machine" className="flex flex-wrap gap-4 border-[#f8bbd0] border-6 p-8 w-fit ">
        <DrumPadBox></DrumPadBox>
        <div className="w-[326px] flex flex-col items-center justify-evenly min-h-[260px]">
        <PowerButton></PowerButton>
          <p id="display" className="bg-[#e91e63] flex flex-col justify-around items-center w-52 p-2 font-bold h-13">{disp}</p>
          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="slider" disabled={!checked} />
        </div>
      </div>
    </displayContext.Provider>
  )
}

export default App
