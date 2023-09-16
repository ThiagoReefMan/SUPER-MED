import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, StatusBar, SafeAreaView, TextInput} from 'react-native';
import { Ionicons, Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome, FontAwesome5,} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const buttons = [
  { id: '1', title: 'Minha\nSaúde', icon: <MaterialCommunityIcons name="hospital" size={33} color='#FFFFFF' /> },
  { id: '2', title: 'Médico', icon: <Ionicons name="person" size={33} color='#FFFFFF' /> },
  { id: '3', title: 'Especialidade', icon: <Ionicons name="md-medical" size={33} color='#FFFFFF' /> },
  { id: '4', title: 'Agendamento', icon: <Ionicons name='calendar-outline' size={33} color='#FFFFFF' /> },
  { id: '5', title: 'Cartão SUS', icon: <FontAwesome5 name="id-card-alt" size={33} color='#FFFFFF' /> },
  { id: '6', title: 'Prontuário', icon: <Ionicons name="md-file-tray-full" size={33} color='#FFFFFF' /> },
  { id: '7', title: 'Remédios', icon: <MaterialCommunityIcons name="pill" size={33} color='#FFFFFF' /> },
  { id: '8', title: 'Exames', icon: <FontAwesome5 name="file-medical-alt" size={33} color='#FFFFFF' /> },
  { id: '9', title: 'Vacinação', icon: <FontAwesome5 name='syringe' size={33} color='#FFFFFF' /> },
  { id: '10', title:'Ambulância\n24hs', icon: <FontAwesome5 name='ambulance' size={33} color='#FFFFFF' /> },
  { id: '11', title:'Odonto', icon: <FontAwesome5 name='tooth' size={33} color='#FFFFFF' /> },
  { id: '12', title:'Plano', icon: <FontAwesome5 name='heartbeat' size={33} color='#FFFFFF' /> },
];

const Header = () => (
  <View style={styles.header}>
    
    <Image
      source={require('./img/baby4.png')}
      style={styles.tinyLogo}
    />
    <Text style={styles.headerText}>SUPER-MED <MaterialCommunityIcons name="hospital-box" size={40} color="white" /></Text>
    <Text style={styles.headerText2}> Saúde em primeiro lugar!</Text>
  </View>
);

const App = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonHover = (id) => {
    setHoveredButton(id);
  };

  const handleButtonBlur = () => {
    setHoveredButton(null);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['silver', 'red', 'darkred', 'darkred']}
        style={styles.background}
      >
      </LinearGradient>


      <Header />
      
      {/*FlatList*/}
      <FlatList
        data={buttons}
        keyExtractor={item => item.title}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              hoveredButton === item.id ? styles.hoveredButton : null,
            ]}
            onMouseEnter={() => handleButtonHover(item.id)}
            onMouseLeave={handleButtonBlur}
          >
            {item.icon}
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatlist}
      />

      <View style={styles.statusBar}>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Login')}>
          <MaterialIcons name="login" size={35} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Home')}>
          <FontAwesome name="home" size={35} color="silver"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusBarButton} onPress={() => console.log('Whatsapp')}>
          <FontAwesome5 name="whatsapp" size={35} color="silver" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
    backgroundColor: '000000',
    backgroundImage: 'linear-gradient(to bottom,red, darkred)',
  },

  tinyLogo: {
    marginTop: 50,
    height: 200,
    width: 200,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  header: {
    height: 200,
    paddingTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    paddingTop: -80,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 3,
    fontStyle: 'italic',
    textShadowColor: '#4F4F4F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  headerText2: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    textShadowColor: '#4F4F4F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 130,
    marginBottom: 60,
  },
  item: {
    backgroundColor: '#FF000090',
    borderRadius: 50,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  hoveredButton: {
    backgroundColor: 'crimson', // Cor do hover
  },
  itemTitle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'darkred',
    fontSize: 12,
    textAlign: 'center',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    height: 80,
    width: '100%',
    padding: 10,
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  statusBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarText: {
    fontSize: 16,
    //fontWeight: 'bold',
    color: '#white',
  },
});

export default App;
