import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,Tap,ScrollView,TouchableOpacity,MenuButton
} from 'react-native';

import login from './src/components/login';
import student from './src/components/student';
import profile from './src/components/profile';
import Signup from './src/components/signup';
import {DrawerItems,NavigationActions,createStackNavigator,createDrawerNavigator} from 'react-navigation';


const Draw= createDrawerNavigator({
  
   
        Home: {
            screen: student,
            navigationOptions : {
              drawerLabel: 'Home',
              style:{
      
              },
                drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./images/home.png')}
                  style={{height:25,width:25}}
                />
              ),}
            
          },
       'Student Profile':{
            screen:profile,
            navigationOptions : {
              drawerIcon: ({ tintColor }) => (
                <Image
                  source={require('./images/user1.png')}
                  style={{height:25,width:25}}
                />
              ),}
        },
        Logout:{
          screen:login,
          navigationOptions:{
            drawerIcon:({tintColor}) => (
              <Image
              source={require('./images/logout.png')}
              style={{height:25,width:25}}
              />
            )
          }
        }
        
        
    },
    {
      navigationOptions: {
       headerMode: 'screen',
     },
     drawerPosition: 'left',
     drawerWidth: 250,
     contentOptions: {
        activeTintColor :'black',
        inactiveTintColor :'black',
       activeBackgroundColor :'#fff',
       inactiveBackgroundColor :'#fff',
     },
     style:{
     marginTop:40,
     marginLeft:10
      
     },
   },
    
    // {
    //   contentComponent: (props) => (
    //     <View style={{paddingLeft:15,paddingTop:100}}>
    //     <View style={{alignItems:'center',padding:3}}>
    //       <Text style={{fontWeight:'bold',fontSize:20,color:'#ed3510'}}>Library</Text>
    //       </View>
    //       <DrawerItems {...props} />
    //       <TouchableOpacity
    //            onPress={()=>props.navigation.navigate('login')} >
    //       <View style={{flexDirection:'row'}}>
    //       <View style={{paddingLeft:15,paddingTop:4}}>
    //       <Image style={{height:25,width:25}} source={require('./images/logout.png')}/></View>
    //       <View style={{paddingTop:4,paddingLeft:33}}>
    //         <Text style={{fontWeight:'bold',fontSize:14,color:'black'}}>Logout</Text>
    //         </View>

    //     </View>
        
    //     </TouchableOpacity>
    //     </View>
     
    //   )
    //  },
);

// const MenuButton = (
  
// 	<View>
// 		<TouchableOpacity onPress={() => { this.props.navigate('DrawerOpen')} }>
// 			<Icon name="bars" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/>
// 		</TouchableOpacity>
// 	</View>

// );


const RootStack= createStackNavigator({
    login: {
        screen: login,
      navigationOptions:{
        header:null
      },
       },
       Router: { 
        screen: Draw,
       navigationOptions:{
         header:null,
       }, 
      },
      signup:{
        screen: Signup,
        navigationOptions:{
          header:null,
        }, 
      },

      // navigationOptions: ({ navigation }) => ({
      //   headerLeft : <MenuButton navigate={navigation.navigate} />,
      // }),
})

export default RootStack;
