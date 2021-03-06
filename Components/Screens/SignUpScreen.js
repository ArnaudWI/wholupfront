import React from 'react';
//import de mes bibliothèques/éléments
import {
  View,
  Switch
} from 'react-native';
import {
  Text,
  Button,
  Input,
  Divider
} from 'react-native-elements'

import {connect} from 'react-redux';

class SignUpScreen extends React.Component {

state = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  switch: false
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
      console.log(data.user)
      this.props.handleUserValid(data.user.lastName,data.user.firstName,data.user.email,data.user.token)
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
          secureTextEntry={!this.state.switch}
        />
        <Text>Afficher le mot de passe ?</Text>
        <Switch value={this.state.switch} onValueChange={value => this.setState({
          switch: value
        })}/>
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

function mapDispatchToProps(dispatch) {
  return {
    handleUserValid: function(nameUser, firstNameUser, emailUser, idUser) {
      dispatch({
        type: 'setUserData',
        name: nameUser,
        firstName: firstNameUser,
        email: emailUser,
        idUser: idUser
      });
    },
  }
};

export default connect(
  null,
  mapDispatchToProps
)(SignUpScreen);
