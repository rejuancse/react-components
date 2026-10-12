import Panel from '../components/Panel';
import BarChart from '../components/BarChart';

function BarChartPage() {
    const labels = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const data = [65, 40, 83, 55, 92, 30, 70];

    return (
        <div>
            <Panel className="m-3">
                <h1 className="text-lg mb-3">Simple Bar Chart</h1>
                <BarChart labels={labels} data={data} />
            </Panel>
        </div>
    );
}

export default BarChartPage;
