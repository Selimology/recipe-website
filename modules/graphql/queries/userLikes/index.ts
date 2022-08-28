import { gql } from '@apollo/client';

export const USER_LIKES = gql`
  query ($where: UserLikeWhereInput) {
    userLikes(where: $where) {
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
