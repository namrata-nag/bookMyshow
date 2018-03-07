import React,{Component} from 'react';
import {Field , reduxForm} from 'redux-form';


class NewTheater extends Component {
 x = 1;

  render() {
      return (<div> <div >
          <label htmlFor="theater">Theater {this.props.index}</label>
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
          <label htmlFor="screen">Screen</label>
        <Field name="screen" id="screen" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="imgFile">Image file name</label>
        <Field name="imgFile" id="imgFile" component="input" type="text" />
      </div></div>)
  }
}

export default NewTheater;