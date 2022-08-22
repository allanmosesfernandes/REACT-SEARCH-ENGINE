import React, { Component } from 'react'
import './search-box.styles.css'
export default class SearchBox extends Component {

  render() {
    const { placeholder, className } = this.props;
    return (
    <input 
        className={className}
        type='search'
        placeholder={placeholder}
        onChange = {this.props.onChangeHandler}
    /> 
    )
  }
}
