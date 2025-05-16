// // Gen Z Slang Dictionary
// const slangDictionary = {
//     "rizz": {
//         meaning: "Charisma, especially in flirting.",
//         example: "He's got mad rizz with his smooth talking."
//     },
//     "bet": {
//         meaning: "Okay or for sure, used to express agreement or confirmation.",
//         example: "You coming to the party tonight? - Bet."
//     },
//     "slay": {
//         meaning: "To look amazing or succeed confidently.",
//         example: "She slayed that outfit at the dance."
//     },
//     "no cap": {
//         meaning: "No lie or being honest, used to emphasize truthfulness.",
//         example: "That was the best pizza I've ever had, no cap."
//     },
//     "cap": {
//         meaning: "A lie or not true.",
//         example: "He said he's 6 feet tall, but that's cap."
//     },
//     "delulu": {
//         meaning: "Delusional in a cute or funny way.",
//         example: "I know he's my soulmate even though we've never spoken. I'm delulu."
//     },
//     "skibidi": {
//         meaning: "Meme word from a viral YouTube series known for chaotic humor.",
//         example: "He's acting like a Skibidi Toilet character."
//     },
//     "gyatt": {
//         meaning: "An exaggerated reaction of admiration, usually for someone's body or appearance.",
//         example: "Did you see her walk in? GYATT!"
//     },
//     "sus": {
//         meaning: "Suspicious or shady behavior.",
//         example: "The way he's avoiding the question is kinda sus..."
//     },
//     "it's giving": {
//         meaning: "Used to describe a vibe or aesthetic.",
//         example: "That outfit is giving boss energy."
//     },
//     "mid": {
//         meaning: "Something that's average or underwhelming.",
//         example: "Everyone hyped that movie, but it was mid."
//     },
//     "ratioed": {
//         meaning: "When a reply gets more likes than the original post, implying a 'burn'.",
//         example: "Your comment got ratioed so badly, might want to delete it."
//     },
//     "bussin": {
//         meaning: "Really good, usually used for food.",
//         example: "This burger is bussin'!"
//     },
//     "touch grass": {
//         meaning: "Telling someone to go outside and disconnect from the internet.",
//         example: "You've been gaming for 12 hours straight, bro. Touch grass."
//     },
//     "npc": {
//         meaning: "Short for 'non-playable character,' used to describe someone who acts robotic or basic.",
//         example: "He says the same thing every day, he's such an NPC."
//     },
//     "main character": {
//         meaning: "Someone acting like they're the center of the world or story, sometimes confidently, sometimes cringe.",
//         example: "She walked through the mall like she was the main character in a movie."
//     }
// };

// // DOM Elements
// const slangInput = document.getElementById('slangInput');
// const translateBtn = document.getElementById('translateBtn');
// const translationResult = document.getElementById('translationResult');
// const meaningText = document.getElementById('meaningText');
// const showExampleBtn = document.getElementById('showExampleBtn');
// const exampleSentence = document.getElementById('exampleSentence');
// const exampleText = document.getElementById('exampleText');
// const errorMessage = document.getElementById('errorMessage');
// const errorText = document.getElementById('errorText');

// // Function to translate slang
// function translateSlang() {
//     // Get the input value and convert to lowercase
//     const slang = slangInput.value.trim().toLowerCase();
    
//     // Hide any previous error
//     hideError();
    
//     // Hide example sentence when translating a new term
//     exampleSentence.classList.add('d-none');
    
//     // Check if input is empty
//     if (!slang) {
//         showError("Please enter a Gen Z slang term to translate.");
//         translationResult.classList.add('d-none');
//         return;
//     }
    
