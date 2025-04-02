import ThemeContext from "./ThemeContext";
function Home (){
  return <p>"Welcome to Home page"</p>
}
function About (){
  return <p>"Welcome to About page"</p>
}
function App() {
  return (
    <div>
      <nav>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
 <Route path="" element={<Home />} />
 <Route path="/about" element={<About />} />
 </Routes>
 <ThemeContext/>
    </div>
  );
}
export default App;

