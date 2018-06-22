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

 export default class CardSection extends Component {
    render(){
        return(
        
             <View style={styles.cardStyle}>
               {this.props.children}
             </View>
        
            
        );
    }
}
const styles={
    
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        paddingBottom:10,
        backgroundColor: 'white'
    },
}

