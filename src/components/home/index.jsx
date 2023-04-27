import React, { useContext, useState, useEffect, } from 'react';

import { View, SafeAreaView ,ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { AuthContext } from '../../context/auth';

import Style from './styles';





function Home({ navigation }) {



   const { setUser, user, setId, id } = useContext(AuthContext);


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





   const [welcome, setWelcome] = useState();



   const setLogout = () => {
      setUser("") &
         setId("") &
         navigation.navigate("Login")
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




   const setVisit = () => {

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
                <Text style={Style.textInfo}> {` usuário           : ${user}`}</Text>
                <Text style={Style.textInfo}> {` matrícula nº  : ${id}`}</Text>
             </View>

               <View>
                 <TouchableOpacity
                  style={Style.menuBtn}
                  onPress={setLogout}
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
                    onPress={setVisit}
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
                     {` ${welcome} ${user} , click e receba o regimento interno`}
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
                    onPress={setVisit}
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
                     {` ${welcome} ${user} , click e conheça a sua equipe de trabalho!!!`}
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
                     onPress={setVisit}
                  >
                     <Text style={Style.textInfo}>Click !</Text>
                  </TouchableOpacity>
              
               </LinearGradient>

              </LinearGradient>




            </View>





         </View>

       </ScrollView>






     



      </SafeAreaView>


   </LinearGradient>

   )




}

export default Home;