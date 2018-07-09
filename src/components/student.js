import React, { Component } from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View,AsyncStorage } from 'react-native';
import axios from 'axios';



export default class student extends Component {
  
    state = {
        date1: "",
        date2:"",
        date3:"",
        modalVisible: false,
        flexshow: 'none',
        flexshow1: 'none',
        flexshow2: 'none',
        book:'',
        book1: '',
        book2:'',
        book3:'',
        book:'',
        i: 0,
        imageshow:'flex',
        tokenvalue:'',
        imageshow1:'flex',
        bookshow1:'flex',
        bookshow2:'none',
        bookshow3:'none'
    }
    componentWillMount(){
        // this.setState({ book:this.state.book1 }) 
        let self = this;
        console.log('inside read function')
        axios({
            method:'get',
             url:'http://192.168.1.50:3000/user/getbookdetails',
             headers:{
            //    token:AsyncStorage.getItem('@CollegeLibrary:token'),
           token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1la2FsYXJhamVzaEBnbWFpbC5jb20iLCJpZCI6IjViM2RmNDcxYTllOTc3MjFmMDBiNGU2ZCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTMwNzg3NTg0fQ.udH5l-RxtHjksA4wCoaNArrFER-iNffvnawUIbUcV64",      
        },
        })
        .then(function (response) {
           
                console.log('response is',response );
                if(response.data.data.role==="student"){
                 if(response.data.data.book1 && response.data.status)
                 {
                    console.log('reading values')
                     self.setState({book1:response.data.data.book1,date1:response.data.data.date1})
                      self.setCardVisible()
                 } 
                 if(response.data.data.book2 && response.data.status){
                    self.setState({book2:response.data.data.book2,date2:response.data.data.date2})
                      self.setCardVisible1()
                 }
                 if(response.data.data.book3 && response.data.status){
                    self.setState({book3:response.data.data.book3,date3:response.data.data.date3})
                      self.setCardVisible2()
                 }
                }
        
            })
              .catch(function (error) {
                console.log(error);
              });
    }
    
    // componentWillMount(){
    //     const val=this._retrieveData();
    //    this.setState({ tokenvalue:val },()=>{
    //        console.log("==>> token  ",this.state.tokenvalue);
    //    });
    // }  

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    setCardVisible() {
        this.setState({ flexshow: 'flex' })
         this.setState({ imageshow:'none' })
       
    }
    setCardVisible1() {
        this.setState({ flexshow1: 'flex' })
    }
    setCardVisible2() {
        this.setState({ flexshow2: 'flex' })
        // this.setState({ i: 3 })
    }


    ShowCurrentDate1  ()  {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hour = new Date().getHours();
        var min = new Date().getMinutes();
        //    alert(date + '-' + month + '-' + year);
         var currentDate1=date + '-' + month + '-' + year + '  ' + hour + ':' + min;
        this.setState({
            date: currentDate1,
         });
         return date + '-' + month + '-' + year + '  ' + hour + ':' + min;
        
    }



// _retrieveData = async () => {
//     try {
//       const val = await AsyncStorage.getItem('@CollegeLibrary:token').then
//     {      
//      console.log('parsing token',val+"")
//     //   const value=JSON.parse(val);
//       console.log('after parsing',val)
//     }
//       if (val!== null) {
//         // We have data!!
//         return val;
//       }
//      } catch (error) {
//        console.log(error);
//      }
//   }

    book1(){
        let self = this;
           axios({
            method:'post',
             url:'http://192.168.1.50:3000/user/bookid',
             headers:{
            //   token:self.state.tokenvalue,
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1la2FsYXJhamVzaEBnbWFpbC5jb20iLCJpZCI6IjViM2RmNDcxYTllOTc3MjFmMDBiNGU2ZCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNTMwNzg4MTg5fQ.YP0IYTHvwvsLoMPg6veVRzDTo_0lfMmX2EkBNakmxzc"   
        },  data:{
               book:self.state.book, 
               date:self.ShowCurrentDate1()
         } 
         })
        .then(function (response) {
                console.log(response);
                if(response.data.status)
                {
                  alert(response.data.message)
                //   self.setCardVisible();
                }
                else{
                    alert(response.data.message)
                } 
            })
              .catch(function (error) {
                console.log(error);
              });
          }
  
    
    render() {
        return (

            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.headerView}>
                    <View style={{ paddingTop: 16, paddingLeft: 7 }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.openDrawer() }} >
                            <Image
                                style={{ height: 15, width: 19 }}
                                source={require('../../images/menu.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerStyle}>
                        <Text style={styles.textStyle}>KUCET-Library</Text>
                    </View>
                </View>
                <View >

                    <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#d85e38' }}>Welcome to</Text>
                    </View>
                    <View style={{ paddingTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 13, fontWeight: 'normal', color: 'black' }}>Kakatiya University College Of Engg. & Tech.</Text>
                        <Text style={{ fontSize: 13, fontWeight: 'normal', color: 'black' }}>Library</Text>
                    </View>

                   {/* //////////// MAKING BOOK1 VISBILE //////////////// */}
                    <View style={{ display: this.state.setCardVisible }}>
                        <View style={{
                            display: this.state.flexshow,
                            borderWidth: 0,
                            borderRadius: 3,
                            borderColor: '#ddd',
                            borderBottomWidth: 0.5,
                            elevation: 2,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 30,
                            paddingBottom: 10,
                            backgroundColor: 'white'
                        }}>
                            <View style={styles.cardName}>
                                <Text style={styles.nameStyle}>Name of Book</Text>
                            </View>
                            <View style={styles.search}>
                                <Text style={{ fontSize: 14, fontWeight: 'normal', color: 'black' }}>Book ID : </Text>
                                <Text style={{ fontSize: 14 }}>{this.state.book1}</Text>
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 17 }}>
                                <Text style={{ fontSize: 14, color: '#d85e38', fontWeight: 'normal' }}>{this.state.date1}  </Text>
                            </View>
                        </View>
                    </View>
              
