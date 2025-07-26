import React from 'react';

const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const glitchStyle = {
    position: 'relative',
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    display: 'inline-block',
    animation: !enableOnHover ? `glitch-shake ${speed * 2}s infinite` : 'none',
  };

  const beforeStyle = {
    content: `"${children}"`,
    position: 'absolute',
    top: '0',
    left: '2px',
    width: '100%',
    height: '100%',
    color: enableShadows ? '#ff0000' : 'transparent',
    zIndex: -1,
    animation: !enableOnHover ? `glitch-1 ${speed * 2}s infinite` : 'none',
  };

  const afterStyle = {
    content: `"${children}"`,
    position: 'absolute',
    top: '0',
    left: '-2px',
    width: '100%',
    height: '100%',
    color: enableShadows ? '#00ffff' : 'transparent',
    zIndex: -2,
    animation: !enableOnHover ? `glitch-2 ${speed * 3}s infinite` : 'none',
  };

  React.useEffect(() => {
    // Inject CSS animations into the document head
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
      @keyframes glitch-shake {
        0% { transform: translate(0); }
        10% { transform: translate(-1px, -1px); }
        20% { transform: translate(-2px, 0px); }
        30% { transform: translate(2px, 1px); }
        40% { transform: translate(1px, -1px); }
        50% { transform: translate(-1px, 1px); }
        60% { transform: translate(-2px, 1px); }
        70% { transform: translate(2px, 1px); }
        80% { transform: translate(-1px, -1px); }
        90% { transform: translate(1px, 2px); }
        100% { transform: translate(0); }
      }
      
      @keyframes glitch-1 {
        0% { transform: translate(0); clip-path: inset(40% 0 61% 0); }
        20% { transform: translate(-2px, 2px); clip-path: inset(92% 0 1% 0); }
        40% { transform: translate(-2px, -2px); clip-path: inset(43% 0 1% 0); }
        60% { transform: translate(2px, 2px); clip-path: inset(25% 0 58% 0); }
        80% { transform: translate(2px, -2px); clip-path: inset(54% 0 7% 0); }
        100% { transform: translate(0); clip-path: inset(58% 0 43% 0); }
      }
      
      @keyframes glitch-2 {
        0% { transform: translate(0); clip-path: inset(25% 0 58% 0); }
        15% { transform: translate(2px, -2px); clip-path: inset(44% 0 39% 0); }
        30% { transform: translate(2px, 2px); clip-path: inset(80% 0 5% 0); }
        45% { transform: translate(-2px, -2px); clip-path: inset(54% 0 29% 0); }
        60% { transform: translate(-2px, 2px); clip-path: inset(58% 0 43% 0); }
        75% { transform: translate(2px, 2px); clip-path: inset(93% 0 4% 0); }
        90% { transform: translate(-2px, -2px); clip-path: inset(81% 0 14% 0); }
        100% { transform: translate(0); clip-path: inset(60% 0 21% 0); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className={`mb-4 ${className}`}>
      <h1 
        style={glitchStyle}
        onMouseEnter={enableOnHover ? (e) => {
          e.target.style.animation = `glitch-shake ${speed * 2}s infinite`;
          e.target.querySelector('.glitch-before').style.animation = `glitch-1 ${speed * 2}s infinite`;
          e.target.querySelector('.glitch-after').style.animation = `glitch-2 ${speed * 3}s infinite`;
        } : undefined}
        onMouseLeave={enableOnHover ? (e) => {
          e.target.style.animation = 'none';
          e.target.querySelector('.glitch-before').style.animation = 'none';
          e.target.querySelector('.glitch-after').style.animation = 'none';
        } : undefined}
      >
        <span 
          className="glitch-before"
          style={beforeStyle}
          aria-hidden="true"
        >
          {children}
        </span>
        <span 
          className="glitch-after"
          style={afterStyle}
          aria-hidden="true"
        >
          {children}
        </span>
        {children}
      </h1>
    </div>
  );
};

export default GlitchText;