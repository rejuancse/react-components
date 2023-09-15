// import { useState, useEffect, useRef } from 'react';
// import { GoChevronDown } from 'react-icons/go';
// import Panel from './Panel';

function Dropdown({options}) {
    // const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = () => {

    }

    const renderedOptions = options.map( (option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value} >
                {option.label}
            </div>
        )
    });

    return (
        <div>
            {renderedOptions}
        </div>
    )
}

export default Dropdown;
