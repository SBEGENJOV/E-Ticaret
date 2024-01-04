const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.js");
//Yeni bir İletişim oluşturma(Create)
router.post("/", async (req, res) => {
  try {
    const newConact = new Contact(req.body);
    await newConact.save();
    res.status(201).json(newConact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
// Tüm konuları getirme (Read- All)
router.get("/", async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
//Belirli konuyu getirme (Read- single)
router.get("/:contactId", async (req, res) => {
  try {
    const contactId = req.params.contactId;
    try {
      const contact = await Contact.findById(contactId);
      res.status(200).json(contact);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Category not fount." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
//Konuyu güncelleme(Update)
router.put("/:contactId", async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const updates = req.body;

    const existingContact = await Contact.findById(contactId);

    if (!existingContact) {
      return res.status(404).json({ error: "Category not found." });
    }

    const updatedContact = await Contact.findByIdAndUpdate(contactId, updates, {
      new: true,
    });
    res.status(200).json(updatedContact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
//Kategori Silme(Delete)
router.delete("/:contactId", async (req, res) => {
  try {
    const categoryId = req.params.contactId;
    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.status(200).json(deletedContact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
