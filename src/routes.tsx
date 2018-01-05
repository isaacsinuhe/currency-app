import * as React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

export const routes = (
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>
)
