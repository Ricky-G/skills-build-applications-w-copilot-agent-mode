import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
      const url = `https://${codespaceName}-8000.app.github.dev/api/users/`;
      console.log(`Fetching users from: ${url}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log('Fetched users:', data);
      setUsers(data.results || data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-center">Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
