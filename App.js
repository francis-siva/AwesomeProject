/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/*
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/

import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {//local uri: "./static/1200px-Ferrari-Logo.svg.png"
    //uri: "https://logos-voiture.com/wp-content/uploads/2020/01/Ferrari-Logo-1024x576.png"
    let pic = './static/1200px-Ferrari-Logo.svg.png';
    return (
      
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",
      backgroundColor: '#D40000' }}>
        <Image source={require(pic)} style= {{width: "80%", height: "80%", marginBottom: ".5%", marginTop: "20%"}}/>
        <Text style={{backgroundColor: '#ffe436', textTransform: 'uppercase',
        borderTopWidth: 4, fontSize: 30, fontWeight: 'bold',
        width: "80%", textAlign:'center'}}>Hello world!</Text>
        <Model name='360 Modena' />        
        <Model name='F40' />
        <Model name='Enzo' />
        <Model name='FF' />
        <Model name='458 Italia'/>
        <Model name='F12 Berlinetta' />
      </View>
    );
  }
}

class Model extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center'}}>
        <Text>Ferrari {this.props.name}</Text>
      </View>
    );
  }  
}