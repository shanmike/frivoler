import React from 'react';
import MotionStack from 'react-motion-stack';
import Buttons from '../Buttons/Buttons';
import axios from 'axios';
import './MyCards.css';

const data = Array.from({ length: 10 }, (_, i) => ({
    id: new Date().getTime() + i,
    element: (
      <div>
        <img
          className="motion-image"
          draggable={false}
          src={`https://source.unsplash.com/random/${i + 1}`} width={500} height = {500}
          alt ='user profile'
        />
        <div>User information goes here</div>
      </div>
    )
  }));

export default class MyCards extends React.Component {
  onSwipeEnd = ({ data }) => {
    console.log('data', data);
  };
  
  renderButtons(props) {
    return (
      <Buttons buttonProps={props}/>
    )
  }

  // localUsers(){
  //   axios.get('/getLocalUsers').then(res=>{
  //     console.log('Get users list',res.data)
  //   })
  // }
  
  render() {
    return (
      <div className="demo-wrapper">
        <MotionStack
          data={data}
          onSwipeEnd={this.onSwipeEnd}
          render={props => props.element}
          renderButtons={this.renderButtons}/>
      </div>
    );
  }
}