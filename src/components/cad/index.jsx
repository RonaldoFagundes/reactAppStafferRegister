
import React, { useContext, useState } from 'react';


import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../context/auth';



import Style from './styles';






function Cad({ navigation }) {








   const { setUser, user, setId, id } = useContext(AuthContext);




   const [errorValidate, setErrorValidate] = useState({
      error: false,
      msg: ""
   });



   const [credencials, setCredencials] = useState(
      {
         userId: "",
         userName: "",
         userEmail: "",
         userPassword: ""
      }
   );



   const handleInputChange = (atribute , value) => {
      setCredencials(
         {
          ...credencials,[atribute]:value
         }
      )
   } 



         const validate = () =>{
       
      if ( !credencials.userEmail.includes('@')   ) {

            setErrorValidate(
              {
                ...errorValidate,['error']:true ,
                   errorValidate,['msg']:"email invalido"
              }
            );
            setCredencials(
              {
                ...credencials,['userName']:"",
                   credencials,['userId']:"",
                   credencials,['userEmail']:"",
                   credencials,['userPassword']:""
              }
            );
             console.log("email não valido");

           
      }else if ( !credencials.userEmail.includes ('.com') ) {

         setErrorValidate(
            {
              ...errorValidate,['error']:true ,
                 errorValidate,['msg']:"email invalido"
            }
          );
          setCredencials(
            {
              ...credencials,['userName']:"",
                 credencials,['userId']:"",
                 credencials,['userEmail']:"",
                 credencials,['userPassword']:""
            }
          );
           console.log("email não valido");
              
       
   }else if ( credencials.userPassword.length < 8 ) {
           
         setErrorValidate(
            {
              ...errorValidate,['error']:true ,
                 errorValidate,['msg']:"cadastre uma senha com no minímo 8 caracteres"
            }
          )
          setCredencials(
            {
               ...credencials,['userName']:"",
                  credencials,['userId']:"",
                  credencials,['userEmail']:"",
                  credencials,['userPassword']:""
            }
          )
           console.log(" senha menor que 8 caracteres")
      }else{
         setErrorValidate(
            {
              ...errorValidate,['error']:false ,
                 errorValidate,['msg']:""
            }
          )
          setCredencials(
            {
               ...credencials,['userName']:"",
                  credencials,['userId']:"",
                  credencials,['userEmail']:"",
                  credencials,['userPassword']:""
            }
          );

            setUser(credencials.userName);
            setId(credencials.userId)
            navigation.navigate("Home") ;
            console.log(" cadastro realizado com sucesso!!");
      }
   }











   /*
    const setLogged =()=>{
      setUser("logado");
       navigation.navigate("Home");
    }


   const setLogar =()=>{
    navigation.navigate("Login")
   }
    */




   return (

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
             <Text style={Style.textMain}>{` Tela Cadastro `}</Text>
          </View>
           




          


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
                  placeholder=" digite o seu nome completo"
                  placeholderTextColor="#BBD441"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('userName', valor)

                  }
                  value={credencials.userName}
               />

               <TextInput style={Style.input}
                  placeholder=" digite a sua matrícula"
                  placeholderTextColor="#BBD441"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('userId', valor)

                  }
                  value={credencials.userId}
               />

               <TextInput style={Style.input}
                  placeholder=" digite o seu e-mail"
                  placeholderTextColor="#BBD441"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('userEmail', valor)

                  }
                  value={credencials.userEmail}
               />


               <TextInput style={Style.input}
                  placeholder=" cadastre uma senha"
                  placeholderTextColor="#BBD441"
                  secureTextEntry={true}
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('userPassword', valor)

                  }
                  value={credencials.userPassword}
               />



               {

          credencials.userName  == "" && credencials.userId == "" && 
          credencials.userEmail == "" && credencials.userPassword == ""
                     ?

                     <View>

                        <TouchableOpacity
                           style={Style.containerBtn}
                           disabled={true}
                        >
                           <Text style={Style.textInfo}>Cadastro</Text>
                        </TouchableOpacity>

                     </View>

                     :
                     <View>

                        <TouchableOpacity
                           style={Style.containerBtn}
                           onPress={validate}
                        >
                           <Text style={Style.textInfo}>Cadastrar</Text>
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
               {`Já tem cadastro ?  `}

               <Text style={Style.textAlert}
                  onPress={() => navigation.navigate("Login")}
               >
                  {` faça o login agora... `}
               </Text>

            </Text>


            </LinearGradient>

         


            

            



         </View>
         

      </LinearGradient>


   )



}

export default Cad;