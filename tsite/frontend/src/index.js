import React from 'react'
import RoutedApp from './components/routedApp'
import ReactDom from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux'
import store from './store'

// Alert Options

const AlertOptions = {
    timeout: 3000,
    position: 'top center'
}

ReactDom.render(
    (
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...AlertOptions}>
                <RoutedApp />
            </AlertProvider>
        </Provider>
    ), document.getElementById('root')
)
