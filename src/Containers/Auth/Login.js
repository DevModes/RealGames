import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animateable from 'react-native-animatable';
import styled from 'styled-components/native';
import {TouchableOpacity, Switch} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {switchTheme} from '../../redux/action';
import {darkTheme, lightTheme} from '../../utils/themeProvider';
const Login = props => {
  const dispatch = useDispatch();
  const changeTheme = async value => {
    setstate(value);
    if (state === true) {
      await dispatch(switchTheme(darkTheme));
    } else {
      await dispatch(switchTheme(lightTheme));
    }
  };
  const [state, setstate] = useState(false);
  console.log(props);
  return (
    <Front style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animateable.Text
        delay={500}
        animation={'bounceInDown'}
        style={styles.fontStyle}>
        Coming
      </Animateable.Text>
      <Animateable.Text
        delay={1000}
        animation={'bounceInLeft'}
        style={styles.fontStyle}>
        Soon
      </Animateable.Text>
      <Animateable.Text
        delay={1500}
        animation={'bounceInRight'}
        style={styles.fontStyle}>
        Stay
      </Animateable.Text>
      <TouchableOpacity onPress={() => dispatch(switchTheme(lightTheme))}>
        <ThemeText delay={2000} animation={'bounceInUp'}>
          Tuned
        </ThemeText>
      </TouchableOpacity>
      <Switch
        value={state}
        onValueChange={e => {
          changeTheme(e);
        }}
      />
    </Front>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 90,
    lineHeight: 150,
    fontWeight: 'bold',
    color: 'white',
  },
});

const Front = styled(Animateable.View)(props => ({
  background: LinearGradient(
    props.theme.bgcolorfirst,
    props.theme.bgcolorsecond,
  ),
}));
// const ThemeText = styled(Animateable.Text)(props => ({
//   color: `${props => props.theme.SECONDARY_BUTTON_COLOR}`,
// }));

const ThemeText = styled(Animateable.Text)(props => ({
  fontSize: 90,
  lineHeight: 150,
  fontWeight: 'bold',
  color: props.theme.SECONDARY_BUTTON_COLOR,
}));
export default Login;
