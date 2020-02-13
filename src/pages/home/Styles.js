import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  popUpView: {
    width: 200
  },
  popUpTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  popUpText: {
    fontSize: 17,
    color: '#333'
  },
  inputFloating: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 10
  },
  searchInput: {
    fontSize: 18,
    color: '#777',
    flex: 5,
    backgroundColor: '#FFF',
    height: 44,
    borderRadius: 6,
    paddingLeft: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 3}

  },
  searchButton: {
    fontSize: 18,
    color: '#777',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#FFF',
    height: 44,
    width: 44,
    borderRadius: 22,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 3}
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
  },
  targetImage: {
    height: 38,
    width: 38,
    flex: 1
  }
});

export default styles;