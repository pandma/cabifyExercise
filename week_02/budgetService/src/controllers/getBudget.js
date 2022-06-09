import getBudget from "../clients/getBudget.js";

export default async (req, res) => {
    const amount = await getBudget();

    res.json(amount);
}