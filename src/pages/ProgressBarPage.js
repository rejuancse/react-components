import { useState } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

function ProgressBarPage() {
    const [percent, setPercent] = useState(40);

    const increment = () => setPercent((current) => Math.min(100, current + 10));
    const decrement = () => setPercent((current) => Math.max(0, current - 10));

    return (
        <div>
            <Panel className="m-3">
                <h1 className="text-lg mb-3">Simple Progress Bar</h1>
                <ProgressBar percent={70} showLabel />
            </Panel>

            <Panel className="m-3">
                <h1 className="text-lg mb-3">Color Variations</h1>
                <div className="flex flex-col gap-3">
                    <ProgressBar percent={90} color="green" />
                    <ProgressBar percent={60} color="blue" />
                    <ProgressBar percent={40} color="yellow" />
                    <ProgressBar percent={20} color="red" />
                </div>
            </Panel>

            <Panel className="m-3">
                <h1 className="text-lg mb-3">Striped Progress Bar</h1>
                <div className="flex flex-col gap-3">
                    <ProgressBar percent={75} striped animated />
                    <ProgressBar percent={55} striped color="green" />
                    <ProgressBar percent={35} striped color="red" />
                </div>
            </Panel>

            <Panel className="m-3">
                <h1 className="text-lg mb-3">Interactive Progress Bar</h1>
                <ProgressBar percent={percent} showLabel />
                <div className="flex flex-row mt-3">
                    <Button onClick={decrement} className="mr-2">
                        Decrement
                    </Button>
                    <Button onClick={increment}>Increment</Button>
                </div>
            </Panel>

            {/* <Panel className="m-3">
                <h1 className="text-lg mb-3">Indeterminate Progress Bar</h1>
                <ProgressBar indeterminate />
            </Panel> */}
        </div>
    );
}

export default ProgressBarPage;
