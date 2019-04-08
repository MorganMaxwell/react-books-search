const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/savedbooks", { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});