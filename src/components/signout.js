import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Header extends Component {
    render(){
        return(
    
             <View>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Login')}/>
             </View>
        
            
        );
    }
}
