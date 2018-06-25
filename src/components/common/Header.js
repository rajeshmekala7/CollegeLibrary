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
 import profile from '../../components/profile'


export default class Header extends Component {
    render(){
        return(
    
             <View style={styles.headerView}>
             <View style={styles.contentView}>
             {/* <View>
                 <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('profile')} >
             <Image
             style={styles.imageStyle}
             source={require('../../../images/menu.png')}
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
        backgroundColor:'#d85e38',
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