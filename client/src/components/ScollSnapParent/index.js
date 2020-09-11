import React, {Component} from 'react';
import ScrollSnap from 'scroll-snap';
import {ScrollSnapElement} from '../index';
import './style.css';

class ScrollSnapParent extends Component {
  parent = React.createRef();

  bindScrollSnap() {
    const element = this.parent.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '100%',
    });

    snapElement.bind();
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <div id='snapParent' ref={this.parent}>
        {this.props.backgroundList.map((backgrounds, index) => (
          <ScrollSnapElement
            index={index}
            name={backgrounds.name}
            child={this.props.child}
          />
        ))}
      </div>
    );
  }
}
export default ScrollSnapParent;
