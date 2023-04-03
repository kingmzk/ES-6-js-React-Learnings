import React, { Component } from 'react'

export class Product extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ProductId:"",
         qty:0
      }
    }
    
    addToCart=(pid)=>
    {
      console.log(pid)
        this.setState({
            ProductId:pid,
            qty:this.state.qty+1
        })
    }

  render() {
    return (
      <div>
   <button onClick={() => this.addToCart(1)}>Add to Cart</button>
        <Cart ProductId={this.state.ProductId} qty={this.state.qty}></Cart>
      </div>
    )
  }
}

export default Product


class Cart extends React.Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         qty:this.props.qty
      }
    }

    /*updateQty = () =>
    {
        this.setState({
            qty:this.state.qty+1
        })
    }*/

    componentDidMount()
    {
        console.log("executed after component Render");
    }

    componentDidUpdate(prevProps, prevState)
    {
         console.log("component updated")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log(props.qty)
        console.log(state.qty)
        if(props.qty !== state.qty)
        {
            return {qty:props.qty}
        }
        return null;
    }

    render()
    {
        return(
            <div>
                <h1>Cart : {this.state.qty}</h1>
                <button onClick={this.updateQty}>Update Quantity</button>
            </div>
        )
    }
    
}