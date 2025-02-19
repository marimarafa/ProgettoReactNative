
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    formContainer: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
    inputError: {
      borderColor: '#ff6b6b',
    },
    errorText: {
      color: '#ff6b6b',
      fontSize: 14,
      marginTop: 5,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 8,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      color: '#666',
    },
  });