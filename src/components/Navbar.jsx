import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const solutionsDropdown = [
  {
    category: 'Agriculture',
    items: [
      { name: 'Land Rejuvenation', path: '/solutions/land-rejuvenation', icon: '🌱', iconClass: 'agriculture' },
      { name: 'Anti-Flooding Systems', path: '/solutions/anti-flooding', icon: '🌊', iconClass: 'agriculture' },
      { name: 'Nursery Support', path: '/solutions/nursery-support', icon: '🌿', iconClass: 'agriculture' },
      { name: 'Pest & Sunburn Protection', path: '/solutions/pest-sunburn', icon: '🛡️', iconClass: 'agriculture' },
    ],
  },
  {
    category: 'Livestock',
    items: [
      { name: 'Poultry', path: '/solutions/poultry', icon: '🐔', iconClass: 'livestock' },
      { name: 'Dairy / Cattle', path: '/solutions/dairy-cattle', icon: '🐄', iconClass: 'livestock' },
    ],
  },
  {
    category: 'Waste Management',
    items: [
      { name: 'Waste Management', path: '/solutions/waste-management', icon: '♻️', iconClass: 'waste' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Element Farm Solutions" />
          <span className="navbar-logo-text">Element <span>Farm</span></span>
        </Link>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          <div
            className={`nav-item ${dropdownOpen ? 'active' : ''}`}
            onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
          >
            <span className="nav-link" onClick={toggleDropdown}>
              Solutions <span className="chevron">▼</span>
            </span>
            <div className="dropdown-menu">
              {solutionsDropdown.map((group, gi) => (
                <div key={gi}>
                  {gi > 0 && <div className="dropdown-divider" />}
                  <div className="dropdown-category">{group.category}</div>
                  {group.items.map((item) => (
                    <Link key={item.path} to={item.path} className="dropdown-item">
                      <span className={`dropdown-icon ${item.iconClass}`}>{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="nav-item">
            <Link to="/education" className="nav-link">Farmer Education</Link>
          </div>

          <div className="nav-item">
            <Link to="/contact" className="nav-link cta-link">Contact Us for Trials</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
