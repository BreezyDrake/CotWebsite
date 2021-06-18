import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from '../images/A1.jpg';
import img2 from '../images/A2.jpg';
import img3 from '../images/A3.jpg';
import img4 from '../images/6.jpg';
import img5 from '../images/11.jpg';
import img6 from '../images/13.jpg';
import img7 from '../images/15.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Next Steps!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-9.jpg'
              src={img4}
              text='EXPLORE COT'
              label='Adventure'
              path='/services'
            />
            <CardItem
              //src='images/img-2.jpg'
              src={img5}
              text='PRIDE OF THE COLLEGE'
              label='Activities'
              path='/services'
            />
            <CardItem
              //src='images/img-2.jpg'
              src={img6}
              text='EXPLORE EVENTS!'
              label='Events'
              path='/services'
            />
          </ul>
          <br/><br/>
          <h1>Welcome To COT-UB</h1><br/>
<p><b>The College of Technology (COT) of the university of Buea was created as a component of the university by decree No.93/034 of 19 January 1993. The college is dedicated in providing high quality education, by TRAINING LOCALLY AND QUALIFYING GLOBALLY.</b>
<br/><br/>
<p><b>Our vision is to offer both national and internationally recognized full and part-time educational programmes across a spectrum of engineering disciplines.</b></p>
<br/>
<p><b>We recognize that undergraduate education is a significant step towards enhancing your prospects and preparing you for future employment.</b></p>
<br/>
<b>Our courses are explicitly designed to train highly competent senior level technicians in relevant (up- to- date) engineering fields who are skilled in scientific research, team work and possess leadership skills.</b></p>
          <br/><h1>Our Staff!</h1>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src={img}
              text='Dr Sone M. Ekonde'
              label='Director'
              path='/services'
            />
            <CardItem
                src={img2}
              text='Dr Tchapga Tchito'
              label='HOD Internship'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Dr Feudjou'
              label='HOD Electrical'
              path='/sign-up'
            />
          <CardItem
              src={img7}
              text='>>>'
              label='See More'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
