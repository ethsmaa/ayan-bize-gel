import {useState} from 'react'
import './App.css'

function App() {

    type buttonPosiiton = {
        top: number;
        left: number;
    }
    const [buttonPosition, setButtonPosition] = useState<buttonPosiiton>({top: 400, left: 770});

    const handleMouseEnter = (): void => {
        const newPosition: buttonPosiiton = {
            top: Math.random() * (window.innerHeight - 100),
            left: Math.random() * (window.innerWidth - 100),
        };
        setButtonPosition(newPosition);
    };

    return (
        <div>
            <h1><b>AYAN BİZE GELSENE</b></h1>
            <button onClick={() => alert('hehe tabi tamam')}>Tamam</button>
            <button onMouseEnter={handleMouseEnter} onClick={() => alert("bunun olmaması gerekiyordu")}
                    style={{position: 'absolute', top: `${buttonPosition.top}px`, left: `${buttonPosition.left}px`}}>
                gelemem
            </button>
        </div>
    )
}

export default App
