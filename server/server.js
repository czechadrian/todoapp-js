"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const _ = require("lodash");
const pause = require("connect-pause");
const url = require("url");
const tasks = require("./mocks/tasks.json");

const app = express();
app.use(pause(200));
app.use(cors());
app.use(bodyParser.json());

const webApi = "/todoapp";

app.get(`${webApi}/tasks`, (req, res) => {
  return res.status(200).json(tasks);
});

app.post(`${webApi}/tasks`, (req, res) => {
  console.log(req.body);
  const body = req.body.name;
  const locationHeaderValue = url.format({
    protocol: req.protocol,
    host: req.get("host"),
    pathname: req.originalUrl,
  });
  if (!body) {
    return res
      .status(400)
      .json({ details: "Something in POST /tasks goes wrong" });
  }
  tasks.tasks.push({ type: "todo", name: body });
  setTimeout(() => res.set("Location", locationHeaderValue).send(), 1000);
});

app.listen(4000);
