const initialState = {
  posts: [
    {
      title: "test",
      description: "description",
      postedBy: "Devansh",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "test1",
      description: "description2",
      postedBy: "Devansh",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "test1",
      description: "description3",
      postedBy: "Devansh",
      category: {
        categoryName: "coding",
      },
    },
  ],
};
  
  export default function (state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  