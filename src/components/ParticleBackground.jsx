import { useCallback, memo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground = memo(function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ['#6366f1', '#818cf8', '#06b6d4', '#a5b4fc'] },
          links: {
            color: '#6366f1',
            distance: 140,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'bounce' },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 60,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: { enable: true, speed: 0.8, minimumValue: 0.1, sync: false },
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
})

export default ParticleBackground
