import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Scores = ({ handlerFunction = () => { }, disabled }) => {
    const deliveries = ['1 Run', '2 Run', '3 Run', '4 Run', '5 Run', '6 Run', 'Wide Ball', 'No Ball', 'Wicket', 'Dot Ball'];

    const handleChange = (event) => {
        const value = event.target.value;
        handlerFunction(value);

    };
    return (
        <div>
            <Stack direction="row" spacing={2}>
                {deliveries.map(ele => <Button key={ele} variant="outlined" value={ele} onClick={handleChange} disabled={disabled}>{ele}</Button>)}
            </Stack>

        </div>

    )
};

export default Scores;