import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
      const url = `https://${codespaceName}-8000.app.github.dev/api/teams/`;
      console.log(`Fetching teams from: ${url}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched teams:', data);
      setTeams(data.results || data);
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1 className="text-center">Teams</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
