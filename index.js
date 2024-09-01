// repl: https://replit.com/@Salik47/AuthAPIWithoutDB

const express = require("express");
const auth = require("./routes/authRoutes");
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json()); //* used for parsing json data
app.use(express.static("access")); //* used to serve html files from public folder

// Routes
app.use("/api/v1", auth);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
