export default ({
  token,
  user: {
      id: userId,
      ...v
  }
}) => 
    firebase
        .firestore(token.app)
        .collection("users")
        .doc(userId)
        .get()
