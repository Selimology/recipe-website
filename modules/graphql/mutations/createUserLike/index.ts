import { gql } from '@apollo/client';

export const CREATE_USER_LIKE = gql`
  mutation ($data: UserLikeCreateInput!) {
    createUserLike(data: $data) {
      id
      user
      recipe {
        id
      }
    }
  }
`;
