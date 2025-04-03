import React, { useState, useEffect } from "react";
import "./Discount.css";

function Discount() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (count < 20) {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUsers(json))
        .catch((error) => console.error("Fetch Error:", error));
    }, 1000);
  }, [count]);

  function addNewUser() {
    const newUser = {
      name: name.trim(),
      email: email.trim(),
      website: website.trim(),
    };

    if (newUser.name && newUser.email && newUser.website) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setUsers([...users, data]))
        .catch((error) => console.error("Error:", error));

      setName("");
      setEmail("");
      setWebsite("");
    }
  }

  function deleteUser(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((error) => console.error("Error deleting user:", error));
    }
  }

  return (
    <div className="discount-container">
      <h3 className="discount-title">
        Your Discount Timing is Running – Buy Within 20 Seconds!
      </h3>
      <p className="count-container">{count} seconds</p>

      {count >= 20 && (
        <div className="discount-user">
          <p className="expire">Discount expired.</p>
          <h4 className="user-list">Users Who Claimed the Discount:</h4>
        </div>
      )}

      {count >= 20 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>WEBSITE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>
                    <button className="delete" onClick={() => deleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </td>
                <td>
                  <button className="update" onClick={addNewUser}>
                    Add User
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

export default Discount;
