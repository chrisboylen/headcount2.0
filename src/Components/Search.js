import React, { Component } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <form>
        <input  
          type="text"
          placeholder="Search"
          onChange={ (event) => this.props.updateCards(event.target.value) }
        />
      </form>
    );
  }
}

Search.propTypes = { updateCards: PropTypes.func };

export default Search;