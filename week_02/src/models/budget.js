import mongoose from "mongoose";

import database from "../database.js";

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

export default database.model("Budget", budgetSchema);
