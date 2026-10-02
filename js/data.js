const GAME_DATA = {
    missions: [
        { id: 1, title: "Sentence Builder", status: "active", week: 1 },
        { id: 2, title: "Subject Power", status: "locked", week: 2 },
        { id: 3, title: "Present Simple", status: "locked", week: 3 },
        { id: 4, title: "Questions & Negative", status: "locked", week: 4 },
        { id: 5, title: "Present Continuous", status: "locked", week: 5 },
        { id: 6, title: "Continuous Practice", status: "locked", week: 6 },
        { id: 7, title: "Past Simple", status: "locked", week: 7 },
        { id: 8, title: "Past Practice", status: "locked", week: 8 },
        { id: 9, title: "Future Simple", status: "locked", week: 9 },
        { id: 10, title: "Future Practice", status: "locked", week: 10 },
        { id: 11, title: "Time Machine", status: "locked", week: 11 },
        { id: 12, title: "FINAL ENGLISH QUEST", status: "locked", week: 12 }
    ],
    sentenceBuilderLevels: [
        { words: ["I", "play", "football"], correct: ["I", "play", "football"] },
        { words: ["pizza", "like", "I"], correct: ["I", "like", "pizza"] },
        { words: ["football", "He", "plays"], correct: ["He", "plays", "football"] }
    ],
    timeMachineLevels: [
        {
            verb: "PLAY",
            everyday: "I play football.",
            now: "I am playing football.",
            yesterday: "I played football.",
            tomorrow: "I will play football."
        },
        {
            verb: "EAT",
            everyday: "I eat pizza.",
            now: "I am eating pizza.",
            yesterday: "I ate pizza.",
            tomorrow: "I will eat pizza."
        }
    ],
    speakingLevels: [
        { question: "What are you doing?", expected: ["I am jumping", "I am playing", "I am watching TV"], hint: "Say: I am playing" },
        { question: "What did you do yesterday?", expected: ["I played football", "I went to school", "I watched TV"], hint: "Say: I played football" }
    ],
    badges: [
        { id: 'b1', name: 'Sentence Builder', icon: '🧩', desc: 'Complete Mission 1' },
        { id: 'b2', name: 'Time Traveler', icon: '⏳', desc: 'Play Time Machine' },
        { id: 'b3', name: 'Speaking Star', icon: '🗣️', desc: 'Play Speaking Mode' },
        { id: 'b4', name: 'Word Collector', icon: '📚', desc: 'Learn 10 Words' },
        { id: 'b5', name: 'Family Champion', icon: '🏆', desc: 'Reach Family Level 3' }
    ],
    bookContent: {
        words: [
            { en: "football", tr: "futbol", example: "I play football." },
            { en: "pizza", tr: "pizza", example: "I like pizza." },
            { en: "book", tr: "kitap", example: "I read a book." },
            { en: "school", tr: "okul", example: "I go to school." }
        ],
        grammar: [
            { title: "Week 1: Sentence", rule: "Subject + Verb + Object. (I play football)" },
            { title: "Week 2: He/She/It", rule: "HE, SHE, IT — GIVE IT S! (He plays)" }
        ],
        questions: [
            { q: "What do you do?", a: "I play football." },
            { q: "Do you like pizza?", a: "Yes, I do." },
            { q: "What are you doing?", a: "I am playing." }
        ]
    }
};

const DEFAULT_STATE = {
    kerem: { xp: 0, streak: 1, level: 1, completedMissions: [], words: 4, badges: [] },
    baba: { xp: 0, streak: 1, level: 1, completedMissions: [], words: 4, badges: [] },
    family: { level: 1 }
};
