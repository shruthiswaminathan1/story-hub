import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Header} from 'react-native-elements'

export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle: '',
            author: '',
            story: '',
        }
    }
    render(){
       return(
        <View>
            <Header 
                backgroundColor={'#F9B64F'}
                centerComponent={{
                    text: 'Write Story',
                    style: { color: '#000000', fontSize: 20 },
                }}/>
            <View style={styles.inputView}>
                <TextInput style={[styles.inputBox, {height: 40}]} 
                    onChangeText={(text) => {
                        this.setState({ storyTitle: text });
                    }}
                    placeholder='Story Title' 
                    value={this.state.storyTitle}/>
                <TextInput style={[styles.inputBox, {height: 40}]} 
                    onChangeText={(text) => {
                        this.setState({ author: text });
                    }}
                    placeholder='Author' 
                    value={this.state.author}/>
                <TextInput style={[styles.inputBox, {height: 300}]} 
                    onChangeText={(text) => {
                        this.setState({ story: text });
                    }}
                    placeholder='Write Story Here' 
                    value={this.state.story}/>
            </View>
        </View>
       )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox:{
        width: 300,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 20,
      },
    inputView:{
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center'
    },
  });
  
