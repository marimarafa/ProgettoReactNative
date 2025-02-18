import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ActivityIndicator, TextInput, TouchableOpacity } from 'react-native-web';

//Utilizziamo JsonPlaceHolder come mock API 
const getMockWeatherData = (city) => {
  //Simuliamo dati meteo casuali
  const mockData = {
    temp: Math.floor(Math.random()* (30-10) + 10), //temperatura tra 10 e 30
    humidity: Math.floor(Math.random()* (100-40) + 40), //uidita tra 40 e 100%
    windspeed: Math.floor(Math.random()* (50-0) + 0 ), //velocita del vento tra 0 e 50
    condictions: ['Soleggiato', 'Piovoso', 'Nuvoloso', 'Nevoso'][Math.floor(Math.random()* 4)]
  };
  
  //Simuliamo una chiamata asincrona
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000); //Ritardo di 2 sec. per simulare una chiamata al servizio internet
  })
};

export default function App() {
  const [city, setCity] = useState('');
  const[weatherData,setWeatherData] = useState(null);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(null);
  const fetchWeatherData = async () => {
    if(!city.trim()){
      Alert.alert('Errore', 'Per favore inserisci una città');
      return ;
    }
  
    setLoading(true);
    setError(null);
    try{
      const data = await getMockWeatherData(city);
      setWeatherData(data);

    } catch{
      setError('Errore nel recupero dei dati');
      Alert.alert('Errore', 'Impossibile recuperare i dati meteo');
    } finally{
      setLoading(false);
    }
  };



  const WeatherInfo = ({data}) => {
    const DisplayAnImage = (img) => {
      switch (img) {
        case 'Soleggiato':
          return require('./soleggiato.png');
        case 'Piovoso':
          return require('./piovoso.webp');
        case 'Nuvoloso':
          return require('./nuvoloso.jpg');
        case 'Nevoso':
          return require('./nevoso.jpg');
        default:
          return ('Errore');
      }
    };



    return (
      <View style={styles.weatherContainer}>
        <Text style={styles.cityName}>{city}</Text>
        <Text style={styles.temperature}>{data.temp} °C</Text>
        <Image style = {styles.tinyLogo} source={DisplayAnImage(data.condictions)} />
        <Text style={styles.description}>{data.condictions}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>Umidità : {data.humidity} % </Text>
          <Text style={styles.details}> Vento : {data.windspeed} km/h </Text>
        </View>
      </View>
    );
  };  
 
     
  
          
  return (
    <View style = {styles.container}>
       <Text style= {styles.title}>Previsione meteo (DEMO) </Text>
       <View style = {styles.inputContainer}>
        <TextInput style = {styles.input} placeholder='Inserisci una città' value={city} onChangeText={setCity}></TextInput>
        <TouchableOpacity style = {styles.button} onPress = {fetchWeatherData} disabled = {loading}>
          <Text style= {styles.buttonText}> CERCA </Text>
        </TouchableOpacity>
       </View>

    {loading && (<ActivityIndicator size ={'large'} color ={'#0000ff'}></ActivityIndicator>)}

    {!loading && weatherData && (<WeatherInfo data ={weatherData}></WeatherInfo>)}
    {error && (
      <Text style = {styles.error}> {error} </Text>
    )}
    </View>
  );
};

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  weatherContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 15,
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});