//     // Check if the slang exists in our dictionary
//     if (slangDictionary[slang]) {
//         // Show the translation result
//         meaningText.textContent = slangDictionary[slang].meaning;
//         exampleText.textContent = slangDictionary[slang].example;
//         translationResult.classList.remove('d-none');
//         translationResult.classList.add('fadeIn');
//     } else {
//         // Check for partial matches
//         const keys = Object.keys(slangDictionary);
//         const partialMatches = keys.filter(key => 
//             key.includes(slang) || slang.includes(key)
//         );
        
//         if (partialMatches.length > 0) {
//             showError(`Term not found. Did you mean: ${partialMatches.join(', ')}?`);
//         } else {
//             showError("Sorry, that Gen Z slang term isn't in our dictionary yet!");
//         }
        
//         translationResult.classList.add('d-none');
//     }
// }

// // Function to toggle example sentence
// function toggleExampleSentence() {
//     exampleSentence.classList.toggle('d-none');
//     exampleSentence.classList.add('fadeIn');
// }

// // Function to show error message
// function showError(message) {
//     errorText.textContent = message;
//     errorMessage.classList.remove('d-none');
//     errorMessage.classList.add('fadeIn');
// }

// // Function to hide error message
// function hideError() {
//     errorMessage.classList.add('d-none');
// }

// // Event Listeners
// translateBtn.addEventListener('click', translateSlang);

// // Allow pressing Enter to translate
// slangInput.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         translateSlang();
//     }
// });

// showExampleBtn.addEventListener('click', toggleExampleSentence);

// // Initialize focus on the input field when page loads
// window.addEventListener('DOMContentLoaded', () => {
//     slangInput.focus();
// });








