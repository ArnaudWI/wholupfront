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

class SearchScreen extends React.Component {
  render() {

    const users = [
      { name: "Emilie Carpenter", title: "EC", email: "emilie@gmail.com", company: "Deckow-Crist", color: "#e67e22"},
      { name: "John Doe", title: "JD", email: "john@gmail.com", company: "Deckow-Crist", color: "#3498db"},
      { name: "Noel Paganelli", title: "NP", email: "noel@gmail.com", company: "Deckow-Crist", color: "#16a085"}
    ]

    let usersList = users.map((user, i) => {
      return(
        <ListItem
          onPress={() => this.props.handleContact(user.name, user.email, user.company, user.title)}
          key={i}
          leftAvatar={
            <Avatar
              small
              rounded
              title={user.title}
              overlayContainerStyle={{backgroundColor: "#16a085"}}
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

function mapDispatchToProps(dispatch) {
 return {
  handleContact: function(nameContact, emailContact, companyContact, titleContact) {
    dispatch({
      type: 'addcontact',
      name: nameContact,
      email: emailContact,
      company: companyContact,
      title: titleContact
    })
  }
 }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchScreen);

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
