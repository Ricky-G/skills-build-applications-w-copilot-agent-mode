import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
      const url = `https://${codespaceName}-8000.app.github.dev/api/workouts/`;
      console.log(`Fetching workouts from: ${url}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched workouts:', data);
      setWorkouts(data.results || data);
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1 className="text-center">Workouts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.name}</td>
              <td>{workout.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
