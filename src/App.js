import React, { Component } from "react";
import PropTypes from "prop-types";
import './App.css';

import { Statistics } from "./Statistics/Statistics";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import {Notification} from "./Notification/Notification";
import {Section} from "./Section/Section";


class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    };
  
    countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      return Math.round((good / (good + neutral + bad)) * 100);
    };
  
    onLeaveFeedback = (option) => {
      this.setState((prevState) => ({
        [option]: prevState[option] + 1,
      }));
    };
    render() {
      const { good, neutral, bad } = this.state;
      const keys = Object.keys(this.state);
      return (
        <div className="App">
          <Section title="Please leave your feedback">
            <FeedbackOptions
              options={keys}
              onLeaveFeedback={this.onLeaveFeedback}
            ></FeedbackOptions>
          </Section>
  
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              ></Statistics>
            </Section>
          )}
        </div>
      );
    }
  }

export default App;