import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Home } from './screens'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto'



const Stack = createNativeStackNavigator()

export default function App() {

  const [loaded] = useFonts({
    "Roboto-Light": require('./assets/fonts/Roboto-Light.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

 

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Home} />
        
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
