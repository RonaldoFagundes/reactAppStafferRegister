


import React, { useContext , useState} from 'react';

import { View, Text } from 'react-native';

import { AuthContext } from '../../context/auth';

import Style from './styles';

            function Login ({navigation}){
   /*
    class Login extends Component{
    constructor(props){
      super(props)
     } 

    static contextType = AuthContext
    state = {email}

   */

   const { setUser } = useContext(AuthContext);

   cadastrar=()=>{
     navigation.navigate("Cad")
   }

   navegar=()=>{
      navigation.navigate("Home")
      setUser("caralho")
    }

   /*
    render(){    
    const { user, setUser } = this.context
   */

     return(

        <View style={Style.body}>

            <Text style={Style.textMain}>
                  Tela de Login
            </Text>

         <View style={Style.containnerMain}>            


            <Text style={Style.textMain}

                onPress={() => cadastrar()}
             >               
               {` fazer cadastro `}
            </Text>


            <Text style={Style.textMain}

               onPress={ () => navegar() }
              >
                {` fez Login  vai para o home !`}
            </Text>

         </View>

       </View>

      )
 // }
}
export default Login;








function Cad ({navigation}) {
  /*
class Cad extends Component{
    constructor(props){
      super(props)
   } 
    render(){
   */



      return (
         <View>

            <Text>Tela de Cadastro</Text>


           <Text
               onPress={() =>  navigation.navigate("Login")}
             >
              {` fazer login `}
          </Text>
            
         </View>

      )

    }

//}

//export default Cad;




function Home ({navigation}){
  /*
  class Home extends Component{
      constructor(props){
        super(props)
     }
     static contextType = AuthContext
   
      render(){ 
     const { user } = this.context
    */
  
  
  
     const { user } = useContext(AuthContext);
  
        return (
           <View>
  
              <Text> {` Tela Home user: ${user}`}</Text>
  
  
             <Text
                 onPress={() =>  navigation.navigate("Login")}
               >
                {` fazer log out `}
            </Text>
              
           </View>
  
        )
  
      }
  
  //}
  
 // export default Home;





 /*
import React ,{Component ,createContext} from 'react';


const AuthContext = createContext({});

  class AuthProvider extends Component  {

       state ={ user }

       setUser=(value)=>{
          this.state({user:value});
       }
    
       render(){

        const { children } = this.props
        const { user } = this.state
        const { setUser } = this.setUser 

         return(

            <AuthContext.Provider value={ 
                {                   
                  user,
                  setUser,
                } 
                
                }>          
                {children} 
             </AuthContext.Provider>
            
         )
       }

  }

  export default AuthContext

   export { AuthProvider }






   


          inserir            
        const InsertUser = async ()=> {
         await firebase.db.collection('users').add ({
               nome:"Maria Alcinda",
               email:"alcinda@gmail.com"
         }).then (
             ()=> alert("saved")
         ).catch (
            ()=> alert("Não foi possivel salvar!")
         )
      } 


        ///  Atualizar 
       const UpdateUser = async ()=>{          
          const users  = firebase.db.collection ('users');
          await users.doc ('id').update ({
              nome:'',
              email:''
          }).then (
               ()=> alert('Atualizado')
          ).catch (
              ()=> alert ('Não foi possivel alterar')
          )
       }


           // Excluir  
       const DeleteUser = async ()=>{          
         const users  = firebase.db.collection ('users');
         await users.doc ('id').delete ()    
         .then (
              ()=> alert('Deletado')
         ).catch (
             ()=> alert ('Não encontrado')
         )
      }







    database.collection("Dados").onSnapshot((query) => {
          const list = []
          query.forEach((doc) => {
             list.push({ ...doc.data(), id: doc.id })
          });
      


     database.collection("Dados").doc("D47U2LB3nw2Qa2Q0ujDu").get().then((snapshot) => {
          if (snapshot.data() != undefined) {

           setDataUser(
              {
               ...dataUser,['id']: snapshot.data().id,
                  dataUser,['user']: snapshot.data().user_name,
                  dataUser,['email']: snapshot.data().email,
                  dataUser,['password']: snapshot.data().password,
              }
              )
  
                 console.log(
                  " id "+ dataUser.id ,
                  " user "+dataUser.user,
                  " email "+dataUser.email,
                  " password "+dataUser.password    
                  )
  
            }else{
                console.log("não conectado");
            }
  
  
         }) 







          /*  select   */

  /* const pegaDados = async ()=>{

      const users = firebase.db.collection("users");
      const querySnapshot = await users.get(); 
      const dados = querySnapshot.docs;

       dados.forEach(
         doc =>  console.log(doc.data())
       )     
     }

 const pegaDadosOnde = async () => {

   const users = firebase.db.collection("users");
   const retorno = await users.where("nome","==","Ronaldo").get();  
    retorno.forEach(
      user=>console.log(user.data())
    )
 } 
    

const pegarDadosId = async ()=>{

    const users = firebase.db.collection("users");
    const retorno = await users.doc ("id").get() ;
    console.log(retorno.data());
}
 */





      /*  ref a produtos */

  
   /*    const getProdutos = async ()=>{

   const produtos = firebase.db.collection("produtos");

    // const querySnapshot = await produtos.get(); 
    // const dados = querySnapshot.docs; 
       const dados = await produtos.get();    

       dados.forEach(
         doc => console.log(doc.data())
      )
   } 

const getProdutobyId = async ()=>{
   const produto =  firebase.db.collection("produtos") 
    const result = await produto.doc ("AlEKsf0kMTKdv7xq0juf").get();
     console.log(result.data());
}

const  getProdutoStatus = async ()=>{

    const produto = firebase.db.collection("produtos")     
    const result = await produto.where("status","==","off").get();  
    result.forEach(
      status=>console.log(status.data())
   
    )
}


const  getProdutoType = async ()=>{

   const produto = firebase.db.collection("produtos")     
   const result = await produto.where("departamento","==","eletronico").get();  
   result.forEach(
     type=>console.log(type.data())
   )
}


const  getProdutoValor = async ()=>{

   const produto = firebase.db.collection("produtos")     
   const result = await produto.where("preco",">",600).get();  
   result.forEach(
     valor=>console.log(valor.data())
   )
}  









                 https://www.youtube.com/watch?v=yBJD4ply2k0
                 
                 
                 https://www.youtube.com/watch?v=TwxdOFcEah4
                 https://www.youtube.com/watch?v=Pp-3G-FChW0
  */ 