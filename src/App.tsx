import React from 'react';
import logo from './assets/logo.svg';
import style from './App.module.css'
import { Header, Footer, Carousel} from './components'
import SideMenu from "./components/sideMenu/SideMenu";
import ProductCollection from './components/productCollection/ProductCollection'
import Cooperations from "./components/cooperations/Cooperations";
// import Header from "./components/header/Header";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage1 from "./assets/images/sider_2019_12-09.png";
import sideImage2 from "./assets/images/sider_2019_02-04.png";
import sideImage3 from "./assets/images/sider_2019_02-04-2.png";

function App() {
  return (
    <div className={style.App}>
      <Header></Header>
      {/* 页面主题内容 */}
      <div className={style["page-content"]}>
        {/* 内容的头部 */}
        <Row style={{ margin: 20 }}>
          <Col span={6}>
            <SideMenu></SideMenu>
          </Col>
          <Col span={18}>
            <Carousel></Carousel>
          </Col>
        </Row>
        <ProductCollection
          title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
          sideImage={sideImage1}
          products={productList1}
        ></ProductCollection>

        <ProductCollection
          title={<Typography.Title level={3} type="danger">新品上市</Typography.Title>}
          sideImage={sideImage2}
          products={productList2}
        ></ProductCollection>

        <ProductCollection
          title={<Typography.Title level={3} type="success">国内游推荐</Typography.Title>}
          sideImage={sideImage3}
          products={productList3}
        ></ProductCollection>

        {/* 合作企业 */}
        <Cooperations />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
