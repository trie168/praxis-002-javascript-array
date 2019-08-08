const express = require("express"); // Import express
const app = express();
const array_lib = require("./array"); // Import dari array.js
const object_lib = require("./object"); // Import dari object.js
const array_routes = require("./routes"); // Import dari routes.js
const array_sort = require("./lib/task1");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // home
    return res.send(`Welcome to the jungle`);
});

app.get("/example-1", (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"];
    let manipulation = array_lib(data);

    return res.send(manipulation);
});

app.get("/example-2", (req, res) => {
    let data = {
        firstname: "Tri",
        lastname: "Kusuma",
        email: "trikusuma@mail.com",
        gender: "men"
    };
    let result = object_lib.manipulate(data);

    return res.send(result);
});

app.get("/example-3", (req, res) => {
    let input = ["Black"];
    let data = ["Red", "Blue", "Yellow", "Green"];
    console.log("before ", data);

    let result = object_lib.merge((data = data), (input = input));
    console.log("after ", result);

    return res.send(result);
});

app.get("/example-4", (req, res) => {
    let empty_data = [];
    console.log("before ", empty_data);

    let color = "Red";
    object_lib.add(empty_data, color);
    console.log("after ", empty_data);

    return res.send(empty_data);
});

app.get("/task-1", (req, res) => {
    let alpha = ["Q", "W", "E", "A", "S", "D", "Z", "C"];
    console.log("Before", alpha);

    let result = array_sort.ascending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

app.get("/task-2", (req, res) => {
    let alpha = ["Q", "W", "E", "A", "S", "D", "Z", "C"];
    console.log("Before", alpha);

    let result = array_sort.descending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

app.use("/array", array_routes);

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`);
});
