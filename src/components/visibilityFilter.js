import React, { Component } from 'react'
import './filter.css'

export default class VisibilityFilter extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.handler(e.target.value)
    }

  render() {
    return (
      <div className="filter-container">
        
            <label>VISIBILITY FILTER </label>
            <input type="radio" name="filter" value="ALL" defaultChecked onChange={this.handleChange}/>Show All
            <input type="radio" name="filter" value="DONE" onChange={this.handleChange}/>Show Completed
            <input type="radio" name="filter" value="TODO" onChange={this.handleChange}/>Show Todos
        
      </div>
    )
  }
}
