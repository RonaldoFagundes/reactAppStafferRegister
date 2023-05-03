import React, { useContext, useState, useEffect, } from 'react';

import {
    Alert, 
    Image, 
    KeyboardAvoidingView, 
    Linking,
    Modal,     
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
   } from 'react-native';




import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../context/auth';

import Style from './styles';


import * as ImagePicker from 'expo-image-picker';



import firebase from '../../database/firebase';



import { doc, setDoc } from "firebase/firestore";



 // import {getStorage, ref, getDownloadURL} from 'firebase/storage';





import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";










function Home({ navigation }) {




   const db = firebase.firestore();

  

   var dta = new Date();
   var hours = dta.getHours();
   var minutes = dta.getMinutes();
   var day = dta.getDate().toString().padStart(2, '0');
   var month = (dta.getMonth() + 1).toString().padStart(2, '0');
   var year = dta.getFullYear();


   var today = day + "/" + month + "/" + year;






   const { setUser, user, setId, id, email, setModal, modal } = useContext(AuthContext);




   const [welcome, setWelcome] = useState();


   



   const [imgUrl , setImgUrl] = useState();


   const [imgPicker , setImgPicker] = useState();


 
 // const [resultUri , setResultUri] = useState();



 

  const storage = getStorage();
  






   const [credencials, setCredencials] = useState(
      {
         nome: "",
         matricula: "",
       }
   );








   useEffect(() => {

      helloApp();
      getImageUrl();
     
   }, [],);






   const signOut = async () => {

      await firebase.auth().signOut().then(() => {

         setUser("") &
            setId("") &
            navigation.navigate("Login")

      }).catch((error) => {
         consple.log("erro na funçao signOut")
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






   const handleInputChange = (atribute, value) => {

      setCredencials(
         {
            ...credencials, [atribute]: value
         }
      )

   }






   const setCompleteRegister = async () => {

      await setDoc(doc(db, email, "Funcionario"), {

         matricula: credencials.matricula,
         nome: credencials.nome,
        
         /* possivel erro */
      }).then(() => {

         getUser();
         console.log("cadastrado ")

      }).catch((error) => {
         console.log(error);
      });


   }

   


  

   

   const selectImage = async () => {

         result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

  
      
      if (!result.canceled) { 

         
         setImgPicker(result.assets[0].uri)


         console.log(" result.assets  = "+result.assets[0].uri)

         console.log(" uri  = "+imgPicker)

         console.log(" nome do arquivo  =  " + credencials.nome);

      }
   };
   






 
    const uploadImage = async()=>{

   
   //   const storageRef = ref(storage, "Avatar");


      const storageRef = ref(storage, credencials.nome);
      
      
         const img = await fetch(imgPicker)
         const bytes = await img.blob();
       

      uploadBytes(storageRef, bytes).then((snapshot) => {
        console.log('Uploaded ok!  '+bytes);
      });
      

    }
  











   const getUser = async () => {

      await db.collection(email).doc("Funcionario").get().then((snapshot) => {

         if (snapshot.data() != undefined) {

            setModal(false);
            setUser(snapshot.data().nome);
            setId(snapshot.data().matricula);
           
            console.log(
               " matricula nº "+snapshot.data().matricula +
               " nome   " + snapshot.data().nome               
               );
        

         } else {
            setModal(true);
         }
      })


   }








  
   const getImageUrl = async()=>{

       /*
      const reference = ref(storage, '/filedatauser0host.exp.exponentcacheExperienceData%2540ronaldofagundes%252Fstafer_registerImagePickerb8dc3820-3fbc-4a65-80c7-699ae80ce67c.jpeg.PNG');
      
      const reference = ref(storage, '/Avatar');
      */
     


      const reference = ref(storage, user);

      await getDownloadURL(reference).then((x)=> {

            setImgUrl(x)
          
       } )

   

    }
   

   





     const linkOut = ()=>{

      Linking.openURL('https://www.youtube.com/watch?v=OAXibz_2vn0');
     }



   return (

      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={Style.body}
      >


         <ScrollView>

            <LinearGradient
               colors={
                  [
                     'rgba(19, 70, 77, 0.4)',
                     'rgba(10, 33, 35 ,1)',
                  ]
               }
               style={Style.containerMain}
            >






               <LinearGradient
                  colors={
                     [
                        //   'rgba(19, 70, 77, 0.4)',
                        //  'rgba(10, 33, 35 ,1)',

                        'rgba(10, 40, 90, 0.97)',
                        'rgba(19, 53, 75 ,1)',
                     ]
                  }
                  style={Style.containerHeader}
               >


                  <View style={Style.containerInfo}>
                                         
                     <Image 
                       source={{uri:imgUrl}} 
                       style={Style.containerAvatar}
                      />


                    <Text style={Style.textMain}> {` Tela Home `}</Text>

                  </View>
           

                


                  <View style={Style.containerDesc}>



                     <View>
                        <Text style={Style.textInfo}> {` usuário       : ${user}`}</Text>
                        <Text style={Style.textInfo}> {` matrícula nº  : ${id}`}</Text>
                     </View>



                     <LinearGradient
                     colors={
                        [
                           'rgba(19, 110, 107, 0.4)',
                           'rgba(15, 113, 35 ,0.6)',
                        ]
                     }
                     style={Style.menuBtn}
                  >

                     
                        <TouchableOpacity
                           onPress={signOut}
                        >
                           <Text style={Style.textBtnMenu}>Sair</Text>
                        </TouchableOpacity>
                     
                     </LinearGradient>



                  </View>





               </LinearGradient>






               <View style={Style.containerTime}>
                  <Text style={Style.textAlert}> {` ${today} `}</Text>
               </View>



                




               <LinearGradient
                  colors={
                     [
                        'rgba(19, 70, 77, 0.4)',
                        'rgba(10, 33, 35 ,1)',

                        // 'rgba(10, 40, 90, 0.97)',
                        // 'rgba(19, 53, 75 ,1)',
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
                         onPress={linkOut}
                     >
                        <Text style={Style.textBtnCard}>Click !</Text>
                     </TouchableOpacity>


                  </LinearGradient>



               </LinearGradient>




               <LinearGradient
                  colors={
                     [
                        'rgba(19, 70, 77, 0.4)',
                        'rgba(10, 33, 35 ,1)',

                        // 'rgba(10, 40, 90, 0.97)',
                        // 'rgba(19, 53, 75 ,1)',
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
                         onPress={linkOut}
                     >
                        <Text style={Style.textBtnCard}>Click !</Text>
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



                     <TextInput style={Style.input}
                        placeholder=" informe seu nome ou apelido"
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






                   <LinearGradient
                        colors={
                           [
                              'rgba(19, 110, 107, 0.4)',
                              'rgba(15, 113, 35 ,0.6)',
                           ]
                        }
                        style={Style.cardBtn}
                     >

                  {/*
          
                  <TouchableOpacity   
                      onPress={pickImg}                  
                      >
                   
                     <Text style={Style.textInfo}>Escolher uma foto</Text>
                  </TouchableOpacity>

               {image && <Image source={{source}} style={{height:300, width:300}}  />}          
           
                   */}

            
                  <TouchableOpacity
                           onPress={selectImage}
                      >
                        <Text style={Style.textInfo}>escolher uma foto</Text>
                   </TouchableOpacity>

             </LinearGradient>


                  
            <View style={Style.containerImg}  >                   
                     
            {imgPicker && <Image source={{ uri: imgPicker }} 
              style={{ width: 200, height: 200 }} />}                    
 
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
                         onPress={uploadImage}                  
                        >

                           <Text style={Style.textInfo}>salvar a foto</Text>
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













            </LinearGradient>


         </ScrollView>


      </KeyboardAvoidingView>

   )




}

export default Home;