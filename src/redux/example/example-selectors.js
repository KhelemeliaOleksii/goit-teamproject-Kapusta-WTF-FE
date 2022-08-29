const getExamples = (state) => state.example.examples;
const getFilter = (state) => state.example.filter;

const exampleSelectors = {
  getExamples,
  getFilter
};

export default exampleSelectors;
