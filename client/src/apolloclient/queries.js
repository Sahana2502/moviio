import gql from "graphql-tag";

export const RETRIEVE_SEARCH = gql`
  query retrieveSearch($singleTitle: String) {
    BySearch(Title: $singleTitle) {
      Title
      Year
      Poster
    }
  }
`;
