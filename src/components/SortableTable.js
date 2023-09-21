import { useState } from "react";
import { GoTriangleDown } from 'react-icons/go';
import Table from "./Table";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th onClick={() => handleClick(column.label)} className="flex items-center cursor-pointer border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-400 text-left">{column.label} <GoTriangleDown /></th>
        }
    });

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )
}

export default SortableTable;
