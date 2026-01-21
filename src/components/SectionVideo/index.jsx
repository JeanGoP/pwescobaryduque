import './index.css';

export default function TelemedicinaHeroSection() {
  return (
    <section className="tmh-section">
      <div className="tmh-video-wrapper">
        <video src="/video.mp4" autoPlay muted loop playsInline />
      </div>
    </section>
  );
}
