function flipCard() {
  document.getElementById('card').classList.toggle('flipped');
}

let count = 3;

function addZigZagItem() {
  const container = document.getElementById('zigzagContainer');

  const item = document.createElement('div');
  item.className = 'zigzag-item';

  const img = document.createElement('img');
  img.src = `machine${count}.jpg`; // Adjust your image file names accordingly
  img.alt = `Machine ${count}`;

  const desc = document.createElement('div');
  desc.className = 'description';
  desc.innerHTML = `
    <h3>Machine ${count} Title</h3>
    <p>Short description for Machine ${count} — describe its role or feature here.</p>
  `;

  if (count % 2 === 0) {
    item.appendChild(desc);
    item.appendChild(img);
  } else {
    item.appendChild(img);
    item.appendChild(desc);
  }

  container.appendChild(item);
  count++;
}
