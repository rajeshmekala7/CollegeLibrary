import React, { Component } from 'react';
import { Modal, Text, TextInput,ScrollView, TouchableOpacity, View,Image} from 'react-native';

import axios from 'axios';

export default class Profile extends Component {
    state = {
        modalVisible: false,
        name:'',
        rollno:'',
        branch:'',
        phone:'',
        email:'',
        password:'',
        newPassword:'',
        confirmPassword:'',
    
      };
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
   
      componentWillMount()
      {
        let self = this;
        console.log('inside read function')
        axios({
            method:'get',
             url:'http://192.168.1.50:3000/user/read',
             headers:{
            //   token:self.state.tokenvalue,
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1la2FsYXJhamVzaEBnbWFpbC5jb20iLCJpZCI6IjViM2RmNDcxYTllOTc3MjFmMDBiNGU2ZCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTMwNzk3NTUwfQ.T8F3h0HlM65g3ntDyUIm3fJ7aUuRtK_TovK9IbxBaoc", 
        },
        })
        .then(function (response) {
                console.log('response is',response);
                if(response.data.status)
                {
                    console.log('reading values')
                    self.setState({name:response.data.data.name,rollno:response.data.data.rollno,branch:response.data.data.branch,phone:response.data.data.phone,email:response.data.data.email})
                   console.log('name is',response.data.data.name)
                }
                else{
                    alert(response.data.message)
                } 
            })
              .catch(function (error) {
                console.log(error);
              });
            }
     change()
      {
        let self = this;
        axios({
            method:'post',
             url:'http://192.168.1.50:3000/user/changepassword',
             headers:{
            //   token:self.state.tokenvalue,
           token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1la2FsYXJhamVzaEBnbWFpbC5jb20iLCJpZCI6IjViM2RmNDcxYTllOTc3MjFmMDBiNGU2ZCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTMwNzk3NTUwfQ.T8F3h0HlM65g3ntDyUIm3fJ7aUuRtK_TovK9IbxBaoc"   
        },
            data:{
             password:self.state.password,
             newPassword:self.state.newPassword,
             confirmPassword:self.state.confirmPassword
            }
        })
        .then(function (response) {
                console.log('response is',response);
                if(response.data.status)
                {
                  alert(response.data.message)
                  self.setModalVisible(!self.state.modalVisible);
                  self.setState({password:"",newPassword:"",confirmPassword:""})
                }
                else{
                    alert(response.data.message)
                } 
            })
              
            }


            // change() {
            //     console.log('hello')
            //     let self = this;
            //     axios.post('http://192.168.1.50:3000/user/changepassword', {
            //         headers:{
            //             //   token:self.state.tokenvalue,
            //                 token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJoZWxwODg4QGdtYWlsLmNvbSIsImlkIjoiNWIzYzU3NDQwMDkwMjcwOWI0YjU0ZmU0Iiwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE1MzA3NjYyNDR9.DUojYI6n0XyhvAgOXGZPhjNX1N7Hx9iAbxToR-AsoGA"     
            //         },
            //         password:self.state.password,
            //         newPassword:self.state.newPassword,
            //         confirmPassword:self.state.confirmPassword
            //   })
            //   .then(function (response) {
            //     console.log(response); 
               
            //     if(response.data.status)
            //     {
            //         alert(response.data.message)
            //     }
            //     else{
            //         alert(response.data.message)
            //     } 
            // })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
            // }
           setpasswordstate(){
               this.setState({password:"",newPassword:"",confirmPassword:""})
           }
    render(){
        return(
    
             <ScrollView>
                <View style={styles.headerView}>
                <View style={{paddingTop:16,paddingLeft:18}}>
               <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('Home')}} >
                   <Image 
                   style={{height:13,width:19}} 
                   source={require('../../images/back.png')}/>
                   </TouchableOpacity>
                 </View>
                 <View style={ styles.headerStyle}>

                    <Text style={styles.textStyle}>Profile</Text>
                   
                </View>

