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
          onChange={ (e) => this.props.updateCards(e.target.value) }
        />
      </form>
    )
  }
}

Search.propTypes = { updateCards: PropTypes.func }

export default Search;