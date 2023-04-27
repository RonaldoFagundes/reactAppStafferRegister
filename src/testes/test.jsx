


import React, { useContext , useState} from 'react';

import { View, Text } from 'react-native';

import { AuthContext } from '../../context/auth';

import Style from './styles';

            function Login ({navigation}){
   /*
    class Login extends Component{
    constructor(props){
      super(props)
     } 

    static contextType = AuthContext
    state = {email}

   */

   const { setUser } = useContext(AuthContext);

   cadastrar=()=>{
     navigation.navigate("Cad")
   }

   navegar=()=>{
      navigation.navigate("Home")
      setUser("caralho")
    }

   /*
    render(){    
    const { user, setUser } = this.context
   */

     return(

        <View style={Style.body}>

            <Text style={Style.textMain}>
                  Tela de Login
            </Text>

         <View style={Style.containnerMain}>            


            <Text style={Style.textMain}

                onPress={() => cadastrar()}
             >               
               {` fazer cadastro `}
            </Text>


            <Text style={Style.textMain}

               onPress={ () => navegar() }
              >
                {` fez Login  vai para o home !`}
            </Text>

         </View>

       </View>

      )
 // }
}
export default Login;








function Cad ({navigation}) {
  /*
class Cad extends Component{
    constructor(props){
      super(props)
   } 
    render(){
   */



      return (
         <View>

            <Text>Tela de Cadastro</Text>


           <Text
               onPress={() =>  navigation.navigate("Login")}
             >
              {` fazer login `}
          </Text>
            
         </View>

      )

    }

//}

//export default Cad;




function Home ({navigation}){
  /*
  class Home extends Component{
      constructor(props){
        super(props)
     }
     static contextType = AuthContext
   
      render(){ 
     const { user } = this.context
    */
  
  
  
     const { user } = useContext(AuthContext);
  
        return (
           <View>
  
              <Text> {` Tela Home user: ${user}`}</Text>
  
  
             <Text
                 onPress={() =>  navigation.navigate("Login")}
               >
                {` fazer log out `}
            </Text>
              
           </View>
  
        )
  
      }
  
  //}
  
 // export default Home;





 /*
import React ,{Component ,createContext} from 'react';


const AuthContext = createContext({});

  class AuthProvider extends Component  {

       state ={ user }

       setUser=(value)=>{
          this.state({user:value});
       }
    
       render(){

        const { children } = this.props
        const { user } = this.state
        const { setUser } = this.setUser 

         return(

            <AuthContext.Provider value={ 
                {                   
                  user,
                  setUser,
                } 
                
                }>          
                {children} 
             </AuthContext.Provider>
            
         )
       }

  }

  export default AuthContext

   export { AuthProvider }

  */ 