import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Card(props){
    const { t } = useTranslation();
    return(
        <div className = "rob_card">
            
            <img className = "card-image" src ={props.photo} alt = "my picture"></img>
            <div className = 'text'>
                
                <p className = 'font-nol-script'>{props.name}</p>
                <p className = 'font-bah-script'>{props.years}</p>
                
                <button className = "but-k" ><Link to={props.pathname}>{t("read_button.read_more")}</Link></button>
                 
                
            </div>
        </div>
    );
}

export default Card