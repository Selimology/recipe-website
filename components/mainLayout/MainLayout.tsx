import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import { GlobalStyles } from '../../utils/globalStyles';

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
