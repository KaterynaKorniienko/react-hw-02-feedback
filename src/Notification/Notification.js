import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

export const Notification = ({ message }) => <p className="main">{message}</p>;

Notification.defaultProps = {
  message: "",
};

Notification.propTypes = {
  message: PropTypes.string,
};