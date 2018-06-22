
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
import login from './login';
import RootStack from './../../Router';
import Header from './common/Header';



  export default class Signup extends Component {

   
    state = {
        name:'',
        email: '',
        rollno:'',
        password: '',
        confirmpassword:''      
     }
    login(){
        // if(this.state.email=="s" && this.state.password=="s")
        // {
           this.props.navigation.navigate('Router');
        }
    //     else
    //     {
    //         alert('you have entered incorrect mail id or password')
    //     }
    // }
   
   
   render(){
     return(
        
        <ScrollView style={styles.scroll}>
        <Header name="Create a new account"/>
         <View style={{marginTop:30}}>
         <View>
           <TextInput style={styles.search}
                            placeholder='Name '
                            placeholderTextColor='grey'
                            
                        />
         </View>
           <View>
           <TextInput style={styles.search}
                            placeholder='Email '
                            placeholderTextColor='grey'
                            value={this.state.email} onChangeText={(email) => this.setState({ email:email })}
                        />
         </View>
         <View>
           <TextInput style={styles.search}
                            placeholder='Roll No'
                            placeholderTextColor='grey'
                        />
         </View>
         <View>
           <TextInput style={styles.search}
                            placeholder='Branch'
                            placeholderTextColor='grey'
                        />
         </View>
         <View>
           <TextInput style={styles.search}
                            placeholder='Password'
                            placeholderTextColor='grey'
                            secureTextEntry
                            value={this.state.password} onChangeText={(password) => this.setState({ password:password })}
                        />
         </View>
         <View>
           <TextInput style={styles.search}
                            placeholder='Confirm Password'
                            placeholderTextColor='grey'
                        />
         </View>
          
         
         <View >
         <TouchableOpacity  style={styles.button} onPress={()=>this.login()}>
                  <View>
                      <Text  style={{fontSize:14,color:'white'}} >Signup</Text>
                  </View>
                        </TouchableOpacity>
                    </View>
                  </View>
            
                 
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
        color:'#ed3510',
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
        marginTop:15,
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
         marginTop: 20,
        backgroundColor:'#ed3510',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10,
        
       
    },
    button1: {
        flex: 1,
        borderWidth: 1,
        borderRadius:5,
        borderColor:'#ed3510',
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
        color:'#ed3510',
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