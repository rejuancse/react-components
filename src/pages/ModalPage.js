import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept!
            </Button>
        </div>
    )

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis diam, a commodo nibh posuere eget. Duis aliquam dignissim finibus. Vivamus vestibulum dui sit amet nunc consequat, ac luctus mi feugiat. Nulla sollicitudin facilisis quam in ornare. In accumsan diam vitae lacinia luctus. Aliquam non felis tempus, faucibus lorem eu, faucibus mi. Duis imperdiet sem dui, eget egestas libero condimentum rutrum. Fusce vestibulum felis tellus, vel auctor sem volutpat et. Suspendisse vitae justo luctus, rutrum sem nec, posuere velit. Suspendisse potenti. Phasellus quis ligula ut libero tempor accumsan in vitae odio.</p>

            <p>Quisque placerat orci vitae orci hendrerit condimentum. In ultricies dictum sem. In faucibus velit eget metus scelerisque eleifend. Proin iaculis enim et nisi congue laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse a justo mauris. Vivamus in consequat tellus. Maecenas eget lorem molestie, efficitur eros vel, commodo mauris. Aliquam facilisis mauris in libero vestibulum, at varius dolor mollis. Vivamus nec diam nunc. Ut risus sapien, fringilla nec libero sodales, accumsan sollicitudin eros. Phasellus mattis, ex non sollicitudin bibendum, turpis ante volutpat mauris, eget tincidunt justo libero eget mauris.</p>

            <p>Suspendisse eget congue ligula. In faucibus lacinia lobortis. Nam non ultricies ligula. Nam non venenatis velit. Morbi faucibus pulvinar dapibus. In id odio vel leo varius viverra non et lacus. Nullam egestas cursus metus a suscipit. Sed ornare felis eget odio sollicitudin cursus. Donec quis molestie ligula. Mauris ut lectus libero. Praesent id mollis sem.</p>

            <p>Quisque sed mi sapien. Nam elementum gravida ex tempus porttitor. Integer aliquet ultricies dolor, ac lacinia mi fringilla eget. Vestibulum vel nunc non nisl consectetur condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ullamcorper facilisis elit, eu blandit dolor fermentum vitae. Sed quis dignissim purus, in ornare justo. Fusce bibendum, tellus sed lacinia scelerisque, nunc orci porta mi, ut fringilla felis eros at nisl. Sed accumsan nisi in dui tincidunt dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce mollis et ligula ut porttitor. Proin euismod rhoncus nisl, at placerat nulla feugiat ut.</p>

            <p>Nulla justo nunc, dapibus auctor augue sit amet, ornare condimentum neque. Vestibulum ultrices condimentum nisl, sit amet varius odio mollis eu. Fusce eu lacus hendrerit, porttitor lacus eu, consequat nisl. Pellentesque vehicula cursus arcu in dictum. Curabitur aliquet orci sit amet finibus pretium. Fusce id varius turpis, et pellentesque quam. Pellentesque sed neque vestibulum nulla lobortis consequat. Suspendisse sit amet libero mattis, congue elit in, imperdiet libero. Nulla dapibus suscipit enim sed tristique. Sed neque velit, condimentum vitae nisl sit amet, ullamcorper interdum nunc. Phasellus interdum sem pharetra diam varius, vitae vulputate velit sagittis. Sed ac nunc tempus, aliquam diam sit amet, consequat felis. In lacinia mi enim, scelerisque volutpat nunc dictum eu. Donec sed vehicula justo. Aliquam suscipit varius nisl, vitae faucibus velit rhoncus non.</p>
        </Modal>
    );

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            { showModal && modal }

            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis diam, a commodo nibh posuere eget. Duis aliquam dignissim finibus. Vivamus vestibulum dui sit amet nunc consequat, ac luctus mi feugiat. Nulla sollicitudin facilisis quam in ornare. In accumsan diam vitae lacinia luctus. Aliquam non felis tempus, faucibus lorem eu, faucibus mi. Duis imperdiet sem dui, eget egestas libero condimentum rutrum. Fusce vestibulum felis tellus, vel auctor sem volutpat et. Suspendisse vitae justo luctus, rutrum sem nec, posuere velit. Suspendisse potenti. Phasellus quis ligula ut libero tempor accumsan in vitae odio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis diam, a commodo nibh posuere eget. Duis aliquam dignissim finibus. Vivamus vestibulum dui sit amet nunc consequat, ac luctus mi feugiat. Nulla sollicitudin facilisis quam in ornare. In accumsan diam vitae lacinia luctus. Aliquam non felis tempus, faucibus lorem eu, faucibus mi. Duis imperdiet sem dui, eget egestas libero condimentum rutrum. Fusce vestibulum felis tellus, vel auctor sem volutpat et. Suspendisse vitae justo luctus, rutrum sem nec, posuere velit. Suspendisse potenti. Phasellus quis ligula ut libero tempor accumsan in vitae odio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis diam, a commodo nibh posuere eget. Duis aliquam dignissim finibus. Vivamus vestibulum dui sit amet nunc consequat, ac luctus mi feugiat. Nulla sollicitudin facilisis quam in ornare. In accumsan diam vitae lacinia luctus. Aliquam non felis tempus, faucibus lorem eu, faucibus mi. Duis imperdiet sem dui, eget egestas libero condimentum rutrum. Fusce vestibulum felis tellus, vel auctor sem volutpat et. Suspendisse vitae justo luctus, rutrum sem nec, posuere velit. Suspendisse potenti. Phasellus quis ligula ut libero tempor accumsan in vitae odio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis diam, a commodo nibh posuere eget. Duis aliquam dignissim finibus. Vivamus vestibulum dui sit amet nunc consequat, ac luctus mi feugiat. Nulla sollicitudin facilisis quam in ornare. In accumsan diam vitae lacinia luctus. Aliquam non felis tempus, faucibus lorem eu, faucibus mi. Duis imperdiet sem dui, eget egestas libero condimentum rutrum. Fusce vestibulum felis tellus, vel auctor sem volutpat et. Suspendisse vitae justo luctus, rutrum sem nec, posuere velit. Suspendisse potenti. Phasellus quis ligula ut libero tempor accumsan in vitae odio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis diam, a commodo nibh posuere eget. Duis aliquam dignissim finibus. Vivamus vestibulum dui sit amet nunc consequat, ac luctus mi feugiat. Nulla sollicitudin facilisis quam in ornare. In accumsan diam vitae lacinia luctus. Aliquam non felis tempus, faucibus lorem eu, faucibus mi. Duis imperdiet sem dui, eget egestas libero condimentum rutrum. Fusce vestibulum felis tellus, vel auctor sem volutpat et. Suspendisse vitae justo luctus, rutrum sem nec, posuere velit. Suspendisse potenti. Phasellus quis ligula ut libero tempor accumsan in vitae odio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum convallis diam, a commodo nibh posuere eget. Duis aliquam dignissim finibus. Vivamus vestibulum dui sit amet nunc consequat, ac luctus mi feugiat. Nulla sollicitudin facilisis quam in ornare. In accumsan diam vitae lacinia luctus. Aliquam non felis tempus, faucibus lorem eu, faucibus mi. Duis imperdiet sem dui, eget egestas libero condimentum rutrum. Fusce vestibulum felis tellus, vel auctor sem volutpat et. Suspendisse vitae justo luctus, rutrum sem nec, posuere velit. Suspendisse potenti. Phasellus quis ligula ut libero tempor accumsan in vitae odio.</p>

        </div>
    )
}

export default ModalPage;
