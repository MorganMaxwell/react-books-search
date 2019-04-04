const express = require("express");
const routes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.use("/api", routes);


app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
});