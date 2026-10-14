import { useEffect, useState } from 'react';
import SortableTable from '../components/SortableTable';

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to load users');
    return res.json();
}

function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers()
            .then((data) => setUsers(data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    const config = [
        {
            label: 'Name',
            render: (user) => user.name,
            sortValue: (user) => user.name,
        },
        {
            label: 'Email',
            render: (user) => user.email,
            sortValue: (user) => user.email,
        },
        {
            label: 'Phone',
            render: (user) => user.phone,
        },
        {
            label: 'Website',
            render: (user) => user.website,
        },
        {
            label: 'Company',
            render: (user) => user.company.name,
        },
    ];

    const keyFn = (user) => user.id;

    if (error) {
        return <div className="table-wrap">Error: {error}</div>;
    }

    return (
        <div className="table-wrap">
            {isLoading ? (
                <p>Loading users...</p>
            ) : (
                <SortableTable data={users} config={config} keyFn={keyFn} />
            )}
        </div>
    );
}

export default UserList;
