import Menubar from "./Menubar"
import Slides from "./Slide"
import Hero from "./Hero"
import Features from "./Features"
import AboutPreview from "./AboutPreview"
import ContactCTA from "./ContactCTA"
import Footer from "./Footer"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menubar />
      <Slides />
      <h1 className="text-black">Welcome to React App</h1>
      <div className="d-flex justify-content-center gap-2 my-3">
        <Button variant="text" style={{ color: "black" }} onClick={() => navigate('/contact')}>Need a WebApp Designed</Button>
        <Button variant="contained" style={{ backgroundColor: "seagreen" }} onClick={() => navigate('/signup')}>Signup</Button>
      </div>
      <Hero />
      <Features />
      <AboutPreview />
      <ContactCTA />
      <Footer />
    </>
  )
}

export default Home