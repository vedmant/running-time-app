import * as React from 'react'
import {connect} from 'react-redux'
import Home from '../../stories/screens/Home'
import datas from './data'
import {fetchList} from './actions'
import {ToastAndroid} from 'react-native'

export interface Props {
  navigation: any
  fetchList: (datas: Array) => void,
  data: object
}

export interface State {
  isDateTimePickerVisible: boolean,
}

class HomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {isDateTimePickerVisible: false}
  }

  componentDidMount() {
    this.props.fetchList(datas)
  }

  showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true})
  }

  hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false})
  }

  handleDatePicked = date => {
    console.log('A date has been picked: ', date)
    ToastAndroid.show('Time selected: ' + date, ToastAndroid.LONG)
    this.hideDateTimePicker()
  }

  render() {
    return <Home navigation={this.props.navigation}
                 list={this.props.data}
                 isDateTimePickerVisible={this.state.isDateTimePickerVisible}
                 showDateTimePicker={this.showDateTimePicker}
                 handleDatePicked={this.handleDatePicked}
                 hideDateTimePicker={this.hideDateTimePicker}
    />
  }
}

function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
  }
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
})
export default connect(mapStateToProps, bindAction)(HomeContainer)
