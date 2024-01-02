import Flexsearch from "flexsearch";
import { fetchProjects } from "../data.js";

const { Index } = Flexsearch;

const results = async (word) => {
  try {
    // Creating a new FlexSearch instance
    const index = new Index({
      charset: "latin:extra",
      preset: "match",
      tokenize: "strict",
      stemmer: {
        ed: "",
        ational: "ate",
        tional: "tion",
        enci: "ence",
        ing: "",
      },
      filter: [
        // array blacklist
        "in",
        "into",
        "is",
        "isn't",
        "it",
        "it's",
        "a",
      ],
      cache: false,
    });

    // Fetch projects data using async/await
    const data = await fetchProjects();

    // Index the data
    data.forEach((project) => {
      // Assuming project.domain is an array
      let domainString = "";
      project.domain.forEach((a) => {
        domainString += a + " ";
      });

      // Adding project details to the index
      index.add(project._id, project.title + " " + domainString + project.abstract);
    });

    // Perform searches using FlexSearch
    const answer = index.search(word);
    // Filter the results based on the search answer
    const ans = data.filter((project) => answer.includes(project._id));

    return ans;
  } catch (error) {
    console.error('Error fetching or processing data:', error);
    throw error; // Rethrow the error to propagate it further
  }
};

export default results;
