import * as React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ({})=>{const routeName = navigation.state.routeName
    if(routeName === 'Write'){
      return(<Image source={require('./assets/write.png')} style={{width: 40, height: 40}}/>)
    } else if(routeName === 'Read')
    {
      return(<Image source={require('./assets/read.png')} style={{width: 40, height: 40}}/>)
    }}
  })
})

const AppContainer = createAppContainer(TabNavigator);
