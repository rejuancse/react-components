import { GoBell, GoCloud, GoDownload, GoDatabase } from 'react-icons/go';
import Button from './Button';

function App() {
    const handleClick = () => {
        console.log('Click!!');
    };

    return (
        <div>
            <div>
                <Button secondary outline rounded onClick={handleClick}>
                    <GoBell />Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloud />Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoDownload />Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>Something!</Button>
            </div>
        </div>
    );
}

export default App;
