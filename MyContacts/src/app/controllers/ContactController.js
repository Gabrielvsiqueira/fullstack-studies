const contactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    const contacts = await contactsRepository.findAll();
    response.json(contacts);
  }
  async show(request, response) {
    const { id } = request.params;
    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }
    response.json(contact);
  }
  store() {
    // Criar novo registro
  }
  update() {
    //Editar um registro
  }
  async delete(request, response) {
    const { id } = request.params;
    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "User not found" });
    }
    await contactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
