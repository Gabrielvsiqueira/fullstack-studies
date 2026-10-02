const { uuid } = require("uuidv4");

let contacts = [
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
  findByEmail(email) {
    return new Promise((resolve, reject) =>
      resolve(contacts.find((contact) => contact.email === email)),
    );
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
  create({ name, lastname, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const newContact = {
        id: uuid(),
        name,
        lastname,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
  update(id, { name, lastname, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const updatedContact = {
        id,
        name,
        lastname,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact,
      );
      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
