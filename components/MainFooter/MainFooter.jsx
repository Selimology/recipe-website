import { Layout, Col, Row } from 'antd';
import {} from './MainFooterElement';

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24}>
          <h1>Hi</h1>
        </Col>
      </Row>
    </Footer>
  );
};

export default MainFooter;
