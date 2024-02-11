const video = document.getElementById('video');
const pauseImage = document.getElementById('pauseImage');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const durationElement = document.querySelector('.duration');

// Play & Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    pauseImage.style.display = 'flex';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    pauseImage.style.display = 'none';
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minues
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Stop Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Set duration video information
// Set duration video information
function displayDuration() {
  // Get the duration in seconds
  const durationInSeconds = Math.floor(video.duration);

  // Convert the duration to the mm:ss format
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);

  // Format the duration
  const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  // Set the formatted duration to the .duration element's innerHTML
  durationElement.innerHTML = formattedDuration;
}

// Event Listeners
video.addEventListener('loadedmetadata', displayDuration);
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
pauseImage.addEventListener('click', toggleVideoStatus);
