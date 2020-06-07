import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Containers/Splash/Splash';
import Login from '../Containers/Auth/Login';
import {ThemeProvider} from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {switchTheme} from '../redux/action';
import {darkTheme} from '../utils/themeProvider';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
function Routes() {
  const theme = useSelector(state => state.themeReducer.theme);
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator initialRouteName={Splash} headerMode={'none'}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen
            name="Login"
            options={{cardStyleInterpolator: forFade}}
            component={Login}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default Routes;
