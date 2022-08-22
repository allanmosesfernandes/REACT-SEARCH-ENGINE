import React, { Component } from 'react'
import './card-list.css'
import Card from '../card/Card.component';
export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (

      <div className='card-list'>
        { 
          monsters.map((monster, index) => {
             return <Card monster = {monster}/>
          })
        }
      </div>
    )
  }
}
