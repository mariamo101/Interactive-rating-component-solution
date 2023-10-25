import { useState } from 'react';
import './App.css';
import star from './icon-star.svg';
import illustration from'./illustration-thank-you.svg';

function App() { 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("")

  const Button = ({number}) =>{
  return <button className='numbers' onClick={() => setItems(number)}> {number}</button> 
 }
  return (
    <div className='container'>
      {!isSubmitted && <div className='inside'>
      <img  src={star} className='star' alt=""/>
      <h1 className='question'>How did we do?</h1>
      <p className='information'> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='numberContainer'>
        <Button number={1} />
        <Button number={2} />
        <Button number={3} />
        <Button number={4} />
        <Button number={5} />
      </div>
      <div className='submite'>
        <button className='buttonSubmite' onClick={() => setIsSubmitted(true)} >submite</button>
      </div>
      </div>}
      {isSubmitted && <ThankYou items={items} setIsSubbmited={setIsSubmitted} />}
    </div>
  );
}
const ThankYou = ({items}) => {
  return (
    <div className='container'>
<img src={illustration} className='illustration' alt=""/>
<div className='select'>
  <p className='youSelect'> You selected {items} out of 5</p>
</div>
<h1 className='thank'>Thank you!</h1>
<p className='information2'> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}

export default App;
