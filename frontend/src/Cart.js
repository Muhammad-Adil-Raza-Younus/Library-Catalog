import React, { Component } from 'react'
import Navbar from './Navbar'
import { apiCall, POST } from './ApiCall'
import cookie from 'react-cookies'
import CartItem from './CartItem'

class Cart extends Component {
  constructor(){
    super()

    this.state = {
      logs: []
    }
  }
  componentDidMount(){
  const isAdmin = cookie.load('admin') === 'yes' ?  true : false
  if(isAdmin){  
    apiCall('/cart')
      .then(res => res.json())
      .then( json => {
        console.log('res', json)
        this.setState({logs: json.results})
    })
  }  
  else{
    apiCall('/UserCart', {isAdmin})
      .then(res => res.json())
      .then( json => {
        console.log('res', json)
        this.setState({logs: json.results})
    })
  }
  }

      // Call Controller when user clicks on save button
      handleClickSave() {
      
        POST('/saveCart')
          .then(res => res.json())
          .then( json => {
            console.log(json.results)
            this.setState({logs: []})
        })
      }

  render() {
    const {logs} = this.state
    
    
    return (
      <div class= "logged-main">
      <Navbar/>
      <div class= "logged-body">
          <h1>Cart</h1>
          <button class="btn-cart btn btn-success action-bar-btn" type="button" onClick={() => this.handleClickSave()}><i class="fas fa-save"></i> Save</ button>
          <h4>The following data will be modified:</h4>
          {logs.map(item =><CartItem resource_data={item.resource} type={item.type} operation={item.operation} index={item.index} />)}  
      </div>
      </div>
      
    );
  }
}

export default Cart;