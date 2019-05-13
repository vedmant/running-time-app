import * as React from 'react'
import {Image, Platform} from 'react-native'
import {Body, Button, Container, Content, Footer, Header, Icon, Text, Title, View} from 'native-base'

// import styles from "./styles";
export interface Props {
  loginForm: any
  onLogin: Function
}

export interface State {}

class Login extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Header style={{height: 50}}>
          <Body style={{alignItems: 'center'}}>
            {/*<Icon name="flash" style={{fontSize: 104}}/>*/}
            <Title style={{lineHeight: 50}}>Running Time</Title>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder>
            <Button block onPress={() => this.props.onLogin()}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Login
