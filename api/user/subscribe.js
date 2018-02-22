export default ({
  token,
  user: {
      id: userId,
      ...v
  },
  subscriber
}) => 
    firebase
        .firestore(token.app)
        .collection("users")
        .doc(userId)
        .onSnapshot(v => subscriber(v.data()))
