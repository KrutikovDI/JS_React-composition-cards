import { useState } from 'react'
import './App.css'
import React from 'react'
import ModalCard from './components/Cards/ModalCard'
import { ICard } from './components/interfsce'



function App() {

  const card1: ICard = {
    title: 'Card title',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }

  const card2: ICard = {
    title: 'Special title treatment',
    text: "With supporting text below as a natural lead-in additional content."
  }

  return (
    <>
    <ModalCard card={card1}>
      <img src="..." className="card-img-top" alt="Image cap"/>
    </ModalCard>
    
    <ModalCard card={card2}></ModalCard>
    </>
  )
}

export default App
