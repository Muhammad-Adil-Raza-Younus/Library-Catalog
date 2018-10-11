import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import cookie from 'react-cookies'

class CreateBook extends Component {
  constructor(){
    super()


    this.state = {title: "",
      author: "",
      format: "",
      pages: 0,
      publisher: "",
      language: "",
      ISBN_10: "",
      ISBN_13: ""} 
  }

  handleClick(e){
    const {title,
      author,
      format,
      pages,
      publisher,
      language,
      ISBN_10,
      ISBN_13}  = this.state
    
      const newBook = {title,
        author,
        format,
        pages,
        publisher,
        language,
        ISBN_10,
        ISBN_13}


        console.log(newBook)


       /* apiCall('/createbook', CreateBook)
        .then( res => res.json() )
        .then (json => {
          alert(json.message)

          if(json.status === 0){
            this.props.history.push('/')
          }

        })*/
      
  }
  render() {
    const admin = cookie.load('admin') === 'yes'
    return (
      <div style={main} >
        <span style={{fontWeight: 'bold'}} >New Book</span>
        
        <input onChange={evt => {this.setState({title: evt.target.value})}} style={input} type="text" placeholder="Title" ></input>

        <input onChange={evt => {this.setState({author: evt.target.value})}} style={input} type="text" placeholder="Author" ></input>
        
        <input onChange={evt => {this.setState({format: evt.target.value})}} style={input} type="text" placeholder="Format" ></input>
        
        <input onChange={evt => {this.setState({pages: evt.target.value})}} style={input} type="text" placeholder="Pages" ></input>
        
        <input onChange={evt => {this.setState({publisher: evt.target.value})}} style={input} type="text" placeholder="Publisher" ></input>

        <input onChange={evt => {this.setState({language: evt.target.value})}} style={input} type="text" placeholder="Language" ></input>

        <input onChange={evt => {this.setState({ISBN_10: evt.target.value})}} style={input} type="text" placeholder="ISBN 10" ></input>

        <input onChange={evt => {this.setState({ISBN_13: evt.target.value})}} style={input} type="text" placeholder="ISBN 13" ></input>
                
        <button style={button}
           onClick={this.handleClick.bind(this)} type="button">Create</button>
        {!admin ? <Redirect to="/"/> : null}
      </div>
    );
  }
}

export default CreateBook;
const  main = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Impact',
    borderRadius: 5,
    minHeight: 400,
    fontSize: 30,
    padding: 30,
    boxShadow: '0px 0px 30px rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(244,244,244,0.7)',
    marginTop: '5%',
    // width: 200,
}

const input = {
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 5
}

const button = {
    height: 50,
    width: '100%',
    fontSize: 20,
    borderRadius: 5,
    fontFamily: 'inherit',
    // padding: '0px 10px',
    // boxShadow: '0px 5px 5px rgba(0,0,0,0.5)',

}