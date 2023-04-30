import { StyleSheet } from "react-native";



export default StyleSheet.create({
   
     body:{
        flex:1        
       },



       modalContent:{
        alignItems:'center',
        backgroundColor:'black',
        flex:1,   
        flexDirection:'column',
        justifyContent:'center',
        textAlign:'center',          
    },



       containerHeader:{
        backgroundColor: 'rgba(19, 60, 77, 0.9)',
        flexDirection: 'col',
        height:160,
        padding:10,
        //justifyContent: 'space-between ',
         },


       headerDesc:{
          textAlign:'center'
       },


       containerInfo:{
         flexDirection: 'row',
         height:'auto',
         justifyContent: 'space-between ',
         marginTop:30,

         
       },


      




       containnerMain:{
         alignItems: 'center',
        // backgroundColor:'#6D9664',
         backgroundColor: 'rgba(19, 60, 77, 0.8)',
         height:'100%',
         justifyContent: 'center',
         with:'100%'
       },



       containnerTime:{
        backgroundColor: 'rgba(19, 60, 77, 0.8)',
        height:'auto',       
        with:'auto'
       },



       
       

       

       containerCard:{
        flexDirection: 'col',
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

       
       menuBtn:{
        backgroundColor: 'rgba(6, 12, 127, 0.8)',
         width: 100,
         height: 40,      
         justifyContent: 'center',     
         borderRadius: 10,
         //marginTop: 30,
         //marginBottom:30,   
         textAlign:'center',
       },



       cardBtn:{
        // backgroundColor: 'rgba(19, 122, 117, 0.8)',
         borderRadius: 10,
         height: 60,      
         justifyContent: 'center',     
        
         marginTop:60,
         textAlign:'center',
         width: 140,
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


      
      /* containerBtn:{
       backgroundColor: 'rgba(6, 12, 127, 0.8)',
        width: 140,
        height: 40,      
        justifyContent: 'center',     
        borderRadius: 10,
        marginTop: 30,
        marginBottom:30,   
        textAlign:'center',
      }, */



     textMain:{
         color: '#3AF1A3',
         fontWeight: 'bold',
         fontSize: 28
      },


    textInfo:{
     color: '#3AF1A3',
     fontWeight: 'bold',
     fontSize:12,
    },

    
    textAlert: {
     //color: '#F00000',
     color: '#3AF1A3',
    // color:'#710F20',
     fontSize: 14
   },





      
 });

