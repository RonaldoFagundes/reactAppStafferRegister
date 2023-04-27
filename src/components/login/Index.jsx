import React, { useContext , useState} from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../context/auth';

import Style from './styles';





    function Login ({navigation}){


     // const { setCredencials, credencials } = useContext(AuthContext);

  


      const emailValid = "nikolau@tesla.com";
      const passwordValid ="12345678";
      const userName ="Nikolau";  
      const userId = "1890" 





     const { setUser, user,  setId , id  } = useContext(AuthContext);


     const [credencials , setCredencials] = useState (
       {      
        userEmail:"",
        userPassword:""
       }
     ); 




     const [errorValidate, setErrorValidate] = useState({
      error: false,      
      msg:""      
      });





   

       const handleInputChange = (atribute , value) => {
        setCredencials(
           {
            ...credencials,[atribute]:value
           }
        )
     } 
    



    const validate = () =>{
           
      if ( credencials.userEmail === emailValid && credencials.userPassword === passwordValid ) {


        setErrorValidate(
          {
            ...errorValidate,['error']:false ,
               errorValidate,['msg']:""
          }
        )

          setCredencials(
              {
            ...credencials,['userEmail']:"",
               credencials,['userPassword']:"",
            }
          )
            setUser(userName);
            setId(userId);
            navigation.navigate("Home"); 

            console.log("credênciais validas ir para tela home");

          }else {

            setErrorValidate(
              {
                ...errorValidate,['error']:true ,
                   errorValidate,['msg']:"email ou senha incoretos!"
              }
            )

            setCredencials(
              {
            ...credencials,['userEmail']:"",
               credencials,['userPassword']:"",
            }
          )
          console.log("email ou senha invalido")
          }
           
          
       }


    


   return(


   

      <LinearGradient
         colors={
            [
              'rgba(10, 40, 90, 0.97)',
              'rgba(19, 53, 75 ,1)',
           ]
           }     
           style={Style.body}    
         >

          


         <View style={Style.containnerMain}>

            <View style={Style.containerInfo}>
               <Text style={Style.textMain}>{` Tela Login `}</Text>
            </View>    

              {/* 
               <Text> {` user : ${user}`}</Text>
               <Text> {` id : ${id}`}</Text>
              */}



              <LinearGradient
                colors={
                   [
                    'rgba(19, 50, 27, 0.4)',
                     'rgba(10, 13, 35 ,0.6)',
                   ]
                   }     
                  style={Style.contentMain}    
                >




                 <TextInput style={Style.input}
                    placeholder=" digite o e-mail"
                    placeholderTextColor="#BBD441"
                    type="text"
                     onChangeText={
                       (valor) => handleInputChange('userEmail',valor)
                    
                       }
                        value={credencials.userEmail}
                   /> 
 



                  <TextInput style={Style.input}
                    placeholder=" digite a senha"
                    placeholderTextColor="#BBD441"
                    secureTextEntry={true}
                    type="text"
                     onChangeText={
                      (valor) => handleInputChange('userPassword',valor)
                      
                       }
                         value={credencials.userPassword}
                    /> 


                    {

                     credencials.userEmail == "" && credencials.userPassword == ""
                      ?

                     <View>
                 
                      <TouchableOpacity
                          style={Style.containerBtn}
                          disabled={true}
                         >
                          <Text style={Style.textInfo}>Login</Text>
                      </TouchableOpacity>

                     </View>

                     :
                     <View>

                      <TouchableOpacity
                          style={Style.containerBtn}
                          onPress={validate}
                          >
                        <Text style={Style.textInfo}>Logar</Text>
                      </TouchableOpacity>
                             
                     </View>

                  }


                  {
                    errorValidate.error === true 
                     ?

                     <View>
                      <Text style={Style.textAlert}>{errorValidate.msg}</Text>                     
                     </View>

                     :
                     <View></View>
                   }

           



               <Text style={Style.textInfo}>                  
                   {` não tem cadastro ?  `}
                   
                  <Text style={Style.textAlert}
                      onPress={() => navigation.navigate("Cad")}
                     >
                   {` faça o cadastro agora... `}
                  </Text>

                </Text>



            
             </LinearGradient>



               


       
         </View>

      </LinearGradient>

          )

   }

   export default Login;