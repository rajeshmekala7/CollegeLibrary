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
        borderWidth:0,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0.5,
        elevation: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 7,
        paddingBottom:10,
        backgroundColor: 'white'
    },
}

