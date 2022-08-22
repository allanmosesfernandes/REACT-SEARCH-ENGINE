import React, { Component } from 'react'

export class Card extends Component {
  render() {
    const {id, name, email} = this.props.monster;
    return (
      <div key={id} className="card-container">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
            <h2> {name} </h2>
            <p> {email}</p>
    </div>
    )
  }
}

export default Card