                </View>
            <View   style={{backgroundColor:'white',paddingBottom:600}}>
             <View style={styles.name}>
                <Text style={styles.word}>Name</Text>
            </View>
            <View style={styles.nameView}>
               <Text style={styles.word1}>{this.state.name}</Text>
            </View>
            <View style={styles.margin}/>
            <View style={styles.name1}>
                <Text style={styles.word}>Roll No</Text>
            </View>
            <View style={styles.nameView}>
                <Text style={styles.word1}>{this.state.rollno}</Text>
            </View>
            <View style={styles.margin}/>
            <View style={styles.name1}>
                <Text style={styles.word}>Branch</Text>
            </View>
            <View style={styles.nameView}>
            <Text style={styles.word1}>{this.state.branch}</Text>
            </View>
            <View style={styles.margin}/>
            <View style={styles.name1}>
                <Text style={styles.word}>Phone No.</Text>
            </View>
            <View style={styles.nameView}>
            <Text style={styles.word1}>{this.state.phone}</Text>
            </View>
            <View style={styles.margin}/>
            <View style={styles.name1}>
                <Text style={styles.word}>Email </Text>
            </View>
            <View style={styles.nameView}>
            <Text style={styles.word1}>{this.state.email}</Text>
            </View>
            <View style={styles.margin}/>
                

            <View>
                <TouchableOpacity 
                     style={styles.name2}
                     onPress={() => { 
                         this.setModalVisible(true);
                         }}>
                    <Text style={styles.change}>Change Password</Text>
                </TouchableOpacity>
            </View>

       <View> 
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => { }} >
          <View style={{flex:1,borderRadius:10,backgroundColor:"rgba(0,0,0,0.4)"}} >
          <View  style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          height:410,top:260,paddingLeft:5
          }}>
          <TouchableOpacity
          style={{marginLeft:5,marginTop:5}}
                     onPress={()=>{this.setModalVisible(false);
                                   this.setpasswordstate()}}>
             <View>
                 <Image
                        style={{height:20,width:20,}}
                        source={require('../../images/down-arrow.png')} />
             </View>
           </TouchableOpacity>
            <View style={{marginTop:5}}>
             <TextInput style={styles.search}
                            placeholder='Current Password'
                            placeholderTextColor='grey'
                            secureTextEntry
                            value={this.state.password} onChangeText={(password) => this.setState({ password:password })}
                        />
              <TextInput style={styles.search}
                            placeholder='New Password'
                            placeholderTextColor='grey'
                            secureTextEntry
                            value={this.state.newPassword} onChangeText={(newPassword) => this.setState({ newPassword:newPassword })}
                        />
                                   
              <TextInput style={styles.search}
                            placeholder='Confirm New Password'
                            placeholderTextColor='grey'
                            secureTextEntry
                            value={this.state.confirmPassword} onChangeText={(confirmPassword) => this.setState({ confirmPassword:confirmPassword })}
                        />
              <TouchableOpacity
              style={styles.button}
                onPress={() =>this.change()}>
                 <Text style={{fontSize:14,color:'white'}}>Change</Text>
                 </TouchableOpacity>
              </View>
              </View>
             </View>
              </Modal>
         </View>
      </View>
      </ScrollView>
        );
    }
}
const styles={
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
        paddingLeft:118,
         paddingRight:118
    },
   
    name:{
         marginLeft:30,
         marginTop:35
    },
    name1:{
        marginLeft:30,
        marginTop:15
   },
   name2:{
       marginLeft:30,
       marginTop:15
   },
   margin:{
    borderWidth: 0.5,
    borderColor: '#e1e1e1',
    marginLeft:30,
    marginRight:30,
    marginTop:2

},
    word:{
        fontSize:16,
        fontWeight:'normal',
        color:'#d85e38'
    },
    word1: {
        fontSize: 15,
        color:'#000'
        
    
    },
    nameView:{
        marginTop:15,
        marginLeft:35,
        marginRight:30
    },
    change:{
        fontSize:16,
        fontWeight:'400',
        color:'#d85e38'
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius:8,
         borderColor:'white',
         marginLeft: 20,
         marginRight: 20,
         marginTop: 10,
        backgroundColor:'#d85e38',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:17,
        paddingBottom:17,
    },
    button1: {
        flex: 1,
        borderWidth: 1,
        borderRadius:18,
         borderColor:'white',
         marginLeft: 120,
         marginRight: 120,
         marginTop: 50,
        backgroundColor:'#d85e38',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:17,
        paddingBottom:17,
    },
    search: {
        fontSize: 14,
        margin: 8,
        height: 40,
        borderColor: '#666',
        borderRadius: 6,
        // marginTop: 2,
        backgroundColor: 'white',
         marginTop:25,
        paddingLeft:10,

    },
    imageStyle:{
        height:30,
        width:40,
       marginLeft:5
        },
}
