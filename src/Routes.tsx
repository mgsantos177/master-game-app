import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Question } from './pages/Question'
import { Answer } from './pages/Answer'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/question/:category' element={<Question />} />
      <Route path='/answer' element={<Answer />} />
      <Route path="/history" element={<h1>History</h1>} />
    </Routes>
  )
}
