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

state = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

handleSubmit = () => {
  fetch('http://192.168.0.19:3000/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'firstName='+this.state.firstName+'&lastName='+this.state.lastName+'&email='+this.state.email+'&password='+this.state.password
  })
  .then(response => response.json())
  .then(data => {
    if (data.user) {
      this.props.navigation.navigate('Account');
    } else {
      console.log('erreur de log')
    }
  })
  .catch(error => console.error(error))
};


  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Input
          label="First Name"
          labelStyle={{textAlign: 'center'}}
          onChangeText={(text) => this.setState({firstName: text})}
        />
        <Divider style={{height:10}}/>
        <Input
          label="Last Name"
          labelStyle={{textAlign: 'center'}}
          onChangeText={(text) => this.setState({lastName: text})}
        />
        <Divider style={{height:10}}/>
        <Input
          label="Email"
          labelStyle={{textAlign: 'center'}}
          onChangeText={(text) => this.setState({email: text})}
        />
        <Divider style={{height:10}}/>
        <Input
          label="Mot de passe"
          labelStyle={{textAlign: 'center'}}
          onChangeText={(text) => this.setState({password: text})}
        />
        <Divider style={{height:20}}/>
        <Button
          title="Sign Up"
          style={{width:100}}
          backgroundColor='#3498db'
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}
