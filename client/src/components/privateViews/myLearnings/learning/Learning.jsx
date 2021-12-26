import React from 'react'
import { Steps, Card } from 'antd';

const { Step } = Steps;

function Learning() {
    return (
        <div>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: "80%", margin: "20px auto" }}>
                <Steps direction="vertical" size="small" current={1} percent={60}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </Card>
        </div>
    )
}

export default Learning;