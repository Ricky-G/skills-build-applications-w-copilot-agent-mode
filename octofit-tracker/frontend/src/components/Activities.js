import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
      const url = `https://${codespaceName}-8000.app.github.dev/api/activities/`;
      console.log(`Fetching activities from: ${url}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched activities:', data);
      setActivities(data.results || data);
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1 className="text-center">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration (minutes)</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
