import mongoose from "mongoose";
import { database, databaseCopy } from "../../database.js";


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
const BudgetCopy = databaseCopy.model("Budget", budgetSchema);

export { Budget, BudgetCopy }


