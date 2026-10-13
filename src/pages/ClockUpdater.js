import {useState} from 'react';
import Button from '../components/Button';

function ClockUpdater() {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');

    const increaseHours = () => {
        setHours((prev) => String((Number(prev) + 1) % 24).padStart(2, '0'));
    }

    const decreaseHours = () => {
        setHours((prev) => String((Number(prev) + 23) % 24).padStart(2, '0'));
    }

    const increaseMinutes = () => {
        setMinutes((prev) => String((Number(prev) + 1) % 60).padStart(2, '0'));
    }

    const decreaseMinutes = () => {
        setMinutes((prev) => String((Number(prev) + 59) % 60).padStart(2, '0'));
    }

    return (
        <div id="ClockUpdater" className="container">
            <div className="row">
                <Button primary onClick={increaseHours}>
                    &uarr;
                </Button>
                <Button primary onClick={increaseMinutes}>
                    &uarr;
                </Button>
            </div>

            <div className="row">
                <div id="click" secondary outline>
                    {`${hours} : ${minutes}`}
                </div>
            </div>

            <div className="row">
                <Button primary onClick={decreaseHours}>
                    &darr;
                </Button>
                <Button primary onClick={decreaseMinutes}>
                    &darr;
                </Button>
            </div>
        </div>
    )
}

export default ClockUpdater;
