import React, { Component } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View,Image} from 'react-native';



export default class Profile extends Component {
    state = {
        modalVisible: false,
      };
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render(){
        return(
    
             <View>
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
            <View>
                <TextInput style={styles.search1}
                            placeholder='  Enter Name '
                            placeholderTextColor='#999999'
                    />
            </View>
            <View style={styles.name1}>
                <Text style={styles.word}>Roll No.</Text>
            </View>
            <View>
                <TextInput style={styles.search1}
                            placeholder='  Enter Roll No. '
                            placeholderTextColor='#999999'
                    />
            </View>
            <View style={styles.name1}>
                <Text style={styles.word}>Branch</Text>
            </View>
            <View>
                <TextInput style={styles.search1}
                            placeholder='  Enter Branch '
                            placeholderTextColor='#999999'
                    />
            </View>
            <View style={styles.name1}>
                <Text style={styles.word}>Email </Text>
            </View>
            <View>
                <TextInput style={styles.search1}
                            placeholder='  Enter Email ID '
                            placeholderTextColor='#999999'
                    />
            </View>
                

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
      
          <View  style={{
          flexDirection: 'column',
          backgroundColor: 'white',
          height:410,top:260,paddingLeft:5,elevation:40
          }}>
          <TouchableOpacity
          style={{marginLeft:5,marginTop:5}}
                     onPress={() =>this.setModalVisible(false)}>
            <View>
                 <Image
                        style={{height:20,width:20,}}
                        source={require('../../images/down-arrow.png')} />
                                </View>
                                </TouchableOpacity>
            <View style={{marginTop:5}}>
             <TextInput style={styles.search}
                            placeholder='Old Password'
                            placeholderTextColor='grey'
                        />
              <TextInput style={styles.search}
                            placeholder='New Password'
                            placeholderTextColor='grey'
                        />
                                   
              <TextInput style={styles.search}
                            placeholder='Confirm New Password'
                            placeholderTextColor='grey'
                        />
              <TouchableOpacity
              style={styles.button}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  alert('Password Successfully Changed')
                }}>
                <Text style={{fontSize:14,color:'white'}}>Change</Text>
              </TouchableOpacity>
              </View>
             </View>
              </Modal>
         </View>

       {/* <View>
       <TouchableOpacity
              style={styles.button1}
                onPress={() => {
                  alert('Profile Updated')
                }}>
                <Text style={{fontSize:12,color:'white'}}>UPDATE</Text>
              </TouchableOpacity>
           </View> */}
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
        marginTop:10
   },
   name2:{
       marginLeft:30,
       marginTop:5
   },
    word:{
        fontSize:14,
        fontWeight:'normal',
        color:'black'
    },
    search1: {
        fontSize: 13,
        margin: 8,
        height: 35,
        borderColor: '#666',
        borderRadius: 6,
        marginTop: 7,
        backgroundColor: 'white',
        // marginTop:15,
        marginLeft:30,
        marginRight:30

    },
    change:{
        fontSize:14,
        fontWeight:'normal',
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
        height: 35,
        borderColor: '#666',
        borderRadius: 6,
        marginTop: 2,
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
