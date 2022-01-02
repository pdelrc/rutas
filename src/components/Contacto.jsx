import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserTable from "./UserTables";
import UpdateUserForm from "./UpdateUserForm";
import AddUserForm from "./AddUserForm";

const Contacto = () => {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];

  // data base
  const [users, setUsers] = useState(usersData);

  //add user
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Edit User
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  // update user
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <>
              <h2>Edit user</h2>
              <UpdateUserForm
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            //setEditing={setEditing}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
