import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../../index.css';
import Images from './Images';

class Gallery extends React.Component{
    render(){
      return(<div className='images col-lg-12 col-md-12 col-sm-12'>
        <Images image1={this.props.image1} image2={this.props.image2}/>
        <Images image1={this.props.image3} image2={this.props.image4}/>
      </div>)
    }
  }

  export default Gallery