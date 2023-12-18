import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import YouTube from 'react-youtube';
import MainProfile from "./Components/MainProfile"
import Title from './Components/Title';
import Gallery from './Components/Gallery';
import Map from './Components/Map';
import Biography from './Components/Bigraphy';
import data from './data.json'
import { withTranslation} from 'react-i18next';

import Footer from './footer';
import Prisonwall from './prisonwall';

class Robber extends React.Component{
    render(){
      const { t } = this.props;
      return(
        <>
        <Prisonwall/>
        <div >
        <MainProfile name={data.robbers[this.props.rob_index].name} years={data.robbers[this.props.rob_index].years} main_info={data.robbers[this.props.rob_index].main_info} image={data.robbers[this.props.rob_index].main_photo}/>
        <Title title={t("captions.bio")}/>
        <Biography index={this.props.rob_index}/>
        <Title title={t("captions.photo")}/>
        <Gallery image1={data.robbers[this.props.rob_index].photos[0]} image2={data.robbers[this.props.rob_index].photos[1]} image3={data.robbers[this.props.rob_index].photos[2]} image4={data.robbers[this.props.rob_index].photos[3]} />
        <Title title={t("captions.more")}/>
        <YouTube className="video col-xl-6 col-lg-7 col-md-9 col-sm-10 col-12" iframeClassName=' col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10' videoId={data.robbers[this.props.rob_index].video}/>
        <Title title={t("captions.map")}/>
        <Map src={data.robbers[this.props.rob_index].geo}/>  
      </div>
      <Footer/>
      </>
      )
  }
}


export default withTranslation()(Robber)