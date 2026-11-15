import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: 'harry.jpg',
    title: 'Hogwars',
    subtitle: 'Express',
    accent: '#ffd23f'
  },
  {
    image: 'book.jpg',
    title: 'Books',
    subtitle: 'Vieb',
    accent: '#3fb8ff',
  },
  {
    image: 'crochet.jpg',
    title: 'Crochet',
    subtitle: 'Hobby',
    accent: '#3fb8ff',
  },
  {
    image: 'iceland.jpg',
    title: 'IceLand',
    subtitle: 'HappyPlace',
    accent: '#3fb8ff',
  },
  {
    image: 'NYC.jpg',
    title: 'NewYork',
    subtitle: 'Luxury',
    accent: '#3fb8ff',
  },
  {
    image: 'scince.jpg',
    title: 'Scince',
    subtitle: 'Research',
    accent: '#3fb8ff',
  }
];

function App() {

  return (
    <>
      
<ChromaGrid items={items} columns={3} radius={260}
    reveal="spotlight"
    minCardWidth={180}
    gap={12}
    aspectRatio="3 / 2"
    cardRadius={22}
    showInfo
    frame={false}
    softness={0.6}
    damping={0.45}
    fadeOut={0.6}
    grayscale={1}
    dim={0.12}
    glow={0.5}
    borderGlow={1}
/>
    </>
  )
}

export default App