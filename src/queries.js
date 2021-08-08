import { gql } from "@apollo/client";

export const MEDIA = gql`
  query Query {
    matrix {
      Title
      Year
      imdbID
      Type
      Poster
    }
    matrixReloaded {
      Title
      Type
      Poster
      imdbID
      Year
    }
    matrixRevolutions {
      Title
      Year
      imdbID
      Type
      Poster
    }
  }
`;
