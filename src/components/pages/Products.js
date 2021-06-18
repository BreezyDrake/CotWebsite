//import React from 'react';
//import '../../App.css';

//export default function Products() {
  //return <h1 className='products'>About</h1>;
//}

import React from 'react';
import Footer from '../Footer';
import '../Cards.css';
import CardItem from '../CardItem';
import img9 from './images/9.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>ABOUT THE COLLEGE OF TECHNOLOGY</h1>
      <br/><br/>
  
      <p> 
        Explicitly designed courses to train highly competent
senior level technicians in relevant (up-to-date)
engineering fields.</p>
<br/>

    <h2>Who We Are</h2>
The College of Technology [COT] of the university of Buea was created as a component of the university by decree No.93/034 of 19 January 1993. The college is dedicated in providing high quality education, by Training Locally and Qualifying Globally.
<br/><br/>
<h2>Our Vision</h2>
<p>
To offer nationally and internationally organized full and part time educational programmes across a spectrum of engineering disciplines.
To enable graduates respond to the critical national and sub-regional development needs and to successfully compete in the global market.</p><br/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-9.jpg'
              src={img9}
              text='A Brief Overview Of What You Have To Know About The College'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
            <>
            <Footer />
          </>
    </div>
  );
}

export default Cards;
