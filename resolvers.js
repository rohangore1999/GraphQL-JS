export const resolvers = {
  Query: {
    authors: () => {
      return [{ id: 1, name: "Rohan Gore" }];
    },

    books: () => {
      return [{ id: 1, title: "Title 1", publishedYear: 2024 }];
    },
  },
};
