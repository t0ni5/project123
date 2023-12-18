import PersonOfTheDay from "./PersonOfTheDay.jsx"
import Developer from "./Developer.jsx"
import Section_divider from './Section_divider.jsx';
import Prisonwall from './prisonwall.jsx';
import Footer from './footer.jsx';
import { useTranslation } from "react-i18next";


import jsonData from './data.json'
import React from 'react';

function MainPage() {
    const { t } = useTranslation();
    let currentName;
    let currentInfo;
    let currentPhoto
    const randomIndex = Math.floor(Math.random() * jsonData.robbers.length);
    
    currentName=jsonData.robbers[randomIndex].name; 
    currentInfo=jsonData.robbers[randomIndex].main_info;
    currentPhoto=jsonData.robbers[randomIndex].main_photo;
    return(
      <>  
         <Prisonwall/> 
        
        <PersonOfTheDay  name={currentName} info={currentInfo} portrait={currentPhoto} index={randomIndex}/>
        
        <Section_divider/>
        <h2 className="developers_caption" >{t("captions.devs")}</h2>
        <div id="devs" className="d-flex flex-column flex-lg-row flex-md-row align-items-center ">
         <Developer  name="Aleksartess" github="Alexartess" telegram="@aleksartess" gitlink="https://github.com/Alexartess" tegramlink="https://t.me/aleksartess"/>
        <Developer name="Vicatoriya" github="Vicatoriya" telegram="@vica_toriya" gitlink="https://github.com/Vicatoriya" tegramlink="https://t.me/vica_toriya"/>
        </div>
        <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center ">
        <Developer name="Toothicane" github="Toothicane" telegram="@sheeshik" gitlink="https://github.com/Toothicane" tegramlink="https://www.instagram.com/yawnzzn?igshid=NzZlODBkYWE4Ng=="/>
        <Developer name="nikkkat" github="nikkkat" telegram="@kitynik" gitlink="https://github.com/nikkkat" tegramlink="https://t.me/kitynik"/>
         
        
        </div>
        
         <Footer/>  
      </>
    );
  
  }

  export default MainPage
  