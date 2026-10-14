import { useMemo, useState } from 'react';
import Dropdown from '../components/Dropdown';
import Panel from '../components/Panel';

const initialUsers = [
    {
        id: 1,
        name: 'John Deo',
        email: 'john@gmail.com',
        role: 'Admin'
    },
    {
        id: 2,
        name: 'Sara Romanio',
        email: 'sara@gmail.com',
        role: 'Viewer'
    },
    {
        id: 3,
        name: 'Alex',
        email: 'alex@gmail.com',
        role: 'Editor'
    }
]

function UserManagement() {
    const [users, setUsers] = useState(initialUsers);
    const [search, setSearch] = useState('');
    const [roleFilter, setRoleFilter] = useState('All');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Viewer');
    const [error, setError] = useState('');

    const filteredUsers = useMemo(() => {
        const query = search.trim().toLowerCase();
        return users.filter( (user) => {
            const matchesSearch = user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
            const matchesRole = roleFilter === 'All' || user.role === roleFilter;

            return matchesSearch && matchesRole;
        })
    }, [users, search, roleFilter]);

    function handleDeleteUser(id) {
        setUsers((current) =>
            current.filter( (user) => user.id !== id )
        );
    }

    function handleAddUser(event) {
        event.preventDefault();
        setError('');

        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();

        if( !cleanName || !cleanEmail ) {
            setError('Please enter both name and email.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (users.some((user) => user.email.toLowerCase() === cleanEmail)) {
            setError("A user with this email already exists.");
            return;
        }

        const NextId = Math.max(0, ...users.map( (user) => user.id )) + 1;
        setUsers((current) => [
            ...current, {
                id: NextId,
                name: cleanName,
                email: cleanEmail,
                role
            }
        ])

        setName('');
        setEmail('');
        setRole('Viewer')
    }

      const options = [
        { label: 'All', value: 'All' },
        { label: 'Admin', value: 'Admin' },
        { label: 'Editor', value: 'Editor' },
        { label: 'Viewer', value: 'Viewer' },
    ];

    return (
        <main className="container">
            <header className="page-header">
                <div>
                    <p className="eyebrow">Frontend View</p>
                    <h1>User Management</h1>
                    <p className="muted">Practice React state, forms, search, filters and list rendering.</p>
                </div>

                <div className="state-card">
                    <span className="muted">Total users</span>
                    <strong>{users.length}</strong>
                </div>
            </header>

            <Panel className="mb-3">
                <h2>Add a user</h2>

                <form onSubmit={handleAddUser} className="user-form">
                    <label>
                        Full name
                        <input
                            type="text"
                            placeholder="e.g. John Deo"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            placeholder="e.g. email@gmail"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            />
                    </label>
                    <label>
                        Role
                        <select value={role}
                            onChange={(event) => setRole(event.target.value)}>
                            <option>Admin</option>
                            <option>Editor</option>
                            <option>Viewer</option>
                        </select>
                    </label>
                    <button type="submit">Add User</button>
                </form>

                {error && <p className="error" role="alert">{error}</p>}
            </Panel>

            <Panel>
                <div className="list-heading">
                    <div>
                        <h2>Users</h2>
                        <p className="muted">{filteredUsers.length} result(s)</p>
                    </div>

                    <div className="filters">
                        <input
                            type="text"
                            placeholder="Search name or email"
                            aria-label="Search users"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <Dropdown
                            options={options}
                            value={options.find((option) => option.value === roleFilter)}
                            onChange={(option) => setRoleFilter(option.value)}
                        />
                    </div>
                </div>

                {filteredUsers.length === 0 ? (
                    <p className="empty">
                        No users found!
                    </p>
                ) : (
                    <div className="table-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span
                                                className={`role role-${user.role.toLowerCase()}`}
                                                >
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                className="delete-button"
                                                type="button"
                                                onClick={() => handleDeleteUser(user.id)} >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </Panel>
        </main>
    )
}

export default UserManagement;
