import React, { Component } from 'react';
import './src/style.css';

export default class Row extends Component {


  render() {
    let counter = -1;
    return (
      <div className="container">
        {this.props.data.map(element => {
          counter += 1;
          return (
            <div
              key={counter}
              className="element-block">
              <div className="image-container">
                <img src={element} className="image" />
              </div>

            </div>
          )
        })
        }
      </div>
    );
  }
}
