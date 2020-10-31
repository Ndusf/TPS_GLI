import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import im from './im.jpg';
import * as serviceWorker from './serviceWorker';


class App extends React.Component{

  state = {
    bieres: [
      {id: 1 , nom: "Coreff"},
      {id: 2 , nom: "Corona"},
    
    ],
    nouvelleBiere: '',
    
  };
 handleSubmit = (event :any) => {
  event.preventDefault();

  const id = new Date().getTime();
  const nom = this.state.nouvelleBiere;

 

  const bieres = [...this.state.bieres];
  bieres.push({id, nom});

  this.setState({bieres, nouvelleBiere: '' });
}
  handleDelete = (id:number) => {
    const bieres = [...this.state.bieres];
    const index = bieres.findIndex((biere)=>  biere.id === id
    );
    bieres.splice(index, 1);
    this.setState({bieres });
  };

 handleChange =(event:any) => {
   this.setState({nouvelleBiere: event.currentTarget.value});   
  
 }
  
   Ab  (){
  return(
   <a
  className="App-link"
  href="https://hackmd.diverse-team.fr/s/HkpQ2YdHw#"
  target="_blank"
  rel="noopener noreferrer"
  >
  TP GLI 
</a>)
 }
 
  render(){
    const title = "LISTE DE BIERRES"
    
   return( <div className="App" >
     <h1>{title}</h1>
    
      <img src={im} className="App-logo" alt="im" />
      <br/>
      <br/>
      <form onSubmit ={this.handleSubmit} >
       <input value={this.state.nouvelleBiere} onChange ={this.handleChange} type="text" placeholder= "Ajoutez une bière"/>
       <button className="but"> Confirmer </button>
      </form>
      <ul>
     { this.state.bieres.map((bieres) =>
   ( 
   <li>
     <strong className="tex">{bieres.nom}{}</strong>
     <button className="but1" onClick={() => this.handleDelete(bieres.id)} ><strong>REMOVE</strong> </button>
   </li>
     
    ))}
        
      </ul>
      
   <strong className="app-url">Lien vers: {this.Ab()}</strong>
    </div>)
  }
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


serviceWorker.unregister();
