import React from 'react';
//import de mes bibliothèques/éléments
import {
  View,
  ImageBackground
} from 'react-native';
import {
  Text,
  Button,
  Divider
} from 'react-native-elements'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground style={{flex:1}} source={require("../../assets/network.jpg")}>

        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

          <Text h1 style={{color: 'white'}}>Whol'Up</Text>
          <Text h3 style={{color: "#FFFFFF"}}>Start your networking</Text>
          <Text h3 style={{color: "#FFFFFF"}}>now and everywhere</Text>
          <Divider style={{height:20}}/>
          <Button
            title="Sign In"
            style={{width:100}}
            backgroundColor='#3498db'
            onPress={ ()=> this.props.navigation.navigate('SignIn')}
          />
          <Divider style={{height:20}}/>
          <Button
            title="Sign Up"
            style={{width:100}}
            backgroundColor='#3498db'
            onPress={ ()=> this.props.navigation.navigate('SignUp')}
          />

        </View>
      </ImageBackground>
    );
  }
}
