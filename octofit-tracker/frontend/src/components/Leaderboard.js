import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
      const url = `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`;
      console.log(`Fetching leaderboard from: ${url}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched leaderboard:', data);
      setLeaderboard(data.results || data);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1 className="text-center">Leaderboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{entry.team}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
