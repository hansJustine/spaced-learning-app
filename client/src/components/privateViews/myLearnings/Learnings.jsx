import React from 'react';
import Learning from './learning/Learning';
import { Row, Col, Button } from 'antd';

function Learnings() {
    return (
        <>
            <Row className="mylearnings-row" justify="center">
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}><Learning /></Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}><Learning /></Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}><Learning /></Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}><Learning /></Col>
            </Row>
        </>
    )
}

export default Learnings
