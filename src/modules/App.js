import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/header';
import './App.css';

class App extends Component {
    render(){
        return(
            <div>
              <Header />
              {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired;
};

export default App;
