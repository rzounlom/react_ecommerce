import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User".yellow,
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmint: true,
  },
  {
    name: "Jon Doe".yellow,
    email: "jon@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe".yellow,
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
