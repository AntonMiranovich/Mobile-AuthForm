import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screen/Home/Home'
import Auth from './src/screen/Auth/Auth'
import Reg from './src/screen/Reg/Reg'
import Clock from './src/components/Clock/Clock'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Clock'>
        <Stack.Screen name='Clock' component={Clock} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Sign in' component={Auth} />
        <Stack.Screen name='Sign up' component={Reg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


