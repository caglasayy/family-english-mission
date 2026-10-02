// ============================================================
// 12 HAFTALIK DERS İÇERİĞİ — KEREM (Başlangıç & Orta) ve BABA (Orta & İleri)
// ============================================================

const WEEKS_KEREM = [
  {
    num: 1, emoji: '❤️', color: '#35b96f',
    title: 'My First English Sentence',
    subtitle: 'Başlangıç • İlk İngilizce Cümlem',
    grammar: {
      rule: 'Özne + Fiil + Nesne (S + V + O)',
      explain: 'İngilizce cümleler genellikle 3 temel parçadan oluşur: Kim yapıyor, ne yapıyor, neyi yapıyor.',
      rows: [
        ['I', 'play', 'football every day.'],
        ['You', 'eat', 'hot pizza.'],
        ['We', 'love', 'English games.'],
      ],
      tip: 'I, You, We, They → fiil olduğu gibi kalır. He, She, It → fiilin sonuna -s eklenir!'
    },
    words: [
      {e:'⚽',en:'play',tr:'oynamak'},{e:'🍕',en:'eat',tr:'yemek'},{e:'🥤',en:'drink',tr:'içmek'},
      {e:'❤️',en:'like',tr:'sevmek'},{e:'📖',en:'read',tr:'okumak'},{e:'📺',en:'watch',tr:'izlemek'},
      {e:'🏃',en:'go',tr:'gitmek'},{e:'🎁',en:'have',tr:'sahip olmak'}
    ],
    videoId: 'WpF5sMPNjPs',
    localVideo: 'First Sentences.mp4',
    videoChapters: ['Meet Nune!','Subject + Verb','I/You/We/They','He/She/It','Practice!'],
    quiz: [
      {q:'___ play football.', opts:['I','He plays','She playing'], ans:0},
      {q:'She ___ pizza every day.', opts:['eat','eats','eating'], ans:1},
      {q:'They ___ music.', opts:['likes','like','liking'], ans:1},
    ],
    mission: '3 farklı cümle kur: I ___, She ___, We ___',
    speaking: ['I like pizza.','She plays football.','We drink water every day.'],
  },
  {
    num: 2, emoji: '💪', color: '#2089d8',
    title: 'Subject Power',
    subtitle: 'Başlangıç • Özne Gücü (He / She / It)',
    grammar: {
      rule: 'He / She / It → Fiil + S / ES',
      explain: 'Tekil özneler (He, She, It) ile geniş zamanda fiilin sonuna -s ya da -es eklenir.',
      rows: [
        ['He', 'runs', 'very fast.'],
        ['She', 'watches', 'cartoons.'],
        ['My dog', 'sleeps', 'in the garden.'],
      ],
      tip: 'watch → watches | go → goes | study → studies | have → has (özel kural!)'
    },
    words: [
      {e:'🏃',en:'run',tr:'koşmak'},{e:'😴',en:'sleep',tr:'uyumak'},{e:'📚',en:'study',tr:'ders çalışmak'},
      {e:'💃',en:'dance',tr:'dans etmek'},{e:'🍳',en:'cook',tr:'yemek pişirmek'},{e:'🏊',en:'swim',tr:'yüzmek'},
      {e:'🎵',en:'sing',tr:'şarkı söylemek'},{e:'🎨',en:'draw',tr:'resim çizmek'}
    ],
    videoId: 'gRj2c61cKI0',
    localVideo: 'subject power.mp4',
    videoChapters: ['Tekrar: I/You','He/She Kuralı','-s / -es farkı','Özel Fiiller','Alıştırma'],
    quiz: [
      {q:'She ___ every morning.', opts:['run','runs','running'], ans:1},
      {q:'He ___ TV at night.', opts:['watch','watchs','watches'], ans:2},
      {q:'My cat ___ all day.', opts:['sleep','sleeps','sleeping'], ans:1},
    ],
    mission: 'Babana "He/She ___" yapısıyla 3 cümle anlat.',
    speaking: ['She runs every morning.','He watches TV at night.','My cat sleeps all day.'],
  },
  {
    num: 3, emoji: '🌞', color: '#8067df',
    title: 'Present Simple & Routines',
    subtitle: 'Başlangıç • Günlük Rutinler',
    grammar: {
      rule: 'Always / Usually / Sometimes / Never',
      explain: 'Geniş zaman; alışkanlıkları ve her gün yaptığımız rutinleri anlatır.',
      rows: [
        ['I always', 'wake up', 'at 7 o\'clock.'],
        ['She usually', 'goes', 'to school by bus.'],
        ['We sometimes', 'play', 'board games.'],
      ],
      tip: 'Sıklık zarfları (always, usually, sometimes) özneden hemen sonra gelir!'
    },
    words: [
      {e:'⏰',en:'wake up',tr:'uyanmak'},{e:'🪥',en:'brush teeth',tr:'diş fırçalamak'},{e:'🏫',en:'go to school',tr:'okula gitmek'},
      {e:'🏠',en:'come home',tr:'eve gelmek'},{e:'🍽️',en:'have dinner',tr:'akşam yemeği yemek'},
      {e:'📝',en:'do homework',tr:'ödev yapmak'},{e:'😴',en:'go to bed',tr:'yatmak'},{e:'🚿',en:'take a shower',tr:'duş almak'}
    ],
    videoId: 'n7MLTV7UZPY',
    localVideo: 'present simple.mp4',
    videoChapters: ['Rutin Nedir?','Always/Usually','Sıklık Zarfları','Saatler','Günlük Rutinim'],
    quiz: [
      {q:'I ___ up at 7 AM.', opts:['wake','wakes','waking'], ans:0},
      {q:'She always ___ her teeth.', opts:['brush','brushes','brushing'], ans:1},
      {q:'We usually ___ dinner at 7.', opts:['have','has','having'], ans:0},
    ],
    mission: 'Günlük rutinini 5 cümleyle anlat: I wake up, I brush...',
    speaking: ['I wake up at seven o\'clock.','She brushes her teeth every morning.','We always have dinner together.'],
  },
  {
    num: 4, emoji: '❓', color: '#ff9638',
    title: 'Questions & Negatives',
    subtitle: 'Başlangıç • Sorular ve Olumsuzlar',
    grammar: {
      rule: 'Do/Does + Özne + Fiil? | don\'t / doesn\'t',
      explain: 'Soru sormak için Do (I/You/We/They) veya Does (He/She/It) başa gelir.',
      rows: [
        ['Do', 'you', 'like ice cream?'],
        ['Does', 'he', 'play basketball?'],
        ['I', 'don\'t', 'like broccoli.'],
        ['She', 'doesn\'t', 'watch horror movies.'],
      ],
      tip: 'Does veya doesn\'t kullanıldığında fiilin sonuna -s EKLENMEZ! Does she play? ✅'
    },
    words: [
      {e:'🤔',en:'do',tr:'yardımcı fiil (ben/sen/biz)'},{e:'❓',en:'does',tr:'yardımcı fiil (o)'},{e:'🚫',en:'don\'t',tr:'yapmam / etmem'},
      {e:'🙅',en:'doesn\'t',tr:'yapmaz / etmez'},{e:'🌍',en:'what',tr:'ne'},{e:'📍',en:'where',tr:'nerede'},
      {e:'⏰',en:'when',tr:'ne zaman'},{e:'🤷',en:'why',tr:'neden'}
    ],
    videoId: 'LCyGPZ7RPHE',
    localVideo: 'Questions and Negatives.mp4',
    videoChapters: ['Do vs Does','Soru Cümlesi','Olumsuz Cümle','Wh- Soruları','Alıştırma'],
    quiz: [
      {q:'___ she like football?', opts:['Do','Does','Is'], ans:1},
      {q:'I ___ like milk.', opts:['doesn\'t','don\'t','not'], ans:1},
      {q:'Where ___ they live?', opts:['does','do','are'], ans:1},
    ],
    mission: 'Babana 3 İngilizce soru sor: Do you like...? Where do you...?',
    speaking: ['Do you like pizza?','Does she play football?','I don\'t like milk, I prefer orange juice.'],
  },
  {
    num: 5, emoji: '🔄', color: '#ff647b',
    title: 'Present Continuous',
    subtitle: 'Başlangıç-Orta • Şimdiki Zaman',
    grammar: {
      rule: 'am / is / are + Fiil-ING',
      explain: 'Tam şu anda yapmakta olduğumuz eylemleri anlatır.',
      rows: [
        ['I', 'am eating', 'a sandwich now.'],
        ['She', 'is reading', 'an exciting book.'],
        ['They', 'are playing', 'in the park.'],
      ],
      tip: 'I → am | He/She/It → is | You/We/They → are + V-ing'
    },
    words: [
      {e:'🏃',en:'running',tr:'koşuyor'},{e:'🍽️',en:'eating',tr:'yiyor'},{e:'😴',en:'sleeping',tr:'uyuyor'},
      {e:'⚽',en:'playing',tr:'oynuyor'},{e:'📖',en:'reading',tr:'okuyor'},{e:'📺',en:'watching',tr:'izliyor'},
      {e:'🎧',en:'listening',tr:'dinliyor'},{e:'🎨',en:'drawing',tr:'çiziyor'}
    ],
    videoId: 'g6UAU3fHtyc',
    localVideo: 'Present Continuous.mp4',
    videoChapters: ['am/is/are','Verb + ing','Yazım kuralları','Now/Right now','Alıştırma'],
    quiz: [
      {q:'She ___ a book right now.', opts:['read','reads','is reading'], ans:2},
      {q:'They ___ football now.', opts:['play','are playing','plays'], ans:1},
      {q:'I ___ to music.', opts:['am listening','is listening','listen'], ans:0},
    ],
    mission: 'Evde etrafına bak ve şu an kimin ne yaptığını 4 cümleyle söyle!',
    speaking: ['I am learning English right now.','She is reading a story book.','They are playing football in the garden.'],
  },
  {
    num: 6, emoji: '⚖️', color: '#2db9b3',
    title: 'Now vs Every Day',
    subtitle: 'Orta Seviye • Şimdi mi, Her Gün mü?',
    grammar: {
      rule: 'Present Simple vs Present Continuous',
      explain: 'Her gün yaptığımız alışkanlıklarla şu an yaptığımız işleri ayırt edelim.',
      rows: [
        ['I play', 'football every Saturday.', '(Her hafta)'],
        ['I am playing', 'football right now.', '(Şu an)'],
        ['He drinks', 'milk every morning.', '(Alışkanlık)'],
        ['He is drinking', 'water at the moment.', '(Şu an)'],
      ],
      tip: 'every day / usually → Simple | now / right now / Look! → Continuous'
    },
    words: [
      {e:'⏰',en:'always',tr:'her zaman'},{e:'📅',en:'usually',tr:'genellikle'},{e:'🔄',en:'sometimes',tr:'bazen'},
      {e:'🌟',en:'right now',tr:'tam şu an'},{e:'👉',en:'at the moment',tr:'şu anda'},{e:'📆',en:'every weekend',tr:'her hafta sonu'},
      {e:'👀',en:'look!',tr:'bak!'},{e:'🤫',en:'listen!',tr:'dinle!'}
    ],
    videoId: 'WpF5sMPNjPs',
    videoChapters: ['Fark nedir?','İpucu Kelimeler','Simple örnekler','Continuous örnekler','Karşılaştırma'],
    quiz: [
      {q:'Look! It ___ outside right now.', opts:['rains','is raining','rain'], ans:1},
      {q:'I usually ___ my bike after school.', opts:['am riding','ride','rides'], ans:1},
      {q:'She ___ homework at the moment.', opts:['does','do','is doing'], ans:2},
    ],
    mission: 'Her iki zamandan 3\'er cümle kur ve farkını babana anlat.',
    speaking: ['I usually eat cereal for breakfast, but today I am eating pancakes.','She always reads books, but now she is watching TV.'],
  },
  {
    num: 7, emoji: '⏪', color: '#f1a719',
    title: 'Past Simple Story',
    subtitle: 'Orta Seviye • Geçmiş Zaman',
    grammar: {
      rule: 'Verb + ED (Düzenli) & İkinci Hal (Düzensiz)',
      explain: 'Dün, geçen hafta veya geçmişte bitmiş olayları anlatır.',
      rows: [
        ['I', 'played', 'video games yesterday.'],
        ['She', 'went', 'to the cinema last night.'],
        ['We', 'saw', 'a big dinosaur at the museum!'],
      ],
      tip: 'go → went | eat → ate | see → saw | have → had | buy → bought'
    },
    words: [
      {e:'👟',en:'went',tr:'gitti'},{e:'🍕',en:'ate',tr:'yedi'},{e:'👀',en:'saw',tr:'gördü'},
      {e:'🛍️',en:'bought',tr:'satın aldı'},{e:'🏆',en:'won',tr:'kazandı'},{e:'😴',en:'slept',tr:'uyudu'},
      {e:'🎁',en:'had',tr:'sahipti / vardı'},{e:'🏠',en:'came',tr:'geldi'}
    ],
    videoId: 'n7MLTV7UZPY',
    localVideo: 'past tense.mp4',
    videoChapters: ['Geçmiş Zaman','Düzenli Fiiller (-ed)','Düzensiz Fiiller','Yesterday / Last','Alıştırma'],
    quiz: [
      {q:'I ___ football yesterday.', opts:['play','played','playing'], ans:1},
      {q:'She ___ to the park last Sunday.', opts:['go','goes','went'], ans:2},
      {q:'We ___ a great movie last night.', opts:['saw','see','seen'], ans:0},
    ],
    mission: 'Dün neler yaptığını 5 cümleyle anlat: Yesterday I...',
    speaking: ['Yesterday I played football with my friends.','She went to the park last weekend.','We ate pizza and watched a movie last night.'],
  },
  {
    num: 8, emoji: '🕵️', color: '#35b96f',
    title: 'What Did You Do?',
    subtitle: 'Orta Seviye • Geçmişte Sorular',
    grammar: {
      rule: 'Did + Özne + Yalın Fiil? | didn\'t + Yalın Fiil',
      explain: 'Geçmiş zamanla ilgili soru sorarken Did, olumsuz yaparken didn\'t kullanılır.',
      rows: [
        ['Did', 'you watch', 'the match yesterday?'],
        ['Where did', 'they go', 'on holiday?'],
        ['I', 'didn\'t eat', 'any candy.'],
      ],
      tip: 'Did veya didn\'t cümleye girdiğinde fiil birinci (yalın) haline döner! (went → go)'
    },
    words: [
      {e:'📅',en:'yesterday',tr:'dün'},{e:'🌙',en:'last night',tr:'dün gece'},{e:'📆',en:'last summer',tr:'geçen yaz'},
      {e:'⏳',en:'two days ago',tr:'iki gün önce'},{e:'🏖️',en:'vacation',tr:'tatil'},{e:'🏛️',en:'museum',tr:'müze'},
      {e:'❓',en:'did',tr:'geçmiş soru eki'},{e:'🚫',en:'didn\'t',tr:'yapmadı / etmedi'}
    ],
    videoId: 'LCyGPZ7RPHE',
    videoChapters: ['Did / Didn\'t','Soru Kalıbı','Where/What did...','Olumsuz Cümle','Dedektif Oyunu'],
    quiz: [
      {q:'___ you finish your homework?', opts:['Do','Did','Were'], ans:1},
      {q:'She ___ go to school yesterday.', opts:['don\'t','didn\'t','wasn\'t'], ans:1},
      {q:'What did they ___ at the shop?', opts:['bought','buys','buy'], ans:2},
    ],
    mission: 'Dedektif ol! Babana dün ne yaptığıyla ilgili 4 soru sor: Did you...?',
    speaking: ['Did you eat breakfast this morning?','Where did you go last weekend?','I didn\'t watch TV yesterday, I read a book.'],
  },
  {
    num: 9, emoji: '🚀', color: '#2089d8',
    title: 'Future Adventures (Will)',
    subtitle: 'Orta Seviye • Gelecek Tahminleri',
    grammar: {
      rule: 'Özne + will / won\'t + Yalın Fiil',
      explain: 'Gelecekteki tahminlerimizi, hayallerimizi ve anlık kararlarımızı anlatır.',
      rows: [
        ['I think it', 'will snow', 'tomorrow.'],
        ['Robots', 'will help', 'us in the future.'],
        ['I promise I', 'won\'t be', 'late!'],
      ],
      tip: 'I think (Bence), I hope (Umarım), Maybe (Belki) kelimeleriyle will çok sık kullanılır!'
    },
    words: [
      {e:'🔮',en:'will',tr:'-ecek / -acak'},{e:'🚫',en:'won\'t',tr:'-meyecek / -mayacak'},{e:'📅',en:'tomorrow',tr:'yarın'},
      {e:'🚀',en:'in the future',tr:'gelecekte'},{e:'🤖',en:'robot',tr:'robot'},{e:'🌍',en:'travel',tr:'seyahat etmek'},
      {e:'🤔',en:'maybe',tr:'belki'},{e:'🌟',en:'promise',tr:'söz vermek'}
    ],
    videoId: 'g6UAU3fHtyc',
    localVideo: 'future tense.mp4',
    videoChapters: ['Will Nedir?','Gelecek Tahminleri','Won\'t Kullanımı','Will you...?','2050 Yılı Hayali'],
    quiz: [
      {q:'I think our team ___ win the match!', opts:['is','will','goes'], ans:1},
      {q:'Don\'t worry, I ___ forget your book.', opts:['won\'t','willn\'t','not will'], ans:0},
      {q:'Will people ___ on Mars in the future?', opts:['living','lives','live'], ans:2},
    ],
    mission: 'Gelecekte (2050 yılında) dünyanın nasıl olacağını 4 cümleyle anlat!',
    speaking: ['In the future, flying cars will be everywhere.','I will travel to space one day.','I promise I will study hard.'],
  },
  {
    num: 10, emoji: '📋', color: '#8067df',
    title: 'My Big Plans (Going To)',
    subtitle: 'Orta Seviye • Gelecek Planlarım',
    grammar: {
      rule: 'am / is / are + going to + Fiil',
      explain: 'Önceden planladığımız, karar verdiğimiz gelecek etkinliklerini anlatır.',
      rows: [
        ['I', 'am going to', 'visit my grandparents.'],
        ['She', 'is going to', 'bake a chocolate cake.'],
        ['We', 'are going to', 'camp in the forest.'],
      ],
      tip: 'Önceden planlıysa → going to | Konuşurken o an karar verdiysek → will'
    },
    words: [
      {e:'📋',en:'going to',tr:'planlanan gelecek'},{e:'⛺',en:'camp',tr:'kamp yapmak'},{e:'🎂',en:'bake',tr:'fırında pişirmek'},
      {e:'🏖️',en:'summer holiday',tr:'yaz tatili'},{e:'🎒',en:'prepare',tr:'hazırlamak'},{e:'🎟️',en:'ticket',tr:'bilet'},
      {e:'📅',en:'this weekend',tr:'bu hafta sonu'},{e:'🎉',en:'celebrate',tr:'kutlamak'}
    ],
    videoId: 'WpF5sMPNjPs',
    localVideo: 'future tense.mp4',
    videoChapters: ['Going to Nedir?','Will vs Going to','Olumsuz Planlar','Are you going to...?','Tatil Planım'],
    quiz: [
      {q:'I ___ going to meet my friends on Saturday.', opts:['am','is','will'], ans:0},
      {q:'Look at those dark clouds! It ___ rain.', opts:['going to','is going to','will be'], ans:1},
      {q:'What are you going to ___ this summer?', opts:['doing','did','do'], ans:2},
    ],
    mission: 'Bu hafta sonu için ailenle yapacağın 4 planı İngilizce söyle!',
    speaking: ['I am going to ride my bike this weekend.','We are going to visit our grandma on Sunday.','Are you going to watch the match tonight?'],
  },
  {
    num: 11, emoji: '⚡', color: '#ff9638',
    title: 'Super Comparisons & Modals',
    subtitle: 'Orta Seviye • Karşılaştırma & Yetenekler',
    grammar: {
      rule: 'Bigger / More Exciting | Can / Must / Should',
      explain: 'İki şeyi karşılaştırmayı ve yetenek/kuralları ifade etmeyi öğreniyoruz.',
      rows: [
        ['A cheetah is', 'faster than', 'a horse.'],
        ['Science is', 'more interesting than', 'history.'],
        ['You', 'should eat', 'healthy food.'],
      ],
      tip: 'Kısa sıfatlar: fast → faster than | Uzun sıfatlar: expensive → more expensive than | good → better than'
    },
    words: [
      {e:'🐆',en:'faster',tr:'daha hızlı'},{e:'🐘',en:'bigger',tr:'daha büyük'},{e:'🌟',en:'better',tr:'daha iyi'},
      {e:'🤩',en:'more exciting',tr:'daha heyecanlı'},{e:'💪',en:'can / could',tr:'-ebilmek (yetenek)'},{e:'⚠️',en:'must',tr:'-meli (zorunluluk)'},
      {e:'💡',en:'should',tr:'-meli (tavsiye)'},{e:'🌍',en:'the biggest',tr:'en büyük'}
    ],
    videoId: 'n7MLTV7UZPY',
    videoChapters: ['Faster / Bigger','More ... than','The Best / The Biggest','Can / Should / Must','Alıştırma'],
    quiz: [
      {q:'An elephant is ___ than a lion.', opts:['big','bigger','more big'], ans:1},
      {q:'You have a test tomorrow. You ___ study.', opts:['should','can\'t','were'], ans:0},
      {q:'This game is ___ than the old one!', opts:['good','better','best'], ans:1},
    ],
    mission: 'Evdeki nesneleri veya hayvanları karşılaştıran 4 cümle kur!',
    speaking: ['A plane is faster than a train.','Football is more exciting than golf.','We must brush our teeth before bed.'],
  },
  {
    num: 12, emoji: '🏆', color: '#f1a719',
    title: 'Final English Quest',
    subtitle: 'Orta Seviye • Büyük Final & Hikaye Anlatımı',
    grammar: {
      rule: 'Past + Present + Future + Connectors (because, so, when)',
      explain: '12 haftada öğrendiğimiz tüm zamanları bağlaçlarla birleştirip akıcı konuşuyoruz!',
      rows: [
        ['I love English', 'because', 'it is fun!'],
        ['Yesterday I studied,', 'and now', 'I am ready.'],
        ['When I grow up,', 'I will travel', 'around the world.'],
      ],
      tip: '🏆 Tebrikler Kerem! Artık geçmişi, şu anı ve geleceği bağlaçlarla birleştirerek anlatabiliyorsun!'
    },
    words: [
      {e:'🔗',en:'because',tr:'çünkü'},{e:'➡️',en:'so',tr:'bu yüzden'},{e:'⏱️',en:'when',tr:'-dığı zaman'},
      {e:'🌟',en:'although',tr:'-e rağmen'},{e:'🗣️',en:'confident',tr:'özgüvenli'},{e:'🎓',en:'graduate',tr:'mezun olmak'},
      {e:'🏆',en:'champion',tr:'şampiyon'},{e:'🌍',en:'adventure',tr:'macera'}
    ],
    videoId: 'LCyGPZ7RPHE',
    videoChapters: ['12 Hafta Özeti','Bağlaçlar (Because/So)','Zamanları Birleştirme','Kendini Tanıtma','Mezuniyet!'],
    quiz: [
      {q:'I stayed at home ___ it was raining.', opts:['so','because','but'], ans:1},
      {q:'Yesterday we ___ to the museum and tomorrow we ___ go to the zoo.', opts:['went / will','go / are','went / did'], ans:0},
      {q:'She can speak English very ___.', opts:['good','well','best'], ans:1},
    ],
    mission: '🏆 BÜYÜK GÖREV: Kendini, geçmişte yaptığın bir tatili ve gelecek hayalini 8 cümleyle anlat!',
    speaking: ['Hi! I can speak about my past, present and future now.','Yesterday I learned new words because I want to be fluent.','Next summer, we are going to have a great adventure!'],
  }
];

