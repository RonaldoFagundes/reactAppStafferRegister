
import React, { useContext, useState } from 'react';


import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';




import { AuthContext } from '../../context/auth';




import firebase from '../../database/firebase';




import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();





import Style from './styles';






function Cad({ navigation }) {








   const { setEmail } = useContext(AuthContext);




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





   const handleInputChange = (atribute , value) => {
      setCredencials(
         {
          ...credencials,[atribute]:value
         }
      )
   } 




  







      const setRegister = async ()=> {

        await createUserWithEmailAndPassword(auth, credencials.email, credencials.password)
         .then((userCredential) => {
                      
           const user = userCredential.user;
           
           setEmail(user.email)
           navigation.navigate("Home") ;
  
           console.log(user.email)

         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
         

           setErrorValidate(
             {
              ...errorValidate,['error']:true ,
                 errorValidate,['msg']:"erro, favor mais tarde ou entre em contato com suporte"
             }
           );


           setCredencials(
             {
              ...credencials,['email']:"",
                 credencials,['password']:""
             }
           );

           console.log(" erro no metodo auth "+errorCode+" "+errorMessage)
         });
       
      
       
       
      /*
       firebase.auth().createUserWithEmailAndPassword(credencials.email, credencials.password)
        .then((userCredencial)=>{
                
           let userI = userCredencial.user;
           let userId = userI.uid;
           let userEmail = userI.email;           

          // setId(userEmail)
         //  navigation.navigate("Home") ;
             console.log(userEmail);

        }).cath((error)=>{       
         let errorCode = error.code;
         let errorMessage = error.message;
         console.log(errorCode+" "+errorMessage)
        });
         */


      };
        

     




         const validate = () =>{
       
      if ( !credencials.email.includes('@')   ) {

            setErrorValidate(
              {
                ...errorValidate,['error']:true ,
                   errorValidate,['msg']:"email invalido"
              }
            );

            setCredencials(
              {
                ...credencials,['email']:"",
                   credencials,['password']:""
              }
            );

             console.log("email não valido");

           
      }else if ( !credencials.email.includes ('.com') ) {

         setErrorValidate(
            {
              ...errorValidate,['error']:true ,
                 errorValidate,['msg']:"email invalido"
            }
          );
          setCredencials(
            {
              ...credencials,['email']:"",
                 credencials,['password']:""
            }
          );
           console.log("email não valido");
              
       
   }else if ( credencials.password.length < 8 ) {
           
         setErrorValidate(
            {
              ...errorValidate,['error']:true ,
                 errorValidate,['msg']:"cadastre uma senha com no minímo 8 caracteres"
            }
          )
          setCredencials(
            {
               ...credencials,['email']:"",
                  credencials,['password']:""
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
               ...credencials,['email']:"",
                  credencials,['password']:""
            }
          );           
            console.log(" validação ok");
            setRegister();
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


                {/*

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
               */}




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
                  placeholder=" cadastre uma senha"
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

         


            

            



         </View>
         

      </LinearGradient>


   )



}

export default Cad;