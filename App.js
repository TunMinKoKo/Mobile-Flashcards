import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import StatusBar from './components/StatusBar'
import Navigator from './components/Navigator'
//import { setLocalNotification } from './utils/helpers'
import styled from 'styled-components/native'

const ContainerView = styled.View`
  flex: 1;
`

class App extends React.Component {
  componentDidMount() {
    //setLocalNotification()
  }

  render() {
    const store = createStore(reducer)

    return (
        <Provider store={store}>
          <ContainerView>
            <StatusBar
                backgroundColor='#34435E'
                barStyle='light-content'
            />
            <Navigator />
          </ContainerView>
        </Provider>
    )
  }
}

export default App
