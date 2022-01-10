const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema} =require('graphql');
const axios=require('axios');

const searchQuery = {
 imdbID: {
    type: GraphQLString,
    description: "Movie ID",
  },
  Title: {
    type: GraphQLString,
    description: "Title of the movie",
  },
  Year: {
    type: GraphQLString,
    description: "Year of the movie",
  },
  Poster: {
    type: GraphQLString,
    description: "Movie poster",
  },

};

const SearchType = new GraphQLObjectType({
  name: "Search",
  fields: () => searchQuery,
});

const RootQuery=new GraphQLObjectType({
    name :'RootQuery',
    fields :{
        BySearch: {
      type: new GraphQLList(SearchType),
      args: {
        Title: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const result = await axios.get(
          `http://www.omdbapi.com/?apikey=5193f4e0&s=${args.Title}`
        );
        const { data } = result;
        return data.Search;
      },
    },

    }
})

module.exports=new GraphQLSchema({
    query:RootQuery
})