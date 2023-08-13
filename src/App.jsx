import React from 'react'
import Navbar from './Components/Navbar'
import NewsInfinite from './Components/NewsInfinite'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  const pageSize = 9
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<NewsInfinite pageSize={pageSize} country='in' category='general' key='general'/>}></Route>
          <Route path='/general'  element={<NewsInfinite pageSize={pageSize} country='in' category='general' key='general'/>}></Route>
          <Route path='/business'  element={<NewsInfinite pageSize={pageSize} country='in' category='business' key='business'/>}></Route>
          <Route path='/entertainment' element={<NewsInfinite pageSize={pageSize} country='in' category='entertainment' key='entertainment' />}></Route>
          <Route path='/health' element={<NewsInfinite pageSize={pageSize} country='in' category='health' key='health' />}></Route>
          <Route path='/science' element={<NewsInfinite pageSize={pageSize} country='in' category='science' key='science'/>}></Route>
          <Route path='/sports' element={<NewsInfinite pageSize={pageSize} country='in' category='sports' key='sports'/>}></Route>
          <Route path='/technology' element={<NewsInfinite pageSize={pageSize} country='in' category='technology' key='sports'/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
