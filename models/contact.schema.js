import mongoose from "mongoose";
import mongoosePage from "mongoose-paginate-v2";

const contactSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { collection: "contacts" }
);

contactSchema.plugin(mongoosePage);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
