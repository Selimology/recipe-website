import { gql } from '@apollo/client';

export const CREATE_RECIPE = gql`
  mutation ($data: RecipeCreateInput!) {
    createRecipe(data: $data) {
      id
      title
      content
      description
      ingredients
      userLikes {
        id
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
