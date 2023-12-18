import Form from 'react-bootstrap/Form';
import "./autocomplete.json";
import JSONDATA from "./autocomplete.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SearchComp() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState(''); 
  return (
    <>
    <Form className="d-flex search-bar">
            <Form.Control
              type="search"
              id="scrollspySearch"
              placeholder={t('header.searchword')}
              className="me-2"
              aria-label="Search"
              autoComplete='off'
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            {/* <button 
             className="search-button"
            >
              Найти
            </button> */}
    </Form>

    {searchTerm.length != 0 && (
      JSONDATA.filter((val) => {
      if(searchTerm == "") {
        return val;
      }
      else {
        if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }
    }).map((val, key) => {
              let rob_path;
              switch (val.ind){
                case 0:
                  rob_path="/James";
                  break;
                case 1:
                  rob_path="/Cassidy";
                  break;
                case 2:
                  rob_path="/Dillinger";
                  break;
                case 3:
                  rob_path="/Gillis";
                  break;
                case 4:
                  rob_path="/Kid"
                  break;
                default:
                  rob_path="/home";

              }
              return (
              <div 
                className="user" 
                key={key}
              >
                
                <Link to={rob_path}>{val.name}</Link>
              </div>
              );
            }))}    
  </>  
  );
}

export default SearchComp;