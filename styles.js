import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    color: '#537892',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,

  },

  subtitle: {
    color: '#537892', 
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 150,
    marginLeft: 20, 
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    color: '#a0c4de'
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#92bcd9',
    borderWidth: 1,
    paddingLeft: 10,
    color: '#3c5668',
  },
  roundedInput: {
    borderRadius: 20, 
    backgroundColor: '#92bcd9', 
  },
  whiteButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 2, 
    elevation: 3, 

  },
  buttonText: {
    fontSize: 16,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 100,
  },
  bottomText: {
    color: 'white', 
    fontSize: 12,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});