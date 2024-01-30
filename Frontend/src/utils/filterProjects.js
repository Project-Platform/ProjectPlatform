import Flexsearch from "flexsearch";
import { searchResult } from "../services/searchData";

const { Document } = Flexsearch;

const results = async (word, tags) => {
  try {
    // Creating a new FlexSearch instance
    const index = new Document({
      document: {
        id: "id",
        tag: "tag",
        index: [
          {
            field: "domain",
            tokenize: "forward",
            optimize: true,
          },
          {
            field: "abstract",
            tokenize: "forward",
            optimize: true,
          },
        ],
      },
    });

    // Fetch projects data using async/await
    const data = await searchResult(word);

    // Index the data
    data.forEach((project) => {
      // Adding project details to the index
      index.add({
        id: project._id,
        tag: project.domain, // Assuming domain is an array of words
        abstract: project.abstract,
        domain: project.domain,
      });
    });

    // Perform searches using FlexSearch
    let ans = [];
    let projectNo=0;

    const searchDomain = index.search({
      field: "domain",
      query: tags,
    });

    if (searchDomain.length > 0) {
      projectNo=1;
      ans = data.filter((project) => searchDomain[0]["result"].includes(project._id));
    } else {

      const searchAbstract = index.search({
        index: "abstract",
        tag: tags,
        bool: "and",
      });

      if (searchAbstract.length > 0) {
        ans = data.filter((project) => searchAbstract[0]["result"].includes(project._id));
      } else {
        if(tags.length ==0 ){
          projectNo=1;
        }
        ans = data;
      }
    }
    return {ans,projectNo};
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    throw error; // Rethrow the error to propagate it further
  }
};

export default results;
