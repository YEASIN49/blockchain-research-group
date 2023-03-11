import { Card, Col, Row, Typography } from "antd";
// import { Button, ConfigProvider } from 'antd';
import React from "react";
import heroImg from "../Assets/hero.png"
import RecentPublication from "../Components/Common/RecentPublication";
import UserRegistration from "../Components/Layout/UserRegistration";


class Home extends React.PureComponent {

    render(){

        return(
            <>
                <Card style={ heroContainer }>
                    <Row>
                        <Col span={ 12 } xs={ 24 } md={ 24 } lg={ 14 } style={ imageColStyle }>
                            <div style={ heroTextContainer }>
                                
                                <Typography.Title>A Research Group for Blockchain and Cyber Security Enthusiasts</Typography.Title>
                                <img src={ heroImg } style={ imageStyle } height={ 250 } width={ 250 } alt={ 'hero' }/>
                            </div>
                        </Col>
                        <Col span={ 12 } xs={ 24 } md={ 24 } lg={ 10 } style={ formColStyle }>
                            <UserRegistration />
                        </Col>
                    </Row>

                </Card>
                <Row>
                    <Col span={ 12 } xs={ 24 } md={ 24 } lg={ 16 } style={ recentArticleContainer }>
                        <RecentPublication />
                    </Col>
                </Row>
            </>
        )
    }
}

const heroTextContainer = { 
    margin: '25px', 
    color: 'rgb(52 49 64 / 88%)'  
}

const heroContainer = {
    // backgroundColor: 'rgba(0, 21, 41, 10%)', 
    backgroundColor: 'rgba(199, 186, 255, 20%)',
    marginBottom: '20px'
    // backgroundColor: 'rgba(104 83 195 / 20%)',
    // backgroundColor: '#FAFCFE' 
}

const formColStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '350px',
    // border: '1px solid red',
    // backgroundColor: '#ffffff'
}
const imageColStyle = {
    display: "flex", 
    alignItems: "center"
}
const imageStyle = {
    display: "block",
    margin: '0 auto'
}

const recentArticleContainer = {
    // backgroundColor: 'green'
}

export default Home