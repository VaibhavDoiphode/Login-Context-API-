import {useContext } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import noteContext from '../Component/ContextStore'


const DataScreen = ({navigation}) => {
    const getContext = useContext(noteContext);
    const [user,setUser]=getContext;

    const handleLogOut =()=>{
      setUser({userName:'',password:''});
      navigation.navigate('Home');
    }
  return (
    <View style={styles.mainContaioner}>
      <View style={styles.innerTextContainer}>
      <Text
        style={styles.textStyle}>
        Welcome 
      </Text>
      <Text
        style={styles.textStyle}>
        Name:{user.userName}
      </Text>
      <Text
        style={styles.textStyle}>
        Password:{user.password}
      </Text>
      <TouchableOpacity style={styles.touchable} onPress={() => handleLogOut()}>
        <Text style={styles.textContainer}> Logout </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default DataScreen

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        borderColor:'green',
        borderBottomWidth:2,
      },
      mainContaioner: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
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
      innerTextContainer:{
        width: '90%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'green',
        borderWidth:2,
      }
})