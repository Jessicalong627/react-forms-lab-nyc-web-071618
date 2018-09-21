import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {tweets: ''};
  }

  handleUpdate = (event) => {
    const tweet = event.target.value
    this.setState({
      tweets: tweet
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleUpdate} type="text" value={this.state.tweets} />
        <p>Characters left: {this.props.maxChars - this.state.tweets.length} </p>
    </div>
    );
  }
}

export default TwitterMessage;
