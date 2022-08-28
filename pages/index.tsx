import styled from 'styled-components';
import MainLayout from '../components/MainLayout/MainLayout';
import { initializeApollo, addApolloState } from '../lib/apolloClient';

const StyledHeader = styled.h1`
  ${({ theme }) => `
  font-size: 5rem;
  padding: ${theme['padding-large']};
`}
`;

const Index = () => {
  return (
    <MainLayout title="recipe">
      <StyledHeader>Hello World</StyledHeader>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // await apolloClient.query({
  //   query: ALL_POSTS_QUERY,
  //   variables: allPostsQueryVars,
  // });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Index;
