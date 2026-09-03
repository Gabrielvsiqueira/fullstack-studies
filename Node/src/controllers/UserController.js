const users = require("../mocks/user");

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    response.send(200, sortedUsers);
  },
  getUserById(request, response) {
    const { id } = request.params;
    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return response.send(400, { error: "User not found" });
    }

    response.send(200, user);
  },
  createUser(request, response) {
    const { body } = request;

    const lastUserId = users[users.length - 1].id;
    const newUser = {
      id: lastUserId + 1,
      name: body.name,
      lastname: body.lastname,
    };
    users.push(newUser);
    response.send(201, newUser);
  },
  updateUser(request, response) {
    const id = Number(request.params.id);
    const { name, lastname } = request.body;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      return response.send(400, { error: "User not found" });
    }

    const updatedUser = {
      ...users[userIndex],
      name,
      lastname,
    };

    users[userIndex] = updatedUser;

    response.send(200, updatedUser);
  },
  deleteUser(request, response) {
    const id = Number(request.params.id);

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      return response.send(400, { error: "User not found" });
    }

    users.splice(userIndex, 1);

    response.send(204, { deleted: true });
  },
};
