'use strict';

import EmojiReact from 'react-emoji-react';

var React = require('react');
var ReactDOM = require('react-dom');

var ExampleApplication = React.createClass({
  render: function() {
    var message = 'This is a basic app which will help you to get started with React'

    return <p>{message}</p>;
    }
  });

  const emojis = [
  {
    name: 'rage',
    count: 2
  },
  {
    name: 'blush',
    count: 1
  },
  {
    name: 100,
    count: 3
  },
  {
    name: 'grinning',
    count: 2
  }
];

class ReactingComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      emojis
    };
  }

  onReaction(name) {
    const emojis = this.state.emojis.map(emoji => {
      if (emoji.name === name) {
        emoji.count += 1;
      }
      return emoji;
    });
    this.setState({ emojis });
  }

  onEmojiClick(name) {
    console.log(name);
    const emojis = this.state.emojis.concat([{name, count: 1}]);
    this.setState({ emojis });
  }

  render() {
    return (
      <EmojiReact
        reactions={this.state.emojis}
        onReaction={(name) => this.onReaction(name)}
        onEmojiClick={(name) => this.onEmojiClick(name)}
        sort={true}
      />
    );
  }
}

  ReactDOM.render(
    <ReactingComponent />,
    document.getElementById('app')
  );
