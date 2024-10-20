// Add the banner dynamically to the page
function showBanner() {
	let banner = document.createElement('div');
	banner.id = 'prankBanner';
	banner.innerText = 'Happy Halloween!';
	banner.style.position = 'fixed';
	banner.style.top = '50%';
	banner.style.left = '50%';
	banner.style.transform = 'translate(-50%, -50%)';  // Center the banner
	banner.style.width = '100%';
	banner.style.height = '100%';  // Full page height
	banner.style.display = 'flex';  // Flexbox to center text
	banner.style.justifyContent = 'center';
	banner.style.alignItems = 'center';
	banner.style.backgroundColor = 'black';
	banner.style.color = 'orange';
	banner.style.fontSize = '80px';  // Huge font size
	banner.style.textAlign = 'center';
	banner.style.zIndex = '10000';  // High z-index to ensure it is on top
	banner.style.animation = 'flash 1s infinite';  // Flashing effect
	banner.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';  // Fun font

	// Add the banner to the body
	document.body.appendChild(banner);

	// Remove the banner after 5 seconds
	setTimeout(() => {
		if (banner) {
			banner.remove();
		}
	}, 5000);
}


function playCelebratoryTune() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Define a function to play a single note
    function playNote(frequency, duration, startTime) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'triangle'; // A softer tone

        oscillator.start(startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        oscillator.stop(startTime + duration);
    }

    // Note frequencies for the celebratory tune (in Hz)
    const tune = [
        { frequency: 523.25, duration: 0.3 }, // C5
        { frequency: 659.25, duration: 0.3 }, // E5
        { frequency: 784.00, duration: 0.3 }, // G5
        { frequency: 1046.50, duration: 0.3 }, // C6
        { frequency: 784.00, duration: 0.3 }, // G5
        { frequency: 659.25, duration: 0.3 }, // E5
        { frequency: 523.25, duration: 0.3 }, // C5
    ];

    // Timing logic to schedule notes
    let currentTime = audioContext.currentTime;
    tune.forEach(({ frequency, duration }) => {
        playNote(frequency, duration, currentTime);
        currentTime += duration + 0.05; // Small gap between notes
    });

    // Optionally add a final high-pitched note for fun
    playNote(1318.51, 0.4, currentTime); // E6
}

function playScaryConfusingTune() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Function to play a note with detuned (scary) sounds
    function playNote(frequency, duration, startTime, detune = 0) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.detune.value = detune; // detune for dissonance
        oscillator.type = 'sawtooth'; // A sharp, rough tone for scariness

        oscillator.start(startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        oscillator.stop(startTime + duration);
    }

    // Random dissonant detune for extra confusion and eeriness
    function getRandomDetune() {
        return (Math.random() * 100) - 50; // Detune by +/- 50 cents for disharmony
    }

    // Scary, confusing sequence using minor scales and dissonant intervals
    const scaryTune = [
        { frequency: 110.00, duration: 0.6 }, // A2 (Low)
        { frequency: 130.81, duration: 0.4 }, // C3 (Minor 3rd)
        { frequency: 155.56, duration: 0.4 }, // Eb3 (Minor 5th)
        { frequency: 103.83, duration: 0.5 }, // G#2 (Dissonance)
        { frequency: 207.65, duration: 0.5 }, // G#3 (One octave higher, uncomfortable)
        { frequency: 233.08, duration: 0.4 }, // Bb3 (More dissonance)
        { frequency: 220.00, duration: 0.5 }, // A3 (Tension)
    ];

    // Play the notes in sequence with detuning for confusion
    let currentTime = audioContext.currentTime;
    scaryTune.forEach(({ frequency, duration }) => {
        playNote(frequency, duration, currentTime, getRandomDetune());
        currentTime += duration + Math.random() * 0.2; // Randomize gaps for unease
    });

    // Optionally add an extra creepy high-pitched note for effect
    playNote(523.25, 6, currentTime, getRandomDetune()); // High C5, unexpected
}

// Call the function when you want to play the scary tune




// Reset the page back to its original state
function prankReset() {
	document.documentElement.style.transition = "none";
	document.documentElement.style.opacity = "1";
	document.documentElement.style.transform = "scale(1,1)";
	document.body.style.borderLeft = "none";
	document.body.style.overflowX = "auto";
	var x = document.getElementsByTagName("*");
	for (var i = 0; i < x.length; i++) {
		x[i].style.position = "";
		x[i].style.top = "";
		x[i].style.left = "";
		x[i].style.transition = "";
		x[i].style.transform = "";
	}
}

// Prank functions
function prankFade() {
	document.documentElement.style.transition = "10s";
	document.documentElement.style.opacity = "0";
}

function prankMirror() {
	var x = document.getElementsByTagName("body");
	x[0].style.transform = "scaleX(-1)";
}

function prankRotate() {
	document.documentElement.style.transitionDuration = "60s";
	document.documentElement.style.transitionTimingFunction = "ease-in";
	document.documentElement.style.transform = "rotate(360000deg)";
}

function prankBlueScreen() {
	document.body.style.transition = "10s";
	document.body.style.borderLeft = "2000px solid blue";
	document.body.style.overflowX = "hidden";
}

function prankShuffle() {
	var x = document.getElementsByTagName("*");
	for (var i = 0; i < x.length; i++) {
		x[i].style.position = "absolute";
		x[i].style.top = "50%";
		x[i].style.left = "50%";
		x[i].style.transition = "5s";
		x[i].style.transform = "translate(-50%, -50%)";
	}
}


// Map of prank functions
const prankFunctions = {
	prankFade: prankFade,
	prankMirror: prankMirror,
	prankRotate: prankRotate,
	prankBlueScreen: prankBlueScreen,
	prankShuffle: prankShuffle,
};

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	const prank = prankFunctions[message.action];
	setTimeout(() => {
		if (prank) {
			playScaryConfusingTune();
	  
			// Run the prank for 10 seconds
			prank();
			setTimeout(() => {
			  prankReset(); // Reset the prank
			  showBanner(); // Show the "Happy Halloween" banner with the sound
			  playCelebratoryTune();
			  
			}, 10000);
		
			// Send a response back to the popup
			sendResponse({ status: 'Prank executed successfully' });
		  } else {
			// Send a response back even if the prank is invalid
			sendResponse({ status: 'Invalid prank selected' });
		  }
	}, 5000);
});
