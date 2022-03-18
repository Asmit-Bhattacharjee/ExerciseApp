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
  Alert,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header, Icon } from 'react-native-elements';

export default class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      checked10: false,
      checked11: false,
      checked12: false,
      checked13: false,
      checked14: false,
      checked15: false,
      checked16: false,
      checked17: false,
      checked18: false,
      checked19: false,
      checked20: false,
      checked21: false,
    };
  }

  render() {
    const { checked1 } = this.state;
    const { checked2 } = this.state;
    const { checked3 } = this.state;
    const { checked4 } = this.state;
    const { checked5 } = this.state;
    const { checked6 } = this.state;
    const { checked7 } = this.state;
    const { checked8 } = this.state;
    const { checked9 } = this.state;
    const { checked10 } = this.state;
    const { checked11 } = this.state;
    const { checked12 } = this.state;
    const { checked13 } = this.state;
    const { checked14 } = this.state;
    const { checked15 } = this.state;
    const { checked16 } = this.state;
    const { checked17 } = this.state;
    const { checked18 } = this.state;
    const { checked19 } = this.state;
    const { checked20 } = this.state;
    const { checked21 } = this.state;

    if(checked1 == true){
      Alert.alert("Workout Completed")
    }
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
          rightComponent={<Icon name="sentiment-very-satisfied" color="#ffffff" />}
          centerComponent={{
            text: 'Lets Exercise App',
            style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
          }}
          backgroundColor="#6f03fc"
        />
        <View style={{ backgroundColor: 'black' }}>
          <ScrollView />
          <CheckBox
            value={checked1}
            onChange={() => {
              this.setState({
                checked1: !checked1,
              });
            }}
          />
          <Text style={styles.textday}>Day 1</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (30)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (20)</Text>
          <Text style={styles.exe}>Exercise 3: Squats (30)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (10)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (15)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 30 seconds)
          </Text>

          <CheckBox
            value={checked2}
            onChange={() => {
              this.setState({
                checked2: !checked2,
              });
            }}
          />
          <Text style={styles.textday}>Day 2</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (30)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (20)</Text>
          <Text style={styles.exe}>Exercise 3: Squats (30)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (10)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (15)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 30 seconds)
          </Text>

          <CheckBox
            value={checked3}
            onChange={() => {
              this.setState({
                checked3: !checked3,
              });
            }}
          />
          <Text style={styles.textday}>Day 3</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (30)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (20)</Text>
          <Text style={styles.exe}>Exercise 3: Squats (30)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (10)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (15)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 30 seconds)
          </Text>

          <CheckBox
            value={checked4}
            onChange={() => {
              this.setState({
                checked4: !checked4,
              });
            }}
          />
          <Text style={styles.textday}>Day 4</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (30)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (20)</Text>
          <Text style={styles.exe}>Exercise 3: Squats (30)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (10)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (15)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 30 seconds)
          </Text>

          <CheckBox
            value={checked5}
            onChange={() => {
              this.setState({
                checked5: !checked5,
              });
            }}
          />
          <Text style={styles.textday}>Day 5</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (30)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (20)</Text>
          <Text style={styles.exe}>Exercise 3: Squats (30)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (10)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (15)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 30 seconds)
          </Text>

          <CheckBox
            value={checked6}
            onChange={() => {
              this.setState({
                checked6: !checked6,
              });
            }}
          />
          <Text style={styles.textday}>Day 6</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (35)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (25)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (35)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (15)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (20)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 35 seconds)
          </Text>

          <CheckBox
            value={checked7}
            onChange={() => {
              this.setState({
                checked7: !checked7,
              });
            }}
          />
          <Text style={styles.textday}>Day 7</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (35)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (25)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (35)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (15)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (20)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 35 seconds)
          </Text>

          <CheckBox
            value={checked8}
            onChange={() => {
              this.setState({
                checked8: !checked8,
              });
            }}
          />
          <Text style={styles.textday}>Day 8</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (35)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (25)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (35)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (15)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (20)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 35 seconds)
          </Text>

          <CheckBox
            value={checked9}
            onChange={() => {
              this.setState({
                checked9: !checked9,
              });
            }}
          />
          <Text style={styles.textday}>Day 9</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (35)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (25)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (35)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (15)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (20)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 35 seconds)
          </Text>

          <CheckBox
            value={checked10}
            onChange={() => {
              this.setState({
                checked10: !checked10,
              });
            }}
          />
          <Text style={styles.textday}>Day 10</Text>
          <Text style={styles.exm}>Exercise 1: Lunges (35)</Text>
          <Text style={styles.exe}>Exercise 2: Push-ups (25)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (35)</Text>
          <Text style={styles.exe}>Exercise 4: Burpees (15)</Text>
          <Text style={styles.exe}>Exercise 5: Side Planks (20)</Text>
          <Text style={styles.exm}>
            Exercise 6: Planks (Hold for 35 seconds)
          </Text>

          <CheckBox
            value={checked11}
            onChange={() => {
              this.setState({
                checked11: !checked11,
              });
            }}
          />
          <Text style={styles.textday}>Day 11</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (40)</Text>
          <Text style={styles.exm}>Exercise 2: Push-ups (30)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (40)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (20)</Text>
          <Text style={styles.exm}>Exercise 5: Side Planks (25)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 40 seconds)
          </Text>

          <CheckBox
            value={checked12}
            onChange={() => {
              this.setState({
                checked12: !checked12,
              });
            }}
          />
          <Text style={styles.textday}>Day 12</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (40)</Text>
          <Text style={styles.exm}>Exercise 2: Push-ups (30)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (40)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (20)</Text>
          <Text style={styles.exm}>Exercise 5: Side Planks (25)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 40 seconds)
          </Text>

          <CheckBox
            value={checked13}
            onChange={() => {
              this.setState({
                checked13: !checked13,
              });
            }}
          />
          <Text style={styles.textday}>Day 13</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (40)</Text>
          <Text style={styles.exm}>Exercise 2: Push-ups (30)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (40)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (20)</Text>
          <Text style={styles.exm}>Exercise 5: Side Planks (25)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 40 seconds)
          </Text>
          <CheckBox
            value={checked14}
            onChange={() => {
              this.setState({
                checked14: !checked14,
              });
            }}
          />
          <Text style={styles.textday}>Day 14</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (40)</Text>
          <Text style={styles.exm}>Exercise 2: Push-ups (30)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (40)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (20)</Text>
          <Text style={styles.exm}>Exercise 5: Side Planks (25)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 40 seconds)
          </Text>

          <CheckBox
            value={checked15}
            onChange={() => {
              this.setState({
                checked15: !checked15,
              });
            }}
          />
          <Text style={styles.textday}>Day 15</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (40)</Text>
          <Text style={styles.exm}>Exercise 2: Push-ups (30)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (40)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (20)</Text>
          <Text style={styles.exm}>Exercise 5: Side Planks (25)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 40 seconds)
          </Text>

          <CheckBox
            value={checked16}
            onChange={() => {
              this.setState({
                checked16: !checked16,
              });
            }}
          />
          <Text style={styles.textday}>Day 16</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (40)</Text>
          <Text style={styles.exm}>Exercise 2: Push-ups (30)</Text>
          <Text style={styles.exm}>Exercise 3: Squats (40)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (20)</Text>
          <Text style={styles.exm}>Exercise 5: Side Planks (25)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 40 seconds)
          </Text>

          <CheckBox
            value={checked17}
            onChange={() => {
              this.setState({
                checked17: !checked17,
              });
            }}
          />
          <Text style={styles.textday}>Day 17</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (45)</Text>
          <Text style={styles.exh}>Exercise 2: Push-ups (35)</Text>
          <Text style={styles.exh}>Exercise 3: Squats (45)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (25)</Text>
          <Text style={styles.exh}>Exercise 5: Side Planks (30)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 45 seconds)
          </Text>

          <CheckBox
            value={checked18}
            onChange={() => {
              this.setState({
                checked18: !checked18,
              });
            }}
          />
          <Text style={styles.textday}>Day 18</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (45)</Text>
          <Text style={styles.exh}>Exercise 2: Push-ups (35)</Text>
          <Text style={styles.exh}>Exercise 3: Squats (45)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (25)</Text>
          <Text style={styles.exh}>Exercise 5: Side Planks (30)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 45 seconds)
          </Text>

          <CheckBox
            value={checked19}
            onChange={() => {
              this.setState({
                checked19: !checked19,
              });
            }}
          />
          <Text style={styles.textday}>Day 19</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (45)</Text>
          <Text style={styles.exh}>Exercise 2: Push-ups (35)</Text>
          <Text style={styles.exh}>Exercise 3: Squats (45)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (25)</Text>
          <Text style={styles.exh}>Exercise 5: Side Planks (30)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 45 seconds)
          </Text>

          <CheckBox
            value={checked20}
            onChange={() => {
              this.setState({
                checked20: !checked20,
              });
            }}
          />
          <Text style={styles.textday}>Day 20</Text>
          <Text style={styles.exh}>Exercise 1: Lunges (45)</Text>
          <Text style={styles.exh}>Exercise 2: Push-ups (35)</Text>
          <Text style={styles.exh}>Exercise 3: Squats (45)</Text>
          <Text style={styles.exm}>Exercise 4: Burpees (25)</Text>
          <Text style={styles.exh}>Exercise 5: Side Planks (30)</Text>
          <Text style={styles.exh}>
            Exercise 6: Planks (Hold for 45 seconds)
          </Text>

          <CheckBox
            value={checked21}
            onChange={() => {
              this.setState({
                checked21: !checked21,
              });
            }}
          />
          <Text style={styles.textday}>Day 21</Text>
          <Text style={styles.exvh}>Exercise 1: Lunges (50)</Text>
          <Text style={styles.exvh}>Exercise 2: Push-ups (40)</Text>
          <Text style={styles.exvh}>Exercise 3: Squats (50)</Text>
          <Text style={styles.exh}>Exercise 4: Burpees (30)</Text>
          <Text style={styles.exvh}>Exercise 5: Side Planks (35)</Text>
          <Text style={styles.exvh}>
            Exercise 6: Planks (Hold for 50 seconds)
          </Text>
          <Text style={styles.legendtexte}>----- Easy</Text>
          <Text style={styles.legendtextm}>----- Medium</Text>
          <Text style={styles.legendtexth}>----- Hard</Text>
          <Text style={styles.legendtextvh}>----- Very Hard</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textday: {
    marginLeft: 20,
    marginTop: -17,
    color: 'lightblue',
  },
  exe: {
    marginLeft: 30,
    color: 'green',
  },
  exm: {
    marginLeft: 30,
    color: 'yellow',
  },
  exh: {
    marginLeft: 30,
    color: 'red',
  },
  exvh: {
    marginLeft: 30,
    color: 'maroon',
  },
  legendtexte: {
    marginTop: 50,
    color: 'green',
  },
  legendtextm: {
    color: 'yellow',
  },
  legendtexth: {
    color: 'red',
  },
  legendtextvh: {
    marginBottom: 20,
    color: 'maroon',
  },
});
