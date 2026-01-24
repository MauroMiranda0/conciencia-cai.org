import Navbar from './components/Navbar.jsx';
import { scrollToHash } from './utils/dom.js';
import './styles/globals.scss';
import './styles/components/Button.scss';

export default function App() {
  return (
    <>
      <Navbar onNavigate={(hash) => scrollToHash(hash, 92)} />
    </>
  );
}