const WEEKS_BABA = [
  {
    num: 1, emoji: '🧭', color: '#092d63',
    title: 'Geniş Zaman (Present Simple)',
    subtitle: '1. Ana Zaman • Kurumsal & Günlük Rutinler, Kurallar ve İleri Fiiller',
    grammar: {
      rule: 'I/You/We/They + V1 (do not / Do...?) | He/She/It + V-s (does not / Does...?)',
      explain: 'Genel doğruları, profesyonel sorumlulukları, şirket/hayat düzenini ve alışkanlıkları orta-ileri seviye kelimelerle (olumlu, olumsuz ve soru) ifade eder.',
      rows: [
        ['Olumlu:', 'She manages the international team and evaluates performance.'],
        ['Olumlu:', 'We analyze market trends and make strategic decisions every week.'],
        ['Olumsuz:', 'He doesn\'t compromise on quality, and we don\'t ignore details.'],
        ['Soru:', 'How often do you negotiate with foreign suppliers?'],
      ],
      tip: 'I/You/We/They → Yalın Fiil (manage, analyze) | He/She/It → Fiil + s/es/ies (manages, analyzes, carries). Soru ve olumsuzda (does / doesn\'t) fiil yalın hale döner!'
    },
    words: [
      {e:'🤝',en:'manage',tr:'yönetmek / idare etmek'},{e:'📊',en:'evaluate',tr:'değerlendirmek'},{e:'🔍',en:'analyze',tr:'analiz etmek'},
      {e:'💼',en:'negotiate',tr:'müzakere etmek'},{e:'🏢',en:'operate',tr:'faaliyet göstermek'},{e:'🛡️',en:'maintain',tr:'sürdürmek / korumak'},
      {e:'🔄',en:'frequently',tr:'sık sık'},{e:'⚡',en:'efficiently',tr:'verimli bir şekilde'}
    ],
    videoId: 'WpF5sMPNjPs',
    localVideo: 'present simple.mp4',
    videoChapters: ['Geniş Zaman Yapısı','He/She/It (-s Kuralı)','Olumsuz (Don\'t / Doesn\'t)','Soru (Do / Does)','İleri Cümle Pratiği'],
    quiz: [
      {q:'Our director ___ every project carefully and ___ constructive feedback.', opts:['evaluate / give','evaluates / gives','evaluates / give'], ans:1},
      {q:'We ___ accept defective products from our suppliers.', opts:['doesn\'t','aren\'t','don\'t'], ans:2},
      {q:'How often ___ your department organize strategy meetings?', opts:['do','does','is'], ans:1},
    ],
    mission: 'İşin, günlük düzenin ve ilkelerin hakkında ileri seviye fiillerle 2 olumlu, 1 olumsuz ve 1 soru cümlesi kur.',
    speaking: [
      'I manage daily operations and coordinate with different departments.',
      'Our company operates globally and maintains high quality standards.',
      'How often does your team evaluate customer feedback?'
    ],
  },
  {
    num: 2, emoji: '🔄', color: '#2089d8',
    title: 'Şimdiki Zaman (Present Continuous)',
    subtitle: '2. Ana Zaman • Şu Anda Yürütülen Projeler, Değişen Trendler ve Süreçler',
    grammar: {
      rule: 'am / is / are + V-ing | am not / isn\'t / aren\'t + V-ing | Am/Is/Are + S + V-ing?',
      explain: 'Tam şu anda yapılan eylemleri, bu dönemde yürütülen projeleri (currently, this month) ve hızla değişen durumları anlatır.',
      rows: [
        ['Olumlu:', 'We are currently developing a new digital platform.'],
        ['Olumlu:', 'The global economy is changing rapidly nowadays.'],
        ['Olumsuz:', 'They aren\'t expanding into new markets this quarter.'],
        ['Soru:', 'Are you investigating the root cause of the technical issue?'],
      ],
      tip: 'Zaman zarfları: right now (tam şu an), at the moment (şu anda), currently (hâlihazırda/şu sıralar), nowadays (bugünlerde), this week/quarter.'
    },
    words: [
      {e:'🛠️',en:'currently',tr:'hâlihazırda / şu sıralar'},{e:'🚀',en:'expand',tr:'genişletmek / büyümek'},{e:'⚙️',en:'implement',tr:'uygulamak / hayata geçirmek'},
      {e:'🔎',en:'investigate',tr:'araştırmak / incelemek'},{e:'🤝',en:'collaborate',tr:'iş birliği yapmak'},{e:'📈',en:'rapidly',tr:'hızla / süratle'},
      {e:'🌱',en:'develop',tr:'geliştirmek'},{e:'🌐',en:'nowadays',tr:'bugünlerde'}
    ],
    videoId: 'g6UAU3fHtyc',
    localVideo: 'Present Continuous.mp4',
    videoChapters: ['Am / Is / Are + V-ing','Currently & Nowadays','Olumsuz & Soru Yapısı','Değişen Trendleri Anlatma','Konuşma Pratiği'],
    quiz: [
      {q:'We ___ currently implementing a more secure software system.', opts:['do','are','have'], ans:1},
      {q:'Why ___ the supplier delaying the delivery this week?', opts:['does','is','are'], ans:1},
      {q:'Customer expectations ___ evolving rapidly nowadays.', opts:['is','are','do'], ans:1},
    ],
    mission: 'Şu anda veya bu ay işinde ve ailesel hayatında devam eden 4 süreci Şimdiki Zaman ile anlat.',
    speaking: [
      'We are currently collaborating with an international partner on this project.',
      'I am improving my English vocabulary and speaking skills every day.',
      'Are they expanding their production capacity this year?'
    ],
  },
  {
    num: 3, emoji: '⏪', color: '#8067df',
    title: 'Geçmiş Zaman (Past Simple)',
    subtitle: '3. Ana Zaman • Tamamlanmış Eylemler, Kararlar ve İleri Düzensiz Fiiller',
    grammar: {
      rule: 'Olumlu: S + V2 (-ed / Irregular) | Olumsuz: didn\'t + V1 | Soru: Did + S + V1?',
      explain: 'Geçmişte belirli bir zamanda (yesterday, last week, two years ago, in 2022) tamamlanmış olayları, başarıları ve alınan kararları anlatır.',
      rows: [
        ['Olumlu:', 'We launched the new product line last month and achieved our target.'],
        ['Olumlu:', 'He overcame major obstacles and led the team to success.'],
        ['Olumsuz:', 'They didn\'t approve the initial proposal yesterday.'],
        ['Soru:', 'Did the investment pay off in the first year?'],
      ],
      tip: 'İleri Düzensiz Fiiller: overcome → overcame (aşmak) | lead → led (yönetmek) | deal → dealt (ilgilenmek) | rise → rose (yükselmek) | pay → paid (ödemek/karşılığını vermek). Did ve didn\'t varken fiil V1 (yalın) olur!'
    },
    words: [
      {e:'🚀',en:'launch (launched)',tr:'başlatmak / piyasaya sürmek'},{e:'🏔️',en:'overcome (overcame)',tr:'üstesinden gelmek / aşmak'},{e:'🏆',en:'achieve (achieved)',tr:'başarmak / elde etmek'},
      {e:'🧭',en:'lead (led)',tr:'liderlik etmek / yönetmek'},{e:'💰',en:'pay off (paid off)',tr:'karşılığını vermek / değmek'},{e:'🔧',en:'resolve (resolved)',tr:'çözmek (sorun)'},
      {e:'📝',en:'approve (approved)',tr:'onaylamak'},{e:'🎯',en:'significant',tr:'önemli / kayda değer'}
    ],
    videoId: 'n7MLTV7UZPY',
    localVideo: 'past tense.mp4',
    videoChapters: ['V2: Düzenli & Düzensiz Fiiller','İleri İş Fiilleri (Overcame/Led)','Olumsuz: Didn\'t + V1','Soru: Did + S + V1?','Geçmiş Anlatım Pratiği'],
    quiz: [
      {q:'Our team ___ several tough challenges during the project last year.', opts:['overcome','overcame','overcoming'], ans:1},
      {q:'We ___ sign the contract yesterday because some clauses were unclear.', opts:['don\'t','didn\'t','weren\'t'], ans:1},
      {q:'___ the board approve the annual budget at last week\'s meeting?', opts:['Did','Was','Does'], ans:0},
    ],
    mission: 'Geçen hafta veya geçen yıl tamamladığın önemli işleri 2 olumlu, 1 olumsuz ve 1 soru cümlesiyle (Past Simple) anlat.',
    speaking: [
      'Last quarter, we launched a new strategy and increased efficiency by 20%.',
      'We faced unexpected difficulties, but we resolved them quickly.',
      'Did you attend the industry conference in Istanbul last month?'
    ],
  },
  {
    num: 4, emoji: '🚀', color: '#ff9638',
    title: 'Gelecek Zaman (Future: Will & Going to)',
    subtitle: '4. Ana Zaman • Stratejik Planlar (Going to) ve Tahminler / Kararlar (Will)',
    grammar: {
      rule: 'Planlı Gelecek: am/is/are going to + V1 | Tahmin, Söz & Anlık Karar: will / won\'t + V1',
      explain: 'Önceden kararlaştırılmış somut planlar için "be going to", gelecek öngörüleri, beklentiler ve konuşma anında verilen kararlar için "will" kullanılır.',
      rows: [
        ['Plan (Going to):', 'We are going to establish a new branch in Ankara next year.'],
        ['Tahmin (Will):', 'I believe this technology will transform the entire industry.'],
        ['Olumsuz:', 'Sales won\'t decline if we maintain our service quality.'],
        ['Soru:', 'Are you going to present the roadmap at tomorrow\'s meeting?'],
      ],
      tip: 'Somut hazırlık ve önceden alınmış karar → am/is/are going to + V1 | I think, I believe, I expect, I\'m sure, probably → will / won\'t + V1'
    },
    words: [
      {e:'🔮',en:'predict',tr:'tahmin etmek / öngörmek'},{e:'📈',en:'exceed',tr:'aşmak / geçmek'},{e:'⚡',en:'transform',tr:'dönüştürmek'},
      {e:'💰',en:'generate',tr:'üretmek / gelir sağlamak'},{e:'🛠️',en:'handle',tr:'halletmek / ele almak'},{e:'📊',en:'expectation',tr:'beklenti'},
      {e:'🗓️',en:'upcoming',tr:'yaklaşan / gelecek'},{e:'⏳',en:'in the long run',tr:'uzun vadede'}
    ],
    videoId: 'LCyGPZ7RPHE',
    localVideo: 'future tense.mp4',
    videoChapters: ['Will vs Be Going To','Stratejik Planlar (Going to)','Öngörüler (Will / Won\'t)','Gelecek Zaman Soruları','Konuşma Pratiği'],
    quiz: [
      {q:'We have already finalized the plan; we ___ upgrade our servers this weekend.', opts:['will','are going to','going to'], ans:1},
      {q:'I am confident that this investment ___ pay off in the long run.', opts:['will','is going','does'], ans:0},
      {q:'Don\'t worry about the client\'s email; I ___ handle it right away.', opts:['am going','will','handled'], ans:1},
    ],
    mission: 'Gelecek hafta ve gelecek yıl için 2 kesin planını (going to) ve 2 gelecek öngörünü (will) orta-ileri seviye kelimelerle anlat.',
    speaking: [
      'We are going to launch our new mobile application next month.',
      'I expect that our results will exceed expectations this year.',
      'Will this new regulation affect international trade in the long run?'
    ],
  },
  {
    num: 5, emoji: '🔑', color: '#2db9b3',
    title: 'Have & Has: Sahiplik ve İleri Kalıplar',
    subtitle: 'Özel Konu 1 • Have / Has Kullanımı, Soruları ve Kalıplaşmış İfadeler (Collocations)',
    grammar: {
      rule: 'I/You/We/They have (don\'t have / Do...have?) | He/She/It has (doesn\'t have / Does...have?)',
      explain: '4 ana zamanı öğrendikten sonra şimdi "have / has" yapısını derinlemesine inceliyoruz: Sahiplik, deneyim ve iş/günlük hayatta "have" ile kurulan ileri seviye kalıplar.',
      rows: [
        ['Sahiplik:', 'Our company has a strong reputation, and we have experienced engineers.'],
        ['Olumsuz:', 'He doesn\'t have enough authority to sign this document.'],
        ['Soru:', 'Does she have experience in international project management?'],
        ['Şimdiki Zaman:', 'We are having a strategy meeting right now. (Eylem anlamında -ing alır!)'],
      ],
      tip: 'Çok Önemli: "He/She/It has" olumluda kullanılır, ancak olumsuz ve soruda tekrar "have" olur (Does he have? / He doesn\'t have). Sahiplik bildiren "have" -ing almaz, fakat "have a meeting / have lunch / have difficulty" gibi eylemlerde "are having" olur!'
    },
    words: [
      {e:'🛡️',en:'have responsibility',tr:'sorumluluğa sahip olmak'},{e:'💥',en:'have an impact on',tr:'üzerinde etkisi olmak'},{e:'⚠️',en:'have difficulty',tr:'zorluk çekmek'},
      {e:'🎖️',en:'authority',tr:'yetki / otorite'},{e:'🧠',en:'experience',tr:'deneyim / tecrübe'},{e:'🌍',en:'reputation',tr:'itibar / saygınlık'},
      {e:'🤝',en:'have a meeting',tr:'toplantı yapmak'},{e:'🔎',en:'have a look at',tr:'göz atmak / incelemek'}
    ],
    videoId: 'WpF5sMPNjPs',
    videoChapters: ['Have vs Has Kuralları','Does he have? / Doesn\'t have','Have + İsim Kalıpları','Have (Sahiplik) vs Having (Eylem)','Pratik'],
    quiz: [
      {q:'This new technology ___ a huge impact on productivity.', opts:['have','has','is having'], ans:1},
      {q:'___ your new manager have experience in the automotive sector?', opts:['Has','Do','Does'], ans:2},
      {q:'Can I call you later? We ___ a meeting with the board right now.', opts:['have','are having','has'], ans:1},
    ],
    mission: '"have / has", "doesn\'t have", "Does ... have?" ve "are having" yapılarını kullanarak 4 farklı cümle kur.',
    speaking: [
      'I have full responsibility for the quality control process.',
      'She has great leadership skills, and her decisions have a positive impact on the team.',
      'Does your company have a branch in Germany?'
    ],
  },
  {
    num: 6, emoji: '🕰️', color: '#ff647b',
    title: '4 Ana Zamanda Have: Had & Will Have',
    subtitle: 'Özel Konu 2 • Geçmişte (Had) ve Gelecekte (Will Have) Sahiplik & Deneyim',
    grammar: {
      rule: 'Geniş: have/has | Şimdiki: am/is/are having | Geçmiş: had (didn\'t have) | Gelecek: will have',
      explain: '"Have / Has" yapısının Geçmiş Zaman (had / didn\'t have / Did...have?) ve Gelecek Zaman (will have / won\'t have) halleriyle 4 ana zamandaki tam tablosu.',
      rows: [
        ['Geçmiş (+):', 'We had a very productive discussion with the client yesterday.'],
        ['Geçmiş (-/?):', 'Did you have enough time? — No, we didn\'t have enough data.'],
        ['Gelecek (+):', 'Next year, our department will have a much larger budget.'],
        ['4 Zaman Özeti:', 'I have a goal today; I had doubts yesterday, but I will have success tomorrow!'],
      ],
      tip: 'Geçmiş zamanda tüm özneler (I/You/We/They/He/She/It) için "had" kullanılır! Ancak soru ve olumsuzda "Did / didn\'t" geldiği için tekrar yalın "have" olur: Did she have an appointment? / We didn\'t have any issues.'
    },
    words: [
      {e:'💡',en:'opportunity',tr:'fırsat'},{e:'📅',en:'appointment',tr:'randevu'},{e:'📊',en:'productive',tr:'verimli / üretken'},
      {e:'💰',en:'budget',tr:'bütçe'},{e:'❓',en:'doubt',tr:'şüphe'},{e:'🦁',en:'confidence',tr:'özgüven / güven'},
      {e:'📈',en:'advantage',tr:'avantaj'},{e:'⚡',en:'sufficient',tr:'yeterli'}
    ],
    videoId: 'n7MLTV7UZPY',
    videoChapters: ['Geçmişte Sahiplik: Had','Did you have? / Didn\'t have','Gelecekte Sahiplik: Will have','4 Zamanda Have Karşılaştırması','Pratik'],
    quiz: [
      {q:'Yesterday we ___ a serious technical issue, but we solved it quickly.', opts:['have','has','had'], ans:2},
      {q:'We didn\'t ___ enough information to make a decision last week.', opts:['had','have','having'], ans:1},
      {q:'Once we complete this training, we ___ a big competitive advantage.', opts:['had','will have','are having'], ans:1},
    ],
    mission: 'Geçmişte sahip olduğun bir fırsatı (had), dün yaşamadığın bir sorunu (didn\'t have) ve gelecekte sahip olacağın bir hedefi (will have) anlat.',
    speaking: [
      'Last week, we had a great opportunity to present our project.',
      'Did you have any difficulty finding the conference hall yesterday?',
      'By next year, we will have much more experience in this market.'
    ],
  },
  {
    num: 7, emoji: '⚖️', color: '#35b96f',
    title: 'Zorunluluk 1: Must, Have to & Has to',
    subtitle: 'Özel Konu 3 • Geniş ve Şimdiki Zamanda Zorunluluk, Gereklilik ve Yasaklar',
    grammar: {
      rule: 'must + V1 (İçsel/Kesin) | have to / has to + V1 (Dış Kural/Şart) | need to / should + V1',
      explain: 'Zorunluluk ve gereklilik anlatan "must", "have to / has to" ve "need to" yapılarının farkları, soru halleri ve olumsuzlarındaki kritik anlam değişimi.',
      rows: [
        ['Must:', 'As a manager, I must set a good example for my team. (İçsel/Güçlü)'],
        ['Have/Has to:', 'We have to comply with the regulations, and she has to sign the form.'],
        ['Zorunda Değil:', 'You don\'t have to work tomorrow; it is a public holiday. (Gerek yok)'],
        ['Yasak (Mustn\'t):', 'You mustn\'t share confidential data with outsiders! (Kesinlikle yasak)'],
      ],
      tip: 'Altın Fark: "must" ve "have to" olumluda birbirine çok yakındır (zorunda olmak). Ama olumsuzda tamamen ayrılırlar: don\'t/doesn\'t have to = zorunda değilsin (tercih senin) | mustn\'t = yapmamalısın / yasak!'
    },
    words: [
      {e:'⏰',en:'meet a deadline',tr:'son teslim tarihine yetişmek'},{e:'📋',en:'comply with',tr:'(kurallara) uymak'},{e:'🔒',en:'confidential',tr:'gizli / mahrem'},
      {e:'📜',en:'regulation',tr:'yönetmelik / kural'},{e:'📌',en:'priority',tr:'öncelik'},{e:'🚫',en:'strictly forbidden',tr:'kesinlikle yasak'},
      {e:'✅',en:'optional',tr:'isteğe bağlı / seçmeli'},{e:'⚡',en:'urgent',tr:'acil'}
    ],
    videoId: 'gRj2c61cKI0',
    videoChapters: ['Must vs Have to / Has to','Do/Does ... have to?','Don\'t have to (Gerek Yok)','Mustn\'t (Yasak!)','Need to & Should'],
    quiz: [
      {q:'He ___ travel to Brussels every month because of his position.', opts:['have to','has to','must to'], ans:1},
      {q:'Attendance is optional; you ___ join the webinar if you are busy.', opts:['mustn\'t','don\'t have to','doesn\'t have to'], ans:1},
      {q:'___ your supervisor have to approve every purchase order?', opts:['Must','Does','Has'], ans:1},
    ],
    mission: 'İş ve aile hayatından "must", "have to / has to", "don\'t have to" ve "mustn\'t" içeren 4 gerçek örnek cümle kur.',
    speaking: [
      'We have to meet the project deadline by Friday afternoon.',
      'She has to prepare a detailed financial report every month.',
      'You don\'t have to print the document, but you mustn\'t forget to save a backup.'
    ],
  },
  {
    num: 8, emoji: '🔮', color: '#f1a719',
    title: 'Zorunluluk 2: 4 Ana Zamanda Zorunluluk',
    subtitle: 'Özel Konu 4 • Geçmişte (Had to), Şimdiki (Are having to) ve Gelecekte (Will have to)',
    grammar: {
      rule: 'Geniş: must / have to / has to ➔ Geçmiş: had to (didn\'t have to) ➔ Gelecek: will have to (won\'t have to)',
      explain: '"Must" fiilinin geçmiş ve gelecek zaman çekimi yoktur! Bu yüzden geçmişteki tüm zorunluluklar için "had to", gelecekteki tüm zorunluluklar için "will have to" kullanılır.',
      rows: [
        ['Geçmiş (+):', 'Because of the crisis yesterday, we had to revise our entire plan.'],
        ['Geçmiş (-/?):', 'Did you have to work overtime? — Luckily, I didn\'t have to stay late.'],
        ['Gelecek (+):', 'If demand increases next year, we will have to hire more engineers.'],
        ['Gelecek (-):', 'Once we automate the system, we won\'t have to enter data manually.'],
      ],
      tip: 'Tüm Zamanlarda Zorunluluk Özeti: Şimdi/Geniş: must / have to / has to | Şu an süreç: am/is/are having to | Geçmiş: had to / didn\'t have to | Gelecek: will have to / won\'t have to!'
    },
    words: [
      {e:'📝',en:'revise',tr:'gözden geçirip düzeltmek'},{e:'💼',en:'overtime',tr:'fazla mesai'},{e:'👨‍💻',en:'hire',tr:'işe almak'},
      {e:'🤖',en:'automate',tr:'otomatikleştirmek'},{e:'⏸️',en:'postpone',tr:'ertelemek'},{e:'🔄',en:'reschedule',tr:'yeniden planlamak'},
      {e:'🍀',en:'fortunately',tr:'neyse ki'},{e:'🌧️',en:'due to',tr:'-den dolayı / nedeniyle'}
    ],
    videoId: 'LCyGPZ7RPHE',
    videoChapters: ['Must\'ın Geçmişi: Had to','Didn\'t have to & Did you have to?','Gelecek: Will have to','Won\'t have to','4 Zamanda Zorunluluk Tablosu'],
    quiz: [
      {q:'Due to the flight cancellation last night, we ___ stay at a hotel.', opts:['must','had to','have to'], ans:1},
      {q:'Next quarter, all suppliers ___ comply with the new environmental standards.', opts:['had to','will have to','having to'], ans:1},
      {q:'___ you have to pay a penalty when you canceled the reservation yesterday?', opts:['Did','Had','Must'], ans:0},
    ],
    mission: 'Bugün yapmak zorunda olduğun (have to), geçen hafta yapmak zorunda kaldığın (had to) ve gelecek ay yapmak zorunda olacağın (will have to) şeyleri anlat.',
    speaking: [
      'Yesterday we had to postpone the meeting due to an urgent technical issue.',
      'Fortunately, we didn\'t have to change our core strategy.',
      'Next month, I will have to renew my passport before our business trip.'
    ],
  },
  {
    num: 9, emoji: '⚡', color: '#2089d8',
    title: 'Geniş Zaman vs Şimdiki Zaman (İleri Düzey)',
    subtitle: 'Zaman Karşılaştırması 1 • Kalıcı Düzen (Simple) vs Geçici Projeler (Continuous)',
    grammar: {
      rule: 'Normally / Usually (V1/Vs & have to) vs Currently / This Week (am/is/are V-ing)',
      explain: 'Geniş Zaman ve Şimdiki Zamanı aynı cümlede karşılaştırarak kalıcı görevlerimiz ile şu anki geçici projelerimizi ve zorunluluklarımızı anlatma.',
      rows: [
        ['Karşılaştırma:', 'Normally I manage local operations, but this month I am leading a global project.'],
        ['Zorunlulukla:', 'He usually works at the headquarters, but today he has to work remotely.'],
        ['Durum Fiilleri:', 'I understand your point, and I believe we are making the right choice.'],
        ['Soru:', 'What do you usually do vs. What are you working on right now?'],
      ],
      tip: 'Düşünce ve sahiplik bildiren fiiller (know, believe, understand, own, need, prefer, belong) Şimdiki Zamanda bile -ing almaz, Geniş Zamanla kurulur!'
    },
    words: [
      {e:'🏛️',en:'headquarters',tr:'merkez ofis / genel merkez'},{e:'🏠',en:'remotely',tr:'uzaktan'},{e:'⏳',en:'temporarily',tr:'geçici olarak'},
      {e:'🎯',en:'prefer',tr:'tercih etmek'},{e:'🤝',en:'belong to',tr:'-e ait olmak'},{e:'🔥',en:'deal with',tr:'başa çıkmak / ilgilenmek'},
      {e:'🔄',en:'adapt to',tr:'uyum sağlamak'},{e:'📋',en:'coordinate',tr:'koordine etmek'}
    ],
    videoId: 'WpF5sMPNjPs',
    videoChapters: ['Normally vs Currently','State Verbs (Durum Fiilleri)','Rutin + Anlık Zorunluluk','İki Zamanı Bağlama','Pratik'],
    quiz: [
      {q:'Normally our team ___ on software, but this week we ___ testing hardware.', opts:['works / are','is working / work','work / do'], ans:0},
      {q:'Right now I ___ what you mean, and I ___ with your proposal.', opts:['am understanding / agree','understand / agree','understand / am agreeing'], ans:1},
      {q:'She usually drives to work, but today she ___ take the metro because her car is in the service.', opts:['is having','has to','had to'], ans:1},
    ],
    mission: '"Normally I..., but this week I am... because I have to..." kalıbıyla kendi hayatından 3 cümle kur.',
    speaking: [
      'Normally I finish work at 6 PM, but this week I am working late because we have to complete an audit.',
      'I prefer face-to-face meetings, but nowadays we are conducting most meetings online.',
      'What projects are you currently focusing on?'
    ],
  },
  {
    num: 10, emoji: '🎬', color: '#8067df',
    title: 'Geçmişte Süreçler: Past Simple & Continuous',
    subtitle: 'Zaman Karşılaştırması 2 • Geçmişte Devam Eden Eylemler (Was/Were V-ing) & Kesintiler',
    grammar: {
      rule: 'While + Past Continuous (was/were V-ing), Past Simple (V2) ➔ so + had to + V1',
      explain: 'Geçmişte devam etmekte olan bir süreci (was/were V-ing), o sırada meydana gelen bir olayı (V2) ve sonucunda doğan zorunluluğu (had to) birleştirir.',
      rows: [
        ['While + Süreç:', 'While we were negotiating the contract, the client requested a revision.'],
        ['When + Olay:', 'I was presenting the financial results when the projector suddenly stopped working.'],
        ['Sonuç (Had to):', 'Because the system crashed while I was working, I had to restart the server.'],
        ['Soru:', 'What were you doing when the power went out yesterday?'],
      ],
      tip: 'While + uzun süren eylem (was/were V-ing) | When + kısa/kesen eylem (V2). Ardından sonucu bağlamak için ", so we had to..." harika bir ileri seviye kalıptır!'
    },
    words: [
      {e:'💻',en:'crash',tr:'çökmek / arızalanmak'},{e:'🗣️',en:'interrupt',tr:'kesintiye uğratmak / bölmek'},{e:'🔔',en:'notice',tr:'fark etmek'},
      {e:'📊',en:'presentation',tr:'sunum'},{e:'🚨',en:'power outage',tr:'elektrik kesintisi'},{e:'⏳',en:'meanwhile',tr:'bu sırada / o esnada'},
      {e:'⚡',en:'suddenly',tr:'aniden'},{e:'🛠️',en:'backup',tr:'yedek / yedekleme'}
    ],
    videoId: 'n7MLTV7UZPY',
    videoChapters: ['Was / Were + V-ing','When vs While Kullanımı','Süreç + Kesinti + Had to','Geçmişte Olay Anlatımı','Pratik'],
    quiz: [
      {q:'While I ___ the report last night, I noticed a major calculation error.', opts:['checked','was checking','am checking'], ans:1},
      {q:'We were discussing the new budget when the director ___ into the room.', opts:['walked','was walking','walks'], ans:0},
      {q:'It started snowing heavily while we were driving, so we ___ stop at a rest area.', opts:['must','have to','had to'], ans:2},
    ],
    mission: '"While I was..., ... happened, so I had to..." kalıbıyla geçmişte yaşadığın bir olayı anlat.',
    speaking: [
      'While we were testing the prototype, we discovered a way to reduce costs.',
      'I was travelling to Ankara when I received the good news.',
      'Because the flight was delayed while we were waiting, we had to reschedule our hotel check-in.'
    ],
  },
  {
    num: 11, emoji: '🔗', color: '#ff9638',
    title: '4 Ana Zamanda Bağlaçlar & Phrasal Verbs',
    subtitle: 'İleri Akıcılık • Although, Despite, However, As soon as & Deyimsel Fiiller',
    grammar: {
      rule: 'Although / Despite / Therefore / As soon as / Until + 4 Ana Zaman & Phrasal Verbs',
      explain: '4 ana zamanı, "have/has" ve "must/have to" cümlelerini ileri bağlaçlar ve iş/günlük hayat Phrasal Verb\'leri ile birbirine bağlayarak uzun ve doğal cümleler kurma.',
      rows: [
        ['Zıtlık:', 'Although the market was tough last year, we achieved our goals.'],
        ['İsimle Zıtlık:', 'Despite having a tight budget, we are developing an innovative product.'],
        ['Zaman Bağlacı:', 'As soon as we figure out the problem, we will inform the team.'],
        ['Sonuç:', 'We ran out of time yesterday; therefore, we had to put off the decision.'],
      ],
      tip: 'Although + Cümle | Despite + İsim / V-ing (Despite having...) | As soon as / Until / When + Geniş Zaman ➔ Gelecek Zaman (will / will have to).'
    },
    words: [
      {e:'⚖️',en:'although / even though',tr:'-e rağmen (+cümle)'},{e:'🌧️',en:'despite / in spite of',tr:'-e rağmen (+isim/V-ing)'},{e:'📈',en:'therefore',tr:'bu nedenle / dolayısıyla'},
      {e:'🧩',en:'figure out',tr:'çözmek / anlamak'},{e:'⏳',en:'put off',tr:'ertelemek'},{e:'🔬',en:'carry out',tr:'yürütmek / gerçekleştirmek'},
      {e:'⛽',en:'run out of',tr:'tükenmek / bitmek'},{e:'⚡',en:'as soon as',tr:'-ir -mez / yapar yapmaz'}
    ],
    videoId: 'LCyGPZ7RPHE',
    videoChapters: ['Although vs Despite','However & Therefore','As soon as & Until (Gelecek Bağlantısı)','En Önemli Phrasal Verbs','Pratik'],
    quiz: [
      {q:'___ the heavy traffic this morning, I arrived at the meeting on time.', opts:['Although','Despite','However'], ans:1},
      {q:'As soon as the manager ___ the contract, we will start the project.', opts:['will sign','signs','signed'], ans:1},
      {q:'We need to ___ out a practical solution before we run out of time.', opts:['figure','put','call'], ans:0},
    ],
    mission: 'Although, Despite, As soon as ve öğrendiğin Phrasal Verb\'leri 4 ana zamanla birleştirerek 4 cümle kur.',
    speaking: [
      'Despite facing fierce competition, our company continues to grow every year.',
      'We had to call off the outdoor event yesterday because of the storm.',
      'As soon as I finish this report, I will have a look at your presentation.'
    ],
  },
  {
    num: 12, emoji: '🏆', color: '#f1a719',
    title: 'Büyük Final: 4 Zaman + Have + Zorunluluk Sentezi',
    subtitle: 'Ustalık Haftası (B2-C1) • Geniş, Şimdiki, Geçmiş ve Gelecek Zaman + Have/Has & Must/Have to',
    grammar: {
      rule: 'Geniş (V1/Vs, have/has, must/have to) + Şimdiki (am/is/are V-ing) + Geçmiş (V2, had, had to) + Gelecek (will/going to, will have, will have to)',
      explain: '12 hafta boyunca adım adım öğrendiğimiz 4 ana zamanı, tüm zamanlardaki "have" (sahiplik) ve "must / have to" (zorunluluk) yapılarını tek bir akıcı konuşmada birleştiriyoruz!',
      rows: [
        ['1. Geniş:', 'Every day I manage key operations, I have great responsibility, and I must make clear decisions.'],
        ['2. Şimdiki:', 'Currently, we are expanding our team and implementing new technologies.'],
        ['3. Geçmiş:', 'Last year, we had a limited budget and had to overcome tough challenges, but we succeeded.'],
        ['4. Gelecek:', 'Next year, we will launch new services, we will have stronger partnerships, and we won\'t have to worry about capacity!'],
      ],
      tip: '🏆 Altın Tablo: Geniş: V1/Vs • have/has • must/have to | Şimdiki: am/is/are V-ing | Geçmiş: V2 • had • had to | Gelecek: will/going to • will have • will have to!'
    },
    words: [
      {e:'🎯',en:'from my perspective',tr:'benim bakış açımdan'},{e:'➕',en:'furthermore',tr:'dahası / üstelik'},{e:'🤝',en:'reach a consensus',tr:'uzlaşmaya varmak'},
      {e:'🌍',en:'sustainable',tr:'sürdürülebilir'},{e:'🏅',en:'accomplishment',tr:'başarı'},{e:'📌',en:'to sum up',tr:'özetlemek gerekirse'},
      {e:'⚡',en:'compelling',tr:'ikna edici / güçlü'},{e:'🚀',en:'milestone',tr:'dönüm noktası'}
    ],
    videoId: 'LCyGPZ7RPHE',
    videoChapters: ['4 Ana Zaman Tam Tablo','4 Zamanda Have / Has / Had / Will have','4 Zamanda Must / Have to / Had to / Will have to','Akıcı Sunum & Bağlaçlar','Mezuniyet Konuşması!'],
    quiz: [
      {q:'Last month we ___ work overtime, but next month we ___ have to stay late because we hired new staff.', opts:['had to / won\'t','have to / didn\'t','must / aren\'t'], ans:0},
      {q:'Normally our company ___ in the local market, but currently we ___ expanding into Europe.', opts:['operates / are','is operating / operate','operate / is'], ans:0},
      {q:'Last year we didn\'t ___ enough resources, but next year we ___ a much larger budget.', opts:['had / will have','have / will have','have / had'], ans:1},
    ],
    mission: '🏆 BÜYÜK FİNAL: Geniş, Şimdiki, Geçmiş ve Gelecek zamanın dördünü, "have/has/had/will have" ve "must/have to/had to/will have to" kalıplarını içeren 2 dakikalık bir konuşma yap!',
    speaking: [
      'Every day I have important responsibilities at work, and I must manage my time efficiently.',
      'Right now, Kerem and I are practicing English together and making remarkable progress.',
      'When we started this program, we had to review the core rules, and we practiced consistently.',
      'In the future, we will speak English effortlessly, and we will have great confidence anywhere in the world!'
    ],
  }
];

