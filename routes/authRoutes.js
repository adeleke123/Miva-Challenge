const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {
  validateName,
  validateEmail,
  validatePassword,
} = require("../utils/validators");

let users = {}; // This will be our database

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = users.hasOwnProperty(email);

    if (userExists) {
      return res.status(403).send("User already exists");
    }

    if (!validateName(name)) {
      return res
        .status(400)
        .send(
          "Error: Invalid user name: name must be longer than two characters and must not include any numbers or special characters"
        );
    }

    if (!validateEmail(email)) {
      return res.status(400).send("Error: Invalid email");
    }

    if (!validatePassword(password)) {
      return res
        .status(400)
        .send(
          "Invalid password: password must be at least 8 characters long and must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users[email] = {
      name: name,
      password: hashedPassword,
    };

    console.log(`New user signed up: Name: ${name}, Email: ${email}`); // Log the new user signup details

    return res
      .status(201)
      .send(
        `Welcome to Devsnest ${users[email].name}. Thank you for signing up`
      );
  } catch (err) {
    console.log(err);
    return res.status(500).send(`Error: ${err.message}`);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email.length === 0) {
      return res.status(400).send("Error: Please enter your email");
    }
    if (password.length === 0) {
      return res.status(400).send("Error: Please enter your password");
    }

    const userExists = users.hasOwnProperty(email);

    if (!userExists) {
      console.log(`Sign-in attempt failed: User not found. Email: ${email}`); // Log failed sign-in attempt
      return res.status(404).send("Error: User not found");
    }

    const passwordMatched = await bcrypt.compare(
      password,
      users[email].password
    );

    if (!passwordMatched) {
      console.log(`Sign-in attempt failed: Incorrect password. Email: ${email}`); // Log failed sign-in attempt
      return res.status(403).send("Error: Incorrect password");
    }

    console.log(`User signed in successfully: Name: ${users[email].name}, Email: ${email}`); // Log successful sign-in

    return res
      .status(200)
      .send(`Welcome to Devsnest ${users[email].name}. You are logged in`);
  } catch (err) {
    console.log(err);
    return res.status(500).send(`Error: ${err.message}`);
  }
});

module.exports = router;
