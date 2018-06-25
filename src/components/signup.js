
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
        <View>
     
          <View style={styles.headerView}>
                <View style={{paddingTop:16,paddingLeft:18}}>
               <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('login')}} >
                   <Image 
                   style={{height:13,width:19}} 
                   source={require('../../images/back.png')}/>
                   </TouchableOpacity>
                 </View>
                 <View style={ styles.headerStyle}>
                    <Text style={styles.textStyle}>Create a new account</Text>
                </View>
                </View>
        <ScrollView style={styles.scroll}>
         <View style={{marginTop:30}}>
         
         <View style={styles.name}>
                <Text style={styles.word}>Name</Text>
            </View>
         <View>
           <TextInput style={styles.search}
                            placeholder=' Enter Name '
                            placeholderTextColor='grey'
                            
                        />
         </View>
         <View style={styles.name}>
                <Text style={styles.word}>Email</Text>
            </View>
           <View>
           <TextInput style={styles.search}
                            placeholder=' Enter Email ID'
                            placeholderTextColor='grey'
                            value={this.state.email} onChangeText={(email) => this.setState({ email:email })}
                        />
         </View>
         <View style={styles.name}>
                <Text style={styles.word}>Roll No.</Text>
            </View>
         <View>
           <TextInput style={styles.search}
                            placeholder=' Enter Roll No'
                            placeholderTextColor='grey'
                        />
         </View>
         <View style={styles.name}>
                <Text style={styles.word}>Branch</Text>
            </View>
         <View>
           <TextInput style={styles.search}
                            placeholder=' Enter Branch Name'
                            placeholderTextColor='grey'
                        />
         </View>
         <View style={styles.name}>
                <Text style={styles.word}>Password</Text>
            </View>
         <View>
           <TextInput style={styles.search}
                            placeholder=' Enter Password'
                            placeholderTextColor='grey'
                            secureTextEntry
                            value={this.state.password} onChangeText={(password) => this.setState({ password:password })}
                        />
         </View>
         <View style={styles.name}>
                <Text style={styles.word}>Confrim Password</Text>
            </View>
         <View>
           <TextInput style={styles.search}
                            placeholder='Re-enter Password'
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
       </View>
      );
   }
 }

 const styles={
    scroll:{
        //  flex:1,
        backgroundColor:'white',
        
},

name:{
    marginLeft:30,
    marginTop:0
},
word:{
    fontSize:14,
    fontWeight:'normal',
    color:'black'
},
imageView:{
    alignItems:'center',
   
},
headerView:{
    backgroundColor:'#d85e38',
    height: 43,
    elevation:5,
    flexDirection:'row'
},
textStyle : {
    fontSize : 15,
    color:'#fff',
    fontWeight:'500'
},
headerStyle:{
    paddingTop:13 ,
    //  justifyContent:'center', 
    //  alignItems:'center'
    paddingLeft:80,
     paddingRight:118
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
       marginLeft:30,
       marginRight:30

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
        borderRadius:18,
         borderColor:'white',
         marginLeft: 80,
         marginRight: 80,
         marginTop: 20,
        backgroundColor:'#d85e38',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:80
        
       
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