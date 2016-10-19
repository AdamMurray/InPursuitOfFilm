import React from 'react';
import './Notification.css';

const Notification = ({
  message,
  type
}) =>
  <div className="ipof__notification">
    {message}
  </div>

export default Notification;
