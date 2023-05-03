
import React , {createContext,useState} from 'react';


export const AuthContext = createContext({});




        function AuthProvider ({children}){

   

       

     const [modal , setModal] = useState (true) ;

     const [email,setEmail] = useState ( ) ;   

     const [user,setUser] = useState ( ) ;

     const [id, setId] = useState ( ) ;

    




     return(
       <AuthContext.Provider value={ 
          { 
            setModal,
            modal,
            setEmail,
            email,
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






