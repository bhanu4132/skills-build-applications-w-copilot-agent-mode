import React, { useEffect, useState } from 'react';

function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://turbo-space-couscous-xjr6rgj4xgqc6gr7-8000.app.github.dev/api/teams')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <div>
            <h1 className="text-center display-4">Teams</h1>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Members</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => (
                        <tr key={team.id}>
                            <td>{team.name}</td>
                            <td>{team.members.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Teams;