function getWeeks() {
  return (typeof state !== 'undefined' && state.currentUser === 'Baba') ? WEEKS_BABA : WEEKS_KEREM;
}

// ============================================================
// SIDEBAR & HOME DYNAMIC RENDERERS
// ============================================================
let activeWeekNum = 1;
let activeWeekTab = 0; // 0=grammar,1=words,2=video,3=quiz,4=speaking,5=mission

function renderSidebarWeeks() {
  const listEl = document.getElementById('sidebarWeekList');
  if (!listEl) return;
  const weeks = getWeeks();
  const isBaba = state.currentUser === 'Baba';
  const headerEl = document.getElementById('sidebarProgramTitle');
  if (headerEl) {
    headerEl.innerHTML = isBaba
      ? '👨 BABA • ORTA & İLERİ (12 HAFTA)'
      : '👦 KEREM • BAŞLANGIÇ & ORTA (12 HAFTA)';
  }
  listEl.innerHTML = weeks.map(w => `
    <button class="week-btn ${w.num === activeWeekNum ? 'active' : ''}" onclick="openWeek(${w.num})">
      <span>${w.emoji}</span>
      <div style="line-height:1.25;">
        <div>Hafta ${w.num} — ${w.title}</div>
        <small style="font-size:11px;font-weight:700;opacity:0.75;">${w.subtitle}</small>
      </div>
    </button>
  `).join('');
}

