import styled from 'styled-components';
import MainLayout from '../components/mainLayout/MainLayout';

const StyledHeader = styled.h1`
  ${({ theme }) => `
  font-size: 5rem;
  padding: ${theme['padding-large']};
`}
`;

const Index = () => {
  return (
    <MainLayout>
      <StyledHeader>Hello World</StyledHeader>
    </MainLayout>
  );
};

export default Index;
