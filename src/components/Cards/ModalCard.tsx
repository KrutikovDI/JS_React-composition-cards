import React from 'react'
import './modalCard.css'
import { IModalCard } from '../interfsce'

const ModalCard = (props: IModalCard) => {
  const { title, text } = props.card


  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        {props.children}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}

export default ModalCard
