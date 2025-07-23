import '../../styles/About/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About FitNova</h1>
      <p className="about-description">
        Welcome to <strong>FitNova</strong> — your all-in-one fitness companion.
        Whether you're starting out or you're a seasoned lifter, FitNova helps you train smarter, 
        stay consistent, and grow stronger every day.
      </p>

      <div className="about-features">
        <div className="feature">
          <h2>🏋️‍♂️ Train Smarter</h2>
          <p>Explore the best exercises for every muscle group, curated for maximum results.</p>
        </div>
        <div className="feature">
          <h2>🗓️ Build Your Routine</h2>
          <p>Create your own training plan and stay organized like a pro.</p>
        </div>
        <div className="feature">
          <h2>⏱️ Stay On Track</h2>
          <p>Use our training timer to stay consistent with your sets and rest periods.</p>
        </div>
        <div className="feature">
          <h2>📚 Learn & Grow</h2>
          <p>Understand form, avoid injuries, and get the best out of your workouts.</p>
        </div>
      </div>

      <p className="about-footer">
        FitNova — Level Up Your Fitness.
      </p>
    </div>
  );
}

export default About;
