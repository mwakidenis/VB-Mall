import React from 'react';
import styled from 'styled-components';

// Define styled components with reduced spacing
const TrackingWrapper = styled.div`
  width: 100%;
  padding: 10px; /* Reduced padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  color: ${({ completed }) => (completed ? '#4caf50' : '#999')};
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ completed }) => (completed ? '#4caf50' : '#ddd')};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const Line = styled.div`
  flex: 1;
  height: 4px;
  background-color: ${({ completed }) => (completed ? '#4caf50' : '#ddd')};
  margin: 0 3px; /* Reduced margin */
`;

const OrderTrackingBar = ({ currentStep }) => {
  const steps = [
    "Order Processed",
    "Order Shipped",
    "Order En Route",
    "Order Arrived",
  ];

  return (
    <TrackingWrapper>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Step completed={index <= currentStep}>
            <Circle completed={index <= currentStep}>{index + 1}</Circle>
            <div>{step}</div>
          </Step>
          {index < steps.length - 1 && (
            <Line completed={index < currentStep} />
          )}
        </React.Fragment>
      ))}
    </TrackingWrapper>
  );
};

export default OrderTrackingBar;
