import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: '01',
            label: "Lorem ipsum dolor sit amet?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ex ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla placerat mauris, vel egestas ligula pulvinar et. Phasellus egestas, urna id varius hendrerit, tellus urna porta nulla, vitae mattis augue ipsum eget ipsum. Cras sollicitudin pellentesque semper."
        },
        {
            id: '02',
            label: "Lorem ipsum dolor sit amet?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ex ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla placerat mauris, vel egestas ligula pulvinar et. Phasellus egestas, urna id varius hendrerit, tellus urna porta nulla, vitae mattis augue ipsum eget ipsum. Cras sollicitudin pellentesque semper."
        },
        {
            id: '03',
            label: "Lorem ipsum dolor sit amet?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ex ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla placerat mauris, vel egestas ligula pulvinar et. Phasellus egestas, urna id varius hendrerit, tellus urna porta nulla, vitae mattis augue ipsum eget ipsum. Cras sollicitudin pellentesque semper."
        }
    ];

    return (
        <Accordion items={items} />
    )
}

export default AccordionPage;
