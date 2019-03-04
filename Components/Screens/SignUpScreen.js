import React from 'react';
//import de mes bibliothèques/éléments
import {View} from 'react-native';
import {
  Text,
  Button,
  Input,
  Divider
} from 'react-native-elements'

export default class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Input
          label="First Name"
          labelStyle={{textAlign: 'center'}}
        />
        <Divider style={{height:10}}/>
        <Input
          label="Last Name"
          labelStyle={{textAlign: 'center'}}
        />
        <Divider style={{height:10}}/>
        <Input
          label="Email"
          labelStyle={{textAlign: 'center'}}
        />
        <Divider style={{height:10}}/>
        <Input
          label="Mot de passe"
          labelStyle={{textAlign: 'center'}}
        />
        <Divider style={{height:20}}/>
        <Button
          title="Sign Up"
          style={{width:100}}
          backgroundColor='#3498db'
          onPress={ ()=> this.props.navigation.navigate('Account')}
        />
      </View>
    );
  }
}
