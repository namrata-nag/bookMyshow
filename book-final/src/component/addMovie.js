import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field , reduxForm} from 'redux-form';
import history from '../hist';
//const  { DOM: { input, select, textarea } } = React
class AddMovie extends Component{
    constructor(){
                super();
                this.state={
                               time:["7:00","11:00","15:00","19:00","23:00"],
                               count:0,
                               add:false,
                               arr:[]
                         }           
  }
  //////////////////////////////////////////////////////////////////////////////////////////componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
     componentDidUpdate(prevProps, prevState) {
       console.log("insidde component update");
  // only update chart if the data has changed
  if (prevState.add !== this.state.add) {
        
        this.render();
    }}


//This  function is called when form is submitted------------------------------------------------------ 
   submit(event){
     console.log("name is... it is newwwww" + event)
    // axios.post('movieApi/addMovie',{name:event.name,price:event.price,theater:event.theater,time:event.time,screen:event.screen})
    //       .then(function(res){
    //         console.log("add book" + res);    
    //        // history.push('/');
    //       })
    //       .catch(function(err){
    //         console.log("error occured")
    //       });
 }

 addTheater(){
   console.log("inside add theater");
   this.setState({add : !this.state.add,
     count:this.state.count + 1,
    arr:[...this.state.arr,1]})
     var i=0;
     return this.state.arr.map((i)=>{
       return <div>hello</div>
     })
 }

 newTheater(){
   return (
     <div> <div>
          <label htmlFor="theater">Theater</label>
        <Field name="theater" id="theater" component="input" type="text" />
        </div>
         <div>
          <label htmlFor="price">Price</label>
        <Field name="price" id="price" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="time">Time</label>
        <Field name="time" id="time" component="input" type="text" />
        </div>
         <div>
          <label htmlFor="screen">Time</label>
        <Field name="screen" id="screen" component="input" type="text" />
        </div></div>
   )
 }
 //This is the main component -------------------------------------------------------------------------------
   render(){
     const {handleSubmit} =this.props;
       return (
         <form onSubmit={handleSubmit(this.submit.bind(this))}>
           <div>
             <label htmlFor="name">name</label>
             <Field name="name" component="input" type="text" />
           </div>
           <div>{this.newTheater()}</div>
         <button onClick={()=>this.addTheater()}>Submit movie</button>
      <button type="submit">Submit</button>
        </form>
  )}

}
  AddMovie = reduxForm({
    form:'addnew'
  })(AddMovie);

export default AddMovie;
