import React from 'react';
import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';
//import de mes bibliothèques/éléments
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import {
  Text,
  Avatar,
  ListItem,
  Icon
} from 'react-native-elements';

import {connect} from 'react-redux';

class FollowingScreen extends React.Component {
  render() {


    console.log(this.props.addContact)
    let contactList = this.props.addContact.map((user, i) => {
      var colorNbr = Math.random();
      var color;
      if (colorNbr < 0.25) {
        color = '#e67e22';
      } else if (colorNbr < 0.5) {
        color = '#3498db';
      } else if (colorNbr < 0.75) {
        color = '#16a085';
      } else {
        color = '#e74c3c';
      };

      return(
        <ListItem
          key={i}
          leftAvatar={
            <Avatar
              small
              rounded
              title={user.title}
              overlayContainerStyle={{backgroundColor: color}}
            />
          }
          title={user.name}
          subtitle={
            <View style={styles.subtitle}>
              <Text style={styles.ratingText}>{user.email}</Text>
            </View>
          }
          rightIcon={
            <Ionicons
              name="ios-arrow-forward"
              size={25}
            />
          }
          bottomDivider={true}
        />
      )
    })
    return (
      <ScrollView style={styles.container}>

          {this.props.addContact.length < 1
            ? <Text>Vous ne suivez aucun contact.</Text>
            : contactList.reverse()}


      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    addContact: state.addContact,
  };
}

export default connect(mapStateToProps, null)(FollowingScreen);

const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: 15,
   backgroundColor: '#fff',
 },
 subtitle:{
   flexDirection:'row',
   padding:10,
   paddingTop:5,
 },
 ratingText:{
   color: 'grey',
 }
});
