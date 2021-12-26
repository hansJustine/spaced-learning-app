import React from 'react';
import { useParams } from 'react-router-dom';
import { Steps } from 'antd';

const { Step } = Steps;

function ShowLearning() {
    const params = useParams();
    return (
        <div>
            ID: {params.id}
            <Steps current={1} percent={60}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </div>
    )
}

export default ShowLearning
