
import React, { useContext, useEffect, useState } from 'react';


import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


import { AuthContext } from '../../context/auth';


//import firebase from '../../database/firebase';


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



import Style from './styles';








function Cad({ navigation }) {



   const auth = getAuth();




   const { setEmail, setModal, setUser } = useContext(AuthContext);


   const [errorValidate, setErrorValidate] = useState({
      error: false,
      msg: ""
   });



   const [credencials, setCredencials] = useState(
      {
         email: "",
         password: ""
      }
   );







   const handleInputChange = (atribute, value) => {
      setCredencials(
         {
            ...credencials, [atribute]: value
         }
      )
   }







   useEffect(() => {

      cleanInput();

   }, [],);








   const setRegister = async () => {

      await createUserWithEmailAndPassword(auth, credencials.email, credencials.password)
         .then((userCredential) => {

            const user = userCredential.user;

            setEmail(user.email)
            setModal(true)
            setUser("");
            navigation.navigate("Home");

            console.log(user.email)

         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;


            setErrorValidate(
               {
                  ...errorValidate, ['error']: true,
                  errorValidate, ['msg']: " email informado já cadastrado!"
               }
            );


            setCredencials(
               {
                  ...credencials, ['email']: "",
                  credencials, ['password']: ""
               }
            );

            console.log(" erro no metodo auth " + errorCode + " " + errorMessage)
         });

   };







   const validate = () => {

      if (!credencials.email.includes('@')) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "informe um email valido"
            }
         );

         setCredencials(
            {
               ...credencials, ['email']: "",
               credencials, ['password']: ""
            }
         );

         console.log("email não valido");


      } else if (!credencials.email.includes('.com')) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "informe um email valido"
            }
         );

         setCredencials(
            {
               ...credencials, ['email']: "",
               credencials, ['password']: ""
            }
         );
         console.log("email não valido");


      } else if (credencials.password.length < 8) {

         setErrorValidate(
            {
               ...errorValidate, ['error']: true,
               errorValidate, ['msg']: "cadastre uma senha com no minímo 8 caracteres"
            }
         )
         setCredencials(
            {
               ...credencials, ['email']: "",
               credencials, ['password']: ""
            }
         )
         console.log(" senha menor que 8 caracteres")
      } else {
         setErrorValidate(
            {
               ...errorValidate, ['error']: false,
               errorValidate, ['msg']: ""
            }
         )

         console.log(" validação ok");
         setRegister();
      }
   }






   const cleanInput = () => {

      setCredencials(
         {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
         }
      )
   }









   return (

      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={Style.body}
      >



         <LinearGradient
            colors={
               [
                  'rgba(10, 40, 90, 0.97)',
                  'rgba(19, 53, 75 ,1)',
               ]
            }
            style={Style.containerMain}
         >





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
                  placeholder=" digite o seu e-mail"
                  placeholderTextColor="#BBD441"
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('email', valor)
                  }
                  value={credencials.email}
               />


               <TextInput style={Style.input}
                  placeholder=" senha com no minímo 8 caracteres"
                  placeholderTextColor="#BBD441"
                  secureTextEntry={true}
                  type="text"
                  onChangeText={
                     (valor) => handleInputChange('password', valor)

                  }
                  value={credencials.password}
               />

               {

                  credencials.email == "" && credencials.password == ""
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




         </LinearGradient>

      </KeyboardAvoidingView>
   )



}

export default Cad;