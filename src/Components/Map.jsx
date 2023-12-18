import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../../index.css';

class Map extends React.Component{
    render(){
      return( <div className='map col-lg-6 col-md-6 col-sm-8'>
      <iframe  src={this.props.src} 
          style={{ border: "0",  width:"100%" ,height:"400px"}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      )
    }
  }
export default Map