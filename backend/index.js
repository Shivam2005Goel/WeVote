const mongoose = require("mongoose");
const express = require('express');
var cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());
const port = 5000


const mongoURI = "mongodb://127.0.0.1:27017/Online_Voting_System";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/api/auth/voter',require('./routes/voter/auth'));
app.use('/api/auth/candidate',require('./routes/candidate/auth'));
app.use('/api/auth/admin',require('./routes/admin/auth'));

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
})




