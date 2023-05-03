import { createNativeStackNavigator} from '@react-navigation/native-stack';







import Login from './components/login/Index';
import Cad   from './components/cad/index';
import Home  from './components/home/index';


const Stack = createNativeStackNavigator();




    function Routes (){


          return (
        
                <Stack.Navigator
                    screenOptions={{
                      headerShown: false
                    }} 
                  >         
                    <Stack.Screen              
                      name="Login"
                      component={Login}
              
                       options={{
                       headerShown:false
                      }} 
                    
                    />

                    <Stack.Screen              
                      name="Cad"
                      component={Cad}  
                          
                    /> 
                  

                   <Stack.Screen              
                      name="Home"
                      component={Home}     
                      
                    />              


                </Stack.Navigator>
             
          );
          
     }   

     export default Routes;