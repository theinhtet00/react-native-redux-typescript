import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenNames, StackScreens} from '../screens';
import { useAppTheme } from '../hooks/useTheme';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {currentTheme} = useAppTheme();
  return (
    <NavigationContainer theme={currentTheme}>
      <Stack.Navigator 
      initialRouteName={StackScreenNames.Home}
      screenOptions={({route})=>({
        headerShown: StackScreens.find((screen)=> screen.name === route.name)?.headerShown
      })}
      >
        {StackScreens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;