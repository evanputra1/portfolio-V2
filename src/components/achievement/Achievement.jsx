import Achievements from './Achievements';
import './achievement.css';

const Achievement = () => {
  return (
    <section className="achievement section" id='achievement'>
        <h2 className="section__title">Achievement</h2>
        <span className="section__subtitle">My Top Achievements</span>

        <Achievements />
    </section>
  )
}

export default Achievement