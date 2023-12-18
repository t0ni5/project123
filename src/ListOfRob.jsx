import Card from './Card.jsx'
import robbers from './data.json'
import rob1_phs from './assets/rob1_small.jpg'
import rob2_phs from './assets/rob2_small.jpg'
import rob3_phs from './assets/rob3_small.jpg'
import rob4_phs from './assets/rob4_small.jpg'
import rob5_phs from './assets/rob5_small.jpg'

import Prisonwall from './prisonwall.jsx'
import Footer from './footer.jsx'


function ListOfRob() {
  
  
    return(
      <div>
        <Prisonwall/>
        <Card pathname = "/James" photo = {rob1_phs} name = {robbers.robbers[0].name} years = {robbers.robbers[0].years} rob_i = {0}/>
        <Card pathname = "/Cassidy" photo = {rob2_phs} name = {robbers.robbers[1].name} years = {robbers.robbers[1].years} rob_i = {1}/>
        <Card pathname = "/Dillinger" photo = {rob3_phs} name = {robbers.robbers[2].name} years = {robbers.robbers[2].years} rob_i = {2}/>
        <Card pathname = "/Gillis" photo = {rob4_phs} name = {robbers.robbers[3].name} years = {robbers.robbers[3].years} rob_i = {3}/>
        <Card pathname = "/Kid" photo = {rob5_phs} name = {robbers.robbers[4].name} years = {robbers.robbers[4].years} rob_i = {4}/>
        <Footer/>
      </div>
    );
  
  
}

export default ListOfRob;