import './Features.scss';
import { FiMessageCircle, FiVolume2, FiUsers, FiZap } from 'react-icons/fi';

const features = [
  {
    icon: <FiMessageCircle />,
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
  {
    icon: <FiVolume2 />,
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
  {
    icon: <FiUsers />,
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
  {
    icon: <FiZap />,
    title: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
  },
];

const Features = () => (
  <section className="features-section">
    <h2 className="features-title">
      FEATURES
      <span className="features-underline"></span>
    </h2>
    <div className="features-list">
      {features.map((f, i) => (
        <div className="feature-item" key={i}>
          <div className="feature-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;