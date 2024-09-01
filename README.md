# Miva-Challenge


To set up and run your project on your local Ubuntu system, follow these steps:

### **1. Install Node.js and npm**

Node.js is required to run your server, and npm is the package manager to handle libraries.

Open a terminal and run:

```
sudo apt update
sudo apt install nodejs npm
```

Verify the installation:

```
node -v
npm -v
```

### **2. Install Project Dependencies**

Navigate to your project directory where `package.json` is located. This file lists all the libraries you need for your project.

Run the following command to install the required libraries:

```
npm install
```

### **3. Libraries to Install**

Here are the libraries that need to be installed:

- **Express**: A web framework for Node.js.
- **Bcrypt**: A library for hashing passwords.
- **Validator**: (Optional) If you need additional validation functionality.

Run the following command to install these libraries:

```
npm install express bcrypt
```

### **4. Directory Structure**

Ensure your project directory is structured as follows:

```
my-auth-project/
│
├── access/
│   ├── index.html
│   ├── signIn.html
│   └── signUp.html
│
├── routes/
│   └── authRoutes.js
│
├── utils/
│   └── validators.js
│
├── .gitignore
├── index.js
├── package-lock.json
└── package.json
```

### **5. Run Your Server**

Start your server by running:

```
node index.js
```

You should see the message:

```
Server is running on http://localhost:3000
```

### **6. Test Your Application**

1. Open your web browser and go to `http://localhost:3000`.
2. Test the Sign-Up and Sign-In functionality by filling out the forms on the `signUp.html` and `signIn.html` pages.

### **Summary of Commands**

Here’s a summary of the commands you need to run:

```
sudo apt update
sudo apt install nodejs npm
npm install express bcrypt
node index.js
```
