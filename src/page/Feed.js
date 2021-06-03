import { Layout } from "antd";

import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import Feeder from "../components/Feeder.js";

const { Header, Content, Footer } = Layout;

function Feed() {
  
  return (
    <Layout className="main-layout">
      <Layout className="main-area">
        <Header className="layout-header">
          <AppHeader title="Fee JSON Page" />
        </Header>
        <Content className="main-content">
          <Feeder  />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
    
  );
}

export default Feed;