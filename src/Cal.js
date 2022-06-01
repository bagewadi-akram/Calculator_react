import React, { Component } from "react";

export class Cal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Number1: "",
      Number2: "",
      option: "",
      Total: "",
      //  addnum: Number1 + Number2,
      //  subnum:Number1 - Number2,
      //  multinum:Number1 * Number2,
      //  divnum:Number1 / Number2
    };
  }
  handleNumber1Change = (event) => {
    this.setState({
      Number1: event.target.value,
    });
  };
  handleNumber2Change = (event) => {
    this.setState({
      Number2: event.target.value,
    });
  };
  handleoptionChange = (event) => {
    this.setState({
      option: event.target.value,
    });
  };
  add = (event) => {
    this.setState({
      Total: parseInt(this.state.Number1) + parseInt(this.state.Number2),
    });
  };
  sub = (event) => {
    this.setState({
      Total: parseInt(this.state.Number1) - parseInt(this.state.Number2),
    });
  };
  multi = (event) => {
    this.setState({
      Total: parseInt(this.state.Number1) * parseInt(this.state.Number2),
    });
  };
  div = (event) => {
    this.setState({
      Total: parseInt(this.state.Number1) / parseInt(this.state.Number2),
    });
  };
  // Total = event => {
  // if(this.state.option === add )
  // {
  //   return <div>{this.state.addnum}</div>
  // }else if (this.state.option === sub)
  // {
  //   return <div>{this.state.subnum}</div>
  // }else if (this.state.option === multi)
  // {
  //   return <div>{this.state.multinum}</div>
  // }else if (this.state.option === div)
  // {
  //   return <div>{this.state.divnum}</div>
  // }

  // if ( this.state.option === add){

  // this.setState({
  //     Total:parseInt(this.state.Number1) + parseInt(this.state.Number2)});
  //     return <div>{this.state.Total}</div>
  // } else if ( this.state.option === sub){
  //     this.setState({
  //         Total:parseInt(this.state.Number1) - parseInt(this.state.Number2)});
  //         return <div>{this.state.Total}</div>
  //           }
  // else if ( this.state.option === multi){
  //     this.setState({
  //         Total:parseInt(this.state.Number1) * parseInt(this.state.Number2)});
  //         return <div>{this.state.Total}</div>
  // }else if ( this.state.option === div){
  //     this.setState({
  //         Total:parseInt(this.state.Number1) / parseInt(this.state.Number2)});
  //         return <div>{this.state.Total}</div>
  // }
  //   this.setState({ Total:parseInt(this.state.Number1) + parseInt(this.state.Number2)});
  //   console.log(this.state.Total)
  // }
  render() {
    return (
      <div className="container-sm m-2 p-4  text-center">
        <form onSubmit={this.Total}>
          <div>
            <label className="m-2">Number1: </label>
            <input
              type="text"
              value={this.state.Number1}
              onChange={this.handleNumber1Change}
            ></input>
          </div>
          <div>
            <label className="m-2">Number2: </label>
            <input
              type="text"
              value={this.state.Number2}
              onChange={this.handleNumber2Change}
            ></input>
          </div>
          {/* <select value={this.state.option} onChange={this.handleoptionChange}>
            <option value="add">Add</option>
            <option value="sub">Sub</option>
            <option value="multi">Multiply</option>
            <option value="div">Divide</option>
          </select>   */}
          <button
            //  type="submit"
            onClick={this.add}
            className="btn btn-dark m-2 "
          >
            Add
          </button>
          <button
            //  type="submit"
            onClick={this.sub}
            className="btn btn-dark m-2 "
          >
            Substract
          </button>
          <button
            //  type="submit"
            onClick={this.multi}
            className="btn btn-dark m-2 "
          >
            Multiply
          </button>
          <button
            //  type="submit"
            onClick={this.div}
            className="btn btn-dark m-2 "
          >
            Divide
          </button>
        </form>
        <h1 className="p-2 m-2"> {this.state.Total}</h1>
      </div>
    );
  }
}
export default Cal;
