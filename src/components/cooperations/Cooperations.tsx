import { Row, Col,Divider ,Typography} from 'antd';
import React, { FC } from 'react'
import pic1 from "../../assets/images/facebook-807588_640.png";
import pic2 from "../../assets/images/follow-826033_640.png";
import pic3 from "../../assets/images/icon-720944_640.png";
import pic4 from "../../assets/images/microsoft-80658_640.png";
import style from './Cooperations.module.css'

const Cooperations: FC = () => {
  return (
    <div className={style.content}>
      <Divider orientation="left">
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>

        <Col span={6}>
          <img src={pic1} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
        <Col span={6}>
          <img src={pic2} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
        <Col span={6}>
          <img src={pic3} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
        <Col span={6}>
          <img src={pic4} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
      </Row>
    </div>

  )
}

export default Cooperations
