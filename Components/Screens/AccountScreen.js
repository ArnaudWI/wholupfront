import React from 'react';
//import de mes bibliothèques/éléments
import {View} from 'react-native';
import {
  Text,
  Avatar,
  Button,
  Divider
} from 'react-native-elements'

import {connect} from 'react-redux';

class AccountScreen extends React.Component {
  render() {
      // console.log(this.props.user, 'account screen')
    return (
      <View  style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Avatar
          size="large"
          rounded
          title="JD"
          overlayContainerStyle={{backgroundColor:"#e67e22"}}
        />
        <Divider style={{height:10}}/>
        <Text h4>{this.props.user.firstName} {this.props.user.name}</Text>
        <Text h4>{this.props.user.email}</Text>
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

function mapStateToProps(state) {
  return {
    user: state.userData,
  };
}

export default connect(mapStateToProps, null)(AccountScreen);
