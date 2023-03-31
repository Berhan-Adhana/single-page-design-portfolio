import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import profile from "./assets/image-amy.webp";
import CTA from "./components/CTA";
import Skill from "./components/Skill";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import image1 from "./assets/image-slide-1.jpg";
import image2 from "./assets/image-slide-2.jpg";
import image3 from "./assets/image-slide-3.jpg";
import image4 from "./assets/image-slide-4.jpg";
import image5 from "./assets/image-slide-5.jpg";
function App() {
  const slidesData = [image1, image2, image3, image4, image5];
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Profile
        profileImage={profile}
        title="I’m Amy, and I’d love to work on your next project"
        bio="I love working with others to create beautiful design solutions. I’ve designed 
        everything from brand illustrations to complete mobile apps. I’m also handy with a camera!"
      />
      <Projects slides={slidesData} />
      <CTA
        title="Book a call with me"
        content="I’d love to have a chat to see how I can help you. 
        The best first step is for us to discuss your project during a free consultation. Then we can move forward from there."
      />

      <Footer />
    </main>
  );
}

export default App;
