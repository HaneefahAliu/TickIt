import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 24,
    backgroundColor: '#FFF', 
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECF0',
    marginTop: 0
  },
  leftSide: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
  message: {
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 6, // Adjust spacing
  },
  icon: {
    width: 48,
    height: 48,
  }
});

export default styles;