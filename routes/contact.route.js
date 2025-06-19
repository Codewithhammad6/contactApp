import express from "express";
import {
  addContact,
  addContactPage,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
  updateContactPage,
} from "../controller/contact.controller.js";

const router = express.Router();

// Routes
router.get("/", getContacts);
router.get("/show-contact/:id", getContact);
router.get("/add-contact", addContactPage);
router.post("/add-contact", addContact);
router.get("/update-contact/:id", updateContactPage);
router.post("/update-contact/:id", updateContact);
router.get("/delete-contact/:id", deleteContact);

export default router;
