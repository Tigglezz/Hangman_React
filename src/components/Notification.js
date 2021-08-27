import React from "react";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
  padding: 15px 20px;
  position: absolute;
  bottom: -50px;
  transition: transform 0.3s ease-in-out;
`;

const Notification = ({ showNotification }) => {
  return (
    <NotificationWrapper
      style={showNotification ? { transform: "translateY(-50px)" } : {}}
    >
      <p style={{ margin: 0 }}>You have already entered this letter</p>
    </NotificationWrapper>
  );
};

export default Notification;
