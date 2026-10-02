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
  async store(request, response) {
    const { name, lastname, email, phone, category_id } = request.body;

    const contactExists = await contactsRepository.findByEmail(email);
    if (contactExists) {
      return response
        .status(400)
        .json({ error: "This e-mail has already been taken" });
    }
    const contact = await contactsRepository.create({
      name,
      lastname,
      email,
      phone,
      category_id,
    });
    response.json(contact);
  }
  async update(request, response) {
    const { id } = request.params;
    const { name, lastname, email, phone, category_id } = request.body;

    const contactExists = await contactsRepository.findById(id);
    if (!contactExists) {
      return response.status(404).json({ error: "User not found" });
    }

    const contactByEmail = await contactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(400)
        .json({ error: "This e-mail has already been taken" });
    }

    const contact = await contactsRepository.update(id, {
      name,
      lastname,
      email,
      phone,
      category_id,
    });
    response.json(contact);
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
