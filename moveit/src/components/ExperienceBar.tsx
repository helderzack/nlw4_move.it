import { useState } from 'react';

export function ExperienceBar() {
    const [currentXp, setXp] = useState(300);
    const [currentProgressWidth, setProgressWidth] = useState(50);

    function incrementXp() {
        if (currentProgressWidth < 100) {
            setProgressWidth(currentProgressWidth + 10);
            setXp(currentXp + 60);
        }
    }

    function decrementXp() {
        if (currentProgressWidth > 0) {
            setProgressWidth(currentProgressWidth - 10);
            setXp(currentXp - 60);
        }
    }

    return(
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: `${currentProgressWidth}%` }} />
                <span className="current-experience" style={{ left: '50%' }}>
                    { currentXp }
                </span>
            </div>
            <span>600 xp</span>
            <button onClick={ incrementXp } style={{margin: '5px', fontSize: '0.5rem'}}>Increment XP</button>
            <button onClick={ decrementXp } style={{margin: '5px', fontSize: '0.5rem'}}>Decrement XP</button>
        </header>
    );
}