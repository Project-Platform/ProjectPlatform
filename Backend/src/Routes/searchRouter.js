import express from "express";
import results from "../utils/search.js";
const searchRouter = express.Router();
searchRouter.get('/:search', async (req, res) => {
    try {
        const word = req.params.search;
        // Check if the 'search' parameter is present and is not empty
        if (!word || typeof word !== 'string') {
            return res.status(400).json({ error: "Invalid search parameter" });
        }
 
        const projects=await results(word);
        // Respond with the search result
        res.status(200).json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default searchRouter;
