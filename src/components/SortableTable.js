import { GoTriangleDown } from 'react-icons/go';
import Table from "./Table";
import useSort from '../hooks/use-sort';

function SortableTable(props) {
    const { config, data } = props;

    const {
        // sortOrder,
        // sortBy,
        sortedData,
        setSortColumn
    } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th onClick={() => setSortColumn(column.label)} className="flex items-center cursor-pointer border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-400 text-left">{column.label} <GoTriangleDown /></th>
        }
    });

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )
}

export default SortableTable;
