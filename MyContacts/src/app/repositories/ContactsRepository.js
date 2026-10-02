const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Gabriel Vitor",
    lastname: "Siqueira",
    email: "gabrielsiqueira@gmail.com",
    phone: 12351231123,
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: "Diogo",
    lastname: "Kaster",
    email: "diogokaster@gmail.com",
    phone: 12351231123,
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }
  findById(id) {
    return new Promise((resolve, reject) =>
      resolve(contacts.find((contact) => contact.id === id)),
    );
  }
}

module.exports = new ContactRepository();
