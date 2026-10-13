import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <Button
                    secondary
                    outline
                    rounded
                    className="mb-5"
                    onClick={handleClick}
                    >
                    <GoBell />
                    Click me!!
                </Button>
            </div>

            <div>
                <Button danger outline className="mb-5" onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>

            <div>
                <Button warning className="mb-5" onMouseLeave={handleClick}>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>

            <div>
                <Button secondary outline className="mb-5">
                    Hide Ads!
                </Button>
            </div>

            <div>
                <Button primary rounded className="mb-5">
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
