import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionStatistics from './SectionStatistics/SectionStatistics';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
class App extends Component {
  constructor() {
    super();
    this.onFeedback = this.onFeedback.bind(this);
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(((this.state.good + this.state.neutral) / this.countTotalFeedback()) * 100);
  }
  onFeedback(e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      case 'reset':
        this.setState(prevState => ({
          good: (prevState.good = 0),
          bad: (prevState.bad = 0),
          neutral: (prevState.neutral = 0),
        }));
        break;
      default:
        console.log('Unknown id');
        break;
    }
  }

  render() {
    return (
      <Section title="Sip Happens Café">
        <div>
          {this.countTotalFeedback() > 0 ? (
            <FeedbackOptions
              options={[
                { id: 'good', name: 'Good' },
                { id: 'neutral', name: 'Neutral' },
                { id: 'bad', name: 'Bad' },
                { id: 'reset', name: 'Reset' },
              ]}
              onFeedback={this.onFeedback}
            />
          ) : (
            <FeedbackOptions
              options={[
                { id: 'good', name: 'Good' },
                { id: 'neutral', name: 'Neutral' },
                { id: 'bad', name: 'Bad' },
              ]}
              onFeedback={this.onFeedback}
            />
          )}
        </div>

        <SectionStatistics>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionStatistics>
      </Section>
    );
  }
}

export default App;
