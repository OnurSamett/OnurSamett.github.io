// ─── Premium Custom Cursor ───
// Smooth, fluid movement with gradient ring and subtle trail

export function initCursor() {
  const dot  = document.getElementById('c-dot');
  const ring = document.getElementById('c-ring');
  const glow = document.getElementById('c-glow');
  if (!dot || !ring || !glow) return;

  // Hide cursor elements until first mouse move
  dot.style.opacity = '0';
  ring.style.opacity = '0';

  const mouse   = { x: -100, y: -100 };
  const dotPos  = { x: -100, y: -100 };
  const ringPos = { x: -100, y: -100 };
  const glowPos = { x: -100, y: -100 };
  let isHovering = false;
  let isPressed  = false;
  let firstMove  = false;
  let raf;

  // Smooth exponential interpolation
  const lerp = (current, target, factor) => current + (target - current) * factor;

  const onMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (!firstMove) {
      firstMove = true;
      // Snap all positions to mouse immediately
      dotPos.x = ringPos.x = glowPos.x = mouse.x;
      dotPos.y = ringPos.y = glowPos.y = mouse.y;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }
  };

  const animate = () => {
    // Dot follows mouse very closely — feels responsive
    dotPos.x = lerp(dotPos.x, mouse.x, 0.35);
    dotPos.y = lerp(dotPos.y, mouse.y, 0.35);

    // Ring has a nice, satisfying lag
    ringPos.x = lerp(ringPos.x, mouse.x, 0.12);
    ringPos.y = lerp(ringPos.y, mouse.y, 0.12);

    // Glow follows even slower for parallax depth
    glowPos.x = lerp(glowPos.x, mouse.x, 0.04);
    glowPos.y = lerp(glowPos.y, mouse.y, 0.04);

    // Apply transforms (GPU-accelerated, no layout thrashing)
    dot.style.transform  = `translate3d(${dotPos.x - 3}px, ${dotPos.y - 3}px, 0)`;
    ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) ${isPressed ? 'scale(0.85)' : 'scale(1)'}`;
    glow.style.transform = `translate3d(${glowPos.x - 350}px, ${glowPos.y - 350}px, 0)`;

    raf = requestAnimationFrame(animate);
  };

  // Mouse events
  window.addEventListener('mousemove', onMove, { passive: true });

  window.addEventListener('mousedown', () => {
    isPressed = true;
    ring.style.borderColor = 'rgba(37,99,235,.6)';
    ring.style.background  = 'rgba(37,99,235,.06)';
  });

  window.addEventListener('mouseup', () => {
    isPressed = false;
    if (!isHovering) {
      ring.style.borderColor = 'rgba(255,255,255,.18)';
      ring.style.background  = 'transparent';
    }
  });

  raf = requestAnimationFrame(animate);

  // Interactive element hover detection
  const setupHovers = () => {
    const interactiveEls = document.querySelectorAll('a, button, .sp, .exp-card, .pc, .nav-toggle, .cert-toggle, .ctl, .foc-c, .ic');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovering = true;
        ring.classList.add('link');
      });
      el.addEventListener('mouseleave', () => {
        isHovering = false;
        ring.classList.remove('link');
        if (!isPressed) {
          ring.style.borderColor = 'rgba(255,255,255,.18)';
          ring.style.background  = 'transparent';
        }
      });
    });
  };

  // Run once DOM is ready, and re-run after sections might update
  setTimeout(setupHovers, 500);
  setTimeout(setupHovers, 1500);
}
