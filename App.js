```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Missing Route for '*' which causes issues when you enter an invalid url */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```