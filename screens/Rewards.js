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
  ScrollView,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
export default class Rewards extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              name="arrow-left"
              type="feather"
              color="#ffffff"
              onPress={() =>
                this.props.navigation.navigate('Dashboard')
              }
            />
          }
          rightComponent={<Icon name="emoji-events" color="#ffffff" />}
          centerComponent={{
            text: 'Lets Exercise App',
            style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
          }}
          backgroundColor="#6f03fc"
        />
        <ScrollView />
        <View style={styles.background}>
        <View>
          <Text style={styles.textDayA}>Day 1:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayA}>Day 2:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayA}>Day 3:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayC}>Day 4:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayC}>Day 5:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayC}>Day 6:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayD}>Day 7:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayD}>Day 8:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayD}>Day 9:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayE}>Day 10:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayE}>Day 11:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayE}>Day 12:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayF}>Day 13:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayF}>Day 14:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayF}>Day 15:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayG}>Day 16:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayG}>Day 17:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayG}>Day 18:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayH}>Day 19:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayH}>Day 20:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        <View>
          <Text style={styles.textDayH}>Day 21:</Text>
          <Text style={styles.status}>Status: Not Completed</Text>
          <Text style={styles.rewardHeading}>Reward: </Text>
          <Text style={styles.reward}>Complete the Exercises to reveal the reward for the day</Text>
        </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background:{
    backgroundColor:'black',
  },
  textDayA:{
    color:'blue',
  },
  textDayC:{
    color:'#11FFEE',
  },
  textDayD:{
    color:'#08FF08',
  },
  textDayE:{
    color:'#FFEF00',
  },
  textDayF:{
    color:'#FFAD00',
  },
  textDayG:{
    color:'#E10600',
  },
  textDayH:{
    color:'#800500',
  },
  status:{
    color:'red',
    marginLeft:80,
  },
  rewardHeading:{
    color:'#FF1493',
    marginLeft:73.5,
  },
  reward:{
    color:'#CCFF00',
    marginBottom:20,
    marginLeft:129,
    marginTop:-15,
  },
});