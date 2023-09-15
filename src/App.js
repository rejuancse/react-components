import Dropdown from './components/Dropdown';

function App() {
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Black', value: 'black' },
    ]
    return (
        <Dropdown options={options} />
    )
}

export default App;
