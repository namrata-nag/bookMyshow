import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import history from '../hist';
import {Redirect} from 'react-router-dom';
import {Field , reduxForm} from 'redux-form';
//const  { DOM: { input, select, textarea } } = React
//import {login} from '../action/loginAction';
class LoginForm extends Component{
  login(values){
       const {dispatch} = this.props;
        console.log("title is... " + values.login)
      if(values.login=="Admin")  { 
         console.log("title is... " + values.login)
        axios.post('admin/login',{username:values.username , password:values.password1})
        .then(function(res){
            localStorage.setItem('token','LOGGED_IN');
                dispatch({ type:"LOGIN_ADMIN",
        payload : values.login
       
     })
     
     history.push('/');
          
        }) 
        .catch(function(err){
                     console.log("error occured" + err)
               });}

               else{
                  axios.post('api/login',{username:values.username , password:values.password1})
        .then(function(res){
            localStorage.setItem('token','LOGGED_IN');
                dispatch({ type:"LOGIN_ADMIN",
        payload : values.login
       
     })
     
     history.push('/');
          
        }) 
        .catch(function(err){
                     console.log("error occured" + err)
               });
               }
    
        
 
  }
  
  render(){
    const {handleSubmit} =this.props;
    return (<div>{!this.props.log?<form onSubmit={handleSubmit(this.login.bind(this))}>
         <div>
        <label>LOGIN AS</label>
        <div>
          <label><Field name="login" component="input" type="radio" value="Admin"/> ADMIN</label>
          <label><Field name="login" component="input" type="radio" value="User"/> USER </label>
        </div>
      </div>
        <div>
        <label htmlFor="username">First Name</label>
        <Field name="username" component="input" type="text" />
      </div>
       <div>
        <label htmlFor="password1">Password</label>
        <Field name="password1" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>:<div>you have been logged </div>}</div>
        
  )}

}
LoginForm = reduxForm({
    form:'login'
})(LoginForm);

function mapStateToProps(state){
  return {
    log:state.other.success,
  }
}




export default connect(mapStateToProps)(LoginForm) ;