function renderHomeContent() {
  const weeks = getWeeks();
  const w = weeks[0];
  const isBaba = state.currentUser === 'Baba';

  // Update Home Grammar Card
  const homeGrammarEl = document.getElementById('homeGrammarCard');
  if (homeGrammarEl) {
    homeGrammarEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <h3 style="margin:0;">📖 ${isBaba ? 'Hafta 1: Geniş Zaman (Present Simple • B1-B2)' : 'Hafta 1: Konu Anlatımı (A1-A2)'}</h3>
        <span style="background:${isBaba ? 'var(--navy)' : 'var(--green)'};color:#fff;padding:4px 10px;border-radius:10px;font-size:11px;font-weight:900;">
          ${isBaba ? '👨 Baba Seviyesi' : '👦 Kerem Seviyesi'}
        </span>
      </div>
      <div style="background:var(--navy);color:#fff;padding:10px 14px;border-radius:12px;font-weight:900;font-size:15px;margin-bottom:10px;">
        ${w.grammar.rule}
      </div>
      <p style="font-size:13px;font-weight:700;color:#68809f;margin:0 0 10px;">${w.grammar.explain}</p>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${w.grammar.rows.map(r => `
          <div style="background:var(--sky);padding:7px 12px;border-radius:10px;font-weight:800;font-size:14px;color:var(--navy);">
            ${r.join(' ')}
          </div>
        `).join('')}
      </div>
      <div style="background:#fff6c7;border-radius:15px;padding:12px;margin-top:12px;display:flex;gap:12px;align-items:center;">
        <div class="nune-avatar" style="width:52px;height:52px;margin:0;flex-shrink:0;border-width:3px;"></div>
        <div>
          <b style="color:var(--orange);font-size:13px;">💡 Nune'nin Notu</b>
          <p style="margin:3px 0 0;font-size:12px;font-weight:700;">${w.grammar.tip}</p>
        </div>
      </div>
    `;
  }

  // Update Home Words Card
  const homeWordsEl = document.getElementById('homeWordsGrid');
  if (homeWordsEl) {
    homeWordsEl.innerHTML = w.words.map(word => `
      <div class="word-tile" onclick="speakText('${word.en.replace(/'/g, "\\'")}')">
        <span>${word.e}</span>
        <b>${word.en}</b>
        <small>${word.tr}</small>
      </div>
    `).join('');
  }
}

// ============================================================
// HAFTA PANEL RENDERER
// ============================================================
function openWeek(num) {
  activeWeekNum = num;
  activeWeekTab = 0;
  const weeks = getWeeks();
  const w = weeks[num - 1];
  // Show week panel
  document.querySelectorAll('.n-panel').forEach(p => p.style.display = 'none');
  let panel = document.getElementById('pnl-week');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'pnl-week';
    panel.className = 'n-panel';
    document.querySelector('.dashboard').appendChild(panel);
  }
  panel.style.display = 'block';

  // Sidebar highlight
  document.querySelectorAll('.week-btn').forEach((b, i) => {
    const isAct = i === num - 1;
    b.classList.toggle('active', isAct);
    if (isAct) b.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));

  panel.innerHTML = buildWeekHTML(w);
  showWeekTab(0, w);
}

function buildWeekHTML(w) {
  const isBaba = state.currentUser === 'Baba';
  const prevBtn = w.num > 1 ? `<button onclick="openWeek(${w.num-1})" style="background:var(--sky);color:var(--navy);border:2px solid var(--border);padding:8px 14px;border-radius:12px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">← Hafta ${w.num-1}</button>` : '';
  const nextBtn = w.num < 12 ? `<button onclick="openWeek(${w.num+1})" style="background:var(--blue);color:#fff;border:none;padding:8px 14px;border-radius:12px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">Hafta ${w.num+1} →</button>` : '';
  return `
  <div style="background:#fff;border-radius:25px;padding:25px;box-shadow:var(--shadow);border:3px solid #e3f0f7;">
    <!-- Week Header -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:10px;">
      <div style="display:flex;align-items:center;gap:15px;">
        <div style="background:${w.color};color:#fff;width:60px;height:60px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:30px;box-shadow:0 5px 15px rgba(0,0,0,0.15);">${w.emoji}</div>
        <div>
          <div style="display:flex;gap:8px;align-items:center;">
            <span style="font-size:13px;font-weight:800;color:#68809f;">HAFTA ${w.num} / 12</span>
            <span style="background:${isBaba?'var(--navy)':'var(--green)'};color:#fff;padding:2px 8px;border-radius:8px;font-size:11px;font-weight:900;">
              ${isBaba ? '👨 Baba (Orta-İleri)' : '👦 Kerem (Başlangıç-Orta)'}
            </span>
          </div>
          <h2 style="margin:3px 0 0;color:var(--navy);font-size:22px;">${w.title}</h2>
          <div style="font-size:13px;color:#68809f;">${w.subtitle}</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
        ${prevBtn}
        ${nextBtn}
        <button onclick="showPanel('home',document.querySelector('.nav-tabs button'))" 
          style="background:var(--sky);color:var(--navy);border:none;padding:10px 18px;border-radius:15px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">
          🏠 Ana Ekran
        </button>
      </div>
    </div>

    <!-- Sub-tabs -->
    <div id="weekTabs" style="display:flex;gap:8px;overflow-x:auto;margin-bottom:20px;padding-bottom:4px;">
      <button class="wtab active" onclick="showWeekTab(0, getWeeks()[${w.num-1}])">📖 Konu</button>
      <button class="wtab" onclick="showWeekTab(1, getWeeks()[${w.num-1}])">🔤 Kelimeler</button>
      <button class="wtab" onclick="showWeekTab(2, getWeeks()[${w.num-1}])">📺 Video</button>
      <button class="wtab" onclick="showWeekTab(3, getWeeks()[${w.num-1}])">🧩 Quiz</button>
      <button class="wtab" onclick="showWeekTab(4, getWeeks()[${w.num-1}])">🗣️ Konuşma</button>
      <button class="wtab" onclick="showWeekTab(5, getWeeks()[${w.num-1}])">🎯 Görev</button>
    </div>

    <!-- Content area -->
    <div id="weekContent"></div>
  </div>`;
}

function showWeekTab(idx, w) {
  activeWeekTab = idx;
  document.querySelectorAll('.wtab').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  const area = document.getElementById('weekContent');
  if (!area) return;

  // Pause any currently playing videos first
  document.querySelectorAll('video').forEach(v => { v.pause(); v.loop = false; });

  if (idx === 0) area.innerHTML = buildGrammar(w);
  else if (idx === 1) area.innerHTML = buildWords(w);
  else if (idx === 2) area.innerHTML = buildVideo(w);
  else if (idx === 3) area.innerHTML = buildQuiz(w);
  else if (idx === 4) area.innerHTML = buildSpeaking(w);
  else if (idx === 5) area.innerHTML = buildMission(w);

  // Auto-start unit video once and stop when finished
  const vid = area.querySelector('video');
  if (vid) {
    vid.loop = false;
    vid.currentTime = 0;
    vid.play().catch(() => {});
  }
}

function buildGrammar(w) {
  const g = w.grammar;
  const colors = ['var(--green)', 'var(--blue)', 'var(--orange)', 'var(--purple)', 'var(--pink)'];
  const sampleSentence = w.grammar.rows[0].join(' ').replace(/'/g, "\\'");
  const videoBlock = w.localVideo ? `
    <div style="margin-bottom:20px;background:#000;border-radius:20px;overflow:hidden;border:4px solid var(--orange);box-shadow:0 8px 24px rgba(0,0,0,0.12);">
      <video src="${w.localVideo}" controls autoplay playsinline style="width:100%;max-height:360px;object-fit:contain;display:block;background:#000;"></video>
    </div>
  ` : '';
  return `
  ${videoBlock}
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
    <div>
      <h3 style="color:var(--navy);margin-top:0;">📐 Kural</h3>
      <div style="background:var(--navy);color:#fff;padding:15px 20px;border-radius:15px;font-size:20px;font-weight:900;margin-bottom:15px;">${g.rule}</div>
      <p style="font-weight:700;color:#68809f;">${g.explain}</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:15px;">
        ${g.rows.map((row, ri) => `
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
            ${row.map((cell, ci) => cell ? `<span style="background:${ci===0?'var(--sky)':'#f7fbff'};
              border:2px solid ${ci===1?colors[ri%colors.length]:'var(--border)'};
              color:${ci===1?colors[ri%colors.length]:'var(--navy)'};
              padding:8px 14px;border-radius:12px;font-weight:900;font-size:16px;">${cell}</span>` : '').join('')}
          </div>`).join('')}
      </div>
    </div>
    <div>
      <div style="background:#fff6c7;border-radius:20px;padding:20px;border:2px solid var(--yellow);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div class="nune-avatar" style="width:54px;height:54px;margin:0;flex-shrink:0;border-width:3px;"></div>
          <b style="color:var(--orange);font-size:16px;">💡 Nune'nin Notu</b>
        </div>
        <p style="font-weight:800;margin:0;color:var(--navy);line-height:1.6;">${g.tip}</p>
      </div>
      <div style="margin-top:15px;background:var(--sky);border-radius:20px;padding:20px;border:2px solid var(--border);">
        <b style="color:var(--navy);">🗣️ Hızlı Pratik</b>
        <p style="font-size:14px;font-weight:700;color:#68809f;margin:8px 0;">Bu cümleyi sesli söyle:</p>
        <div style="font-size:20px;font-weight:900;color:var(--navy);">${w.grammar.rows[0].join(' ')}</div>
        <button onclick="speakText('${sampleSentence}')" style="margin-top:10px;background:var(--blue);color:#fff;border:none;padding:8px 15px;border-radius:12px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">🔊 Seslendir</button>
      </div>
    </div>
  </div>`;
}

function buildWords(w) {
  return `
  <div>
    <h3 style="color:var(--navy);margin-top:0;">🔤 Bu Haftanın Kelimeleri</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">
      ${w.words.map(word => `
        <div onclick="speakText('${word.en.replace(/'/g, "\\'")}')" style="background:var(--sky);padding:15px;border-radius:18px;border:2px solid var(--border);text-align:center;cursor:pointer;transition:.2s;"
          onmouseover="this.style.transform='translateY(-4px)';this.style.borderColor='var(--blue)';"
          onmouseout="this.style.transform='';this.style.borderColor='var(--border)';">
          <div style="font-size:38px;margin-bottom:8px;">${word.e}</div>
          <b style="display:block;color:var(--navy);font-size:16px;">${word.en}</b>
          <small style="color:var(--blue);font-size:12px;display:block;margin-top:3px;">${word.tr}</small>
          <span style="display:inline-block;margin-top:8px;background:var(--blue);color:#fff;border-radius:8px;padding:3px 8px;font-size:11px;font-weight:900;">🔊 Dinle</span>
        </div>`).join('')}
    </div>
  </div>`;
}

let activeVideoChapter = 0;
let customWeekVideos = {}; // stores user-selected local blob URLs per week key

function getWeekKey(w) {
  const prefix = (typeof state !== 'undefined' && state.currentUser === 'Baba') ? 'B' : 'K';
  return prefix + '_' + w.num;
}

function buildVideo(w) {
  activeVideoChapter = 0;
  const wkKey = getWeekKey(w);
  const videoSrc = customWeekVideos[wkKey] || w.localVideo || null;
  const ytQuery = encodeURIComponent(`English grammar ${w.title} ${state.currentUser === 'Baba' ? 'intermediate B2' : 'for kids beginners'}`);

  return `
  <div style="display:grid;grid-template-columns:1fr 290px;gap:20px;align-items:start;">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
        <h3 style="color:var(--navy);margin:0;" id="videoStageHeader">📺 1. ${w.videoChapters[0]}</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${videoSrc ? `
            <button id="btnShowMp4" onclick="toggleMp4View(${w.num - 1}, true)" style="background:var(--orange);color:#fff;border:none;padding:6px 12px;border-radius:10px;font-size:12px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">
              🎥 MP4 Video
            </button>
          ` : ''}
          <label style="background:var(--sky);color:var(--navy);border:2px solid var(--border);padding:6px 12px;border-radius:10px;font-size:12px;font-weight:900;cursor:pointer;">
            📂 MP4 Seç
            <input type="file" accept="video/*" style="display:none;" onchange="loadCustomWeekVideo(event, ${w.num - 1})">
          </label>
          <a href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" rel="noopener"
            style="background:#ff0000;color:#fff;text-decoration:none;padding:6px 12px;border-radius:10px;font-size:12px;font-weight:900;display:inline-flex;align-items:center;gap:5px;">
            ▶️ YouTube ↗
          </a>
        </div>
      </div>

      ${videoSrc ? `
        <div id="mp4PlayerBox" style="border-radius:18px;overflow:hidden;border:4px solid var(--orange);aspect-ratio:16/9;background:#000;margin-bottom:12px;">
          <video id="unitVideoPlayer" src="${videoSrc}" controls autoplay playsinline style="width:100%;height:100%;object-fit:contain;display:block;background:#000;"></video>
        </div>
      ` : ''}

      <!-- Interactive Nune Chalkboard Stage (Shown in the main top area when any chapter 2-5 is clicked, or when no MP4 exists) -->
      <div id="interactiveStage" style="display:${videoSrc ? 'none' : 'flex'};background:linear-gradient(135deg,#092d63,#16488f);border-radius:20px;padding:24px;color:#fff;border:4px solid var(--yellow);position:relative;min-height:310px;flex-direction:column;justify-content:space-between;box-shadow:0 10px 25px rgba(9,45,99,0.2);">
        <div id="stageInner">
          ${renderVideoChapterStage(w, 0)}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.18);flex-wrap:wrap;gap:10px;">
          <div style="display:flex;gap:8px;">
            <button onclick="stepVideoChapter(${w.num - 1}, -1)" style="background:rgba(255,255,255,0.15);color:#fff;border:none;padding:8px 14px;border-radius:10px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">◀ Önceki Bölüm</button>
            <button onclick="stepVideoChapter(${w.num - 1}, 1)" style="background:var(--yellow);color:var(--navy);border:none;padding:8px 14px;border-radius:10px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">Sonraki Bölüm ▶</button>
          </div>
          <div style="display:flex;gap:8px;">
            ${videoSrc ? `<button onclick="toggleMp4View(${w.num - 1}, true)" style="background:var(--orange);color:#fff;border:none;padding:8px 14px;border-radius:10px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">🎥 Videoya Dön</button>` : ''}
            <button onclick="speakCurrentChapter(${w.num - 1})" style="background:var(--green);color:#fff;border:none;padding:8px 16px;border-radius:10px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">
              🔊 Tekrar Seslendir
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 style="color:var(--navy);margin-top:0;">📑 Ders Bölümleri (Tıkla & Dinle)</h3>
      <div id="videoChapterList" style="display:flex;flex-direction:column;gap:10px;">
        ${w.videoChapters.map((ch, i) => `
          <div class="vchap-item" onclick="selectVideoChapter(${w.num - 1}, ${i})"
            style="background:${i===0?'#fff6c7':'var(--sky)'};border-radius:12px;padding:12px 15px;display:flex;gap:10px;align-items:center;border:2px solid ${i===0?'var(--yellow)':'var(--border)'};cursor:pointer;transition:.2s;">
            <span class="vchap-icon" style="font-size:18px;color:${i===0?'var(--orange)':'var(--blue)'};">${i===0?'▶️':'📘'}</span>
            <div>
              <b class="vchap-title" style="font-size:13px;color:${i===0?'var(--orange)':'var(--navy)'};">${i+1}. ${ch}</b>
              <div style="font-size:11px;color:#68809f;font-weight:700;">${i===0 && videoSrc ? '🎥 Ana Video / Giriş' : 'Bölüm '+(i+1)+' • Tıkla & Dinle'}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

function toggleMp4View(weekIdx, showMp4) {
  const mp4Box = document.getElementById('mp4PlayerBox');
  const stageBox = document.getElementById('interactiveStage');
  const vid = document.getElementById('unitVideoPlayer');
  if (!mp4Box || !stageBox) return;

  if (showMp4) {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    stageBox.style.display = 'none';
    mp4Box.style.display = 'block';
    if (vid) { vid.currentTime = 0; vid.play().catch(()=>{}); }
  } else {
    if (vid) vid.pause();
    mp4Box.style.display = 'none';
    stageBox.style.display = 'flex';
  }
}

function renderVideoChapterStage(w, chIdx) {
  const chTitle = w.videoChapters[chIdx] || w.title;
  const g = w.grammar;

  if (chIdx === 0) {
    const s0 = g.rows[0].join(' ');
    return `
      <div style="display:flex;gap:16px;align-items:center;">
        <div class="nune-avatar" style="width:74px;height:74px;margin:0;flex-shrink:0;border-width:3px;"></div>
        <div>
          <span style="background:var(--orange);color:#fff;padding:3px 10px;border-radius:8px;font-size:11px;font-weight:900;">BÖLÜM 1 • GİRİŞ & ANA KURAL</span>
          <h3 style="margin:6px 0 4px;font-size:22px;color:var(--yellow);">1. ${chTitle}</h3>
          <p style="margin:0;font-size:14px;opacity:0.95;font-weight:700;">${g.explain}</p>
        </div>
      </div>
      <div style="margin-top:16px;background:rgba(255,255,255,0.12);border-radius:14px;padding:16px 18px;border-left:4px solid var(--yellow);">
        <div style="font-size:12px;color:var(--yellow);font-weight:800;">📐 ANA FORMÜL:</div>
        <div style="font-size:20px;font-weight:900;margin-top:4px;">${g.rule}</div>
        <div style="margin-top:10px;font-size:16px;color:#bde3ff;cursor:pointer;background:rgba(0,0,0,0.2);padding:8px 12px;border-radius:10px;display:inline-block;" onclick="speakText('${s0.replace(/'/g, "\\'")}')">
          🔊 Örnek: <b>"${s0}"</b> (Dinlemek için tıkla)
        </div>
      </div>`;
  } else if (chIdx === 1) {
    return `
      <div>
        <span style="background:var(--blue);color:#fff;padding:3px 10px;border-radius:8px;font-size:11px;font-weight:900;">BÖLÜM 2 • CÜMLE YAPISI & ÖRNEKLER</span>
        <h3 style="margin:6px 0 12px;font-size:22px;color:var(--yellow);">2. ${chTitle}</h3>
        <p style="margin:0 0 12px;font-size:14px;color:#bde3ff;font-weight:700;">Cümlelerin nasıl kurulduğunu incele ve üstüne tıklayarak telaffuzunu dinle:</p>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${g.rows.map(r => {
            const full = r.join(' ');
            return `<div onclick="speakText('${full.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.14);padding:12px 16px;border-radius:12px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;border:1px solid rgba(255,255,255,0.2);">
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                ${r.map((part, pi) => part ? `<span style="background:${pi===0?'rgba(53,185,111,0.35)':pi===1?'rgba(255,150,56,0.4)':'rgba(255,255,255,0.15)'};padding:4px 10px;border-radius:8px;font-size:16px;font-weight:900;">${part}</span>` : '').join('')}
              </div>
              <span style="background:var(--blue);padding:6px 12px;border-radius:8px;font-size:12px;font-weight:900;white-space:nowrap;">🔊 Dinle</span>
            </div>`;
          }).join('')}
        </div>
      </div>`;
  } else if (chIdx === 2) {
    const firstHalfWords = w.words.slice(0, 4);
    return `
      <div>
        <div style="display:flex;gap:14px;align-items:center;margin-bottom:12px;">
          <div class="nune-avatar" style="width:60px;height:60px;margin:0;flex-shrink:0;border-width:3px;"></div>
          <div>
            <span style="background:var(--green);color:#fff;padding:3px 10px;border-radius:8px;font-size:11px;font-weight:900;">BÖLÜM 3 • KURAL & KELİMELER</span>
            <h3 style="margin:5px 0 0;font-size:22px;color:var(--yellow);">3. ${chTitle}</h3>
          </div>
        </div>
        <div style="background:rgba(255,216,61,0.18);border:2px solid var(--yellow);border-radius:14px;padding:12px 15px;font-size:15px;font-weight:800;line-height:1.5;margin-bottom:12px;">
          💡 ${g.tip}
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
          ${firstHalfWords.map(wd => `
            <div onclick="speakText('${wd.en.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.12);padding:8px 12px;border-radius:10px;display:flex;align-items:center;gap:10px;cursor:pointer;">
              <span style="font-size:24px;">${wd.e}</span>
              <div><b style="font-size:15px;">${wd.en}</b> <small style="color:#bde3ff;">(${wd.tr}) 🔊</small></div>
            </div>`).join('')}
        </div>
      </div>`;
  } else if (chIdx === 3) {
    const secondHalfWords = w.words.slice(4, 8);
    return `
      <div>
        <span style="background:var(--purple);color:#fff;padding:3px 10px;border-radius:8px;font-size:11px;font-weight:900;">BÖLÜM 4 • YENİ KELİMELER & ÖRNEKLER</span>
        <h3 style="margin:6px 0 12px;font-size:22px;color:var(--yellow);">4. ${chTitle}</h3>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:12px;">
          ${secondHalfWords.map(wd => `
            <div onclick="speakText('${wd.en.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.14);padding:10px 14px;border-radius:12px;display:flex;align-items:center;gap:10px;cursor:pointer;">
              <span style="font-size:28px;">${wd.e}</span>
              <div>
                <b style="font-size:16px;display:block;">${wd.en}</b>
                <small style="color:#bde3ff;font-size:12px;">${wd.tr} 🔊</small>
              </div>
            </div>`).join('')}
        </div>
        <div style="background:rgba(255,255,255,0.1);padding:10px 14px;border-radius:12px;font-size:14px;font-weight:800;">
          🎯 Kelimelerin üzerine tıklayarak telaffuzlarını dinle ve yüksek sesle tekrar et!
        </div>
      </div>`;
  } else {
    return `
      <div>
        <span style="background:var(--pink);color:#fff;padding:3px 10px;border-radius:8px;font-size:11px;font-weight:900;">BÖLÜM 5 • KONUŞMA & PRATİK ZAMANI</span>
        <h3 style="margin:6px 0 10px;font-size:22px;color:var(--yellow);">5. ${chTitle}</h3>
        <p style="margin:0 0 10px;font-size:13px;color:#bde3ff;font-weight:700;">Şimdi öğrendiklerimizi yüksek sesle söyleme zamanı:</p>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${w.speaking.map(s => `
            <div onclick="speakText('${s.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.14);padding:11px 15px;border-radius:12px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
              <span style="font-size:15px;font-weight:800;">🗣️ "${s}"</span>
              <span style="background:var(--green);padding:5px 12px;border-radius:8px;font-size:12px;font-weight:900;">🔊 Dinle & Tekrarla</span>
            </div>`).join('')}
        </div>
      </div>`;
  }
}

function selectVideoChapter(weekIdx, chIdx) {
  activeVideoChapter = chIdx;
  const w = getWeeks()[weekIdx];
  const headerEl = document.getElementById('videoStageHeader');
  if (headerEl) headerEl.textContent = `📺 ${chIdx + 1}. ${w.videoChapters[chIdx]}`;

  // Always show the interactive stage in the main top area when a chapter is clicked
  // (Or if chapter 0 is clicked and user wants MP4, they also have the MP4 button, but showing the interactive stage on chapter click guarantees immediate visual + audio feedback!)
  toggleMp4View(weekIdx, false);

  const stageInner = document.getElementById('stageInner');
  if (stageInner) stageInner.innerHTML = renderVideoChapterStage(w, chIdx);

  document.querySelectorAll('.vchap-item').forEach((el, i) => {
    const isAct = i === chIdx;
    el.style.background = isAct ? '#fff6c7' : 'var(--sky)';
    el.style.borderColor = isAct ? 'var(--yellow)' : 'var(--border)';
    const icon = el.querySelector('.vchap-icon');
    const title = el.querySelector('.vchap-title');
    if (icon) { icon.textContent = isAct ? '▶️' : '📘'; icon.style.color = isAct ? 'var(--orange)' : 'var(--blue)'; }
    if (title) { title.style.color = isAct ? 'var(--orange)' : 'var(--navy)'; }
  });

  speakCurrentChapter(weekIdx);
}

function stepVideoChapter(weekIdx, delta) {
  const w = getWeeks()[weekIdx];
  let next = activeVideoChapter + delta;
  if (next < 0) next = 0;
  if (next >= w.videoChapters.length) next = 0;
  selectVideoChapter(weekIdx, next);
}

function speakCurrentChapter(weekIdx) {
  const w = getWeeks()[weekIdx];
  if (activeVideoChapter === 0) speakText(w.grammar.rows[0].join(' '));
  else if (activeVideoChapter === 1) speakText(w.grammar.rows.map(r => r.join(' ')).join('. '));
  else if (activeVideoChapter === 2) speakText(w.words.slice(0, 4).map(x => x.en).join(', '));
  else if (activeVideoChapter === 3) speakText(w.words.slice(4, 8).map(x => x.en).join(', '));
  else speakText(w.speaking.join('. '));
}

function loadCustomWeekVideo(event, weekIdx) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const w = getWeeks()[weekIdx];
  customWeekVideos[getWeekKey(w)] = URL.createObjectURL(file);
  showWeekTab(2, w);
}

let weekQuizIndex = 0;
let weekQuizScore = 0;
let weekQuizNetXp = 0;

function buildQuiz(w) {
  weekQuizIndex = 0; weekQuizScore = 0; weekQuizNetXp = 0;
  return `
  <div>
    <h3 style="color:var(--navy);margin-top:0;">🧩 Mini Quiz — ${w.quiz.length} Soru</h3>
    <div id="quizArea">${renderWeekQuestion(w, 0)}</div>
  </div>`;
}

function renderWeekQuestion(w, idx) {
  if (idx >= w.quiz.length) {
    const xpSign = weekQuizNetXp >= 0 ? '+' + weekQuizNetXp : weekQuizNetXp;
    return `<div style="text-align:center;padding:30px;">
      <div style="font-size:70px;">${weekQuizScore === w.quiz.length ? '🏆' : weekQuizScore >= w.quiz.length/2 ? '🎉' : '💪'}</div>
      <h2 style="color:${weekQuizNetXp >= 0 ? 'var(--green)' : 'var(--pink)'};">${weekQuizScore}/${w.quiz.length} Doğru! (${xpSign} XP)</h2>
      <button onclick="showWeekTab(3, getWeeks()[${w.num-1}])" style="background:var(--blue);color:#fff;border:none;padding:12px 25px;border-radius:15px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;margin-top:15px;">🔄 Tekrar Dene</button>
      <button onclick="showWeekTab(4, getWeeks()[${w.num-1}])" style="background:var(--green);color:#fff;border:none;padding:12px 25px;border-radius:15px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;margin-top:15px;margin-left:10px;">🗣️ Konuşmaya Geç</button>
    </div>`;
  }
  const q = w.quiz[idx];
  return `
  <div style="background:var(--sky);border-radius:20px;padding:25px;border:2px solid var(--border);">
    <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
      <span style="background:var(--blue);color:#fff;padding:5px 12px;border-radius:10px;font-weight:900;font-size:13px;">Soru ${idx+1}/${w.quiz.length}</span>
      <span style="font-weight:900;color:var(--green);">✅ ${weekQuizScore} Doğru (${weekQuizNetXp >= 0 ? '+' + weekQuizNetXp : weekQuizNetXp} XP)</span>
    </div>
    <p style="font-size:20px;font-weight:900;color:var(--navy);">${q.q}</p>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:15px;">
      ${q.opts.map((opt, oi) => `
        <button onclick="answerWeekQuiz(${oi}, ${q.ans}, ${w.num-1})"
          style="background:#fff;border:2px solid var(--border);padding:14px 18px;border-radius:15px;font-weight:800;font-size:16px;text-align:left;cursor:pointer;transition:.2s;font-family:'Inter',sans-serif;"
          onmouseover="this.style.borderColor='var(--blue)';this.style.background='#eef7fc';"
          onmouseout="this.style.borderColor='var(--border)';this.style.background='#fff';">
          ${String.fromCharCode(65+oi)}. ${opt}
        </button>`).join('')}
    </div>
  </div>`;
}

function answerWeekQuiz(selected, correct, weekIdx) {
  const w = getWeeks()[weekIdx];
  const q = w.quiz[weekQuizIndex];
  if (selected === correct) {
    weekQuizScore++;
    weekQuizNetXp += 10;
    state.xp[state.currentUser] += 10;
    updateScore();
    if (typeof toast === 'function') toast('Doğru! ⭐ +10 XP');
  } else {
    weekQuizNetXp -= 5;
    state.xp[state.currentUser] -= 5;
    updateScore();
    if (typeof toast === 'function') toast(`Yanlış! Doğrusu: "${q.opts[correct]}" ❌ -5 XP`);
  }
  weekQuizIndex++;
  document.getElementById('quizArea').innerHTML = renderWeekQuestion(w, weekQuizIndex);
}

function buildSpeaking(w) {
  return `
  <div>
    <h3 style="color:var(--navy);margin-top:0;">🗣️ Konuşma Pratiği</h3>
    <div style="background:#fff6c7;border-radius:15px;padding:15px;margin-bottom:20px;border:2px solid var(--yellow);display:flex;gap:12px;align-items:center;">
      <span style="font-size:35px;">👧🏻</span>
      <p style="margin:0;font-weight:800;color:var(--navy);">Aşağıdaki cümleleri önce oku, sonra seslendir, sonra yüksek sesle tekrar et! 🎤</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:15px;">
      ${w.speaking.map((s, i) => `
        <div style="background:#fff;border:2px solid var(--border);border-radius:18px;padding:20px;display:flex;align-items:center;justify-content:space-between;gap:15px;">
          <div>
            <span style="background:var(--blue);color:#fff;border-radius:8px;padding:3px 10px;font-size:12px;font-weight:900;margin-right:10px;">${i+1}</span>
            <b style="font-size:18px;color:var(--navy);">${s}</b>
          </div>
          <button onclick="speakText('${s.replace(/'/g, "\\'")}')" 
            style="background:var(--blue);color:#fff;border:none;padding:10px 15px;border-radius:12px;font-weight:900;cursor:pointer;white-space:nowrap;font-family:'Inter',sans-serif;">🔊</button>
        </div>`).join('')}
    </div>
  </div>`;
}

