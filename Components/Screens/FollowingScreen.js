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
  } from 'react-native-elements'

export default class FollowingScreen extends React.Component {
  render() {

    const users = [
      { name: "Emilie Carpenter", title: "EC", email: "contact@gmail.com", company: "Deckow-Crist", color: "#e67e22"}
    ]

    let usersList = users.map((user, i) => {
      return(
        <ListItem
          key={i}
          leftAvatar={
            <Avatar
              small
              rounded
              title={user.title}
              overlayContainerStyle={{backgroundColor: "#e67e22"}}
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

          {usersList}

      </ScrollView>
    );
  }
}

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
