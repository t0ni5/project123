import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../../index.css';

class MainProfile extends React.Component{
    render(){
        return(
            <div className='block'>
              <div className='main_info'>
                <img className='photo col-lg-3 col-md-5 col-sm-6 mx-lg-4'  src={`${this.props.image}`}></img>
                <div className='text col-lg-8 col-md-8 col-sm-11 mx-md-1 mx-lg-1 mx-xl-2'>
                  <h2 className="name">{this.props.name}</h2>
                  <h3 className='years'>{this.props.years}</h3>
                  <p className='info'>{this.props.main_info}</p>
                </div>
              </div>
            </div>
        )
    }
  }

  export default MainProfile