import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Logo } from '@pmndrs/branding'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
           <svg className="logo" version="1.2" height="300" width="600" xmlns="http://www.w3.org/2000/svg"
        viewport="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    
        <path  stroke="rgba(155,55,255,0.4)" fill="none"stroke-width="3"stroke-linejoin="round"
              d="
                M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110
                " 
              /> 
        <path  id="longbeat"style="stroke:#00AEAA; fill:none;stroke-width:1;stroke-linejoin:round"
              d="
                M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110
                " 
              /> 
          <rect x="-3" y="-4" height="8" width="6" rx="20" ry="20"fill="red">
         <animateMotion dur="2s" repeatCount="indefinite">
                 <mpath xlink:href="#longbeat"/>
              </animateMotion>
        
      </rect>               
    </svg>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}></div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Nyamavhuvhu</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
