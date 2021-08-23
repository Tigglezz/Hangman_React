import React from "react";
import styled from "styled-components";

const Letters = styled.div`
  background-color: gray;
`;

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
