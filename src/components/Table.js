import { Fragment, useState } from 'react';

const ITEMS_PER_PAGE = 5;

function Table({ data, config, keyFn }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = data.filter( (rowData) =>
        rowData.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>;
    });

    const renderedRows = paginatedData.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <div className="table-wrap">
            <div className="table-search">
                <input
                    type="text"
                    className="search"
                    name="table-search"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>

            <table className="table-auto border-spacing-2 border-collapse table-fixed w-full text-sm">
                <thead>
                    <tr className="border-b-2">{renderedHeaders}</tr>
                </thead>
                <tbody className="dark:bg-slate-800">{renderedRows}</tbody>
            </table>

            {totalPages > 1 && (
                <div className="paginations">
                    <button
                        className="page-btn"
                        onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                        disabled={currentPage === 1}
                        >
                        Prev
                    </button>

                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`page-btn ${pageNumber === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(pageNumber)}
                            >
                            {pageNumber}
                        </button>
                    ))}

                    <button
                        className="page-btn"
                        onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Table;
