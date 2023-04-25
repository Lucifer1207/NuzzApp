import React, { Component } from 'react';
import Nuzzitems from './Nuzzitems';
import Flip from './Flip';
import gunn from './News.jpg';
export default class Nuzz extends Component {
  
  async componentDidMount(){
    let url1= `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=38f99fe3b10d4968af395cdd9afd2a80&pagesize=12`;
    let data = await fetch(url1);
    let parsedData = await data.json();
    this.setState({toDisplay:parsedData.articles});
  }
  constructor() {
      super();
      this.state = {toDisplay:[],page:1,loading:false};
  }

  handleNextClick= async ()=>
  {
      this.setState({loading:true});
    let url1= `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=38f99fe3b10d4968af395cdd9afd2a80&page=${this.state.page+1}&pagesize=12`;
    let data = await fetch(url1);
    let parsedData = await data.json();
    this.setState({toDisplay:parsedData.articles, page:this.state.page+1,loading:false});


  }

  handlePreviousClick= async()=>
  { this.setState({loading:true});
    let url1= `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=38f99fe3b10d4968af395cdd9afd2a80&page=${this.state.page-1}&pagesize=12`;
    let data = await fetch(url1);
    let parsedData = await data.json();
    this.setState({toDisplay:parsedData.articles, page:this.state.page-1,loading:false});
  }

  
render() {
  
  return (
    
    <div className="container">
      {this.state.loading && <Flip/>}
      
      <div className='row mx-3 my-3'>
      
          {
           
              
             !this.state.loading && this.state.toDisplay.map((i)=>{
                  return <div className="col-sm-4 my-3">
                    
                      <Nuzzitems title={i.title.slice(0,20)} discription={i.description?i.description.slice(0,50):"this is null"} imageurl={i.urlToImage? i.urlToImage:gunn} url={i.url} />
                      
                  </div>
              })
          }
      </div>
      <div className="d-flex justify-content-between">
        <button className='btn btn-outline-dark' onClick={this.handlePreviousClick} disabled={this.state.page===1} >&larr; Previous</button>
        <button  className='btn btn-outline-dark' onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  )
}
}