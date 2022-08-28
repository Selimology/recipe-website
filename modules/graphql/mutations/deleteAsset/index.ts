import { gql } from '@apollo/client';

export const DELETE_ASSET = gql`
  mutation ($where: AssetWhereUniqueInput!) {
    deleteAsset(where: $where) {
      id
    }
  }
`;
