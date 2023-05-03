import React, { useEffect, useContext, useState } from 'react';

import { Alert, KeyboardAvoidingView,  Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../context/auth';

import Style from './styles';



import firebase from '../../database/firebase';

import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

//import { getAuth, sendPasswordResetEmail } from "firebase/auth";


const auth = getAuth();





function Login({ navigation }) {







  const db = firebase.firestore();


  const { setUser, setId, setImgUri ,setModal } = useContext(AuthContext);




  const [modalPassword, setModalPassword] = useState(false);

  //const [emailPassword , setEmailPassword] = useState(false);









  const [credencials, setCredencials] = useState(
    {
      email: "",
      password: ""
    }
  );





  const [errorValidate, setErrorValidate] = useState(
    {
      error: false,
      msg: ""
    }
  );





  const handleInputChange = (atribute, value) => {
    setCredencials(
      {
        ...credencials, [atribute]: value
      }
    )
  }






  const setLogar = async () => {

    await signInWithEmailAndPassword(auth, credencials.email, credencials.password)
      .then((userCredential) => {

        const user = userCredential.user;
        getUser(user.email)

        console.log(user.email);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;


        setErrorValidate(
          {
            ...errorValidate, ['error']: true,
            errorValidate, ['msg']: "email ou senha incorretos!"
          }
        )


        setCredencials(
          {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
          }
        )

        console.log(" erro nas credenciais de login " + errorCode + " " + errorMessage)
      });

  }




 





  /*
  firebase.auth().signInWithEmailAndPassword(credencials.email, credencials.password)
  .then((userCredencial)=>{
          
     //const user_email = firebase.auth().currentUser.email;              
    // navigation.navigate("Home") ;
    // let user = userCredential.user;
    //let userId = userI.uid;
    //  getUserData(user.email)

     console.log(user.email);

  }).cath((error)=>{
 
   let errorCode = error.code;
   let errorMessage = error.message; 
   
   
  });
  */






  const setForgetPassword = async () => {

   await sendPasswordResetEmail(auth, credencials.email)

      .then(() => {

        setModalPassword(false)

        setCredencials(
          {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
          }
        )
        
        Alert.alert(           
          ' VERIFIQUE SUA CAIXA DE E-MAIL',
          [
            { text: 'ok', },         
          ],
          { cancelable: false }         
          );


        console.log("verifique sua caixa de email")

      }).catch((error) => {
        console.log(error)
      })


  }





  const getUser = async (id) => {

    await db.collection(id).doc("Funcionario").get().then((snapshot) => {

      if (snapshot.data() != undefined) {


        setCredencials(
          {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
          }
        )



        setUser(snapshot.data().nome)
        setId(snapshot.data().matricula)
       
        
        setModal(false)
        navigation.navigate("Home");


        console.log(
          snapshot.data().matricula
          + "  " +
          snapshot.data().nome
        );


      } else {

        setErrorValidate(
          {
            ...errorValidate, ['error']: true,
            errorValidate, ['msg']: " erro, favor mais tarde ou entre em contato com suporte "
          }
        )


        setCredencials(
          {
            ...credencials, ['email']: "",
            credencials, ['password']: "",
          }
        )

        console.log(" erro ao carregrar dados no firebase  " + errorCode + " " + errorMessage)
      }
    })

  }





  /*

   const getUser = async (id)=>{

  //   const collect =  firebase.db.collection(id) 

  //   const userName = await userId.doc ("nome").get();

  //   console.log(user.data());
   
     db.collection(id).doc("nome").get().then((snapshot) => {

         if (snapshot.data() != undefined) {
 
            setModal(false);
            
            setName(snapshot.data().name);
            setConta(snapshot.data().number);
            setUserName(snapshot.data().name);
            setUserConta(snapshot.data().number);

         } else {
            setModal(true);
         }
    })

  }
  
 */






  /*
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
   */





   




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
          <Text style={Style.textMain}>{` Tela Login `}</Text>
        </View>




        {/*  
               <Text> {` user : ${dataUser.user}`}</Text>
               <Text> {` id : ${dataUser.id}`}</Text>
               <Text> {` email : ${dataUser.email}`}</Text>
               <Text> {` password : ${dataUser.password}`}</Text> 
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
              (valor) => handleInputChange('email', valor)

            }
            value={credencials.email}
          />




          <TextInput style={Style.input}
            placeholder=" digite a senha"
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
                  <Text style={Style.textInfo}>Login</Text>
                </TouchableOpacity>

              </View>

              :
              <View>

                <TouchableOpacity
                  style={Style.containerBtn}
                  onPress={setLogar}
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



          <View style={Style.openModal} >

            <Text style={Style.textAlert}
              onPress={() => setModalPassword(true)}
            >
              {` esqueceu a senha ? `}
            </Text>

          </View>



       </LinearGradient>









       <Modal
          animationType='fade'
          visible={modalPassword}
        >

          <View style={Style.modalContent}>


            <TextInput style={Style.input}
              placeholder=" informe o e-mail"
              placeholderTextColor="#BBD441"
              type="text"
              onChangeText={
                (valor) => handleInputChange('email', valor)
              }
              value={credencials.email}
            />



            {

              credencials.email == "" 
                ?

                <View>

                  <TouchableOpacity
                    style={Style.containerBtn}
                    disabled={true}
                  >
                    <Text style={Style.textInfo}>Enviar</Text>
                  </TouchableOpacity>

                </View>

                :
                <View>

                  <TouchableOpacity
                    style={Style.containerBtn}
                    onPress={() => setForgetPassword}
                  >
                    <Text style={Style.textInfo}>Enviar</Text>
                  </TouchableOpacity>

                </View>

            }

         


          </View>

        </Modal>



     


     </LinearGradient>


 

 </KeyboardAvoidingView>


  )

}

export default Login;