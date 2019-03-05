import React from 'react';
//import de mes bibliothèques/éléments
import {View} from 'react-native';
import {
  Text,
  Button,
  Input,
  Divider
} from 'react-native-elements'

export default class SignInScreen extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (text) => {
    fetch(`http://192.168.0.19:3000/signin?email=${this.state.email}&password=${this.state.password}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.isUserExist) {
        this.setState({error: null});
        this.props.navigation.navigate('Account');
      } else {
        this.setState({error: "l'identifiant ou/et le mot de passe sont incorrects"});
      }
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Input
          label="Email"
          labelStyle={{textAlign: 'center'}}
          onChangeText={text => this.setState({email: text})}
        />
        <Divider style={{height:10}}/>
        <Input
          label="Mot de passe"
          labelStyle={{textAlign: 'center'}}
          onChangeText={text => this.setState({password: text})}
          errorMessage={this.state.error}
        />
        <Divider style={{height:20}}/>
        <Button
          title="Sign In"
          style={{width:100}}
          backgroundColor='#3498db'
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}
