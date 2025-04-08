import React, { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://turbo-space-couscous-xjr6rgj4xgqc6gr7-8000.app.github.dev/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1 className="text-center">Users</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
