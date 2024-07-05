import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import noteContext from '../Component/ContextStore';
export const MainStore = createContext();

const HomeScreen = props => {
  const newUser = useContext(noteContext);
  const [user, setUser] = newUser;
  const [emailValidError, setEmailValidError] = useState(false);
  const [passwordValidError, setPasswordValidError] = useState(false);
  const handlePassword = () => {
    let passReg = /^([a-z A-Z 0-9 \._]{7,12})/;
    if (user?.password.length === 0) {
      setPasswordValidError(true);
    } else if (user?.password === false) {
      setPasswordValidError(true);
    } else if (passReg.test(user.password) === true) {
      setPasswordValidError(false);
    }
  };

  const handleEmail = () => {
    let emailReg =
      /^([a-z A-Z 0-9 \._]{6,16})@([a-z A-Z 0-9 \._]{4,12}).([a-z A-Z]{2,4})(.[0-9]{0,4})?$/;

    if (user.userName.length === 0) {
      setEmailValidError(true);
    } else if (emailReg.test(user?.userName) === false) {
      setEmailValidError(true);
    } else if (emailReg.test(user?.userName) === true) {
      setEmailValidError(false);
    }
  };
  const handleLogin = () => {
    let emailReg =
      /^([a-z A-Z 0-9 \._]{6,16})@([a-z A-Z 0-9 \._]{4,12}).([a-z A-Z]{2,4})(.[0-9]{0,4})?$/;
    let passReg = /^([a-z A-Z 0-9 \._]{7,12})/;
    if (user.userName.length != 0 && user.password.length != 0) {
      if (
        passReg.test(user?.password) == true &&
        emailReg.test(user?.userName) == true
      ) {
        navigation.navigate('Data');
      }
    } else {
      setEmailValidError(true);
      setPasswordValidError(true);
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.mainContaioner}>
      <Text style={styles.textStyle}>LogIn Page</Text>
      <TextInput
        placeholder="Username"
        style={styles.txtInput}
        value={user?.userName}
        onChangeText={userName => {
          setUser({...user, userName});
          handleEmail();
        }}
      />
      {emailValidError ? <Text style={styles.innerText}> Enter Valid Email </Text> : null}

      <TextInput
        placeholder="Password"
        style={styles.txtInput}
        value={user?.password}
        onChangeText={password => {
          setUser({...user, password});
          handlePassword();
        }}
        secureTextEntry={true}
      />
      {passwordValidError ? <Text style={styles.innerText}> Enter Valid Password </Text> : null}
      <TouchableOpacity style={styles.touchable} onPress={() => handleLogin()}>
        <Text style={styles.textContainer}> LogIn </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  mainContaioner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    fontSize: 25,
    fontWeight: '500',
  },
  txtInput: {
    paddingLeft: 20,
    fontSize: 25,
    borderWidth: 2,
    width: '90%',
    borderColor: 'grey',
    marginTop: 20,
  },
  touchable: {
    width: '80%',
    height: 50,
    backgroundColor: 'green',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText:{
    fontSize:20,
    color:'green',
    fontWeight:"500"
  }
});

// let passReg = /^([a-z A-Z 0-9 \._]{4,12})@([a-z A-Z 0-9 \._]{4,12}).([a-z A-Z]{2,4})(.[0-9]{0,4})?$/
