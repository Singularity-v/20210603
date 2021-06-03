import { useContext } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header" 
import ProductList from "../components/ProductList" 
import AppFooter from "../components/Footer" 
import { StoreContext } from "../store"


const {Header,Content,Footer} = Layout;

function Home(){
    const { title } = useContext(StoreContext);
    return(
        <div>
        <Layout className=" main-layout">
            <Header className="layout-header">
                <AppHeader title={title}/>
            </Header>
            <Content classNmae="layout-content">
                <ProductList />
            </Content>
        </Layout> 
        <Layout>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
        </Layout>
        </div>
   

    );
}
export default Home;