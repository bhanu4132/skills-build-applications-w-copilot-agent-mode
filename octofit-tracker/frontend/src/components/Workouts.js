import React, { useEffect, useState } from 'react';

function Workouts() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://turbo-space-couscous-xjr6rgj4xgqc6gr7-8000.app.github.dev/api/activities')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    return (
        <div>
            <h1 className="text-center display-4">Workouts</h1>
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {workouts.map(workout => (
                        <tr key={workout.id}>
                            <td>{workout.name}</td>
                            <td>{workout.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Workouts;
