import { useEffect, useState } from 'react';
import '../css/app.css'; // Create a CSS module for styling
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursordot = document.querySelector('#cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('#cursor-outline') as HTMLElement;

    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursordot.style.left = `${posX}px`;
      cursordot.style.top = `${posY}px`;

      // cursorOutline.style.left=`${posX}px`;
      // cursorOutline.style.top=`${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" })
    })

    // Hover an element
    function onMouseHover() {
      console.log("mousehover");
      gsap.to('.cursor-outline', {
        scale: 2,
        duration: 0.3,
      })


    }
    function onMouseHoverOut() {
      gsap.to('.cursor-outline', {
        scale: 1,
        duration: 0.3,
      })

    }

    const hoverables = document.querySelectorAll('.hoverable');

    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

  }, []);

  return (
    <div>
      <div id="cursor-outline" className="cursor-outline"></div>
      <div id="cursor-dot" className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;
