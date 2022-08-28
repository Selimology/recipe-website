import { gql } from '@apollo/client';

export const USER_LIKE = gql`
  query ($where: UserLikeWhereUniqueInput!) {
    userLike(where: $where) {
      id
      user
      recipe {
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
  }
`;