function buildMission(w) {
  return `
  <div style="text-align:center;">
    <div style="font-size:80px;margin-bottom:15px;">🎯</div>
    <h2 style="color:var(--navy);">Haftalık Görev</h2>
    <div style="background:linear-gradient(135deg,var(--navy),#1a4a8f);color:#fff;border-radius:25px;padding:30px;margin:20px auto;max-width:500px;">
      <div style="font-size:50px;margin-bottom:10px;">${w.emoji}</div>
      <h3 style="margin:0 0 15px;font-size:20px;">${w.title}</h3>
      <p style="font-size:18px;font-weight:800;line-height:1.5;margin:0;color:var(--yellow);">${w.mission}</p>
    </div>
    <div style="display:flex;gap:15px;justify-content:center;flex-wrap:wrap;margin-top:20px;">
      <button onclick="showWeekTab(1,getWeeks()[${w.num-1}])" style="background:var(--green);color:#fff;border:none;padding:12px 20px;border-radius:15px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">🔤 Kelimeleri Çalış</button>
      <button onclick="showWeekTab(3,getWeeks()[${w.num-1}])" style="background:var(--orange);color:#fff;border:none;padding:12px 20px;border-radius:15px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">🧩 Quiz Çöz</button>
      <button onclick="openGame('sb')" style="background:var(--blue);color:#fff;border:none;padding:12px 20px;border-radius:15px;font-weight:900;cursor:pointer;font-family:'Inter',sans-serif;">🚀 Cümle Kur</button>
    </div>
  </div>`;
}
