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
 import RootStack from '../../../Router'


export default class Header extends Component {
    render(){
        return(
    
             <View style={styles.headerView}>
             <View style={styles.contentView}>
             {/* <View>
                 <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Draw')} >
             <Image
             style={styles.imageStyle}
             source={require('../../../images/menu1.jpg')}
             />
             </TouchableOpacity>
           </View> */}
             <View style={{ paddingTop:10,}}>
           <Text style={styles.textStyle}>{this.props.name}</Text>
            <Text style={styles.textStyle1}>{this.props.name1}</Text>
             </View>
             </View>
          </View>
            
        );
    }
}
const styles={
    headerView:{
        backgroundColor:'#d83813',
        height: 43,
        elevation:5,
        
    },
    imageStyle:{
    height:30,
    width:40,
   marginLeft:5
    },
    contentView:{
        //  justifyContent:'center',
        // alignItems:'center',
        flexDirection: 'row',
         paddingTop:5
    },
    textStyle : {
        fontSize : 15,
        color:'#fff',
        // fontWeight:'medium'
        
    },
    
}