'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ExampleApplication = React.createClass({
  render: function() {
    var message = 'This is a basic app which will help you to get started with React'

    return <p>{message}</p>;
    }
  });
  
  ReactDOM.render(
    <ExampleApplication />,
    document.getElementById('app')
  );
