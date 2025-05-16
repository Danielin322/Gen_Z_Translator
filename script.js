// Gen Z Slang Dictionary
const slangDictionary = {
    "rizz": {
        meaning: "Charisma, especially in flirting.",
        example: "He's got mad rizz with his smooth talking."
    },
    "bet": {
        meaning: "Okay or for sure, used to express agreement or confirmation.",
        example: "You coming to the party tonight? - Bet."
    },
    "slay": {
        meaning: "To look amazing or succeed confidently.",
        example: "She slayed that outfit at the dance."
    },
    "no cap": {
        meaning: "No lie or being honest, used to emphasize truthfulness.",
        example: "That was the best pizza I've ever had, no cap."
    },
    "cap": {
        meaning: "A lie or not true.",
        example: "He said he's 6 feet tall, but that's cap."
    },
    "delulu": {
        meaning: "Delusional in a cute or funny way.",
        example: "I know he's my soulmate even though we've never spoken. I'm delulu."
    },
    "skibidi": {
        meaning: "Meme word from a viral YouTube series known for chaotic humor.",
        example: "He's acting like a Skibidi Toilet character."
    },
    "gyatt": {
        meaning: "An exaggerated reaction of admiration, usually for someone's body or appearance.",
        example: "Did you see her walk in? GYATT!"
    },
    "sus": {
        meaning: "Suspicious or shady behavior.",
        example: "The way he's avoiding the question is kinda sus..."
    },
    "it's giving": {
        meaning: "Used to describe a vibe or aesthetic.",
        example: "That outfit is giving boss energy."
    },
    "mid": {
        meaning: "Something that's average or underwhelming.",
        example: "Everyone hyped that movie, but it was mid."
    },
    "ratioed": {
        meaning: "When a reply gets more likes than the original post, implying a 'burn'.",
        example: "Your comment got ratioed so badly, might want to delete it."
    },
    "bussin": {
        meaning: "Really good, usually used for food.",
        example: "This burger is bussin'!"
    },
    "touch grass": {
        meaning: "Telling someone to go outside and disconnect from the internet.",
        example: "You've been gaming for 12 hours straight, bro. Touch grass."
    },
    "npc": {
        meaning: "Short for 'non-playable character,' used to describe someone who acts robotic or basic.",
        example: "He says the same thing every day, he's such an NPC."
    },
    "main character": {
        meaning: "Someone acting like they're the center of the world or story, sometimes confidently, sometimes cringe.",
        example: "She walked through the mall like she was the main character in a movie."
    }
};

// DOM Elements
const slangInput = document.getElementById('slangInput');
const translateBtn = document.getElementById('translateBtn');
const translationResult = document.getElementById('translationResult');
const meaningText = document.getElementById('meaningText');
const showExampleBtn = document.getElementById('showExampleBtn');
const exampleSentence = document.getElementById('exampleSentence');
const exampleText = document.getElementById('exampleText');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

// Function to translate slang
function translateSlang() {
    // Get the input value and convert to lowercase
    const slang = slangInput.value.trim().toLowerCase();
    
    // Hide any previous error
    hideError();
    
    // Hide example sentence when translating a new term
    exampleSentence.classList.add('d-none');
    
    // Check if input is empty
    if (!slang) {
        showError("Please enter a Gen Z slang term to translate.");
        translationResult.classList.add('d-none');
        return;
    }
    
    // Check if the slang exists in our dictionary
    if (slangDictionary[slang]) {
        // Show the translation result
        meaningText.textContent = slangDictionary[slang].meaning;
        exampleText.textContent = slangDictionary[slang].example;
        translationResult.classList.remove('d-none');
        translationResult.classList.add('fadeIn');
    } else {
        // Check for partial matches
        const keys = Object.keys(slangDictionary);
        const partialMatches = keys.filter(key => 
            key.includes(slang) || slang.includes(key)
        );
        
        if (partialMatches.length > 0) {
            showError(`Term not found. Did you mean: ${partialMatches.join(', ')}?`);
        } else {
            showError("Sorry, that Gen Z slang term isn't in our dictionary yet!");
        }
        
        translationResult.classList.add('d-none');
    }
}

// Function to toggle example sentence
function toggleExampleSentence() {
    exampleSentence.classList.toggle('d-none');
    exampleSentence.classList.add('fadeIn');
}

// Function to show error message
function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.remove('d-none');
    errorMessage.classList.add('fadeIn');
}

// Function to hide error message
function hideError() {
    errorMessage.classList.add('d-none');
}

// Event Listeners
translateBtn.addEventListener('click', translateSlang);

// Allow pressing Enter to translate
slangInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        translateSlang();
    }
});

showExampleBtn.addEventListener('click', toggleExampleSentence);

// Initialize focus on the input field when page loads
window.addEventListener('DOMContentLoaded', () => {
    slangInput.focus();
});










//     console.log("Event listener for translateButton attached."); // Log 8: Confirmation of listener attachment
// });
