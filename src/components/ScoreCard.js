import React, { useState } from "react";
import Button from '@mui/material/Button';
import Scores from "./Scores";

const Scorecard = () => {
    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [curr, setCurr] = useState([]);
    const [ball, setBall] = useState(0);

    const handlerFunction = (value) => {
        setCurr([...curr, value]);
        if (value !== 'Wicket') {
            if (value === 'No Ball' || value === 'Wide Ball') {
                setScore(score + 1);
            }
            else if (value !== 'Dot Ball') {
                setScore(score + parseInt(value[0]));
                setBall(ball + 1);

            }
            else {
                setBall(ball + 1);
            }
        }
        else {
            setWickets(wickets + 1);
            setBall(ball + 1);

        }
    };
    const handleChange = () => {
        setBall(0);
        setCurr([]);
    }
    return (
        <div style={{
            display: "flex",
            justifyIcontent: "center",
            alignItems: 'center',
            height: "90vh",
            justifyContent: 'center',
        }}>
            <div style={{
                border: '1px solid',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexFlow: 'column',
            }}>
                <div>
                    <div>
                        {curr.map(ele => ele)}

                    </div>
                    <Button key='new-over' variant="outlined" onClick={handleChange} disabled={ball <= 5}>New Over</Button>
                </div>

                <div>
                    <Scores handlerFunction={handlerFunction} disabled={ball >= 6} />
                </div>
                <div>
                    Team 1 score is {score}/{wickets}
                </div>
            </div>
        </div >
    )


}

export default Scorecard;