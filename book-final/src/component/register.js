import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Field , reduxForm} from 'redux-form';
class RegisterForm extends Component{
 submit(values){
   const {dispatch} = this.props;
         axios.post('api/register',{name:values.firstName,email:values.email,username:values.lastName , password1 :values.password1,password2:values.password2})
        .then(function(res){
            console.log("he he he");
             dispatch({ type:"REGISTER_USER",
        payload : values
     })
           console.log("he he he");     
             return dispatch =>{ 
         dispatch({ type:"REGISTER_USER",
        payload : values
     })}

        })
        .catch(function(err){
            console.log("error occured")
        });
 }
  render(){
    const {handleSubmit} =this.props;
    return (
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
       <div>
        <label htmlFor="password1">Password</label>
        <Field name="password1" component="input" type="password" />
      </div>
       <div>
        <label htmlFor="password2">Password</label>
        <Field name="password2" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
        </form>
  )}

}
RegisterForm = reduxForm({
    form:'register'
})(RegisterForm);




export default RegisterForm;
