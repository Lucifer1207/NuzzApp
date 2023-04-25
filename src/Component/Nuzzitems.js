import React, { Component } from 'react'

export default class Nuzzitems extends Component {
  
  render() {
    let {title,discription,imageurl,url}=this.props;
    return (
        <div className="container" style={{height:"350px",width: "23rem" , forcedColorAdjust:"revert", backgroundColor:"grey", borderRadius:"5%", boxShadow:"5px 5px 5px 5px black" ,overflow:"hidden" }}>
        <img src={imageurl} style={{height:"220px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href={url}  className="btn btn-outline-dark container">More</a>
        </div>
      </div>
    )
  }
}