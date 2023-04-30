import React, { useContext, useState, useEffect, } from 'react';

import { Modal, SafeAreaView ,ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../context/auth';

import Style from './styles';



import firebase from '../../database/firebase';

//import { doc, setDoc } from "firebase/firestore"    getFirestore,; 

import { doc, setDoc } from "firebase/firestore";








function Home({ navigation }) {




   const db = firebase.firestore();
  


   var dta = new Date();
   var hours = dta.getHours();
   var minutes = dta.getMinutes();
   var day = dta.getDate().toString().padStart(2, '0');
   var month = (dta.getMonth() + 1).toString().padStart(2, '0');
   var year = dta.getFullYear();


   var today = day + "/" + month + "/" + year;



   /*     
      setCredencials(
          {
             ...credencials,[id]:0 ,
                credencials,[user]:"usuario" ,
                credencials,[email]:"" ,
                credencials,[password]:""                     
          }
        ) 
                   
   }
     */


   useEffect(() => {

      helloApp();

   }, [],);




   const { setUser , user , setId, id , email, setModal ,modal} = useContext(AuthContext);



   const [welcome, setWelcome] = useState();


  


   const [credencials, setCredencials] = useState(
      {
         nome: "",
         matricula: "",
         //img:""
      }
   );








   const signOut = async () => {
   
     await firebase.auth().signOut().then(() => {

      setUser("") &
      setId("") &
      navigation.navigate("Login")

       }).catch((error) => {
            Alert.alert("erro na funçao signOut")
       });          
   }






   const helloApp = () => {

      if (hours > 0 && hours < 12) {
         setWelcome("Bom dia!!!")
      } else if (hours >= 12 && hours < 18) {
         setWelcome("Boa tarde!!!")
      } else {
         setWelcome("Boa noite!!!")
      }
   }








   const handleInputChange = (atribute , value) => {

      setCredencials(
         {
          ...credencials,[atribute]:value
         }      
      )

   } 




   /*
   const setImg = async()=> {
      await
   }
    */
    
  
   const setCompleteRegister = async ()=> {

      await setDoc(doc(db, email, "Funcionario"),{

         matricula:credencials.matricula,
         nome:credencials.nome,
      // img:credencials.img

         /* possivel erro */
      }).then(()=>{  

            getUser();
            console.log("cadastrado ")

     }).catch((error)=>{
         console.log(error);
     });
 

   } 

  
   

   const getUser = async()=>{

     await db.collection(email).doc("Funcionario").get().then((snapshot) => {

         if (snapshot.data() != undefined) {
         
            setModal(false);   
            setUser(snapshot.data().nome);
            setId(snapshot.data().matricula);

       console.log (snapshot.data().matricula+"  "+snapshot.data().nome);
                      
         } else {
            setModal(true);
         }
      })


   }












  return (

   <LinearGradient
         colors={
            [
              'rgba(19, 70, 77, 0.4)',
              'rgba(10, 33, 35 ,1)',
           ]
           }         
        >



    <SafeAreaView style={Style.body}>        
        

      <LinearGradient

         colors={
            [
              'rgba(10, 40, 90, 0.97)',
              'rgba(19, 53, 75 ,1)',
           ]
           }
           style={Style.containerHeader}
        >


          <View style={Style.headerDesc}>
             <Text style={Style.textMain}> {` Tela Home `}</Text>
          </View>

         
           <View style={Style.containerInfo}>

             <View>
                <Text style={Style.textInfo}> {` usuário       : ${user}`}</Text>  
                <Text style={Style.textInfo}> {` matrícula nº  : ${id}`}</Text>
             </View>

               <View>
                 <TouchableOpacity
                  style={Style.menuBtn}
                  onPress={signOut}
                   >
                 <Text style={Style.textInfo}>Sair</Text>
                 </TouchableOpacity>
               </View>

            </View>         

         
         </LinearGradient>



          <View style={Style.containnerTime}>
               <Text style={Style.textInfo}> {` ${today} `}</Text>
          </View>



     <ScrollView >


        <View style={Style.containnerMain}>

            


           <View style={Style.contentMain}>





         

               <LinearGradient
                  colors={
                   [
                     'rgba(19, 50, 27, 0.4)',
                     'rgba(10, 13, 35 ,0.6)',
                  ]
                 }
                style={Style.containerCard}         
                 >

                  <Text style={Style.textAlert}>
                     {` ${welcome} ${user} , click e receba instruções do seu dia de trabalho!!!`}
                  </Text>



                <LinearGradient
                  colors={
                   [
                     'rgba(19, 110, 107, 0.4)',
                     'rgba(15, 113, 35 ,0.6)',
                  ]
                 }
                 style={Style.cardBtn}        
                 >

                  <TouchableOpacity
                   
                  >
                     <Text style={Style.textInfo}>Click !</Text>
                  </TouchableOpacity>


                </LinearGradient>  


              </LinearGradient>

             



              <LinearGradient
                  colors={
                   [
                     'rgba(19, 50, 27, 0.4)',
                     'rgba(10, 13, 35 ,0.6)',
                  ]
                 }
                style={Style.containerCard}         
                 >

                  <Text style={Style.textAlert}>
                     {` ${welcome}, ${user} click e conheça a sua equipe de trabalho!!!`}
                  </Text>




               <LinearGradient
                  colors={
                   [
                     'rgba(19, 110, 107, 0.4)',
                     'rgba(15, 113, 35 ,0.6)',
                  ]
                 }
                 style={Style.cardBtn}        
                 >

                  <TouchableOpacity
                    
                  >
                     <Text style={Style.textInfo}>Click !</Text>
                  </TouchableOpacity>
              
               </LinearGradient>

              </LinearGradient>







           


             <Modal
                animationType='fade'
                  visible={modal}
               >


               <View style={Style.modalContent}>


                  <Text style={Style.textAlert}>
                     {` ${welcome}  , complete o cadastro `}
                  </Text>

                
                 <View>

                   <TextInput style={Style.input}
                     placeholder=" digite o seu nome completo"
                     placeholderTextColor="#BBD441"
                     type="text"
                     onChangeText={
                      (valor) => handleInputChange('nome', valor)
                    }
                     value={credencials.nome}
                   />



        
                  <TextInput style={Style.input}
                    placeholder=" digite a sua matrícula"
                    placeholderTextColor="#BBD441"
                    type="text"
                    onChangeText={
                    (valor) => handleInputChange('matricula', valor)
                    }
                     value={credencials.matricula}
                  /> 

               </View>



               <LinearGradient
                  colors={
                   [
                     'rgba(19, 110, 107, 0.4)',
                     'rgba(15, 113, 35 ,0.6)',
                  ]
                 }
                 style={Style.cardBtn}        
                 >

                  <TouchableOpacity                     
                  >
                     <Text style={Style.textInfo}>Escolher uma foto</Text>
                  </TouchableOpacity>

                </LinearGradient>



                <LinearGradient
                  colors={
                   [
                     'rgba(19, 110, 107, 0.4)',
                     'rgba(15, 113, 35 ,0.6)',
                  ]
                 }
                 style={Style.cardBtn}        
                 >

                  <TouchableOpacity
                     onPress={setCompleteRegister}
                  >
                     <Text style={Style.textInfo}>Cadastrar</Text>
                  </TouchableOpacity>
             
                </LinearGradient>

                
             </View>


            </Modal>









            </View>





         </View>

       </ScrollView>






     



      </SafeAreaView>


   </LinearGradient>

   )




}

export default Home;