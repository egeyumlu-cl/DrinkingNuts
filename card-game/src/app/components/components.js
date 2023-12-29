'use client'

import styles from './components.module.css';
import React, { useState } from 'react';

export default function Deck(props) {
  let [isSelected, setIsSelected] = useState(props.isSelected);

  return (
    <div 
      className={styles.deck + " " + (isSelected ? styles.selected : "")} 
      onClick={() => setIsSelected(!isSelected)}>
      <div>{isSelected ? "􀁣" : "􀁢"}</div>
      <div>{props.text}</div>
      <div className={styles.cardcount}>{props.cardcount}</div>
    </div>
  );
}



// // Create a card component that takes in a card object and renders it
// export default function Card(props) {
//     let [isSelected, setIsSelected] = useState(false);

//     return (
//         <div class="card">
//             <div class="card-text">{props.text}</div>
//         </div>
//     )
// }
