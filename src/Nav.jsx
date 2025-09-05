import React, { useState } from 'react';
import { NavLink }       from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const tabs = [
    { to: '/',            label: '',      icon: true },
    { to: '/experience',  label: 'Experiences' },
    { to: '/projects',    label: 'Projects'    },
    { to: '/blog',        label: 'Essays'      },
    { to: '/quotes',      label: 'Quotes'      },
  ];

  return (
    <nav className="nav-wrapper">
      {/* Hamburger button */}
      <button
        className="nav-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`nav ${open ? 'open' : ''}`}>
        {tabs.map(({ to, label, icon }) => (
          <li key={to} className="nav-item">
            <NavLink
              to={to}
              end={icon}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-active' : 'nav-link'
              }
              onClick={() => setOpen(false)}  // close on selection
            >
              {icon ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style={{ width: '24px', height: '24px', marginRight: '4px' }}
                >
                  <path d="M3 12l9-9 9 9v9a3 3 0 0 1-3 3h-4a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-9z" />
                </svg>
              ) : null}
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
