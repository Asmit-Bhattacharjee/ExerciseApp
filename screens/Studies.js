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
  Linking,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
export default class Studies extends Component {
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
          rightComponent={<Icon name="engineering" color="#ffffff" />}
          centerComponent={{
            text: 'Lets Exercise App',
            style: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' },
          }}
          backgroundColor="#6f03fc"
        />
        <Text style={styles.openPara}>
          Everything has its own effect on our body. Similarly, Exercise too
          have some good and some not so good effects on us. Here, some links
          are posted that informs you about the effects of exercising on your
          body.
        </Text>
        <Text style={styles.heading}>
          For the effects of exercising on our Brain:
        </Text>
        <View style={styles.linkView}>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm#:~:text=Exercise%20can%20help%20provide%3A,helps%20prevent%20age%2Drelated%20decline.'
              )
            }>
            Click Here
          </Text>
        </View>
        <Text style={styles.heading}>
          For the effects of exercising on our Muscles:
        </Text>
        <View style={styles.linkView}>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://simpleask.net/effects-of-exercise-on-muscular-system/'
              )
            }>
            Click Here
          </Text>
        </View>
        <Text style={styles.heading}>
          For the effects on our Respiratory System:
        </Text>
        <View style={styles.linkView}>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                ' https://expand-a-lung.com/effects-of-exercise-on-the-respiratory-system/ '
              )
            }>
            Click Here
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  openPara: {},
  heading: {
    marginTop: 15,
    fontSize: 14,
  },
  link: {
    marginTop: 20,
    color: 'purple',
  },
  linkView:{
    alignItems:'center',
    marginRight:75,
    marginBottom:10,
  },
});
