import React from 'react';
//import de mes bibliothèques/éléments
import {View} from 'react-native';
import {
  Text,
  Avatar,
  Button,
  Divider
} from 'react-native-elements'

export default class AccountScreen extends React.Component {
  render() {
    return (
      <View  style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Avatar
          size="large"
          rounded
          title="JD"
          overlayContainerStyle={{backgroundColor:"#e67e22"}}
        />
        <Divider style={{height:10}}/>
        <Text h4>John Doe</Text>
        <Text h4>john@gmail.com</Text>
        <Divider style={{height:10}}/>
        <Button
          title="Disconnect"
          style={{width:120}}
          backgroundColor='#3498db'
          onPress={ ()=> this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
