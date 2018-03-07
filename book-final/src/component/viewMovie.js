import React,{Component} from 'react';
import RegisterForm from './register';
import {connect} from 'react-redux';
import axios from 'axios';
import isBlob from '../../node_modules/react-image-file/src/isBlob';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/RaisedButton';

class ViewMovies extends Component{
  //constructor is called-----------------------------------------------------------------------------------
  constructor(){
                super();
                this.state={
                               movies:[],
                               count:0,
                               
                           }
                this.getData = this.getData.bind(this);
                this.addButton = this.addButton.bind(this);
                this.user = this.user.bind(this);
  }
  //This function is called automatically after component is rendered--------------------------------------- 
  componentDidMount(){
                this.getData();
                
  }
  //This function check the updates and re-render the updates ---------------------------------------------- 
  componentDidUpdate(prevProps, prevState) {
                if ( this.props.user) {
                          console.log("inside did update");
                          this.addButton();
                }
  }
  //This function is called to get data from the server ----------------------------------------------------
  getData(){
                axios.get('movieApi/getMovie').then(res=>{
                console.log(" component will mount ...." + res.data);  
                this.setState({movies:res.data});   
             })
               .catch(function(err){
                console.log("error occured ....." + err)
             });
  }
//This function is called to create table from data recieved from the server --------------------------------- 
 bookList(){
 
                return this.state.movies.map((b,l)=>{
                          console.log("hello there ....and freaking awesome");
                          return (<TableRow><TableRowColumn>{b. name}</TableRowColumn>
                                   <TableRowColumn><img src={b.img} /></TableRowColumn>
                                  <TableRowColumn><Link to={"/detail/"+b._id}>BUY</Link></TableRowColumn>
                                  </TableRow>);
                 });
 }
 theater(thtr){
   console.log("inside the theater" + thtr.length );
   return thtr.map((b,l)=>{
     console.log("names of theater....")
     return <h4>{b.theater}</h4>})
 }
//This function is called when admin is logged in ----------------------------------------------------------
 addButton(){
                console.log(this.state.count+1 + "this is the props" + this.props.user);
                return <div>
                         {this.props.user?<Link to="/addBook"><FloatingActionButton type="submit" label="ADDBOOK" /></Link>:<div>hello u are user</div>}
                       </div>
 }
 //This function is called when user want to log out ------------------------------------------------------
 user(){
                return <div>
                         {this.props.log?<FloatingActionButton type="submit" label="LOGOUT" onClick={this.logout.bind(this)}/>:<div>no-one logged in</div>}
                       </div>
 }
 //This is the logout function ---------------------------------------------------------------------------
 logout(){     
               const {dispatch} = this.props;
               console.log("inside logout");
               localStorage.removeItem('token');
                dispatch({ type:"LOG_OUT",
              })
         }
// This is the main component-----------------------------------------------------------------------------         
 render(){
       
               return (
                         <div>
                           <MuiThemeProvider>
                             <Table>
                               <TableHeader>
                                 <TableRow>
                                    <TableHeaderColumn>MOVIE NAME</TableHeaderColumn>
                                    <TableHeaderColumn>image</TableHeaderColumn>
                                    <TableHeaderColumn>{this.user()}</TableHeaderColumn>
                                 </TableRow>
                               </TableHeader>
                               <TableBody >
                                 {this.bookList()}  
                               </TableBody>
                             </ Table >
                              {this.addButton()}
                           </MuiThemeProvider>
                        </div> 
             );
   }
}
//This function is getting state of the whole application --------------------------------------------------
function mapStateToProps(state){
                 console.log("this is viewbook" + state.other.admin + "success" + state.other.success+ "user" + state.other.user );
                 return {
                     user:state.other.admin,
                     log:state.other.success,
                       
                  }
}
export default connect(mapStateToProps)(ViewMovies);