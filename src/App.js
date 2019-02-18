import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {uid: 'hdskfn',name:"Dion", age:29},
      {uid: 'xTYxuyi',name:"Riff Raff", age:40},
      {uid: 'xTYxsfhi',name:"Ricky", age:28}
  ],
  showPersons: false
}
  


  nameChangeHandler = (event, userID) => {

    //this code is verbose because we need to work with copies of state rather than directly updating
    const personIndex = this.state.persons.findIndex(p => p.uid === userID);

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  


}


  deletePersonHandler = (personIndex) => {
    //below creates copy so that we don't mutate state off the cuff.
    const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };

    let persons = null;

    if (this.state.showPersons) {
      style.backgroundColor = 'red'

      
      persons = (

        <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.uid}
            nameChange={(event) => this.nameChangeHandler(event, person.uid)}
          />
        })}
      </div>

      )
    }


    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red')
    } 
    if (this.state.persons.length <=1) {
      classes.push('bold')
    }

    return (

      <div className="App">
        <p className={classes.join(' ')}>DRRAKKE?</p>
        
        <button
          style={style}
          onClick = {this.togglePersonsHandler}> Toggle Persons
        </button>

        {persons}
       

      </div>
    );
  }


  
}

export default App;
