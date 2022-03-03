import React, { Component } from 'react'
	
class Table extends Component {
constructor(props){
	super(props)
		
	// Set initial state
	this.state = {name: "Abc",email:'email',phone:6789, address: 'abc'};
   
		
	// Binding this keyword
	this.updateState = this.updateState.bind(this)  //today concept is use or we can use arrow function
    this.prevState = this.prevState.bind(this)
}
	
updateState(){
	// Changing state
	this.setState({
	name: 'Programming ',
	email: '@gmail',
	phone: '30',
    address: 'ghhhj'
	})
}
prevState(){  //waps se state pe
	// Changing state
	this.setState({
	name: 'Abc ',
	email: 'email',
	phone: '6789',
    address: 'abc'
	})
}


render(){
    const {name,email,phone,address} = this.state    //saket sir say  do this way
	return (
	<div>
		<h2>Table</h2>	
        <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Address</th>
              
            </tr>
            <tr>
            {/* this .state  se bttr way*/}
              <td>{name}</td> 
              <td>{email}</td>
              <td>{phone}</td>
              <td>{address}</td>
              </tr>
          </table>
          <span>
              {/* <button onClick={() => this.clickState(name)}>Edit</button>
              <button onClick={() => this.clickState(name)}>Delete</button> */}
                 <button onClick={this.updateState}>show table 2</button>
                 <button onClick={this.prevState}>show table 1</button>
          </span>
	
	    	
		
	</div>
	)
}
}
	
export default Table;
