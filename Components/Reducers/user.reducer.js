export default function (user = {}, action) {
  if(action.type === 'setUserData') {
    let userCopy = {
      ...user,
      name: action.name,
      firstName: action.firstName,
      email: action.email,
      idUser: action.idUser
    }
    return userCopy;
  } else {
    return user;
  }
};
