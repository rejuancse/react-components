import { Fragment } from "react";

function Table({data, config, keyFn}) {
    const renderedConfig = config.map( (column) => {
        if( column.header ) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        } else {
            return <th key={column.label} className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-400 text-left">{column.label}</th>
        }
    });

    const renderedRows = data.map( (rowData) => {
        const renderedCells = config.map( (column) => {
            return <td key={column.label} className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{column.render(rowData)}</td>
        });

        return (
            <tr key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    });

    return (
        <div>
            <table className="border-collapse table-fixed w-full text-sm">
                <thead>
                    <tr>
                        {renderedConfig}
                    </tr>
                </thead>

                <tbody className="bg-white dark:bg-slate-800">
                    {renderedRows}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
