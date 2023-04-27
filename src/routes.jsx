import { createNativeStackNavigator} from '@react-navigation/native-stack';





import Cad from './components/cad';

import Login from './components/login';

import Home from './components/home';


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