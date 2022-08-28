import { gql } from '@apollo/client';

export const RECIPE = gql`
  query ($where: RecipeWhereUniqueInput!) {
    recipe(where: $where) {
      id
      title
      content
      description
      ingredients
      userLikes {
        id
        user
      }
      owner
      image {
        id
        fileName
        height
        width
        size
        handle
      }
    }
  }
`;
