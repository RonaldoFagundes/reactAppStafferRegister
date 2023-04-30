import React, {useEffect , useContext , useState} from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../context/auth';

import Style from './styles';



//import firebase from '../../database/firebase';








    function Login ({navigation}){


     // const { setCredencials, credencials } = useContext(AuthContext);

  


     // const emailValid = "nikolau@tesla.com";
     // const passwordValid ="12345678";
     // const userName ="Nikolau";  
     // const userId = "1890" 

     //const db = firebase.firestore();


     const { setUser } = useContext(AuthContext);







       const [dataUser , setDataUser] = useState ({
          authEmail : "",
          authPassword :"",
       }); 





       const [credencials, setCredencials] = useState(
        {
           email: "",
           password: ""
        }
     );





    const [errorValidate, setErrorValidate] = useState({
     error: false,      
     msg:""      
     });







      




     /*
      const setLogar = ()=>{

        firebase.auth().signInWithEmailAndPassword(credencials.email, credencials.password)
        .then((userCredencial)=>{

                
           //const user_email = firebase.auth().currentUser.email;
       
        
          // navigation.navigate("Home") ;

          let user = userCredencial.user;
          //let userId = userI.uid;
          //  getUserData(user.email)

         //  console.log(user.email);

        }).cath((error)=>{
       
         let errorCode = error.code;
         let errorMessage = error.message;

       
         
         setErrorValidate(
          {
            ...errorValidate,['error']:true ,
               errorValidate,['msg']:"email ou senha incorretos!"
          }
        )



        setCredencials(
          {
        ...credencials,['userEmail']:"",
           credencials,['userPassword']:"",
        }
        )

         console.log(" erro nas credenciais de login "+errorCode+" "+errorMessage)

        });
     }

     */






   /*
     const getUser = async (id)=>{


   //   const collect =  firebase.db.collection(id) 

   //    const userName = await userId.doc ("nome").get();

    //     console.log(user.data());
    
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







       


     


     


     





   

       const handleInputChange = (atribute , value) => {
        setCredencials(
           {
            ...credencials,[atribute]:value
           }
        )
     } 
    







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
                       (valor) => handleInputChange('email',valor)
                    
                       }
                        value={credencials.email}
                   /> 
 



                  <TextInput style={Style.input}
                    placeholder=" digite a senha"
                    placeholderTextColor="#BBD441"
                    secureTextEntry={true}
                    type="text"
                     onChangeText={
                      (valor) => handleInputChange('password',valor)
                      
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
                        //  onPress={setLogar}
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