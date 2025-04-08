import React, { useEffect, useState } from 'react';

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch('https://turbo-space-couscous-xjr6rgj4xgqc6gr7-8000.app.github.dev/api/leaderboard')
            .then(response => response.json())
            .then(data => setLeaderboard(data));
    }, []);

    return (
        <div>
            <h1 className="text-center">Leaderboard</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.user}</td>
                            <td>{entry.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
