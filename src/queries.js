import { gql } from "@apollo/client";

export const MATRIX = gql`
  query Query {
    matrix {
      Title
      Year
      imdbID
      Type
      Poster
    }
  }
`;

export const MATRIXRELOADED = gql`
  query Query {
    matrixReloaded {
      Title
      Type
      Poster
      imdbID
      Year
    }
  }
`;

export const MATRIXREVOLUTIONS = gql`
  query Query {
    matrixRevolutions {
      Title
      Year
      imdbID
      Type
      Poster
    }
  }
`;
