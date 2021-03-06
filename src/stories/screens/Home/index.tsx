import * as React from 'react'
import {Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title} from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'

import styles from './styles'

export interface Props {
  navigation: any
  list: any
  showDateTimePicker: () => void,
  hideDateTimePicker: () => void,
  handleDatePicked: (date: Date) => void,
  isDateTimePickerVisible: boolean,
}

export interface State {}

class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Button onPress={() => this.props.showDateTimePicker()} style={{}}>
            <Text>TimePicker</Text>
          </Button>
          <DateTimePicker
            isVisible={this.props.isDateTimePickerVisible}
            onConfirm={this.props.handleDatePicked}
            onCancel={this.props.hideDateTimePicker}
            mode={'time'}
          />
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate('BlankPage', {
                    name: {item},
                  })
                }
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

export default Home
