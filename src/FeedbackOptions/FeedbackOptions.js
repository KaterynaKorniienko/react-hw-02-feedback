import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.module.css'



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
        {options.map((option, i) => {
          return (
            <button
              key={i}
              className="btn"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option[0].toUpperCase() + option.slice(1)}
            </button>
          );
        })}
      </div>
    );
  };
  
  FeedbackOptions.defaultProps = {
    options: ["good", "neutral", "bad"],
  };
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func,
  };


export default FeedbackOptions;