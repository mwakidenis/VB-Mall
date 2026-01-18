import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaLightbulb } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  left: 15px;
  bottom: 23px;
  z-index: 1000;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`;

const Tooltip = styled.div`
  background-color: black;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 8px;
  white-space: nowrap;
  animation: ${fadeIn} 0.4s ease forwards;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #16a34a;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #148e40ff;
    transform: scale(1.1);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

const FeedbackButton = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / pageHeight) * 100;

      if (scrollPercent > 40) {
        setVisible(true);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 4000);
      } else {
        setVisible(false);
        setShowTooltip(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <ButtonWrapper visible={visible}>
      {showTooltip && <Tooltip>Wanna help us improve?</Tooltip>}
      <Link to="/feedback">
        <Button>
          <FaLightbulb />
        </Button>
      </Link>
    </ButtonWrapper>
  );
};

export default FeedbackButton;