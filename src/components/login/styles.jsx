import { StyleSheet } from "react-native";



export default StyleSheet.create({
   
     body:{
        flex:1        
       },



       containerInfo:{
         marginBottom:140,
         alignItems:'center'
       },




       
      containnerMain:{
        // alignItems: 'center',
        // backgroundColor:'#6D9664',
        // backgroundColor: 'rgba(19, 60, 77, 0.8)',
         height:'100%',
       //  justifyContent: 'center',
         with:'100%'
       },






       contentMain:{
        alignItems: 'center',
       // backgroundColor: 'rgba(25, 126, 162, 0.3)',
        borderRadius: 10,
        height:"auto",   
        padding:20,  
       // justifyContent: 'center',      
        with: "auto"
       },
       





       input: {
         width: 300,
         height: 50,
         marginTop: 10,            
         padding: 10,
         borderBottomWidth: 1,
         borderBottomColor: "#6BA995",
         marginLeft: 'auto',
         marginRight: 'auto',
         color: "#0BF5AB"
       },


       
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



        

       openModal:{
        backgroundColor: 'rgba(6, 12, 127, 0.3)',       
        height: 'auto',
        marginTop:30,
        width: 'auto', 
       },



       modalContent:{
        alignItems:'center',
        backgroundColor:'black',
        flex:1,   
        flexDirection:'column',
        justifyContent:'center',
        textAlign:'center',          
    },


       /*
       modalLogin:{
        alignItems:'center',
        borderRadius: 10,
        flexDirection: 'col',
        height: 500, 
        justifyContent: 'center', 
       // backgroundColor: 'rgba(6, 12, 127, 0.3)',
        width: 'auto',    
       // marginBottom:30,   
       // marginTop: 30,
       // textAlign:'center',
       // padding:10,         
       },
       */



     textMain:{
         color: '#3AF1A3',
         fontWeight: 'bold',
         fontSize: 28
      },




    textInfo:{
     color: '#3AF1A3',
     fontWeight: 'bold',
     fontSize:14,
    },

    


    textAlert: {   
     color:'#BBD441',     
     fontSize: 14
   },





      
 });