document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed"); // Log 1: DOM ready

    const translations = {
        "hello": "yo",
        "hi": "sup",
        "what's up?": "what's good?",
        "friend": "homie / bestie / G",
        "friends": "squad / crew",
        "cool": "fire / lit / bussin'",
        "very cool": "mad fire / super lit / bussin' bussin'",
        "good": "valid / solid",
        "bad": "sus / sketchy",
        "funny": "that's hilarious / i'm dead / lmao",
        "i agree": "facts / no cap / fr (for real)",
        "i disagree": "nah / cap / that ain't it",
        "yes": "bet / yuh / aight",
        "no": "nah / nope",
        "thank you": "good looks / preciate it",
        "you're welcome": "no prob / all good",
        "sorry": "my bad",
        "let's go": "let's dip / let's bounce",
        "i understand": "i feel you / word",
        "i don't understand": "i'm lost / say what now?",
        "that's surprising": "no way / wild / shook",
        "relax": "chill / take a chill pill",
        "excited": "hyped / amped",
        "tired": "beat / wiped",
        "hungry": "starving / famished",
        "food": "grub / eats",
        "money": "guap / bread / moolah",
        "clothes": "drip / fit",
        "shoes": "kicks",
        "car": "whip",
        "house": "crib",
        "party": "rager / kickback / function",
        "music": "jams / tunes",
        "to flirt": "to riz",
        "attractive": "a snack / a baddie / fine",
        "unattractive": "not it / a 2",
        "to ignore someone": "to ghost / to curve",
        "to be honest": "tbh / ngl (not gonna lie)",
        "i don't care": "idc / ion even care",
        "leave me alone": "fall back / give me space",
        "goodbye": "peace out / later / aight bet",
        "period.": "perioduh (emphasis)",
        "that's true": "spitting facts",
        "main character": "the main character (someone who is confident and the center of attention)",
        "spill the tea": "share the gossip",
        "simp": "someone who does too much for a person they like",
        "glow up": "a major and impressive transformation",
        "boujee": "luxurious, high-class",
        "snatched": "looks good, perfect, or fashionable",
        "stan": "an overly obsessed fan",
        "woke": "aware of social injustices",
        "flex": "to show off",
        "ghosting": "ending a relationship by cutting off communication",
        "salty": "bitter, angry, or agitated",
        "thirsty": "desperate for attention or approval",
        "finna": "going to",
        "cap": "lie, bullsh*t",
        "no cap": "no lie, for real",
        "bet": "yes, okay, or a response to a dare",
        "slay": "to do something exceptionally well",
        "rizz": "charisma, ability to flirt",
        "it's giving": "it has the vibe of...",
        "era": "a significant period in someone's life",
        "delulu": "delusional",
        "sksksk": "expression of laughter or amusement (older Gen Z)",
        "vibe check": "assessing someone's general mood or atmosphere",
        "ok boomer": "dismissive retort to older generations",
        "poggers": "expression of excitement (gaming)",
        "sheesh": "expression of impressiveness or disbelief",
        "yassify": "to make something extremely glamorous or feminine",
        "touch grass": "go outside, disconnect from online",
        "mid": "mediocre, average",
        "iykyk": "if you know, you know",
        "ick": "a turn-off, something that makes you cringe",
        "understood the assignment": "did a great job, met expectations perfectly",
        "squad": "close group of friends",
        "sus": "suspicious or suspect",
        "i'm dead.": "that's hilarious (used to express strong amusement)",
        "basic": "unoriginal, mainstream",
        "extra": "over the top, dramatic",
        "fam": "close friends, family",
        "goat": "greatest of all time",
        "gucci": "good, cool, fine",
        "low key": "subtly, moderately",
        "high key": "obviously, openly",
        "mood": "relatable feeling or situation",
        "on fleek": "perfectly styled (older Gen Z)",
        "oof": "expression of discomfort or sympathy",
        "pull up": "to arrive or show up",
        "wig": "expression of amazement (as if your wig flew off)",
        "yeet": "exclamation of excitement or to throw something with force",
        "zaddy": "a stylish and confident older man",
        "down bad": "desperate, usually romantically",
        "send it": "go for it, take a risk",
        "beige flag": "quirky but not harmful trait"
        // Add more translations here
    };

    const translateButton = document.getElementById('translateButton');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    if (!translateButton || !inputText || !outputText) {
        console.error("CRITICAL: One or more UI elements not found! Check IDs: translateButton, inputText, outputText"); // Log 2a: Elements missing
        return; // Stop if elements are missing
    } else {
        console.log("UI elements found:", { translateButton, inputText, outputText }); // Log 2b: Elements found
    }

    translateButton.addEventListener('click', function() {
        console.log("Translate button clicked!"); // Log 3: Button click detected

        try {
            let originalText = inputText.value.toLowerCase();
            console.log("Original text (lowercase):", `"${originalText}"`); // Log 4: Input text captured

            if (!originalText.trim()) {
                console.log("Input text is empty or only whitespace."); // Log 4a: Empty input
                outputText.textContent = "Please enter some text to translate.";
                return;
            }

            let translatedText = originalText;

            // Get keys and sort them by length, descending, to replace longer phrases first
            const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
            console.log("Sorted translation keys (longest first):", sortedKeys); // Log 4b: Sorted keys

            for (const key of sortedKeys) {
                if (translations.hasOwnProperty(key)) {
                    // Escape special characters in the key for RegExp
                    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(escapedKey, 'gi'); // 'g' for global, 'i' for case-insensitive

                    // Optional: Log which key is being processed and if a match is found
                    if (translatedText.match(regex)) {
                        console.log(`Processing key: "${key}", Regex: ${regex}, Found match. Replacing with: "${translations[key]}"`);
                    }

                    translatedText = translatedText.replace(regex, translations[key]);
                }
            }

            console.log("Translated text:", `"${translatedText}"`); // Log 5: Final translated text
            outputText.textContent = translatedText;
            console.log("Output text updated in the DOM."); // Log 6: Output updated

        } catch (error) {
            console.error("Error during translation process:", error); // Log 7: Catch any unexpected errors
            outputText.textContent = "An error occurred during translation. Please check the console.";
        }
    });

    console.log("Event listener for translateButton attached."); // Log 8: Confirmation of listener attachment
});
