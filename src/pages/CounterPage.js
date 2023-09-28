import { useState } from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';
import Panel from '../components/Panel';

function CounterPage({initialCount}) {
    const [count, setCount] = useState(initialCount);
    const { increment, decrement } = useCounter(initialCount);
    const [ valueToAdd, setValueToAdd ] = useState(0);

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setCount(count+valueToAdd);
        setValueToAdd(0)
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is: {count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={valueToAdd || 0}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button primary>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;
