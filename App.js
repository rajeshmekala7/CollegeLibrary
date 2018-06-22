import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import RootStack from './Router'
 
// const RootStack= StackNavigator({
//   login: {
//       screen: login,
//     navigationOptions:{
//       header:null
//     },
//      },
//      student: { 
//       screen: student,
//      navigationOptions:{
//        header:null
//      },
//      },
 
// })

export default RootStack
