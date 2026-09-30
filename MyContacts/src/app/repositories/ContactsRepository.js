const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Gabriel Vitor",
    lastname: "Siqueira",
    phone: 12351231123,
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
