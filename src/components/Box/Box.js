
import React, { Component } from 'react';

import { StyleSheet,View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text,Button, Input, InputGroup, Item } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native'

const Box = () => {
    return (
    <View style={ {flex: 1, justifyContent : 'center'} }>
            <Container >
                <LinearGradient colors={['#003366', '#00ff00', ]} style={styles.linearGradient}>
                    <Content>
                        <View >
                            <Image source = {require('../../assets/Images/react-native.png')} style = {{alignSelf : 'center'}} />
                        </View >
                            <Text style={styles.buttonText}>Login</Text>
                        <Item style={{ marginLeft : 10 ,marginRight : 10, marginVertical : 5}} rounded>
                            <Icon name={'ios-home'} size={27} color={'blue'} style={{ margin : 10}} />
                            <Input placeholder="UserName"  />
                        </Item >
                        <Item rounded style={{ marginLeft : 10 ,marginRight : 10,marginVertical : 5 }}>
                        <Icon name={'ios-password'} size={27} color={'blue'} style={{ margin : 10}} />
                            <Input placeholder="Password"/>
                            </Item >
                        <View > 
                            <Button style = {{alignSelf : 'center',marginTop: 10}}  rounded iconLeft>
                            <Icon name={'ios-people'} size={27} color={'blue'} style={{ margin : 6}}/>
                            <Text>Login</Text>
                            
                            </Button>
                        </View> 
                    </Content>
                </LinearGradient>
            </Container>
    </View>
    );
  }

  const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 10  
    },
    buttonText: {
      fontSize: 25,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 0,
      color: '#ffffff',
      backgroundColor: 'transparent',
      alignContent: 'center'
    },
    linearGradientHeader: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 10  
      }
  });

  export default Box