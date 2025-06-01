import { NavLink } from "react-router-dom";
import theme from "./theme";

/**
 * Nav component with a home icon on the left, centered tabs,
 * and adjustable width/height via props.
 */
export default function Nav({ width = "500px", height = "40px" }) {
  const tabs = [
    { to: "/experience", label: "Experiences" },
    { to: "/projects",   label: "Projects"    },
    { to: "/blog",       label: "Essays"      },
    { to: "/quotes",     label: "Quotes"      },
    { to: "/shapes",     label: "Shapes"      },
  ];

  const wrapperStyle = {
    display:         "flex",
    alignItems:      "center",
    background:      theme.card,
    width, // This width (defaulting to 500px) is the container for the distribution
    height,
    padding:         "12px 24px",
    margin:          "24px auto",
    borderRadius:    theme.radius,
    boxShadow:       "0 4px 12px rgba(0,0,0,0.3)",
  };

  const linkBase = {
    fontFamily:      "'Merriweather', serif",
    fontSize:        "1rem",
    fontWeight:      400,
    color:           theme.text,
    textDecoration:  "none",
    padding:         "6px 12px",
    display:         "inline-flex",
    alignItems:      "center",
    whiteSpace:      "nowrap", // Prevents text from wrapping to the next line
  };

  const linkActive = {
    textDecoration: "underline",
    fontWeight:      700,
  };

  const iconStyle = { width: "24px", height: "24px", fill: theme.text };

  return (
    <nav style={wrapperStyle}>
      {/* Home icon on the left */}
      <NavLink
        to="/"
        end
        style={({ isActive }) =>
          isActive
            ? { ...linkBase, ...linkActive }
            : linkBase
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={iconStyle}
        >
          <path d="M3 12l9-9 9 9v9a3 3 0 0 1-3 3h-4a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-9z" />
        </svg>
      </NavLink>

      {/* Tabs container: flexGrow: 1 ensures it takes all available space.
          justifyContent: "space-evenly" distributes the tabs evenly within that space. */}
      <div style={{ flexGrow: 1, display: "flex", justifyContent: "space-evenly" }}>
        {tabs.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) =>
              isActive
                ? { ...linkBase, ...linkActive }
                : linkBase
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}