import { Route, Routes } from 'react-router-dom'
import BlogTitles from './pages/BlogTitles'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Layout from './pages/Layout'
import WriteArticle from './pages/WriteArticle'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ResumeAnalyzer from './pages/ResumeAnalyzer'
import Community from './pages/Community'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'

const App = () => {

  /* --testing for API's Token for Postman check using post method from website 
  // (inspect -> console token)
  const {getToken} = useAuth()
  useEffect(()=>{
    getToken().then((token)=>console.log(token));
  },[getToken])
  */

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='resume-analyzer' element={<ResumeAnalyzer />} />
          <Route path='community' element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App