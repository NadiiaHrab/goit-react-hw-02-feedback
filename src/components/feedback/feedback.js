import { Component } from "react";

class Feedback extends Component {

    static propTypes = {
        // 
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    handleIncrement = () => {
        this.setState(prevState => {
            return {
           good: prevState.value + 1, 
        }
        }  
    )};


    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div class="container">
  <h2 class="feedback-title">Please leave feedback</h2>

  <div class="feedback-button">
<button type="button" class="btn" onClick={this.handleIncrement}>Good</button>
<button type="button" class="btn" onClick={this.handleIncrement}>Neutral</button>
<button type="button" class="btn" onClick={this.handleIncrement}>Bad</button>
  </div>
  
  <h2 class="statistics-title">Statistics</h2>

  <div class="statistics-text-wrap">
    <p class="statistics__text">Good: {good}</p>
    <p class="statistics__text">Neutral: {neutral}</p>
    <p class="statistics__text">Bad: {bad}</p>
  </div>
 
</div>
        )
    }
}

export default Feedback;
