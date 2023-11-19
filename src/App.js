
import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';


const cardImages = [
  { "src": "/img/helmet-1.jpg", matched: false },
  { "src": "/img/potion-1.jpg", matched: false },
  { "src": "/img/ring-1.jpg", matched: false },
  { "src": "/img/scroll-1.jpg", matched: false },
  { "src": "/img/shield-1.jpg", matched: false },
  { "src": "/img/sword-1.jpg", matched: false }
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTow, setChoiceTow] = useState(null);
  const [disabled , setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setChoiceOne(null)
    setChoiceTow(null)

    setCards(shuffleCards);
    setTurns(0)
  }
  //set turnse
  const setTurnse = ()=>{

  }

  // handle a choice function
  const handleChoice = (card) => {
   
    choiceOne ? setChoiceTow(card) : setChoiceOne(card)
     
  };
  // compare 2 selected cards function

  useEffect(() => {
    if (choiceOne && choiceTow) {
      setDisabled(true)
      if (choiceOne.src === choiceTow.src) {
        setCards(preveCard => {
          return preveCard.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurns();
      }
      else {
        setTimeout(() => {
          resetTurns();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTow]);
  

  // reset turnse function
  
    const resetTurns = () => {
      setChoiceOne(null);
      setChoiceTow(null);
      setTurns(prevTern => prevTern + 1)
      setDisabled(false)
    }

    useEffect(() => {
      shuffleCards()
    } , [])
  

  return (
    <div className="App">
      
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
    
      <div className="card-grid">
        {cards.map(card => (

          <SingleCard 
          key={card.id} 
          card={card}
           handleChoice={handleChoice}
           filipped = {card === choiceOne|| card === choiceTow|| card.matched}
           disabled = {disabled}
           
           />
           

        ))}
        <p>choices : {turns}</p>
      </div>


    </div>
  );
}

export default App;
