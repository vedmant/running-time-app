import React from 'react'
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import {Root} from 'native-base'
import {Dimensions} from 'react-native'
import Login from './container/LoginContainer'
import Home from './container/HomeContainer'
import BlankPage from './container/BlankPageContainer'
import Sidebar from './container/SidebarContainer'

const deviceWidth = Dimensions.get('window').width

const Drawer = createDrawerNavigator(
  {
    Home: {screen: Home},
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: props => <Sidebar {...props} />,
  },
)

const App = createStackNavigator(
  {
    Login: {screen: Login},
    BlankPage: {screen: BlankPage},
    Drawer: {screen: Drawer},
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  },
)

export default () => (
  <Root>
    <App/>
  </Root>
)
