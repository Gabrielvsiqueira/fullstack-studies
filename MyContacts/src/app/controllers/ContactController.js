const contactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await contactsRepository.findAll();
    response.json(contacts);
  }
  show() {
    //obter Um id
  }
  store() {
    // Criar novo registro
  }
  update() {
    //Editar um registro
  }
  delete() {
    //Deletar um registro
  }
}

module.exports = new ContactController();
