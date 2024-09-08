import React from 'react';
// import '../static/notification.css';

export default function Notification({ message, type }) {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
}