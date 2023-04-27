
import React , {createContext,useState} from 'react';


export const AuthContext = createContext({});


  function AuthProvider ({children}){

   
     const [user,setUser] = useState ( ) ;

     const [id,setId] = useState ( ) ;

     /*
     const [credencials,setCredencials] = useState ( 
      { 

         id:0,
         user:"",
         email:"",
         password:"", 

      } );  
     */



     return(
       <AuthContext.Provider value={ 
          { 
            // setCredencials ,
            // credencials
            setUser ,
            user,
            setId,
            id
          } 
          
          }>
    
          {children} 
       </AuthContext.Provider>
     )
  }

  export default  AuthProvider;






