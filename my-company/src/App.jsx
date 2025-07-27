import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Simple Navbar component
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', display: 'flex', gap: '20px' }}>
      <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
      <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
      <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
      <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
    </nav>
  );
}

// Page components (can be moved to separate files)
function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Our Company</h1>
      <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h1>About Us</h1>
      <p>
        Our company has been providing top-notch services since 1990. We specialize in technology, marketing, and consultancy.
      </p>
    </div>
  );
}

function Services() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Our Services</h1>
      <ul>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Form submitted!');
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '300px', padding: '8px' }}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '300px', padding: '8px' }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '300px', height: '100px', padding: '8px' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Send Message</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
