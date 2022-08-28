import { gql } from '@apollo/client';

export const DELETE_RECIPE = gql`
  mutation ($where: RecipeWhereUniqueInput!) {
    deleteRecipe(where: $where) {
      id
    }
  }
`;
