import React, { Component } from "react";


class Cal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Number1: '',
         Number2: '',
         Total:'',
         option:''
      }
    }
    handleNumber1Change = event =>{
        this.setState({
            Number1: event.target.value
        })
    }
    handleNumber2Change = event =>{
        this.setState({
            Number2: event.target.value
        })
    }
    handleoptionChange = event =>{
        this.setState({
            option: event.target.value
        })
    }
    Total = event => {
        // if ( option === add){
        // this.setState({
        //     Total:parseInt(this.state.Number1) + parseInt(this.state.Number2)});
        //     event.prevent.default();
        //     console.log(this.Total)
        // } else if ( option === sub){
        //     this.setState({
        //         Total:parseInt(this.state.Number1) - parseInt(this.state.Number2)});
        //         event.prevent.default();
        //         console.log(this.Total)
        // }
        // else if ( option === multi){
        //     this.setState({
        //         Total:parseInt(this.state.Number1) * parseInt(this.state.Number2)});
        //         event.prevent.default();
        //         console.log(this.Total)
        // }else if ( option === div){
        //     this.setState({
        //         Total:parseInt(this.state.Number1) / parseInt(this.state.Number2)});
        //         event.prevent.default();
        //         console.log(this.Total)
        // }
        this.setState({
            Total:parseInt(this.state.Number1) + parseInt(this.state.Number2)});
            event.prevent.default();
    }
  render() {
    return (
      <div className="container-sm m-2 p-4  text-center">
        <form onSubmit={this.Total}>
          <div>
            <label className="m-2">Number1: </label>
            <input 
            type="text"
            value={this.state.Number1}
            onChange={this.handleNumber1Change}></input>
          </div>
          <div>
            <label className="m-2">Number2: </label>
            <input 
            type="text"
            value={this.state.Number2}
            onChange={this.handleNumber2Change}></input>
          </div>
          <select value={this.state.option} onChange={this.handleoptionChange}>
            <option value="add">Add</option>
            <option value="sub">Sub</option>
            <option value="multi">Multiply</option>
            <option value="div">Divide</option>
          </select>  
          <button type="submit" className="btn btn-dark m-2 " >Submit</button>
        </form>
        <h1 className="p-2 m-2">
        {this.state.Total}
        </h1>
      </div>
    );
  }
}

export default Cal;
