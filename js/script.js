// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Keep the thread's viewBox matched to the actual page height,
// so the gold-to-teal gradient always spans the full scroll.
function sizeThread() {
  var thread = document.getElementById('thread');
  if (!thread) return;
  var height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  thread.setAttribute('viewBox', '0 0 4 ' + height);
  var line = thread.querySelector('line');
  if (line) line.setAttribute('y2', height);
}

window.addEventListener('load', sizeThread);
window.addEventListener('resize', sizeThread);
