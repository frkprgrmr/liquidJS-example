import express from "express";
import { Liquid } from "liquidjs";
import { makeData } from "./makeData";

const app = express();
const engine = new Liquid();

app.engine("liquid", engine.express()); // register liquid engine
app.set("views", __dirname + "/views");
app.set("view engine", "liquid");

const listObject = makeData(10);
const objectData = listObject[0];
const arrayData = listObject.map((val) => val.name);
app.get("/", (req, res) => {
  res.render("layout", {
    listObject,
    objectData,
    arrayData,
    title: "Welcome to liquidjs!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
