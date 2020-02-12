import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
 contentView: {
   flex: 1,
   padding: 5,
   flexDirection: 'column'
 },
 avatarImage: {
   height: 150,
   width: 150,
   borderRadius: 75
 },
 userName: {
   fontSize: 20,
   fontWeight: 'bold',
   color: '#333'
 },
 contentText: {
   fontSize: 18,
   color: '#333'
 }
});

export default styles;