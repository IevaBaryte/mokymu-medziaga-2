import "./Header.scss";

const Header = ({ title, subtitle, button }) => {
  // Optionally split title into two lines if needed
  const [firstLine, ...rest] = title.split(" ");
  const secondLine = rest.join(" ");

  return (
    <header className="hero-header">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          <span>{firstLine}</span><br />
          <span>{secondLine}</span>
        </h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-btn">{button}</button>
      </div>
    </header>
  );
};

export default Header;
