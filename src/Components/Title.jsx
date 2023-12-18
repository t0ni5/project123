import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../../index.css';
import '../index.css';

class Title extends React.Component{
    render(){
      return(
        <div className='block'>
          <h2 className='headline' >{this.props.title}</h2>
        </div>
      )
    }
}
export default Title