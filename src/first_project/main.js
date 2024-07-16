import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LanPage from './LanPage'
import Store from './Redux/Store'
import LoginPage from './LoginPage'
const Main = () => {
    return (
        <div>
            <Provider store={Store}>
                <Router>
                    <Routes>
                        <Route path='/' element={<LoginPage />} />
                        <Route path='/product1' element={<LanPage/>} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    )
}
// ()=> isLogin ? <LanPage/> : <Redirect to="/"/>
export default Main
