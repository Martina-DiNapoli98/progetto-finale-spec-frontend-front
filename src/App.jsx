import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./Layouts/DefaultLayout"
import {GlobalProvider} from "./Context/GlobalContext"
import Home from "./pages/Home"
import AllTravel from "./pages/AllTravel"
import SingleTravel from "./pages/SingleTravel"
import CompareTravel from "./pages/CompareTravel"
import About from "./pages/About"
import Wishlist from "./pages/Wishlist"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/Travel" element={<AllTravel/>}/>
                <Route path="/trip/:id" element={<SingleTravel />} />
                <Route path="/preferiti" element={<Wishlist />} />
                <Route path="/confronta" element={<CompareTravel />} />
                <Route path="/chi-siamo" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
