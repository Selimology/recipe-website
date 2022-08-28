import { gql } from '@apollo/client';

export const UPDATE_RECIPE = gql`
  mutation ($data: RecipeUpdateInput!, $where: RecipeWhereUniqueInput!) {
    updateRecipe(data: $data, where: $where) {
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
