import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../../index.css';

class Images extends React.Component{
    render(){
      return(<div className='gal_element col-lg-11 col-md-11 col-sm-10 '>    
          <img className="gal_img col-xl-3 col-lg-4 col-md-5 col-sm-7" src={`${this.props.image1}`}></img>
          <img className="gal_img col-xl-3 col-lg-4 col-md-5 col-sm-7" src={`${this.props.image2}`}></img>
      </div>
      )
    }
}

export default Images