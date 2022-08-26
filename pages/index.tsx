import styled from 'styled-components';
import MainLayout from '../components/MainLayout/MainLayout';

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

export default Index;
