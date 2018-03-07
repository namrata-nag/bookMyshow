import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field , reduxForm} from 'redux-form';
import history from '../hist';
import NewTheater from './newTheater';
//const  { DOM: { input, select, textarea } } = React
class AddMovie extends Component{
    constructor(){
                super();
                this.state={
                               documents:[]
                         } 
                         this.addTheater = this.addTheater.bind(this);          
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
     console.log("name is... it is newwwww" + event.theater+ "document " + this.state.documents.length)
    axios.post('movieApi/addMovie',{name:event.name,price:event.price,theater:event.theater,time:event.time,screen:event.screen,imgPath:event.imgFile})
          .then(function(res){
            console.log("add book" + res);    
           history.push('/');
          })
          .catch(function(err){
            console.log("error occured")
          });
 }

 addTheater(i){
    const documents = this.state.documents.concat(NewTheater);
   console.log("inside add theater");
    
      this.setState({ documents });
 }

//  newTheater(){
//    return (
//      <div><NewTheater /></div>
//    )
//  }
 //This is the main component -------------------------------------------------------------------------------
   render(){
      const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } />
    });
     const {handleSubmit} =this.props;
       return (
         <div className="row">
         <form onSubmit={handleSubmit(this.submit.bind(this))}>
           <div className="row">
           <div className="input-field col s6">
             <label htmlFor="name">name</label>
             <Field name="name" component="input" type="text"  className="validate"/>
             </div> 
           </div> 
           
        <a onClick={ this.addTheater }>Add</a>
    
      <div className="inputs">
        { documents }
      </div>
      <button type="submit">Submit</button>
        </form>
        </div>
  )}

}
  AddMovie = reduxForm({
    form:'addnew'
  })(AddMovie);

export default AddMovie;
