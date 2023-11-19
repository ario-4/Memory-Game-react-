import './SingleCard.css'


export default function SingleCard({ card , handleChoice , filipped , disabled  }){
   function handleCard(){
     
    if(!disabled){
      
      handleChoice(card);
    }
      
   }
 return (
    <div className="card" key={card.id}>
   
          <div className={filipped ? 'filipped'  : ''} >
          <img className='front' src={card.src} alt="card-front" />
          <img className='back' src='img/card-back.jpg' alt="card-back" onClick={handleCard} />
          </div>
        </div>
 )
}
