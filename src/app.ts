import express from "express";
import { Liquid } from "liquidjs";

const app = express();
const engine = new Liquid();

app.get("/", async (req, res) => {
  try {
    const template = "Hello, {{ name }}!";
    const context = { name: "World" };

    const rendered = await engine.parseAndRender(template, context);

    res.send(rendered);
  } catch (error) {
    console.error("Error rendering Liquid template:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
