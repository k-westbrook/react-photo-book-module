import React, { Component } from 'react';
import { render } from 'react-dom';
import './src/style.css'

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
                <img src={element.imageURL} className="image" />
              </div>
              <div className="text-container">
                <h3>{element.name}</h3>
              </div>
            </div>
          )
        })
        }
      </div>
    );
  }
}