                    {/* //////////// MAKING BOOK2 VISBILE //////////////// */}
                    <View style={{ display: this.state.setCardVisible1 }}>
                        <View style={{
                            display: this.state.flexshow1,
                            borderWidth: 0,
                            borderRadius: 3,
                            borderColor: '#ddd',
                            borderBottomWidth: 0.5,
                            elevation: 2,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 30,
                            paddingBottom: 10,
                            backgroundColor: 'white'
                        }}>
                       
                            <View style={styles.cardName}>
                                <Text style={styles.nameStyle}>Name of Book</Text>
                            </View>
                            <View style={styles.search}>
                                <Text style={{ fontSize: 14, fontWeight: 'normal', color: 'black' }}>Book ID : </Text>
                                <Text style={{ fontSize: 14 }}>{this.state.book2}</Text>
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 17 }}>
                                <Text style={{ fontSize: 14, color: '#d85e38', fontWeight: 'normal' }}>{this.state.date2}  </Text>
                            </View>
                        </View>
                    </View>
                 
                    {/* //////////// MAKING BOOK3 VISBILE //////////////// */}
                    <View style={{ display: this.state.setCardVisible2 }}>
                        <View style={{
                            display: this.state.flexshow2,
                            borderWidth: 0,
                            borderRadius: 3,
                            borderColor: '#ddd',
                            borderBottomWidth: 0.5,
                            elevation: 2,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 30,
                            paddingBottom: 10,
                            backgroundColor: 'white'
                        }}>
                            <View style={styles.cardName}>
                                <Text style={styles.nameStyle}>Name of Book</Text>
                            </View>
                            <View style={styles.search}>
                                <Text style={{ fontSize: 14, fontWeight: 'normal', color: 'black' }}>Book ID : </Text>
                                <Text style={{ fontSize: 14 }}>{this.state.book3}</Text>
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 17 }}>
                                <Text style={{ fontSize: 14, color: '#d85e38', fontWeight: 'normal' }}>{this.state.date3}  </Text>
                            </View>
                        </View>
                    </View>



                   {/* //////IMAGE TO ADD A BOOK///////////// */}
                    <View style={{ marginTop: 50 }}>
                    <View style={{display: this.state.imageshow }}>
                        <View style={{ paddingTop: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ height: 124, width: 169 }}
                                source={require('../../images/asset.png')} />
                        </View>
                        </View>
                        <View style={{ paddingTop: 50, paddingBottom: 40, alignItems: 'center', justifyContent: 'center', elevation: 10 ,display:this.state.imageshow1}}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(true);
                                }}>
                                <Image
                                    style={{ height: 45, width: 45 }}
                                    source={require('../../images/plus.png')} />
                            </TouchableOpacity>
                    </View>
                   
                        <View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                    alert('Choose any!');
                                }}>
                                <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.4)"}} >
                                <View style={{
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    height: 240, top: 160, paddingLeft: 5, elevation: 7, width: 300, alignContent: 'center', marginLeft: 30
                                }}>

                                    <View style={{ alignItems: 'flex-end', marginRight: 7, marginTop: 7 }}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible);
                                                this.props.navigation.navigate('student')
                                            }}>
                                            <Image
                                                style={{ height: 15, width: 15 }}
                                                source={require('../../images/close.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 11, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'normal', color: '#d85e38' }}>Add Book</Text>
                                    </View>
                                    <View style={{ marginTop: 20, marginLeft: 20 }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'normal', color: 'black' }}>Book ID</Text>
                                    </View>
                                     <View>
                                     <TextInput
                                        style={styles.search1}
                                        placeholder=' Enter Book ID'
                                        placeholderTextColor='grey'
                                        onChangeText={(book) => this.setState({ book })} />
                                    </View>
                                    
                                                                                                                                          
                                    <TouchableOpacity
                                        style={styles.button1}
                                        onPress={() => {
                                             this.book1();
                                             this.setModalVisible(!this.state.modalVisible);
                                             this.ShowCurrentDate1();
                                            // this.setCardVisible();
                                            //   this.addingbook();
                                         }}>
                                        <Text style={{ fontSize: 15, color: 'white' }}>ADD</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = {
    headerView: {
        backgroundColor: '#d85e38',
        height: 44,
        elevation: 5,
        flexDirection: 'row'

    },
    textStyle: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '500'

    },
    headerStyle: {
        paddingTop: 14,
        //  justifyContent:'center', 
        //  alignItems:'center',
        paddingLeft: 100,
        paddingRight: 107
    },
    cardName: {
        marginLeft: 17,
        marginTop: 13,
        // alignItems:'center'
    },
    backgroundView: {
        backgroundColor: '#fcfcfc',
        // paddingBottom:600
    },
    nameStyle: {
        fontWeight: 'normal',
        color: 'black',
        fontSize: 17
    },
    search: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 17,
        marginRight: 200,
        marginBottom: 2,
    },
    search1: {
        fontSize: 14,
        // marginTop: 3,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 2,
        height: 40,
        borderColor: '#ddd',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        marginLeft: 10,
        marginRight: 90,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    button1: {
        borderWidth: 1,
        borderRadius: 18,
        borderColor: 'white',
        marginTop: 27,
        marginLeft: 90,
        marginRight: 90,
        marginBottom: 40,
        backgroundColor: '#d85e38',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 9,
        paddingBottom: 9,
    },
    add: {
        borderWidth: 0,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0.5,
        elevation: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 7,
        paddingBottom: 10,
        backgroundColor: 'white'
    }

}