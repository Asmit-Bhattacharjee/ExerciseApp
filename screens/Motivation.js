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
export default class Motivation extends Component {
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
          rightComponent={<Icon name="emoji-nature" color="#ffffff" />}
          centerComponent={{
            text: 'Lets Exercise App',
            style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
          }}
          backgroundColor="#6f03fc"
        />
        <ScrollView />
        <View style={{backgroundColor:'black'}}>
        <Text style={styles.para1}>
          If you’re having trouble beginning an exercise plan or following
          through, you’re not alone. Many of us struggle getting out of the
          sedentary rut, despite our best intentions.
        </Text>
        <Text style={styles.para2}>
          While practical concerns like a busy schedule or poor health can make
          exercise more challenging, for most of us, the biggest barriers are
          mental. Maybe it’s a lack of self-confidence that keeps you from
          taking positive steps, or your motivation quickly flames out, or you
          get easily discouraged and give up. We’ve all been there at some
          point.
        </Text>
        <Text style={styles.para2}>
          If you are making excuses for not doing exercise, but want to do it
          anyway, we have listed some solution for excuses which can help you
          exercise.
        </Text>
        <Text style={styles.heading}>Excuse 1: Hate Exercising</Text>
        <Text style={styles.solution}>
          Solution: Many of us feel the same. If sweating in a gym or pounding a
          treadmill isn’t your idea of a great time, try to find an activity
          that you do enjoy—such as dancing—or pair physical activity with
          something more enjoyable. Take a walk at lunchtime through a scenic
          park, for example, walk laps of an air-conditioned mall while window
          shopping, walk, run, or bike with a friend, or listen to your favorite
          music while you move.
        </Text>
        <Text style={styles.heading}>Excuse 2: Too Busy to Exercise</Text>
        <Text style={styles.solution}>
          Solution: Even the busiest of us can find free time in our day for
          activities that are important. It’s your decision to make exercise a
          priority. And don’t think you need a full hour for a good workout.
          Short 5-, 10-, or 15-minute bursts of activity can prove very
          effective—so, too, can squeezing all your exercise into a couple of
          sessions over the weekend. If you’re too busy during the week, get up
          and get moving during the weekend when you have more time.
        </Text>
        <Text style={styles.heading}>Excuse 3: Too Tired to Exercise </Text>
        <Text style={styles.solution}>
          Solution: It may sound counterintuitive, but physical activity is a
          powerful pick-me-up that actually reduces fatigue and boosts energy
          levels in the long run. With regular exercise, you’ll feel much more
          energized, refreshed, and alert at all times.
        </Text>
        <Text style={styles.heading}>Excuse 4: Feeling its Late to Start</Text>
        <Text style={styles.solution}>
          Solution: It’s never too late to start building your strength and
          physical fitness, even if you’re a senior or a self-confessed couch
          potato who has never exercised before. Very few health or weight
          problems rule exercise out of the question, so talk to your doctor
          about a safe routine.
        </Text>
        <Text style={styles.heading}>Excuse 5: Exercise seems too Difficult</Text>
        <Text style={styles.solution}>
          Solution: “No pain, no gain” is an outdated way of thinking about
          exercise. Exercise shouldn’t hurt. And you don’t have to push yourself
          until you’re soaked in sweat or every muscle aches to get results. You
          can build your strength and fitness by walking, swimming, or even
          playing golf, gardening, or cleaning the house.
        </Text>
        <Text style={styles.heading}>Excuse 6: "I'm not Athletic"</Text>
        <Text style={styles.solution}>
          Solution: Still have nightmares from PE? You don’t have to be sporty
          or ultra-coordinated to get fit. Focus on easy ways to boost your
          activity level, like walking, swimming, or even working more around
          the house. Anything that gets you moving will work.
        </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  para1:{
    color:'white',
  },
  para2:{
    marginTop:10,
    color:'white',
  },
  heading:{
    marginTop:20,
    fontSize:17,
    color:'lightgreen',
  },
  solution:{
    marginTop:5,
    color:'orange',
  },
});
