import HomeScreen from './Home';

export enum StackScreenNames {
  Home = 'Home',
}

export const StackScreens = [
  {
    name: StackScreenNames.Home,
    component: HomeScreen,
    headerShown: false,
  },
];
