import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header, Icon } from 'react-native-elements';

export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <View>
          <Header
            leftComponent={
              <Icon name="dashboard" color="#ffffff" />
            }
            rightComponent={
              <Icon name="dashboard" color="#ffffff" />
            }
            centerComponent={{
              text: 'Lets Exercise App',
              style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor="#6f03fc"
          />
        </View>
        <View>
        
          <TouchableOpacity style={styles.exbutton} onPress={()=>
            this.props.navigation.navigate('Exercise')
          }>
          <View style={{flex:1, justifyContent:'center'}}>
          <Image style={styles.image1} source={require('../assets/exerciseImage.jpeg')}/>
          </View>
            <Text style={styles.buttonText1}>Exercise</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.mobutton} onPress={()=>
            this.props.navigation.navigate('Motivation')
          }>
          <View style={{flex:1, justifyContent:'center'}}>
          <Image style={styles.image2} source={require('../assets/motivation.jpeg')}/>
          </View>
            <Text style={styles.buttonText1}>Motivation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stbutton} onPress={()=>
            this.props.navigation.navigate('Studies')
          }>
          <View style={{flex:1, justifyContent:'center'}}>
          <Image style={styles.image1} source={require('../assets/studies.jpeg')}/>
          </View>
            <Text style={styles.buttonText1}>Studies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rebutton} onPress={()=>
            this.props.navigation.navigate('Rewards')
          }>
          <View style={{flex:1, justifyContent:'center'}}>
          <Image style={styles.image1} source={require('../assets/reward.jpeg')}/>
          </View>
            <Text style={styles.buttonText1}>Rewards</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  exbutton: {
    justifyContent: 'center ',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 30,
    width: 300,
    height: 100,
  },
  image1:{
    marginLeft:10,
    marginTop:335,
    borderRadius:10,
    width:130,
    height:80,
  },
  image2:{
    marginLeft:10,
    marginTop:345,
    borderRadius:10,
    width:130,
    height:80,
  },
  mobutton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 30,
    width: 300,
    height: 100,
  },
  stbutton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 30,
    width: 300,
    height: 100,
  },
  rebutton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 30,
    width: 300,
    height: 100,
  },
  buttonText1: {
    textAlign: 'right',
    marginLeft: 50,
    marginBottom: 160,
    marginTop:150,
    fontSize: 25,
    color: 'black',
  },
 
  
});
