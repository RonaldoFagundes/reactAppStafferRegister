import React, { useContext, useState, useEffect, } from 'react';

import {
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


import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";






function Home({ navigation }) {



   const db = firebase.firestore();
   const storage = getStorage();


   var dta = new Date();
   var hours = dta.getHours();
   var minutes = dta.getMinutes();
   var day = dta.getDate().toString().padStart(2, '0');
   var month = (dta.getMonth() + 1).toString().padStart(2, '0');
   var year = dta.getFullYear();


   var today = day + "/" + month + "/" + year;


   const { setUser, user, setId, id, email, setModal, modal } = useContext(AuthContext);

   const [welcome, setWelcome] = useState();

   const [imgUrl, setImgUrl] = useState();

   const [imgPicker, setImgPicker] = useState();


   const [credencials, setCredencials] = useState(
      {
         nome: "",
         matricula: "",
      }
   );


   const [selectedImg, setSelectedImg] = useState(false);





   useEffect(() => {

      helloApp();

      getImageUrl(user)

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




   const selectImage = async () => {

      result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });



      if (!result.canceled) {

         console.log(" result.assets[0].uri  = " + result.assets[0].uri)

         setImgPicker(result.assets[0].uri)
      }
   };








   const uploadImage = async () => {

      const storageRef = ref(storage, credencials.nome);

      const img = await fetch(imgPicker)
      const bytes = await img.blob();

      uploadBytes(storageRef, bytes).then((snapshot) => {
         console.log('Uploaded ok!  ' + bytes);

         setSelectedImg(true)

      });

   }






   const setCompleteRegister = async () => {

      await setDoc(doc(db, email, "Funcionario"), {

         matricula: credencials.matricula,
         nome: credencials.nome,

      }).then(() => {

         setModal(false)
         getUser();
         getImageUrl(credencials.nome);

         console.log("metodo setCompleteRegister")

      }).catch((error) => {
         console.log(error);
      });

   }




   const getUser = async () => {

      await db.collection(email).doc("Funcionario").get().then((snapshot) => {

         if (snapshot.data() != undefined) {

            setUser(snapshot.data().nome);
            setId(snapshot.data().matricula);

            console.log(
               " metodo getUser matricula nº " + snapshot.data().matricula +
               " nome   " + snapshot.data().nome
            );

         }
      })
   }





   const getImageUrl = async (u) => {

      if (u == "") {

         const reference = ref(storage, '/default.png');

      } else {

         const reference = ref(storage, '/' + u);

         await getDownloadURL(reference).then((x) => {

            setImgUrl(x)

         }).catch((error) => {
            console.log(error);
         });

      }

   }





   const linkOutOne = () => {

      Linking.openURL('https://www.youtube.com/watch?v=OAXibz_2vn0');
   }


   const linkOutTwo = () => {

      Linking.openURL('https://www.youtube.com/watch?v=JL2u5mQ_mtY');
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
                        'rgba(10, 40, 90, 0.97)',
                        'rgba(19, 53, 75 ,1)',
                     ]
                  }
                  style={Style.containerHeader}
               >


                  <View style={Style.containerInfo}>

                     <Image
                        source={{ uri: imgUrl }}
                        style={Style.containerAvatar}
                     />

                     <Text style={Style.textMain}> {` Tela Home `}</Text>

                  </View>

                  <View style={Style.containerDesc}>

                     <View>
                        <Text style={Style.textInfo}> {` usuário    : ${user}`}</Text>
                        <Text style={Style.textInfo}> {` matrícula  : ${id}`}</Text>
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
                        onPress={linkOutOne}
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
                     {` ${welcome} ${user} , click e veja a pauta da reunião!!!`}
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
                        onPress={linkOutTwo}
                     >
                        <Text style={Style.textBtnCard}>Click !</Text>
                     </TouchableOpacity>

                  </LinearGradient>

               </LinearGradient>


               <Modal
                  animationType='fade'
                  visible={modal}
               >

                  <ScrollView>

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

                           {credencials.nome == "" && credencials.matricula == ""

                              ?
                              <TouchableOpacity
                                 disabled={true}
                              >
                                 <Text style={Style.textInfo}>selecione uma foto</Text>
                              </TouchableOpacity>

                              :

                              <TouchableOpacity
                                 onPress={selectImage}
                              >
                                 <Text style={Style.textInfo}>selecione uma foto</Text>
                              </TouchableOpacity>

                           }

                        </LinearGradient>

                        <View style={Style.containerImg}  >

                           {
                              imgPicker && <Image source={{ uri: imgPicker }}
                                 style={{ width: 200, height: 200 }}
                              />}

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

                           {selectedImg == false

                              ?
                              <TouchableOpacity
                                 disabled={true}
                              >

                                 <Text style={Style.textInfo}>Concluir</Text>
                              </TouchableOpacity>

                              :

                              <TouchableOpacity
                                 onPress={setCompleteRegister}
                              >

                                 <Text style={Style.textInfo}>Concluir</Text>
                              </TouchableOpacity>
                           }

                        </LinearGradient>

                     </View>

                  </ScrollView>

               </Modal>

            </LinearGradient>

         </ScrollView>

      </KeyboardAvoidingView>

   )
}

export default Home;