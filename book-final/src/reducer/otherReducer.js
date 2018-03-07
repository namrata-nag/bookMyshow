export default function (state={registration:false,success:false},action){
    console.log("---action is----  " + action.type + "----payload ---" + action.payload);
    if(localStorage.getItem('token')=='ADMIN'){
      action.type='LOGIN_ADMIN';
   
    
      console.log("inside ADMIN ACTION")
    }
    else if(localStorage.getItem('token')=='USER'){
            action.type='LOGIN_USER';
              console.log("inside USER ACTION")
    }
    switch(action.type){
        case 'REGISTER_USER' :
         let state1 ={
                  registration:true,
                payload:action.payload.username }
              return state1 ;
         case 'LOGIN_USER' :
            let state2 ={
                 success:true,
                  admin:false,
                user:true }
              return state2 ;

        case 'LOGIN_ADMIN' :
           let state3={
                success:true,
                admin:true,
                user:false
           } 
           return state3;
        case 'LOG_OUT' : 
          let state4={
            success:false,
                admin:false,
                user:false
          }
          return state4

    }
       
         
    return state;
}
