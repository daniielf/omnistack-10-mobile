import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    alignSelf: 'center'
  },
 avatarImage: {
   height: 150,
   width: 150,
   borderRadius: 75,
   alignSelf: 'center',
   margin: 10,
   marginBottom: 20
 },
 userName: {
   fontSize: 20,
   fontWeight: 'bold',
   color: '#333',
   alignSelf: "center"
 },
 contentText: {
   fontSize: 18,
   color: '#333',
   alignSelf: "center"

 },
 contentTextLink: {
   marginTop: 15,
  fontSize: 18,
  color: '#3388EE',
  textDecorationLine: "underline",
  fontWeight: 'bold',
  alignSelf: "center"
 }
});

export default styles;