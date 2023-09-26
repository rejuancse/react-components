import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({initialCount}) {
    const { count, increment, decrement } = useCounter(initialCount);

    return <div>
        <h2>Count is: {count}</h2>

        <div className="flex">
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    </div>
}

export default CounterPage;
