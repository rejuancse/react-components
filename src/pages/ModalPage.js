import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>

            {showModal && modal}

            <br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus tincidunt magna elementum tristique. Donec nulla urna, consequat in tincidunt vel, eleifend feugiat est. Nam consectetur mi sed nibh vulputate, in sagittis lorem elementum. Ut velit lectus, euismod eget rutrum sit amet, semper in turpis. Donec pulvinar quam turpis, a ultricies elit commodo ut. Maecenas convallis aliquam arcu eu facilisis. Aenean in dapibus risus. Sed egestas rhoncus sem sit amet dignissim. Proin ultrices sed magna eu pellentesque.
            </p><br />
            <p>
                Pellentesque ultricies felis at viverra faucibus. Suspendisse eget leo vitae elit laoreet ultrices. Ut eget suscipit dui. In hac habitasse platea dictumst. Nullam cursus elementum ullamcorper. Sed viverra magna non nibh sagittis, a bibendum neque placerat. Cras euismod vehicula metus, eget viverra risus pulvinar quis. Nam ornare eu purus eget pretium. Sed malesuada egestas dictum. Morbi dapibus, purus nec tincidunt sagittis, dui elit tempus massa, nec accumsan sapien quam eu lacus. Maecenas maximus ex odio, non pellentesque nunc auctor at. Sed rutrum quis risus at elementum. Phasellus rutrum nisi vitae orci fringilla, ac eleifend ex commodo.
            </p><br />
            <p>
                In enim mi, tincidunt vitae blandit non, aliquet ut turpis. Ut mollis malesuada purus et ultrices. Donec tristique mollis augue quis malesuada. Proin luctus urna dictum, tincidunt eros porttitor, tincidunt magna. Nulla interdum mauris eget imperdiet bibendum. Sed suscipit non lorem sit amet semper. Nam euismod lacus eget mi dignissim, eu suscipit nunc accumsan. Donec at maximus purus. In hac habitasse platea dictumst.
            </p>
        </div>
    );
}

export default ModalPage;
