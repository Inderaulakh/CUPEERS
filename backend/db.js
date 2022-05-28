const mongoose = require("mongoose");

const url = "mongodb+srv://Inder:8437431180@cluster0.tk4il.mongodb.net/Final-project-quora?retryWrites=true&w=majority"
  
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
