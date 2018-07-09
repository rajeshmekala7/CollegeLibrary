import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import CardSection from './common/CardSection';
import Header from './common/Header';


export default class student extends Component {

    
    state={
        date1:'',
        date2:'',
        date3:''
    }
    
    ShowCurrentDate1=()=>{
        var date = new Date().getDate();
       var month = new Date().getMonth() + 1;
       var year = new Date().getFullYear();
       var hour = new Date().getHours() ;
       var min = new Date().getMinutes();
    //    alert(date + '-' + month + '-' + year);
       currentDate = date + '-' + month + '-' + year  + '  ' + hour + ':'+ min ;
       this.setState({
         date1 : currentDate,
        
       });
  }
  ShowCurrentDate2=()=>{
    var date = new Date().getDate();
   var month = new Date().getMonth() + 1;
   var year = new Date().getFullYear();
   var hour = new Date().getHours() ;
   var min = new Date().getMinutes();
//    alert(date + '-' + month + '-' + year);
   currentDate = date + '-' + month + '-' + year  + '  ' + hour + ':'+ min ;
   this.setState({
     date2 : currentDate,
   });
}
ShowCurrentDate3=()=>{
    var date = new Date().getDate();
   var month = new Date().getMonth() + 1;
   var year = new Date().getFullYear();
   var hour = new Date().getHours() ;
   var min = new Date().getMinutes();
//    alert(date + '-' + month + '-' + year);
   currentDate = date + '-' + month + '-' + year  + '  ' + hour + ':'+ min ;
   this.setState({
     date3 : currentDate,
   });
}
    render(){
        return(
            
            <View style={{flex:1}}>
               <View style={styles.headerView}>
                 <View style={ styles.headerStyle}>
                    <Text style={styles.textStyle}>KUCET-Library</Text>
                </View>
                </View>
                <View style={styles.backgroundView}> 
                 
                   <View style={{paddingTop:20,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,fontWeight:'normal',color:'#d85e38'}}>Welcome to</Text>
                   </View>
                   <View style={{paddingTop:10,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:13,fontWeight:'normal',color:'black'}}>Kakatiya University College Of Engg. & Tech.</Text>
                       <Text style={{fontSize:13,fontWeight:'normal',color:'black'}}>Library</Text>
                   </View>
                   <View style={{marginTop:10}}>
             <CardSection >
             <View style={styles.cardName}>
             <Text style={styles.nameStyle}> Name of Book</Text>
             </View><View flexDirection='row'>
                  {/* <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.ShowCurrentDate1()}>
                  <Text>Click Here to scan</Text>
                  </TouchableOpacity> */}
                   <TextInput style={styles.search}
                            placeholder='Enter Book ID'
                            placeholderTextColor='grey'
                           
                        />
                        <View>
                        <Image 
                        style={{height:15,width:15,marginTop:3}}
                        source={require('../../images/plus.png')}/>
                        </View>
                  </View>
                  <View style={{paddingTop:5,paddingLeft:7}}>
                      <Text>{this.state.date1}  </Text>
                      </View>
        
             </CardSection>

            

               <CardSection >
               <View style={styles.cardName}>
             <Text style={styles.nameStyle}>Name of Book</Text>
             </View>
             <View>
             <TextInput style={styles.search}
                            placeholder='Enter Book ID'
                            placeholderTextColor='grey'
                           
                        />
                            </View>
                  <View style={{marginTop:13,}}>
                      <Text>{this.state.date2}  </Text>
                      </View>
          
              </CardSection>
              <CardSection >
               <View style={styles.cardName}>
             <Text style={styles.nameStyle}>Name of Book</Text>
             </View>
             <View>
             <TextInput style={styles.search}
                            placeholder='Enter Book ID'
                            placeholderTextColor='grey'
                           
                        />
                        </View>
                  <View style={{marginTop:13}}>
                      <Text>{this.state.date3}  </Text>
                      </View>
              
              </CardSection>
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
    textStyle : {
        fontSize : 15,
        color:'#fff',
        fontWeight:'500'
        
    },
    headerStyle:{
        paddingTop:13 ,
         justifyContent:'center', 
         alignItems:'center'
    },
    cardName:{
        marginLeft:17,
        marginTop:13,
        // alignItems:'center'
    },
    backgroundView:{
        backgroundColor:'#fcfcfc',
        paddingBottom:600
    },
    nameStyle:{
        fontWeight:'normal',
        color:'black',
        fontSize:17
    },
    search: {
        fontSize: 14,
        marginTop: 3,
        marginLeft:17,
        marginRight:200,
        marginBottom:2,
        height: 35,
        borderColor: '#ddd',
        borderRadius: 20,
        backgroundColor: 'white',
        

    },
    button:{
        flex: 1,
        borderWidth: 1,
        borderRadius:5,
        borderColor:'#ddd',
         marginLeft: 10,
         marginRight: 90,
         marginTop: 10,
         marginBottom:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:5,
        paddingBottom:5
       
    
    },
 
}