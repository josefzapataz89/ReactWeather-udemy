var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a Weather application build on React. I have built this for The Complete React Web App Developer Course.
        </p>
        <p>
          Here are some of the tools I used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript library used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather MAp to search for weather data by city name.
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
