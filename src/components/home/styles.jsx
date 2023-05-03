import { StyleSheet } from "react-native";



export default StyleSheet.create({
   
     body:{
        flex:1        
       },



       containerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        height:'auto'   
      },




       containerHeader:{
        height: 220,
        width: '100%',
        flexDirection:'column',
        textAlign: 'center',
        padding:20, 
       // marginBottom: 30
         },




         containerAvatar:{
          borderRadius: 50,
          height: 80 ,
          marginRight:50,
          width: 80, 
      },
  

         containerInfo:{
          alignItems:'center',
          flexDirection:'row',          
          height:'auto',
          marginTop:'10%'          
        
        },




         containerDesc:{           
          flexDirection:'row',
         justifyContent:'space-between',
          height:'auto',              
          with:'auto'
          
        },



        menuBtn:{
          alignItems:'center',
          borderRadius: 10,
          height: 40,      
          justifyContent: 'center',     
          width: 80,
          //marginTop: 30,
          //marginBottom:30,   
          //textAlign:'center',
        },
 

        textMain:{
          color: '#3AF1A3',
          fontWeight: 'bold',
          fontSize: 22
       },
 

                     
        textAlert: {
          //color: '#F00000',
          color: '#3AF1A3',
         // color:'#710F20',
          fontSize: 18
        },

         textInfo:{
          color: '#3AF1A3',
          fontWeight: 'bold',
          fontSize:12,
         },


         textBtnMenu: {
          //color: '#F00000',
          color: '#3AF1A3',
         // color:'#710F20',
          fontSize: 12
        },




        textBtnCard: {
          //color: '#F00000',
          color: '#3AF1A3',
         // color:'#710F20',
          fontSize: 18,
          fontWeight:'bold'
        },


        


         cardBtn:{
          // backgroundColor: 'rgba(19, 122, 117, 0.8)',
           alignItems:'center',
           borderRadius: 10,
           height: 60,      
           justifyContent: 'center',     
          
           marginTop:60,
           //textAlign:'center',
           width: 140,
         },
  

         
       containerTime:{
        backgroundColor: 'rgba(19, 60, 77, 0.8)',
        height:'auto',       
        with:'auto'
       },


       


        containerCard:{
          flexDirection: 'column',
         // backgroundColor: 'rgba(6, 12, 127, 0.3)',
          width: 'auto',
          height: 300,      
          //justifyContent: 'center',     
          borderRadius: 10,
          marginBottom:30,   
          marginTop: 30,
         // textAlign:'center',
          padding:10, 
          alignItems:'center'
         },





         modalContent:{
          alignItems:'center',
          backgroundColor:'black',
          flex:1,   
          flexDirection:'column',
          justifyContent:'center',
          textAlign:'center',          
      },
  




      modalHome:{
        flexDirection: 'col',
       // backgroundColor: 'rgba(6, 12, 127, 0.3)',
        width: 'auto',
        height: 500,      
        justifyContent: 'center',     
        borderRadius: 10,
        marginBottom:30,   
        marginTop: 30,
       // textAlign:'center',
       // padding:10, 
        alignItems:'center'
       },





      input: {
        width: 300,
        height: 50,
        marginTop: 20,            
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#6BA995",
      //  marginLeft: 'auto',
      //  marginRight: 'auto',
        color: "#0BF5AB"
      },




    
      

      containerImg:{
          // height:'auto',
           marginTop:20,
           marginBottom:10,
           alignItems:'center',
           justifyContent: 'center'
      },
      

      /*
     containerBtn:{
       backgroundColor: 'rgba(6, 12, 127, 0.8)',
        width: 140,
        height: 40,      
        justifyContent: 'center',     
        borderRadius: 10,
        marginTop: 30,
        marginBottom:30,   
        textAlign:'center',
      }, 



    

  */










      
 });

