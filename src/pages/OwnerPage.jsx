import duckImg from '../assets/duck.png'
import bgImage from '../assets/bg5.jpg'

export default function OwnerPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: '100% auto',
      backgroundRepeat: 'repeat-y',
      padding: '40px 20px', textAlign: 'center'
    }}>

     
      <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '28px' }}>
        08 Jinvaramas Piklunklin (My) - JSD12
      </h2>

      
      <div style={{ margin: '0 auto 24px', width: '200px' }}>
        <img src={duckImg} alt="duck" style={{ width: '200px', height: '160px', objectFit: 'cover' }} />
      </div>

      
      <p style={{ fontWeight: '700', marginBottom: '8px', fontSize: '15px' }}>
        About Me:
      </p>
      <p style={{
        maxWidth: '520px', margin: '0 auto',
        fontSize: '14px', color: '#333', lineHeight: '1.7'
      }}>
        Hi, I'm My! I get excited about trying new food and always have a playlist ready for every mood. 
        I enjoy the little things spontaneous plans with friends, finding a new show to binge on weekends, 
        and pretty much anything that makes an ordinary day feel a little more fun. Still figuring life out one day at a time, and honestly? That's the fun part. 😊
      </p>

    </div>
  )
}
