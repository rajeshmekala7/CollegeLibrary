
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import student from './student';
import Signup from './signup';
import RootStack from './../../Router';
import SplashScreen from 'react-native-splash-screen'



  export default class login extends Component {

   componentWillMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    state = {
        email: 's',
        password: 's',
       
     }
    login(){
        if(this.state.email=="s" && this.state.password=="s")
        {
           this.props.navigation.navigate('Router');
        }
        else
        {
            alert('you have entered incorrect mail id or password')
        }
    }
   
   
   render(){
     return(
        
        <ScrollView style={styles.scroll}>
         <View style={{marginTop:50}}>
         <View style={styles.imageView} >
               <Image style={{height:123,width:123}} source={require('./../../images/ku1.jpg')} />
             </View>
            <View style={styles.headerView}>
               <Text style={styles.headerText}>Library - KUCET</Text>
           </View>
           <View>
           <TextInput style={styles.search}
                            placeholder='Email or  username'
                            placeholderTextColor='grey'
                            value={this.state.email} onChangeText={(email) => this.setState({ email:email })}
                        />
         </View>
         <View>
           <TextInput style={styles.search1}
                            placeholder='Password'
                            placeholderTextColor='grey'
                            secureTextEntry
                            value={this.state.password} onChangeText={(password) => this.setState({ password:password })}
                        />
         </View>
          
          <View style={styles.forgot}>
                <TouchableOpacity >
                   <View>
                     <Text style={styles.headerLeft}> Forgot Password?  </Text>
                   </View>
                     </TouchableOpacity>
                      </View>
         <View >
         <TouchableOpacity  style={styles.button} onPress={()=>this.login()}>
                  <View>
                      <Text  style={{fontSize:14,color:'white'}} >Login</Text>
                  </View>
                        </TouchableOpacity>
                    </View>
                      <View >
                          <TouchableOpacity
                          style={styles.button1}  onPress={() =>  this.props.navigation.navigate('signup')}>
                          <View>
                      <Text  style={{fontSize:15,color:'#ed3510'}} > Signup</Text>
                      </View>
                    </TouchableOpacity>
                      </View>
                  </View>
            
                {/* <View style={styles.headerView1}>
                    <Text style={{color:'white',fontSize:12}}>By logging in you agree to KUCET Terms of Service,Privacy Policy,Cookie Policy and Content Policies</Text>
                    </View>
             */}
                 
        </ScrollView>
       
      );
   }
 }

 const styles={
    scroll:{
         flex:1,
        backgroundColor:'white',
        
},
imageView:{
    alignItems:'center',
   
},

    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#d85e38',
        // fontStyle:'italic'
    },
    headerView:{
       // margin:10,
       marginLeft:10,
       marginRight:10,
       marginBottom:10,
         marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    },
    search: {
        fontSize: 14,
        margin: 8,
        height: 35,
        borderColor: '#666',
        borderRadius: 6,
        marginTop: 2,
        backgroundColor: 'white',
        marginTop:25,
        paddingLeft:10,

    },
    search1: {
        fontSize: 14,
        marginTop: 8,
        marginLeft:8,
        marginRight:8,
        marginBottom:2,
        height: 35,
        borderColor: '#666',
        borderRadius: 6,
        backgroundColor: 'white',
        marginTop:10,
        paddingLeft:10,

    },
    // buttonStyle:{
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       marginTop:20,
    //       backgroundColor:'white',
    // },
   
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius:5,
         borderColor:'white',
         marginLeft: 10,
         marginRight: 10,
         marginTop: 10,
        backgroundColor:'#d85e38',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10,
        
       
    },
    button1: {
        flex: 1,
        borderWidth: 1,
        borderRadius:5,
        borderColor:'#d85e38',
         marginLeft: 10,
         marginRight: 10,
         marginTop: 15,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:5,
        paddingTop:5
    
        
       
    },
    headerLeft:{
        fontWeight:'400',
        color:'#d85e38',
        fontSize:15,
        marginTop:5
    },
    forgot:{
       marginTop:2,
       marginLeft:10,
       marginBottom:2
   
    },
    cardStyle3: {
        borderWidth: 1,
        borderRadius:5,
         borderColor:'#ddd',
         // borderBottomWidth: 0,
         marginLeft: 10,
         marginRight: 10,
         marginTop: 20,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:5,
        paddingBottom:5
     }, 
     headerView1:{
        // margin:10,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
         marginTop:108
     },
}

//keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
