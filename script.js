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
        meaning: "A slang word that can mean either cool or dumb, depending on context. Originates from a viral meme.",
        example: "He's got skibidi rizz, for real."
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
    },
    "alpha": {
        meaning: "A confident, assertive leader-type person, often male. Can have both positive and negative connotations.",
        example: "He takes charge of every situation – total alpha energy."
    },
    "beta": {
        meaning: "Used to describe someone who is seen as passive or lacking confidence, often as an insult.",
        example: "He never stands up for himself, such a beta."
    },
    "sigma": {
        meaning: "An independent and successful person who doesn't follow the crowd. Typically used for men.",
        example: "He's a sigma – doesn't need anyone’s approval to win."
    },
    "simp": {
        meaning: "Someone who shows excessive attention or admiration, usually towards someone they're romantically interested in.",
        example: "He bought her a new phone even though she barely talks to him – what a simp."
    },
    "bestie": {
        meaning: "Best friend or someone you feel very close to.",
        example: "That's my bestie – we’ve been inseparable since kindergarten."
    },
    "brainrot": {
        meaning: "Low-quality or addictive content online, or the effect of watching too much of it.",
        example: "I've been watching TikTok for 4 hours straight – brainrot."
    },
    "blud": {
        meaning: "British slang for 'bro' or close friend. Originates from Jamaican 'blood'.",
        example: "Blud, that was the craziest match I've ever seen!"
    },
    "bruh": {
        meaning: "Used to express disappointment, confusion or disbelief.",
        example: "You forgot your keys again? Bruh..."
    },
    "cope": {
        meaning: "Used sarcastically to dismiss someone’s reaction or frustration.",
        example: "Crying over a video game loss? Cope."
    },
    "cringe": {
        meaning: "Used when someone says or does something embarrassing.",
        example: "He proposed to his girlfriend at Comic-Con dressed as Batman… cringe."
    },
    "DM": {
        meaning: "Direct Message, a private message on social media.",
        example: "She slid into his DMs last night."
    },
    "drip": {
        meaning: "Cool or expensive-looking fashion style.",
        example: "Check out his shoes – that’s some serious drip."
    },
    "FOMO": {
        meaning: "Fear of missing out, often triggered by seeing others have fun online.",
        example: "Everyone's posting from the festival and I’ve got major FOMO."
    },
    "gaslight": {
        meaning: "Manipulating someone into doubting their own reality or memory.",
        example: "He kept denying he said it until she thought she was crazy – classic gaslighting."
    },
    "ghosting": {
        meaning: "Cutting off contact suddenly and without explanation, especially in dating.",
        example: "We went on three dates and then he ghosted me."
    },
    "GOAT": {
        meaning: "Greatest Of All Time, used to describe someone at the top of their field.",
        example: "Serena Williams is the GOAT of tennis."
    },
    "Karen": {
        meaning: "A stereotypical name for an entitled, rude woman who complains to the manager.",
        example: "She demanded a refund over a cold coffee – total Karen move."
    },
    "ligma": {
        meaning: "A joke slang term used in pranks. Answering 'What's ligma?' gets a joke response.",
        example: "Ligma? Ligma balls."
    },
    "looksmaxxing": {
        meaning: "Trying to maximize physical attractiveness through workouts, grooming, etc.",
        example: "He’s deep into looksmaxxing – new hair, gym every day, skincare routine."
    },
    "ok boomer": {
        meaning: "Dismissive phrase targeting older generations seen as outdated or out of touch.",
        example: "You still think TikTok is an app for dancing? Ok boomer."
    },
    "Ohio": {
        meaning: "Used to describe something weird or surreal. From viral memes about strange events in Ohio.",
        example: "That video is pure Ohio energy."
    },
    "boomer": {
        meaning: "Being out of touch with modern trends or technology.",
        example: "My dad still prints out directions instead of using Google Maps – classic boomer behavior."
    },
    "yeet": {
        meaning: "To throw something with force, often used humorously.",
        example: "He yeeted the remote across the room when his team lost."
    },
    "ate": {
    meaning: "Performed exceptionally well; nailed it.",
    example: "She ate that performance and left no crumbs."
    },
    "basic": {
        meaning: "Someone who is unoriginal or mainstream.",
        example: "Drinking pumpkin spice lattes is so basic."
    },
    "CEO": {
    meaning: "Used to describe someone who is the best at what they do.",
    example: "She's the CEO of baking cookies."
    },
    "cancel culture": {
        meaning: "The practice of withdrawing support for public figures after they have done something considered objectionable.",
        example: "Many celebrities have been affected by cancel culture."
    },
    "e-boy": {
        meaning: "A male who is active on the internet and social media, often associated with a particular style.",
        example: "That e-boy has a huge following on TikTok."
    },
    "e-girl": {
        meaning: "A female who is active on the internet and social media, often associated with a particular style.",
        example: "She's known as an e-girl because of her online presence."
    },
    "W": {
        meaning: "Short for 'win'; used to express approval or success.",
        example: "You aced the test? That's a big W!"
    },
    "dank": {
        meaning: "High quality; often used to describe memes.",
        example: "That meme is so dank."
    },
    "flex": {
        meaning: "To show off.",
        example: "He's always flexing his new gadgets."
    },
    "finesse": {
        meaning: "To handle something skillfully or to manipulate a situation.",
        example: "She managed to finesse a discount at the store."
    },
    "finna": {
        meaning: "Short for 'fixing to'; means 'going to'.",
        example: "I'm finna head out soon."
    },
    "extra": {
        meaning: "Over the top; excessive.",
        example: "He's so extra with his reactions."
    },
    "facts": {
        meaning: "Used to agree with something; means 'truth'.",
        example: "That movie was amazing. Facts."
    },
    "fire": {
        meaning: "Amazing; cool.",
        example: "That new song is fire!"
    },
    "fit": {
        meaning: "Short for 'outfit'.",
        example: "I love your fit today."
    },
    "glow up": {
        meaning: "A makeover or transformation, especially in appearance.",
        example: "She had a major glow up over the summer."
    },
    "Gucci": {
        meaning: "Good; cool.",
        example: "Everything's Gucci with me."
    },
    "high key": {
        meaning: "Very obvious; opposite of 'low key'.",
        example: "I high key want to skip class today."
    },
    "hop off": {
        meaning: "To mind your own business.",
        example: "You need to hop off and stop judging me."
    },
    "I'm dead": {
        meaning: "Something is extremely funny.",
        example: "That joke was hilarious—I'm dead."
    },
    "low key": {
        meaning: "Slightly; secretly.",
        example: "I'm low key excited for the party."
    },
    "mood": {
        meaning: "Relatable feeling or situation.",
        example: "Sleeping all day is such a mood."
    },
    "noob": {
        meaning: "A newcomer; someone inexperienced.",
        example: "Don't be too hard on him; he's a noob."
    },
    "periodt": {
        meaning: "Used to emphasize a point; end of discussion.",
        example: "I'm not going, periodt."
    },
    "salty": {
        meaning: "Bitter; upset.",
        example: "He's salty because he lost the game."
    },
    "shook": {
        meaning: "Shocked; surprised.",
        example: "I was shook when I heard the news."
    },
    "slaps": {
        meaning: "Really good; especially for music.",
        example: "This song slaps!"
    },
    "stan": {
        meaning: "To be a devoted fan.",
        example: "I stan that artist so much."
    },
    "tea": {
        meaning: "Gossip; news.",
        example: "Spill the tea about what happened."
    },
    "thirsty": {
        meaning: "Desperate for attention.",
        example: "Posting that selfie was so thirsty."
    },
    "vibe": {
        meaning: "A feeling; atmosphere.",
        example: "This cafe has a chill vibe."
    },
    "vibe check": {
        meaning: "Assessing someone's mood or character.",
        example: "He failed the vibe check with that comment."
    },
    "valid": {
        meaning: "Acceptable; good.",
        example: "Your opinion is valid."
    },
    "yikes": {
        meaning: "An expression of concern or embarrassment.",
        example: "Yikes, that's a tough situation."
    },
    "yeet": {
        meaning: "To throw something forcefully.",
        example: "He yeeted the ball across the field."
    },
    "bop": {
        meaning: "A catchy or popular song.",
        example: "That new track is a total bop."
    },
    "beige flag": {
        meaning: "A neutral trait in a partner that might be odd but not a dealbreaker.",
        example: "He organizes his books by color—total beige flag."
    },
    "BDE": {
        meaning: "Acronym for 'Big Dick Energy'; denotes confidence without arrogance.",
        example: "She walked into the room with pure BDE."
    },
    "big yikes": {
        meaning: "An intensified version of 'yikes', used for something particularly embarrassing.",
        example: "Forgetting his lines on stage was a big yikes moment."
    },
    "bugging": {
        meaning: "Acting irrationally or erratically.",
        example: "You're bugging if you think that's a good idea."
    },
    "cooked": {
        meaning: "Exhausted or overwhelmed.",
        example: "After that marathon, I'm cooked."
    },
    "demure": {
        meaning: "Modest or reserved in behavior.",
        example: "Her demure outfit stood out in the flashy crowd."
    },
    "era": {
        meaning: "A phase or period characterized by a particular activity or behavior.",
        example: "I'm in my fitness era right now."
    },
    "flex": {
        meaning: "To show off or boast.",
        example: "Posting that luxury car is such a flex."
    },
    "fr": {
        meaning: "Abbreviation for 'for real'; used to emphasize sincerity.",
        example: "That movie was amazing, fr."
    },
    "let them cook": {
        meaning: "Allow someone to continue their plan or idea, trusting it will succeed.",
        example: "His strategy seems odd, but let's let him cook."
    },
    "mogging": {
        meaning: "Outshining someone, often in appearance or performance.",
        example: "He was mogging everyone else on the dance floor."
    },
    "noob": {
        meaning: "A newcomer or inexperienced person, especially in gaming.",
        example: "Don't be too hard on him; he's just a noob."
    },
    "pookie": {
        meaning: "A term of endearment for a loved one.",
        example: "Good morning, pookie!"
    },
    "shade": {
        meaning: "Subtle or indirect insult or criticism.",
        example: "She threw shade about his outfit during the interview."
    },
    "slaps": {
        meaning: "Something that is excellent or impressive, especially music.",
        example: "This new album slaps!"
    },
    "stan": {
        meaning: "To be an enthusiastic fan of someone or something.",
        example: "I stan that artist; their work is incredible."
    },
    "tea": {
        meaning: "Gossip or personal information.",
        example: "Spill the tea—what happened at the party?"
    },
    "woke": {
        meaning: "Being aware of social injustices and issues.",
        example: "She's very woke about environmental concerns."
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


