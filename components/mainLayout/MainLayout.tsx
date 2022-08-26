import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import { GlobalStyles } from '../../utils/globalStyles';
import { Layout } from 'antd';
import Head from 'next/head';
import MainFooter from '../MainFooter/MainFooter';
import MainNavigation from '../MainNavigation/MainNavbar';
import {} from './MainLayoutElement';

const { Content } = Layout;

const MainHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>;
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
      <meta name="description" content="This is a description" />;
      <meta name="author" content="Kamil Ertekin" />;
      <meta name="keywords" content="next,react,portfolio,typescript" />;
      <meta name="robots" content="index,follow" />;
      <meta property="og:title" content={title} />;
      <meta property="og:description" content="This is a description" />;
      {/* 
      TODO:
    - add favicon 
    - update og:url to netlify url 
    - update manifest  */}
      <meta property="og:url" content="#" />;
      <meta property="og:image" content="#" />;
      <meta charSet="utf-8" />;
      <link rel="icon" sizes="180x180" href="#" />;
      <link rel="icon" type="image/png" sizes="32x32" href="#" />;
      <link rel="icon" type="image/png" sizes="16x16" href="#" />;
      <link rel="manifest" href="#" />;
    </Head>
  );
};

type Props = {
  children: React.ReactNode;
  title?: string;
};

const MainLayout = ({ children, title }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MainHead title={title} />
      <GlobalStyles />
      <Layout>
        <MainNavigation />
        <Content>{children}</Content>
        <MainFooter />
      </Layout>
    </ThemeProvider>
  );
};

export default MainLayout;
