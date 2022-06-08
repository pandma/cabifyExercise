import mongoose from "mongoose";
import database from "../database.js";
import databaseCopy from "../databaseCopy.js";

const budgetSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Budget"
    },
    amount: {
        type: Number,
        default: 10
    }

});

const Budget = database.model("Budget", budgetSchema);
const Budgetcopy = databaseCopy.model("Budgetcopy", budgetSchema)
export { Budget, Budgetcopy }


