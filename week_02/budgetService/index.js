import express from "express";
import bodyParser from "body-parser";
import addBudget from "./src/controllers/addBudget.js";
import getBudget from "./src/controllers/getBudget.js";
import { ValidationError, Validator } from "express-json-validator-middleware";
import { budgetQueue, messageQueue } from "./src/queue/budgetQueue.js";
const app = express();

const validator = new Validator({ allErrors: true });
const { validate } = validator;


const budgetSchema = {
    type: "object",
    required: ["amount"],
    properties: {
        amount: {
            type: "number",
        }
    },
};

app.get("/credit", getBudget);

app.post("/credit", bodyParser.json(), validate({ body: budgetSchema }), addBudget);


app.use((err, req, res, _next) => {
    console.log(res.body);
    if (err instanceof ValidationError) {
        res.sendStatus(400);
    } else {
        res.sendStatus(500);
    }
});

const port = 9003;
app.listen(port, () => {
    console.log("App started on PORT: ", port);
});
