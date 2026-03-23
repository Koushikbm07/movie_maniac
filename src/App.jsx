import './App.css'
import { Routes, Route } from "react-router-dom"
import Star from "../images/glowing-star.png"
import Fire from "../images/fire.png"
import Party from "../images/partying-face.png"
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'

function App() {


  return (
    <div className="app">

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MovieList type="popular" title="Popular" emoji={Star} />} />
          <Route path="/top_rated" element={<MovieList type="top_rated" title="Top Rated" emoji={Party} />} />
          <Route path="/upcoming" element={<MovieList type="upcoming" title="Upcoming" emoji={Fire} />} />
        </Routes>
      </main>




      <main className="main_content">

      </main>

    </div>

  )
}

export default App
