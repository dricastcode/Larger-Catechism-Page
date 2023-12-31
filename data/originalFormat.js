const originalFormat = [
  {
    id: 1,
    question: "What is the chief and highest end of man?",
    answer:
      "Man’s chief and highest end is to glorify God,[1] and fully to enjoy him forever.[2]",
    proofTexts: ["Rom. 11:36; I Cor. 10:31", "Psa. 73:24-28"],
  },
  {
    id: 2,
    question: "How doth it appear that there is a God?",
    answer:
      "The very light of nature in man, and the works of God, declare plainly that there is a God;[1] but his word and Spirit only do sufficiently and effectually reveal him unto men for their salvation.[2]",
    proofTexts: [
      "Rom. 1:19-20; Psa. 19:1-3; Acts 17:28",
      "I Cor. 2:9-10; II Tim. 3:15-17; Isa 59:21",
    ],
  },
  {
    id: 3,
    question: "What is the word of God?",
    answer:
      "The holy scriptures of the Old and New Testaments are the word of God,[1] the only rule of faith and obedience.[2]",
    proofTexts: [
      "II Tim. 3:16; II Peter 1:19-21",
      "Eph. 2:20; Rev. 22:18-19; Isa. 8:20; Luke 16:29, 31; Gal. 1:8-9; II Tim. 3:15-16",
    ],
  },
  {
    id: 4,
    question: "How doth it appear that the scriptures are the word of God?",
    answer:
      "The scriptures manifest themselves to be the word of God, by their majesty [1] and purity;[2] by the consent of all the parts,[3] and the scope of the whole, which is to give all glory to God;[4] by their light and power to convince and convert sinners, to comfort and build up believers unto salvation:[5] but the Spirit of God bearing witness by and with the scriptures in the heart of man, is alone able fully to persuade it that they are the very word of God.[6]",
    proofTexts: [
      "Hosea 8:12; 1 Cor. 2:6-7, 13; Psa. 119:18, 129",
      "Psa. 12:6; 119:140",
      "Acts 10:43; 26:22",
      "Rom. 3:19, 27",
      "Acts 23:28; Heb. 4:12; James 1:18; Psa. 19:7-9; Rom. 15:4; Acts 20:32",
      "John 16:13-14; 20:31; 1 John 2:20, 27",
    ],
  },
  {
    id: 5,
    question: "What do the scriptures principally teach?",
    answer:
      "The scriptures principally teach, what man is to believe concerning God, and what duty God requires of man.[1]",
    proofTexts: ["2 Tim. 1:13"],
  },
  {
    id: 6,
    question: "What do the scriptures make known of God?",
    answer:
      "The scriptures make known what God is,[1] the persons in the Godhead,[2] his decrees,[3] and the execution of his decrees.[4]",
    proofTexts: [
      "Heb. 11:6",
      "1 John 5:7",
      "Acts 15:14-15, 18",
      "Acts 4:27-28",
    ],
  },
  {
    id: 7,
    question: "What is God?",
    answer:
      "God is a Spirit,[1] in and of himself infinite in being,[2] glory,[3] blessedness,[4] and perfection;[5] all-sufficient,[6] eternal,[7] unchangeable,[8] incomprehensible,[9] everywhere present,[10] almighty,[11] knowing all things,[12] most wise,[13] most holy,[14] most just,[15] most merciful and gracious, long-suffering, and abundant in goodness and truth.[16]",
    proofTexts: [
      "John 4:24",
      "Exod. 3:14; Job 11:7-9",
      "Acts 7:2",
      "I Tim. 6:15",
      "Matt. 5:48",
      "Gen. 17:1",
      "Psa. 90:2",
      "Mal. 3:6; James 1:17",
      "I Kings 8:27",
      "Psa. 139:1-13",
      "Rev. 4:8",
      "Heb. 4:13; Psa 147:5",
      "Rom. 16:27",
      "Isa. 6:3; Rev. 15:4",
      "Deut. 32:4",
      "Exod. 34:6",
    ],
  },
  {
    id: 8,
    question: "Are there more Gods than one?",
    answer: "There is but one only, the living and true God.[1]",
    proofTexts: ["Deut. 6:4; I Cor. 8:4, 6; Jer. 10:10"],
  },
  {
    id: 9,
    question: "How many persons are there in the Godhead?",
    answer:
      "There be three persons in the Godhead, the Father, the Son, and the Holy Ghost; and these three are one true, eternal God, the same in substance, equal in power and glory; although distinguished by their personal properties.[1]",
    proofTexts: ["I John 5:7; Matt. 3:16-17; 28:19; II Cor. 13:14; John 10:30"],
  },
  {
    id: 10,
    question:
      "What are the personal properties of the three persons in the Godhead?",
    answer:
      "It is proper to the Father to beget the Son,[1] and to the Son to be begotten of the Father,[2] and to the Holy Ghost to proceed from the Father and the Son from all eternity.[3]",
    proofTexts: ["Heb. 1:5-6, 8", "John 1:14, 18", "John 15:26; Gal. 4:6"],
  },
  {
    id: 11,
    question:
      "How doth it appear that the Son and the Holy Ghost are God equal with the Father?",
    answer:
      "The scriptures manifest that the Son and the Holy Ghost are God equal with the Father, ascribing unto them such names,[1] attributes,[2] works,[3] and worship,[4] as are proper to God only.",
    proofTexts: [
      "Isa. 6:3, 5, 8; John 12:41; Acts 5:3-4; 28:25; I John 5:20",
      "John 1:1; 2:24-25; Isa. 9:6; I Cor. 2:10-11",
      "Col. 1:16; Gen. 1:2",
      "Matt. 28:19; II Cor. 13:14",
    ],
  },
  {
    id: 12,
    question: "What are the decrees of God?",
    answer:
      "God’s decrees are the wise, free, and holy acts of the counsel of his will,[1] whereby, from all eternity, he hath, for his own glory, unchangeably foreordained: Whatsoever comes to pass in time,[2] especially concerning angels and men.",
    proofTexts: [
      "Eph. 1:11; Rom. 9:14-15, 18; 11:33",
      "Eph. 1:4, 11; Rom. 9:22-23; Psa. 33:11",
    ],
  },
  {
    id: 13,
    question: "What hath God especially decreed concerning angels and men?",
    answer:
      "God, by an eternal and immutable decree, out of his mere love, for the praise of his glorious grace, to be manifested in due time, hath elected some angels to glory;[1] and in Christ hath chosen some men to eternal life, and the means thereof:[2] and also, according to his sovereign power, and the unsearchable counsel of his own will (whereby he extendeth or withholdeth favor as he pleases), hath passed by and foreordained the rest to dishonor and wrath, to be for their sin inflicted, to the praise of the glory of his justice.[3]",
    proofTexts: [
      "I Tim. 5:21",
      "Eph. 1:4-6; II Thess. 2:13-14",
      "Rom. 9:17-18, 21-22; Matt. 11:25-26; II Tim. 2:20; Jude 1:4; I Peter 2:8",
    ],
  },
  {
    id: 14,
    question: "How doth God execute his decrees?",
    answer:
      "God executeth his decrees in the works of creation and providence, according to his infallible foreknowledge, and the free and immutable counsel of his own will.[1]",
    proofTexts: ["Eph. 1:11"],
  },
  {
    id: 15,
    question: "What is the work of creation?",
    answer:
      "The work of creation is that wherein God did in the beginning, by the word of his power, make of nothing the world, and all things therein, for himself, within the space of six days, and all very good.[1]",
    proofTexts: ["Gen. 1:1-31; Heb. 11:3; Prov 16:4"],
  },
  {
    id: 16,
    question: "How did God create angels?",
    answer:
      "God created all the angels[1] spirits,[2] immortal,[3] holy,[4] excelling in knowledge,[5] mighty in power,[6] to execute his commandments, and to praise his name,[7] yet subject to change.[8]",
    proofTexts: [
      "Col. 1:16",
      "Psa. 104:4",
      "Matt. 22:30",
      "Matt. 25:31",
      "II Sam. 14:17; Matt. 24:36",
      "II Thess. 1:7",
      "Psa. 103:20-21",
      "II Peter 2:4",
    ],
  },
  {
    id: 17,
    question: "How did God create man?",
    answer:
      "After God had made all other creatures, he created man male and female;[1] formed the body of the man of the dust of the ground,[2] and the woman of the rib of the man,[3] endued them with living, reasonable, and immortal souls;[4] made them after his own image,[5] in knowledge,[6] righteousness, and holiness;[7] having the law of God written in their hearts,[8] and power to fulfil it,[9] and dominion over the creatures;[10] yet subject to fall.[11]",
    proofTexts: [
      "Gen. 1:27",
      "Gen. 2:7",
      "Gen. 2:22",
      "Gen. 2:7; Job 35:11; Eccl. 12:7; Matt. 10:28; Luke 23:43",
      "Gen. 1:27",
      "Col. 3:10",
      "Eph. 4:24",
      "Rom. 2:14-15",
      "Eccl. 7:29",
      "Gen. 1:28",
      "Gen. 3:6; Eccl. 7:29",
    ],
  },
  {
    id: 18,
    question: "What are God’s works of providence?",
    answer:
      "God’s works of providence are his most holy,[1] wise,[2] and powerful preserving [3] and governing [4] all his creatures; ordering them, and all their actions,[5] to his own glory.[6]",
    proofTexts: [
      "Psa. 145:17",
      "Psa. 104:24; Isa. 28:29",
      "Heb. 1:8",
      "Psa. 103:19",
      "Matt. 10:29-31; Gen. 45:7",
      "Rom. 11:36; Isa. 43:14",
    ],
  },
  {
    id: 19,
    question: "What is God’s providence towards the angels?",
    answer:
      "God by his providence permitted some of the angels, wilfully and irrecoverably, to fall into sin and damnation,[1] limiting and ordering that, and all their sins, to his own glory;[2] and established the rest in holiness and happiness;[3] employing them all,[4] at his pleasure, in the administrations of his power, mercy, and justice.[5]",
    proofTexts: [
      "Jude 1:6; II Peter 2:4; Heb. 2:16; John 8:44",
      "Job 1:12; Matt. 8:31",
      "I Tim. 5:21; Mark 8:38; Heb. 12:22",
      "Psa. 104:4",
      "II Kings 19:35; Heb. 1:14",
    ],
  },
  {
    id: 20,
    question:
      "What was the providence of God toward man in the estate in which he was created?",
    answer:
      "The providence of God toward man in the estate in which he was created, was the placing him in paradise, appointing him to dress it, giving him liberty to eat of the fruit of the earth;[1] putting the creatures under his dominion,[2] and ordaining marriage for his help;[3] affording him communion with himself;[4] instituting the sabbath;[5] entering into a covenant of life with him, upon condition of personal, perfect, and perpetual obedience,[6] of which the tree of life was a pledge;[7] and forbidding to eat of the tree of the knowledge of good and evil, upon the pain of death.[8]",
    proofTexts: [
      "Gen. 2:8, 15-16",
      "Gen. 1:28",
      "Gen. 2:18",
      "Gen. 1:26-29; 3:8",
      "Gen. 2:3",
      "Gal. 3:12; Rom. 10:5",
      "Gen. 2:9",
      "Gen. 2:17",
    ],
  },
  {
    id: 21,
    question:
      "Did man continue in that estate wherein God at first created him?",
    answer:
      "Our first parents being left to the freedom of their own will, through the temptation of Satan, transgressed the commandment of God in eating the forbidden fruit; and thereby fell from the estate of innocency wherein they were created.[1]",
    proofTexts: ["Gen. 3:6-8, 13; Eccl. 7:29; II Cor. 11:3"],
  },
  {
    id: 22,
    question: "Did all mankind fall in that first transgression?",
    answer:
      "The covenant being made with Adam as a public person, not for himself only, but for his posterity, all mankind descending from him by ordinary generation,[1] sinned in him, and fell with him in that first transgression.[2]",
    proofTexts: ["Acts 17:26", "Gen. 2:16-17; Rom. 5:12-20; I Cor. 15:21-22"],
  },
  {
    id: 23,
    question: "Into what estate did the fall bring mankind?",
    answer: "The fall brought mankind into an estate of sin and misery.[1]",
    proofTexts: ["Rom. 3:23; 5:12"],
  },
  {
    id: 24,
    question: "What is sin?",
    answer:
      "Sin is any want of conformity unto, or transgression of, any law of God, given as a rule to the reasonable creature.[1]",
    proofTexts: ["I John 3:4; Gal. 3:10, 12"],
  },
  {
    id: 25,
    question:
      "Wherein consists the sinfulness of that estate whereinto man fell?",
    answer:
      "The sinfulness of that estate whereinto man fell, consisteth in the guilt of Adam’s first sin,[1] the want of that righteousness wherein he was created, and the corruption of his nature, whereby he is utterly indisposed, disabled, and made opposite unto all that is spiritually good, and wholly inclined to all evil, and that continually;[2] which is commonly called Original Sin, and from which do proceed all actual transgressions.[3]",
    proofTexts: [
      "Rom. 5:12, 19",
      "Rom. 3:10-19; 5:6; 8:7-8; Eph. 2:1-3; Gen. 6:5",
      "James 1:14-15; Matt. 15:19",
    ],
  },
  {
    id: 26,
    question:
      "How is original sin conveyed from our first parents unto their posterity?",
    answer:
      "Original sin is conveyed from our first parents unto their posterity by natural generation, so as all that proceed from them in that way are conceived and born in sin.[1]",
    proofTexts: ["Psa. 51:5; Job 14:4; 15:14; John 3:6"],
  },
  {
    id: 27,
    question: "What misery did the fall bring upon mankind?",
    answer:
      "The fall brought upon mankind the loss of communion with God,[1] his displeasure and curse; so as we are by nature children of wrath,[2] bond slaves to Satan,[3] and justly liable to all punishments in this world, and that which is to come.[4]",
    proofTexts: [
      "Gen. 3:8, 10, 24",
      "Eph. 2:2-3",
      "II Tim. 2:26",
      "Gen. 2:17; Lam. 3:39; Rom. 6:23; Matt. 25:41, 46, Jude 1:7",
    ],
  },
  {
    id: 28,
    question: "What are the punishments of sin in this world?",
    answer:
      "The punishments of sin in this world are either inward, as blindness of mind,[1] a reprobate sense,[2] strong delusions,[3] hardness of heart,[4] horror of conscience,[5] and vile affections;[6] or outward, as the curse of God upon the creatures for our sakes,[7] and all other evils that befall us in our bodies, names, estates, relations, and employments;[8] together with death itself.[9]",
    proofTexts: [
      "Eph. 4:18",
      "Rom. 1:28",
      "II Thess. 2:11",
      "Rom. 2:5",
      "Isa. 33:14; Gen. 4:13; Matt. 27:4",
      "Rom. 1:26",
      "Gen. 3:17",
      "Deut. 28:15-18",
      "Rom. 6:21, 23",
    ],
  },
  {
    id: 29,
    question: "What are the punishments of sin in the world to come?",
    answer:
      "The punishments of sin in the world to come, are everlasting separation from the comfortable presence of God, and most grievous torments in soul and body, without intermission, in hell fire forever.[1]",
    proofTexts: ["II Thess. 1:9; Mark 9:43-44, 46, 48; Luke 16:24"],
  },
  {
    id: 30,
    question:
      "Doth God leave all mankind to perish in the estate of sin and misery?",
    answer:
      "God doth not leave all men to perish in the estate of sin and misery,[1] into which they fell by the breach of the first covenant, commonly called the Covenant of Works;[2] but of his mere love and mercy delivereth his elect out of it, and bringeth them into an estate of salvation by the second covenant, commonly called the Covenant of Grace.[3]",
    proofTexts: [
      "I Thess. 5:9",
      "Gal. 3:10, 12",
      "Titus 3:4-7; Gal. 3:21; Rom. 3:20-22",
    ],
  },
  {
    id: 31,
    question: "With whom was the covenant of grace made?",
    answer:
      "The covenant of grace was made with Christ as the second Adam, and in him with all the elect as his seed.[1]",
    proofTexts: ["Gal. 3:16; Rom. 5:15-21; Isa. 53:10-11"],
  },
  {
    id: 32,
    question: "How is the grace of God manifested in the second covenant?",
    answer:
      "The grace of God is manifested in the second covenant, in that he freely provideth and offereth to sinners a Mediator,[1] and life and salvation by him;[2] and requiring faith as the condition to interest them[3] in him, promiseth and giveth his Holy Spirit [4] to all his elect, to work in them that faith,[5] with all other saving graces;[6] and to enable them unto all holy obedience,[7] as the evidence of the truth of their faith [8] and thankfulness to God,[9] and as the way which he hath appointed them to salvation.[10]",
    proofTexts: [
      "Gen. 3:15; Isa. 42:6; John 6:27",
      "I John 5:11-12",
      "John 1:12; 3:16",
      "Prov. 1:23",
      "II Cor. 4:13",
      "Gal. 5:22-23",
      "Ezek. 36:27",
      "James 2:18, 22",
      "II Cor. 5:14-15",
      "Eph. 2:18",
    ],
  },
  {
    id: 33,
    question:
      "Was the covenant of grace always administered after one and the same manner?",
    answer:
      "The covenant of grace was not always administered after the same manner, but the administrations of it under the Old Testament were different from those under the New.[1]",
    proofTexts: ["II Cor. 3:6-9"],
  },
  {
    id: 34,
    question:
      "How was the covenant of grace administered under the Old Testament?",
    answer:
      "The covenant of grace was administered under the Old Testament, by promises,[1] prophecies,[2] sacrifices,[3] circumcision,[4] the passover,[5] and other types and ordinances, which did all foresignify Christ then to come, and were for that time sufficient to build up the elect in faith in the promised Messiah,[6] by whom they then had full remission of sin, and eternal salvation.[7]",
    proofTexts: [
      "Rom. 15:8",
      "Acts 3:20, 24",
      "Heb. 10:1",
      "Rom. 4:11",
      "I Cor. 5:7",
      "Heb. 8:1-13, 9:1-28, 10:1-39; 11:13",
      "Gal. 3:7-9, 14",
    ],
  },
  {
    id: 35,
    question:
      "How is the covenant of grace administered under the New Testament?",
    answer:
      "Under the New Testament, when Christ the substance was exhibited, the same covenant of grace was and still is to be administered in the preaching of the word,[1] and the administration of the sacraments of Baptism [2] and the Lord’s Supper;[3] in which grace and salvation are held forth in more fulness, evidence, and efficacy, to all nations.[4]",
    proofTexts: [
      "Mark 16:15",
      "Matt. 28:19-20",
      "I Cor. 11:23-25",
      "II Cor. 3:6-9; Heb. 8:6, 10-11; Matt. 28:19",
    ],
  },
  {
    id: 36,
    question: "Who is the Mediator of the covenant of grace?",
    answer:
      "The only Mediator of the covenant of grace is the Lord Jesus Christ,[1] who, being the eternal Son of God, of one substance and equal with the Father,[2] in the fulness of time became man,[3] and so was and continues to be God and man, in two entire distinct natures, and one person, forever.[4]",
    proofTexts: [
      "I Tim. 2:5",
      "John 1:1, 14; 10:30; Phil. 2:6",
      "Gal. 4:4",
      "Luke 1:35; Rom. 9:5; Col. 2:9; Heb. 7:24-25",
    ],
  },
  {
    id: 37,
    question: "How did Christ, being the Son of God, become man?",
    answer:
      "Christ the Son of God became man, by taking to himself a true body, and a reasonable soul,[1] being conceived by the power of the Holy Ghost in the womb of the virgin Mary, of her substance, and born of her,[2] yet without sin.[3]",
    proofTexts: [
      "John 1:14; Matt. 26:38",
      "Luke 1:27, 31, 35, 42; Gal. 4:4",
      "Heb. 4:15; 7:26",
    ],
  },
  {
    id: 38,
    question: "Why was it requisite that the Mediator should be God?",
    answer:
      "It was requisite that the Mediator should be God, that he might sustain and keep the human nature from sinking under the infinite wrath of God, and the power of death;[1] give worth and efficacy to his sufferings, obedience, and intercession;[2] and to satisfy God’s justice,[3] procure his favor,[4] purchase a peculiar people,[5] give his Spirit to them,[6] conquer all their enemies,[7] and bring them to everlasting salvation.[8]",
    proofTexts: [
      "Acts. 2:24-25; Rom. 1:4; 4:25; Heb. 9:14",
      "Acts 20:28; Heb. 7:25-28; 9:14",
      "Rom. 3:24-26",
      "Eph. 1:6; Matt. 3:17",
      "Titus. 2:13-14",
      "Gal. 4:6",
      "Luke 1:68-69, 71, 74",
      "Heb. 5:8-9; 9:11-15",
    ],
  },
  {
    id: 39,
    question: "Why was it requisite that the Mediator should be man?",
    answer:
      "It was requisite that the Mediator should be man, that he might advance our nature,[1] perform obedience to the law,[2] suffer and make intercession for us in our nature,[3] have a fellow feeling of our infirmities;[4] that we might receive the adoption of sons,[5] and have comfort and access with boldness unto the throne of grace.[6]",
    proofTexts: [
      "Heb. 2:16",
      "Gal. 4:4",
      "Heb. 2:14; 7:24-25",
      "Heb. 4:15",
      "Gal. 4:5",
      "Heb. 4:16",
    ],
  },
  {
    id: 40,
    question:
      "Why was it requisite that the Mediator should be God and man in one person?",
    answer:
      "It was requisite that the Mediator, who was to reconcile God and man, should himself be both God and man, and this in one person, that the proper works of each nature might be accepted of God for us, and relied on by us,[1] as the works of the whole person.[2]",
    proofTexts: ["Matt. 1:21, 23; 3:17; Heb. 9:14", "I Peter 2:6"],
  },
  {
    id: 41,
    question: "Why was our Mediator called Jesus?",
    answer:
      "Our Mediator was called Jesus, because he saveth his people from their sins.[1]",
    proofTexts: ["Matt. 1:21"],
  },
  {
    id: 42,
    question: "Why was our Mediator called Christ?",
    answer:
      "Our Mediator was called Christ, because he was anointed with the Holy Ghost above measure;[1] and so set apart, and fully furnished with all authority and ability,[2] to execute the offices of prophet,[3] priest,[4] and king of his church,[5] in the estate both of his humiliation and exaltation.",
    proofTexts: [
      "John 3:34; Psa. 45:7",
      "John 6:27; Matt. 28:18-20",
      "Acts 3:21-22; Luke 4:18, 21",
      "Heb. 4:14-15; 5:5-7",
      "Psa. 2:6; Matt. 21:5; Isa. 9:6-7; Phil. 2:8-11",
    ],
  },
  {
    id: 43,
    question: "How doth Christ execute the office of a prophet?",
    answer:
      "Christ executeth the office of a prophet, in his revealing to the church,[1] in all ages, by his Spirit and word,[2] in divers ways of administration,[3] the whole will of God,[4] in all things concerning their edification and salvation.[5]",
    proofTexts: [
      "John 1:18",
      "I Peter 1:10-12",
      "Heb. 1:1-2",
      "John 15:15",
      "Acts 20:32; Eph. 4:11-13; John 20:31",
    ],
  },
  {
    id: 44,
    question: "How doth Christ execute the office of a priest?",
    answer:
      "Christ executeth the office of a priest, in his once offering himself a sacrifice without spot to God,[1] to be a reconciliation for the sins of his people;[2] and in making continual intercession for them.[3]",
    proofTexts: ["Heb. 9:14, 28", "Heb. 2:17", "Heb. 7:25"],
  },
  {
    id: 45,
    question: "How doth Christ execute the office of a king?",
    answer:
      "Christ executeth the office of a king, in calling out of the world a people to himself,[1] and giving them officers,[2] laws,[3] and censures, by which he visibly governs them;[4] in bestowing saving grace upon his elect,[5] rewarding their obedience,[6] and correcting them for their sins,[7] preserving and supporting them under all their temptations and sufferings,[8] restraining and overcoming all their enemies,[9] and powerfully ordering all things for his own glory,[10] and their good;[11] and also in taking vengeance on the rest, who know not God, and obey not the gospel.[12]",
    proofTexts: [
      "Acts 15:14-16; Isa. 4:4-5; Gen. 49:10; Psa. 110:3",
      "Eph. 4:11-12; I Cor. 12:28",
      "Isa. 33:22",
      "Matt. 18:17-18; I Cor. 5:4-5",
      "Acts 5:31",
      "Rev. 2:10; 22:12",
      "Rev. 3:19",
      "Isa. 63:9",
      "I Cor. 15:25; Psa. 110:1-2",
      "Rom. 14:10-11",
      "Rom. 8:28",
      "II Thess. 1:8-9; Psa. 2:8-9",
    ],
  },
  {
    id: 46,
    question: "What was the estate of Christ’s humiliation?",
    answer:
      "The estate of Christ’s humiliation was that low condition, wherein he for our sakes, emptying himself of his glory, took upon him the form of a servant, in his conception and birth, life, death, and after his death, until his resurrection. [1]",
    proofTexts: ["Phil. 2:6-8; Luke 1:31; II Cor. 8:9; Acts 2:24"],
  },
  {
    id: 47,
    question: "How did Christ humble himself in his conception and birth?",
    answer:
      "Christ humbled himself in his conception and birth, in that, being from all eternity the Son of God, in the bosom of the Father, he was pleased in the fulness of time to become the son of man, made of a woman of low estate, and to be born of her; with divers circumstances of more than ordinary abasement.[1]",
    proofTexts: ["John 1:14, 18; Gal. 4:4; Luke 2:7"],
  },
  {
    id: 48,
    question: "How did Christ humble himself in his life?",
    answer:
      "Christ humbled himself in his life, by subjecting himself to the law,[1] which he perfectly fulfilled;[2] and by conflicting with the indignities of the world,[3] temptations of Satan,[4] and infirmities in his flesh, whether common to the nature of man, or particularly accompanying that his low condition.[5]",
    proofTexts: [
      "Gal. 4:4",
      "Matt. 5:17; Rom. 5:19",
      "Psa. 22:6; Heb. 12:2-3",
      "Matt. 4:1-12; Luke 4:13",
      "Heb. 2:17-18; 4:15; Isa. 52:13-14",
    ],
  },
  {
    id: 49,
    question: "How did Christ humble himself in his death?",
    answer:
      "Christ humbled himself in his death, in that having been betrayed by Judas,[1] forsaken by his disciples,[2] scorned and rejected by the world,[3] condemned by Pilate, and tormented by his persecutors;[4] having also conflicted with the terrors of death, and the powers of darkness, felt and borne the weight of God’s wrath,[5] he laid down his life an offering for sin,[6] enduring the painful, shameful, and cursed death of the cross.[7]",
    proofTexts: [
      "Matt. 27:4",
      "Matt. 26:56",
      "Isa. 53:2-3",
      "Matt. 27:26-50; John 19:34",
      "Luke 22:44; Matt. 27:46",
      "Isa. 53:10",
      "Phil. 2:8; Heb. 12:2; Gal. 3:13",
    ],
  },
  {
    id: 50,
    question: "Wherein consisted Christ’s humiliation after his death?",
    answer:
      "Christ’s humiliation after his death consisted in his being buried,[1] and continuing in the state of the dead, and under the power of death till the third day;[2] which hath been otherwise expressed in these words, he descended into hell.",
    proofTexts: [
      "I Cor. 15:3-4",
      "Psa. 16:10; Acts 2:24-27, 31; Rom. 6:9; Matt. 12:40",
    ],
  },
  {
    id: 51,
    question: "What was the estate of Christ’s exaltation?",
    answer:
      "The estate of Christ’s exaltation comprehendeth his resurrection,[1] ascension,[2] sitting at the right hand of the Father,[3] and his coming again to judge the world.[4]",
    proofTexts: ["I Cor. 15:4", "Mark 16:19", "Eph. 1:20", "Acts 1:11; 17:31"],
  },
  {
    id: 52,
    question: "How was Christ exalted in his resurrection?",
    answer:
      "Christ was exalted in his resurrection, in that, not having seen corruption in death (of which it was not possible for him to be held),[1] and having the very same body in which he suffered, with the essential properties thereof [2] (but without mortality, and other common infirmities belonging to this life), really united to his soul,[3] he rose again from the dead the third day by his own power;[4] whereby he declared himself to be the Son of God,[5] to have satisfied divine justice,[6] to have vanquished death, and him that had the power of it,[7] and to be Lord of quick and dead:[8] all which he did as a public person,[9] the head of his church,[10] for their justification,[11] quickening in grace,[12] support against enemies,[13] and to assure them of their resurrection from the dead at the last day.[14]",
    proofTexts: [
      "Acts 2:24, 27",
      "Luke 24:39",
      "Rom. 6:9; Rev. 1:18",
      "John 10:18",
      "Rom. 1:4",
      "Rom. 8:34",
      "Heb. 2:14",
      "Rom. 14:9",
      "I Cor. 15:21-22",
      "Eph. 4:10-12; Col. 1:18",
      "Rom. 4:25",
      "Eph. 2:1, 5-6; Col. 2:12",
      "I Cor. 15:25-27",
      "I Cor. 15:20",
    ],
  },
  {
    id: 53,
    question: "How was Christ exalted in his ascension?",
    answer:
      "Christ was exalted in his ascension, in that having after his resurrection often appeared unto and conversed with his apostles, speaking to them of the things pertaining to the kingdom of God,[1] and giving them commission to preach the gospel to all nations,[2] forty days after his resurrection, he, in our nature, and as our head,[3] triumphing over enemies,[4] visibly went up into the highest heavens, there to receive gifts for men,[5] to raise up our affections thither,[6] and to prepare a place for us,[7] where himself is, and shall continue till his second coming at the end of the world.[8]",
    proofTexts: [
      "Acts 1:2-3",
      "Matt. 28:19-20",
      "Heb. 6:20",
      "Eph. 4:8",
      "Acts 1:9-11; Eph. 4:10; Psa. 68:18",
      "Col. 3:1-2",
      "John 14:3",
      "Acts 3:21",
    ],
  },
  {
    id: 54,
    question: "How is Christ exalted in his sitting at the right hand of God?",
    answer:
      "Christ is exalted in his sitting at the right hand of God, in that as God-man he is advanced to the highest favor with God the Father,[1] with all fulness of joy,[2] glory,[3] and power over all things in heaven and earth;[4] and doth gather and defend his church, and subdue their enemies; furnisheth his ministers and people with gifts and graces,[5] and maketh intercession for them.[6]",
    proofTexts: [
      "Phil. 2:9",
      "Acts 2:28; Psa. 16:11",
      "John 17:5",
      "Eph. 1:22; I Peter 3:22",
      "Eph. 4:10-12; Psa. 110:1",
      "Rom. 8:34",
    ],
  },
  {
    id: 55,
    question: "How doth Christ make intercession?",
    answer:
      "Christ maketh intercession, by his appearing in our nature continually before the Father in heaven,[1] in the merit of his obedience and sacrifice on earth,[2] declaring his will to have it applied to all believers;[3] answering all accusations against them,[4] and procuring for them quiet of conscience, notwithstanding daily failings,[5] access with boldness to the throne of grace,[6] and acceptance of their persons [7] and services.[8]",
    proofTexts: [
      "Heb. 9:12, 24",
      "Heb. 1:3",
      "John 3:16; 17:9, 20, 24",
      "Rom. 8:33-34",
      "Rom. 5:1-2; I John 2:1-2",
      "Heb. 4:16",
      "Eph. 1:6",
      "I Peter 2:5",
    ],
  },
  {
    id: 56,
    question:
      "How is Christ to be exalted in his coming again to judge the world?",
    answer:
      "Christ is to be exalted in his coming again to judge the world, in that he, who was unjustly judged and condemned by wicked men,[1] shall come again at the last day in great power,[2] and in the full manifestation of his own glory, and of his Father’s, with all his holy angels,[3] with a shout, with the voice of the archangel, and with the trumpet of God,[4] to judge the world in righteousness.[5]",
    proofTexts: [
      "Acts 3:14-15",
      "Matt. 24:30",
      "Luke 9:26; Matt. 25:31",
      "I Thess. 4:16",
      "Acts 17:31",
    ],
  },
  {
    id: 57,
    question: "What benefits hath Christ procured by his mediation?",
    answer:
      "Christ, by his mediation, hath procured redemption,[1] with all other benefits of the covenant of grace.[2]",
    proofTexts: ["Heb. 9:12", "II Cor. 1:20"],
  },
  {
    id: 58,
    question:
      "How do we come to be made partakers of the benefits which Christ hath procured?",
    answer:
      "We are made partakers of the benefits which Christ hath procured,[1] by the application of them unto us, which is the work especially of God the Holy Ghost.[2]",
    proofTexts: ["John 1:11-12", "Titus 3:5-6"],
  },
  {
    id: 59,
    question: "Who are made partakers of redemption through Christ?",
    answer:
      "Redemption is certainly applied, and effectually communicated, to all those for whom Christ hath purchased it;[1] who are in time by the Holy Ghost enabled to believe in Christ according to the gospel.[2]",
    proofTexts: [
      "Eph. 1:13-14; John 6:37, 39; 10:15-16",
      "Eph. 2:8; II Cor. 4:13",
    ],
  },
  {
    id: 60,
    question:
      "Can they who have never heard the gospel, and so know not Jesus Christ, nor believe in him, be saved by their living according to the light of nature?",
    answer:
      "They who, having never heard the gospel,[1] know not Jesus Christ,[2] and believe not in him, cannot be saved,[3] be they never so diligent to frame their lives according to the light of nature,[4] or the laws of that religion which they profess;[5] neither is there salvation in any other, but in Christ alone,[6] who is the Savior only of his body the church.[7]",
    proofTexts: [
      "Rom. 10:14",
      "II Thess. 1:8-9; Eph. 2:12; John 1:10-12",
      "John 8:24; Mark 16:16",
      "I Cor. 1:20-24",
      "John 4:22; Rom. 9:31-32; Phil 3:4-9",
      "Acts 4:12",
      "Eph. 5:23",
    ],
  },
  {
    id: 61,
    question: "Are all they saved who hear the gospel, and live in the church?",
    answer:
      "All that hear the gospel, and live in the visible church, are not saved; but they only who are true members of the church invisible.[1]",
    proofTexts: ["John 12:38-40; Rom. 9:6; 11:7; Matt. 7:21; 22:14"],
  },
  {
    id: 62,
    question: "What is the visible church?",
    answer:
      "The visible church is a society made up of all such as in all ages and places of the world do profess the true religion,[1] and of their children.[2]",
    proofTexts: [
      "I Cor. 1:2; 12:13; Rom. 15:9-12; Rev. 7:9; Psa. 2:8; 22:27-31; 45:17; Matt. 28:19-20; Isa. 59:21",
      "I Cor. 7:14; Acts 2:39; Rom. 11:16; Gen. 17:7",
    ],
  },
  {
    id: 63,
    question: "What are the special privileges of the visible church?",
    answer:
      "The visible church hath the privilege of being under God’s special care and government;[1] of being protected and preserved in all ages, not withstanding the opposition of all enemies;[2] and of enjoying the communion of saints, the ordinary means of salvation,[3] and offers of grace by Christ to all the members of it in the ministry of the gospel, testifying, that whosoever believes in him shall be saved,[4] and excluding none that will come unto him.[5]",
    proofTexts: [
      "Isa. 4:5-6; I Tim. 4:10",
      "Psa. 115:1-2, 9; Isa. 31:4-5; Zech. 12:2-4, 8-9",
      "Acts 2:39, 42",
      "Psa. 147:19-20; Rom. 9:4; Eph. 4:11-12; Mark 16:15-16",
      "John 6:37",
    ],
  },
  {
    id: 64,
    question: "What is the invisible church?",
    answer:
      "The invisible church is the whole number of the elect, that have been, are, or shall be gathered into one under Christ the head.[1]",
    proofTexts: ["Eph. 1:20, 22-23; John 10:16, 11:52"],
  },
  {
    id: 65,
    question:
      "What special benefits do the members of the invisible church enjoy by Christ?",
    answer:
      "The members of the invisible church by Christ enjoy union and communion with him in grace and glory.[1]",
    proofTexts: ["John 17:21, 24; Eph. 2:5-6"],
  },
  {
    id: 66,
    question: "What is that union which the elect have with Christ?",
    answer:
      "The union which the elect have with Christ is the work of God’s grace,[1] whereby they are spiritually and mystically, yet really and inseparably, joined to Christ as their head and husband;[2] which is done in their effectual calling.[3]",
    proofTexts: [
      "Eph. 1:22; 2:6-8",
      "I Cor. 6:17; John 10:28; Eph. 5:23, 30",
      "I Peter 5:10; I Cor. 1:9",
    ],
  },
  {
    id: 67,
    question: "What is effectual calling?",
    answer:
      "Effectual calling is the work of God’s almighty power and grace,[1] whereby (out of his free and special love to his elect, and from nothing in them moving him thereunto [2]) he doth, in his accepted time, invite and draw them to Jesus Christ, by his word and Spirit;[3] savingly enlightening their minds,[4] renewing and powerfully determining their wills,[5] so as they (although in themselves dead in sin) are hereby made willing and able freely to answer his call, and to accept and embrace the grace offered and conveyed therein.[6]",
    proofTexts: [
      "John 5:25; Eph. 1:18-20; II Tim. 1:8-9",
      "Titus. 3:4-5; Eph. 2:4-5, 7-9; Rom. 9:11",
      "II Cor. 5:20; 6:1-2; John 6:44; II Thess. 2:13-14",
      "Acts 26:18; I Cor. 2:10, 12",
      "Ezek. 11:19; 36:26-27; John 6:45",
      "Eph. 2:5; Phil. 2:13; Deut. 30:6",
    ],
  },
  {
    id: 68,
    question: "Are the elect only effectually called?",
    answer:
      "All the elect, and they only, are effectually called;[1] although others may be, and often are, outwardly called by the ministry of the word,[2] and have some common operations of the Spirit;[3] who, for their wilful neglect and contempt of the grace offered to them, being justly left in their unbelief, do never truly come to Jesus Christ.[4]",
    proofTexts: [
      "Acts 13:48",
      "Matt. 22:14",
      "Matt. 7:22; 13:20-21; Heb. 6:4-6",
      "John 6:64-65; 12:38-40; Acts 18:25-27; Psa. 81:11-12",
    ],
  },
  {
    id: 69,
    question:
      "What is the communion in grace which the members of the invisible church have with Christ?",
    answer:
      "The communion in grace which the members of the invisible church have with Christ, is their partaking of the virtue of his mediation, in their justification,[1] adoption,[2] sanctification, and whatever else, in this life, manifests their union with him.[3]",
    proofTexts: ["Rom. 8:30", "Eph. 1:5", "I Cor. 1:30"],
  },
  {
    id: 70,
    question: "What is justification?",
    answer:
      "Justification is an act of God’s free grace unto sinners,[1] in which he pardoneth all their sins, accepteth and accounteth their persons righteous in his sight;[2] not for any thing wrought in them, or done by them,[3] but only for the perfect obedience and full satisfaction of Christ, by God imputed to them,[4] and received by faith alone.[5]",
    proofTexts: [
      "Rom. 3:22, 24-25; 4:5",
      "II Cor. 5:19, 21; Rom. 3:22-25, 27-28",
      "Titus 3:5, 7; Eph. 1:7",
      "Rom. 4:6-8; 5:17-19",
      "Acts 10:43; Gal. 2:16; Phil. 3:9",
    ],
  },
  {
    id: 71,
    question: "How is justification an act of God’s free grace?",
    answer:
      "Although Christ, by his obedience and death, did make a proper, real, and full satisfaction to God’s justice in the behalf of them that are justified;[1] yet inasmuch as God accepteth the satisfaction from a surety, which he might have demanded of them, and did provide this surety, his own only Son,[2] imputing his righteousness to them,[3] and requiring nothing of them for their justification but faith,[4] which also is his gift,[5] their justification is to them of free grace.[6]",
    proofTexts: [
      "Rom. 5:8-10, 19",
      "II Tim. 2:5-6; Heb. 7:22; 10:10; Matt. 20:28; Dan. 9:24, 26; Isa. 53:4-6, 10-12; Rom. 8:32; I Peter 1:18-19",
      "II Cor. 5:21",
      "Rom. 3:24-25",
      "Eph. 2:8",
      "Eph. 1:7",
    ],
  },
  {
    id: 72,
    question: "What is justifying faith?",
    answer:
      "Justifying faith is a saving grace,[1] wrought in the heart of a sinner by the Spirit [2] and word of God,[3] whereby he, being convinced of his sin and misery, and of the disability in himself and all other creatures to recover him out of his lost condition,[4] not only assenteth to the truth of the promise of the gospel,[5] but receiveth and resteth upon Christ and his righteousness, therein held forth, for pardon of sin,[6] and for the accepting and accounting of his person righteous in the sight of God for salvation.[7]",
    proofTexts: [
      "Heb. 10:39",
      "II Cor. 4:13; Eph. 1:17-19",
      "Rom. 10:14, 17",
      "Acts 2:37; 4:12; 16:30; John 16:8-9; Rom. 5:6; Eph. 2:1",
      "Eph. 1:13",
      "John 1:12; Acts 10:43; 16:31",
      "Phil. 3:9; Acts 15:11",
    ],
  },
  {
    id: 73,
    question: "How doth faith justify a sinner in the sight of God?",
    answer:
      "Faith justifies a sinner in the sight of God, not because of those other graces which do always accompany it, or of good works that are the fruits of it,[3] nor as if the grace of faith, or any act thereof, were imputed to him for his justification;[2] but only as it is an instrument by which he receiveth and applies Christ and his righteousness.[3]",
    proofTexts: [
      "I Cor. 1:30; 6:11",
      "Rom. 4:5; 10:10",
      "John 1:12; Phil. 3:9; Gal. 2:16",
    ],
  },
  {
    id: 74,
    question: "What is adoption?",
    answer:
      "Adoption is an act of the free grace of God,[1] in and for his only Son Jesus Christ,[2] whereby all those that are justified are received into the number of his children,[3] have his name put upon them,[4] the Spirit of his Son given to them,[5] are under his fatherly care and dispensations,[6] admitted to all the liberties and privileges of the sons of God, made heirs of all the promises, and fellow heirs with Christ in glory.[7]",
    proofTexts: [
      "I John 3:1",
      "Eph. 1:5; Gal. 4:4-5",
      "John 1:12",
      "II Cor. 4:18; Rev. 3:12",
      "Gal. 4:6",
      "Psa. 103:13; Prov. 14:26; Matt. 6:32",
      "Heb. 6:12; Rom. 8:17",
    ],
  },
  {
    id: 75,
    question: "What is sanctification?",
    answer:
      "Sanctification is a work of God’s grace, whereby they whom God hath, before the foundation of the world, chosen to be holy, are in time, through the powerful operation of his Spirit [1] applying the death and resurrection of Christ unto them,[2] renewed in their whole man after the image of God;[3] having the seeds of repentance unto life, and all other saving graces, put into their hearts,[4] and those graces so stirred up, increased, and strengthened,[5] as that they more and more die unto sin, and rise unto newness of life.[6]",
    proofTexts: [
      "Eph. 1:4; I Cor. 6:11; II Thess. 2:13",
      "Rom. 6:4-6",
      "Eph. 4:23-24",
      "Acts 11:18; I John 3:9",
      "Jude 1:20; Heb. 6:11-12; Eph. 3:16-19; Col. 1:10-11",
      "Rom. 6:4; 6:14; Gal. 5:24",
    ],
  },
  {
    id: 76,
    question: "What is repentance unto life?",
    answer:
      "Repentance unto life is a saving grace,[1] wrought in the heart of a sinner by the Spirit [2] and word of God,[3] whereby, out of the sight and sense, not only of the danger,[4] but also of the filthiness and odiousness of his sins,[5] and upon the apprehension of God’s mercy in Christ to such as are penitent,[6] he so grieves for [7] and hates his sins,[8] as that he turns from them all to God,[9] purposing and endeavoring constantly to walk with him in all the ways of new obedience.[10]",
    proofTexts: [
      "II Tim. 2:25",
      "Zech. 12:10",
      "Acts 11:18, 20-21",
      "Ezek. 18:28, 30, 32; Luke 15:17-18; Hosea 2:6-7",
      "Ezek. 36:31; Isa. 30:22",
      "Joel 2:12-13",
      "Jer. 31:18-19",
      "II Cor. 7:11",
      "Acts 26:18; Ezek. 14:6; I Kings 8:47-48",
      "Psa. 119:6, 59, 128; Luke 1:6; II Kings 23:25",
    ],
  },
  {
    id: 77,
    question: "Wherein do justification and sanctification differ?",
    answer:
      "Although sanctification be inseparably joined with justification,[1] yet they differ, in that God in justification imputeth the righteousness of Christ;[2] in sanctification his Spirit infuseth grace, and enableth to the exercise thereof;[3] in the former, sin is pardoned;[4] in the other, it is subdued:[5] the one doth equally free all believers from the revenging wrath of God, and that perfectly in this life, that they never fall into condemnation;[6] the other is neither equal in all,[7] nor in this life perfect in any,[8] but growing up to perfection.[9]",
    proofTexts: [
      "I Cor. 1:30; 6:11",
      "Rom. 4:5; 10:10",
      "John 1:12; Phil. 3:9; Gal. 2:16",
      "Rom. 4:6, 8",
      "Rom. 6:6, 14",
      "Rom. 8:33-34",
      "I John 2:12-14; Heb. 5:12-14",
      "I John 1:8, 10",
      "II Cor. 7:1; Phil 3:12-14",
    ],
  },
  {
    id: 78,
    question: "Whence ariseth the imperfection of sanctification in believers?",
    answer:
      "The imperfection of sanctification in believers ariseth from the remnants of sin abiding in every part of them, and the perpetual lustings of the flesh against the spirit; whereby they are often foiled with temptations, and fall into many sins,[1] are hindered in all their spiritual services,[2] and their best works are imperfect and defiled in the sight of God.[3]",
    proofTexts: [
      "Rom. 7:18, 23; Mark 14:66-72 ; Gal. 2:11-12",
      "Heb. 12:1",
      "Isa. 64:6; Exod. 28:38",
    ],
  },
  {
    id: 79,
    question:
      "May not true believers, by reason of their imperfections, and the many temptations and sins they are overtaken with, fall away from the state of grace?",
    answer:
      "True believers, by reason of the unchangeable love of God,[1] and his decree and covenant to give them perseverance,[2] their inseparable union with Christ,[3] his continual intercession for them,[4] and the Spirit and seed of God abiding in them,[5] can neither totally nor finally fall away from the state of grace,[6] but are kept by the power of God through faith unto salvation.[7]",
    proofTexts: [
      "Jer. 31:3",
      "II Tim. 2:19-21; II Sam. 23:5",
      "I Cor. 1:8-9",
      "Heb. 7:25; Luke 22:32",
      "I John 2:27; 3:9",
      "Jer. 32:40; John 10:28",
      "I Peter 1:5",
    ],
  },
  {
    id: 80,
    question:
      "Can true believers be infallibly assured that they are in the estate of grace, and that they shall persevere therein unto salvation?",
    answer:
      "Such as truly believe in Christ, and endeavor to walk in all good conscience before him,[1] may, without extraordinary revelation, by faith grounded upon the truth of God’s promises, and by the Spirit enabling them to discern in themselves those graces to which the promises of life are made,[2] and bearing witness with their spirits that they are the children of God,[3] be infallibly assured that they are in the estate of grace, and shall persevere therein unto salvation.[4]",
    proofTexts: [
      "I John 2:3",
      "I Cor. 2:12; I John 3:14, 18-19, 21, 24; 4:13, 16; Heb. 6:11-12",
      "Rom. 8:16",
      "I John 5:13",
    ],
  },
  {
    id: 81,
    question:
      "Are all true believers at all times assured of their present being in the estate of grace, and that they shall be saved?",
    answer:
      "Assurance of grace and salvation not being of the essence of faith,[1] true believers may wait long before they obtain it;[2] and, after the enjoyment thereof, may have it weakened and intermitted, through manifold distempers, sins, temptations, and desertions;[3] yet are they never left without such a presence and support of the Spirit of God as keeps them from sinking into utter despair.[4]",
    proofTexts: [
      "Eph. 1:13",
      "Isa. 50:10; Psa. 88:1-18",
      "Psa. 22:1; 31:22; 51:8, 12; 77:1-12; Song of Sol. 5:2-3, 6",
      "I John 3:9; Job 13:15; Psa. 73:15, 23; Isa. 54:7-10",
    ],
  },
  {
    id: 82,
    question:
      "What is the communion in glory which the members of the invisible church have with Christ?",
    answer:
      "The communion in glory which the members of the invisible church have with Christ, is in this life,[1] immediately after death,[2] and at last perfected at the resurrection and day of judgment.[3]",
    proofTexts: ["II Cor. 3:18", "Luke 23:43", "I Thess. 4:17"],
  },
  {
    id: 83,
    question:
      "What is the communion in glory with Christ which the members of the invisible church enjoy in this life?",
    answer:
      "The members of the invisible church have communicated to them in this life the firstfruits of glory with Christ, as they are members of him their head, and so in him are interested in that glory which he is fully possessed of;[1] and, as an earnest thereof, enjoy the sense of God’s love,[2] peace of conscience, joy in the Holy Ghost, and hope of glory;[3] as, on the contrary, sense of God’s revenging wrath, horror of conscience, and a fearful expectation of judgment, are to the wicked the beginning of their torments which they shall endure after death.[4]",
    proofTexts: [
      "Eph. 2:5",
      "Rom. 5:5; II Cor. 1:22",
      "Rom. 5:1-2; 14:17",
      "Gen. 4:13; Matt. 27:4; Heb. 10:27; Rom. 2:9; Mark 9:44",
    ],
  },
  {
    id: 84,
    question: "Shall all men die?",
    answer:
      "Death being threatened as the wages of sin,[1] it is appointed unto all men once to die;[2] for that all have sinned.[3]",
    proofTexts: ["Rom. 6:23", "Heb. 9:27", "Rom. 5:12"],
  },
  {
    id: 85,
    question:
      "Death, being the wages of sin, why are not the righteous delivered from death, seeing all their sins are forgiven in Christ?",
    answer:
      "The righteous shall be delivered from death itself at the last day, and even in death are delivered from the sting and curse of it;[1] so that, although they die, yet it is out of God’s love,[2] to free them perfectly from sin and misery,[3] and to make them capable of further communion with Christ in glory, which they then enter upon.[4]",
    proofTexts: [
      "I Cor. 15:26, 55-57; Heb. 2:15",
      "Isa. 57:1-2; II Kings 22:20",
      "Rev. 14:13; Eph. 5:27",
      "Luke 23:43; Phil 1:23",
    ],
  },
  {
    id: 86,
    question:
      "What is the communion in glory with Christ, which the members of the invisible church enjoy immediately after death?",
    answer:
      "The communion in glory with Christ, which the members of the invisible church enjoy immediately after death, is, in that their souls are then made perfect in holiness,[1] and received into the highest heavens,[2] where they behold the face of God in light and glory,[3] waiting for the full redemption of their bodies,[4] which even in death continue united to Christ,[5] and rest in their graves as in their beds,[6] till at the last day they be again united to their souls.[7] Whereas the souls of the wicked are at their death cast into hell, where they remain in torments and utter darkness, and their bodies kept in their graves, as in their prisons, till the resurrection and judgment of the great day.[8]",
    proofTexts: [
      "Heb. 12:23",
      "II Cor. 5:1, 6, 8; Phil 1:23; Acts 3:21; Eph. 4:10",
      "I John 3:2; I Cor. 13:12",
      "Rom. 8:23; Psa. 16:9",
      "I Thess. 4:14",
      "Isa. 57:2",
      "Job 19:26-27",
      "Luke 16:23-24; Acts 1:25; Jude 1:6-7",
    ],
  },
  {
    id: 87,
    question: "What are we to believe concerning the resurrection?",
    answer:
      "We are to believe, that at the last day there shall be a general resurrection of the dead, both of the just and unjust:[1] when they that are then found alive shall in a moment be changed; and the selfsame bodies of the dead which were laid in the grave, being then again united to their souls forever, shall be raised up by the power of Christ.[2] The bodies of the just, by the Spirit of Christ, and by virtue of his resurrection as their head, shall be raised in power, spiritual, incorruptible, and made like to his glorious body;[3] and the bodies of the wicked shall be raised up in dishonor by him, as an offended judge.[4]",
    proofTexts: [
      "Acts 24:15",
      "I Cor. 15:51-53; I Thess. 4:15-17; John 5:28-29",
      "I Cor. 15:21-23, 42-44; Phil. 3:21",
      "John 5:27-29; Matt. 25:33",
    ],
  },
  {
    id: 88,
    question: "What shall immediately follow after the resurrection?",
    answer:
      "Immediately after the resurrection shall follow the general and final judgment of angels and men;[1] the day and hour whereof no man knows, that all may watch and pray, and be ever ready for the coming of the Lord.[2]",
    proofTexts: [
      "II Peter 2:4; Jude 1:6-7, 14-15; Matt. 25:46",
      "Matt. 24:36, 42, 44; Luke 21:35-36",
    ],
  },
  {
    id: 89,
    question: "What shall be done to the wicked at the day of judgment?",
    answer:
      "At the day of judgment, the wicked shall be set on Christ’s left hand,[1] and, upon clear evidence, and full conviction of their own consciences,[2] shall have the fearful but just sentence of condemnation pronounced against them;[3] and thereupon shall be cast out from the favorable presence of God, and the glorious fellowship with Christ, his saints, and all his holy angels, into hell, to be punished with unspeakable torments, both of body and soul, with the devil and his angels forever.[4]",
    proofTexts: [
      "Matt. 25:33",
      "Rom. 2:15-16",
      "Matt. 25:41-43",
      "Luke 16:26; II Thess. 1:8-9",
    ],
  },
  {
    id: 90,
    question: "What shall be done to the righteous at the day of judgment?",
    answer:
      "At the day of judgment, the righteous, being caught up to Christ in the clouds,[1] shall be set on his right hand, and there openly acknowledged and acquitted,[2] shall join with him in the judging of reprobate angels and men,[3] and shall be received into heaven,[4] where they shall be fully and forever freed from all sin and misery;[5] filled with inconceivable joys,[6] made perfectly holy and happy both in body and soul, in the company of innumerable saints and holy angels,[7] but especially in the immediate vision and fruition of God the Father, of our Lord Jesus Christ, and of the Holy Spirit, to all eternity.[8] And this is the perfect and full communion, which the members of the invisible church shall enjoy with Christ in glory, at the resurrection and day of judgment.",
    proofTexts: [
      "I Thess. 4:17",
      "Matt. 10:32, 25:33",
      "I Cor. 6:2-3",
      "Matt. 25:34, 46",
      "Eph. 5:27; Rev. 14:13",
      "Psa. 16:11",
      "Heb. 12:22-23",
      "I John 3:2; I Cor. 13:12; I Thess. 4:17-18",
    ],
  },
  {
    id: 91,
    question: "What is the duty which God requireth of man?",
    answer:
      "The duty which God requireth of man, is obedience to his revealed will.[1]",
    proofTexts: ["Rom. 12:1-2; Micah 6:8; I Sam. 15:22"],
  },
  {
    id: 92,
    question:
      "What did God at first reveal unto man as the rule of his obedience?",
    answer:
      "The rule of obedience revealed to Adam in the estate of innocence, and to all mankind in him, besides a special command not to eat of the fruit of the tree of the knowledge of good and evil, was the moral law.[1]",
    proofTexts: ["Gen. 1:26-27; 2:17; Rom. 2:14-15; 10:5"],
  },
  {
    id: 93,
    question: "What is the moral law?",
    answer:
      "The moral law is the declaration of the will of God to mankind, directing and binding everyone to personal, perfect, and perpetual conformity and obedience thereunto, in the frame and disposition of the whole man, soul and body,[1] and in performance of all those duties of holiness and righteousness which he oweth to God and man:[2] promising life upon the fulfilling, and threatening death upon the breach of it.[3]",
    proofTexts: [
      "Deut. 5:1-3, 31, 33; Luke 10:26-27; Gal. 3:10; I Thess. 5:23",
      "Luke 1:75; Acts 14:16",
      "Rom. 10:5; Gal. 3:10, 12",
    ],
  },
  {
    id: 94,
    question: "Is there any use of the moral law to man since the fall?",
    answer:
      "Although no man, since the fall, can attain to righteousness and life by the moral law;[1] yet there is great use thereof, as well common to all men, as peculiar either to the unregenerate, or the regenerate.[2]",
    proofTexts: ["Rom. 8:3; Gal. 2:16", "I Tim. 1:8"],
  },
  {
    id: 95,
    question: "Of what use is the moral law to all men?",
    answer:
      "The moral law is of use to all men, to inform them of the holy nature and will of God,[1] and of their duty, binding them to walk accordingly;[2] to convince them of their disability to keep it, and of the sinful pollution of their nature, hearts, and lives;[3] to humble them in the sense of their sin and misery,[4] and thereby help them to a clearer sight of the need they have of Christ,[5] and of the perfection of his obedience.[6]",
    proofTexts: [
      "Lev. 11:44-45; 20:7-8; Rom. 7:12",
      "Micah 6:8; James 2:10-11",
      "Psa. 19:11-12; Rom. 3:20; 7:7",
      "Rom. 3:9, 23",
      "Gal. 3:21-22",
      "Rom. 10:4",
    ],
  },
  {
    id: 96,
    question:
      "What particular use is there of the moral law to unregenerate men?",
    answer:
      "The moral law is of use to unregenerate men, to awaken their consciences to flee from wrath to come,[1] and to drive them to Christ;[2] or, upon their continuance in the estate and way of sin, to leave them inexcusable,[3] and under the curse thereof.[4]",
    proofTexts: ["I Tim. 1:9-10", "Gal. 3:24", "Rom. 1:20; 2:15", "Gal. 3:10"],
  },
  {
    id: 97,
    question: "What special use is there of the moral law to the regenerate?",
    answer:
      "Although they that are regenerate, and believe in Christ, be delivered from the moral law as a covenant of works,[1] so as thereby they are neither justified [2] nor condemned;[3] yet, besides the general uses thereof common to them with all men, it is of special use, to show them how much they are bound to Christ for his fulfilling it, and enduring the curse thereof in their stead, and for their good;[4] and thereby to provoke them to more thankfulness,[5] and to express the same in their greater care to conform themselves thereunto as the rule of their obedience.[6]",
    proofTexts: [
      "Rom. 6:14; 7:4, 6; Gal. 4:4-5",
      "Rom. 3:20",
      "Gal. 5:23; Rom. 8:1",
      "Rom. 7:24-25; 8:3-4; Gal. 3:13-14",
      "Luke 1:68-69, 74-75; Col. 1:12-14",
      "Rom. 7:22; 12:2; Titus 2:11-14",
    ],
  },
  {
    id: 98,
    question: "Where is the moral law summarily comprehended?",
    answer:
      "The moral law is summarily comprehended in the ten commandments, which were delivered by the voice of God upon mount Sinai, and written by him in two tables of stone;[1] and are recorded in the twentieth chapter of Exodus. The four first commandments containing our duty to God, and the other six our duty to man.[2]",
    proofTexts: ["Deut. 10:4; Exod. 34:1-4", "Matt. 22:37-38, 40"],
  },
  {
    id: 101,
    question: "What is the preface to the ten commandments?",
    answer:
      "The preface to the ten commandments is contained in these words, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage.[1] Wherein God manifesteth his sovereignty, as being JEHOVAH, the eternal, immutable, and almighty God;[2] having his being in and of himself,[3] and giving being to all his words [4] and works:[5] and that he is a God in covenant, as with Israel of old, so with all his people;[6] who, as he brought them out of their bondage in Egypt, so he delivers us from our spiritual thraldom;[7] and that therefore we are bound to take him for our God alone, and to keep all his commandments.[8]",
    proofTexts: [
      "Exod. 20:2",
      "Isa. 44:6",
      "Exod. 3:14",
      "Exod. 6:3",
      "Acts 17:24, 28",
      "Gen. 17:7; Rom. 3:29",
      "Luke 1:74-75",
      "I Peter 1:15-18; Lev. 18:30, 19:37",
    ],
  },
  {
    id: 102,
    question:
      "What is the sum of the four commandments which contain our duty to God?",
    answer:
      "The sum of the four commandments containing our duty to God is, to love the Lord our God with all our heart, and with all our soul, and with all our strength, and with all our mind.[1]",
    proofTexts: ["Luke 10:27"],
  },
  {
    id: 103,
    question: "Which is the first commandment?",
    answer:
      "The first commandment is, Thou shall have no other gods before me.[1]",
    proofTexts: ["Exod. 20:3"],
  },
  {
    id: 104,
    question: "What are the duties required in the first commandment?",
    answer:
      "The duties required in the first commandment are, the knowing and acknowledging of God to be the only true God, and our God;[1] and to worship and glorify him accordingly,[2] by thinking,[3] meditating,[4] remembering,[5] highly esteeming,[6] honoring,[7] adoring,[8] choosing,[9] loving,[10] desiring,[11] fearing of him;[12] believing him;[13] trusting,[14] hoping,[15] delighting,[16] rejoicing in him;[17] being zealous for him;[18] calling upon him, giving all praise and thanks,[19] and yielding all obedience and submission to him with the whole man;[20] being careful in all things to please him,[21] and sorrowful when in anything he is offended;[22] and walking humbly with him.[23]",
    proofTexts: [
      "I Chr. 28:9; Deut 26:17; Isa. 43:10; Jer. 14:22",
      "Psa. 29:2; 95:6-7; Matt. 4:10",
      "Mal. 3:16",
      "Psa. 63:6",
      "Eccl. 12:1",
      "Psa. 71:19",
      "Mal. 1:6",
      "Isa. 45:23",
      "Josh. 24:15, 22",
      "Deut. 6:5",
      "Psa. 73:25",
      "Isa. 8:13",
      "Exod. 14:31",
      "Isa. 26:4",
      "Psa. 130:7",
      "Psa. 37:4",
      "Psa. 32:11",
      "Rom. 12:11; Num. 25:11",
      "Phil. 4:6",
      "Jer. 7:28; James 4:7",
      "I John 3:22",
      "Jer. 31:18; Psa. 119:136",
      "Micah 6:8",
    ],
  },
  {
    id: 105,
    question: "What are the sins forbidden in the first commandment?",
    answer:
      "The sins forbidden in the first commandment are, atheism, in denying or not having a God;[1] Idolatry, in having or worshiping more gods than one, or any with or instead of the true God;[2] the not having and avouching him for God, and our God;[3] the omission or neglect of anything due to him, required in this commandment;[4] ignorance,[5] forgetfulness,[6] misapprehensions,[7] false opinions,[8] unworthy and wicked thoughts of him;[9] bold and curious searching into his secrets;[10] all profaneness,[11] hatred of God;[12] self-love,[13] self-seeking,[14] and all other inordinate and immoderate setting of our mind, will, or affections upon other things, and taking them off from him in whole or in part;[15] vain credulity,[16] unbelief,[17] heresy,[18] misbelief,[19] distrust,[20] despair,[21] incorrigibleness,[22] and insensibleness under judgments,[23] hardness of heart,[24] pride,[25] presumption,[26] carnal security,[27] tempting of God;[28] using unlawful means,[29] and trusting in lawful means;[30] carnal delights and joys;[31] corrupt, blind, and indiscreet zeal;[32] lukewarmness,[33] and deadness in the things of God;[34] estranging ourselves, and apostatizing from God;[35] praying, or giving any religious worship, to saints, angels, or any other creatures;[36] all compacts and consulting with the devil,[37] and hearkening to his suggestions;[38] making men the lords of our faith and conscience;[39] slighting and despising God and his commands;[40] resisting and grieving of his Spirit,[41] discontent and impatience at his dispensations, charging him foolishly for the evils he inflicts on us;[42] and ascribing the praise of any good we either are, have, or can do, to fortune,[43] idols,[44] ourselves,[45] or any other creature.[46]",
    proofTexts: [
      "Psa. 14:1; Eph. 2:12",
      "Jer. 2:27-28; I Thess. 1:9",
      "Psa. 81:11",
      "Isa. 43:22-24",
      "Jer. 4:22; Hosea 4:1, 6",
      "Jer. 2:32",
      "Acts 17:23, 29",
      "Isa. 40:18",
      "Psa. 50:21",
      "Deut. 29:29",
      "Titus 1:16; Heb. 12:16",
      "Rom. 1:30",
      "II Tim. 3:2",
      "Phil. 2:21",
      "I John 2:15-16; I Sam. 2:29; Col. 3:2, 5",
      "I John 4:1",
      "Heb. 3:12",
      "Gal. 5:20; Titus 3:10",
      "Acts 26:9",
      "Psa. 78:22",
      "Gen. 4:13",
      "Jer. 5:3",
      "Isa. 42:25",
      "Rom. 2:5",
      "Jer. 13:15",
      "Psa. 19:13",
      "Zeph. 1:12",
      "Matt. 4:7",
      "Rom. 3:8",
      "Jer. 17:5",
      "II Tim. 3:4",
      "Gal. 4:17; John 16:2; Rom. 10:2; Luke 9:54-55",
      "Rev. 3:16",
      "Rev. 3:1",
      "Ezek. 14:5; Isa. 1:4-5",
      "Rom. 1:25, 10:13-14; Hosea 4:12; Acts 10:25-26; Rev. 19:10; Matt. 4:10; Col. 2:18",
      "Lev. 20:6; I Sam. 28:7, 11; I Chr. 10:13-14",
      "Acts 5:3",
      "II Cor. 1:24; Matt. 23:9",
      "Deut. 32:15; II Sam. 12:9; Prov. 13:13",
      "Acts 7:51; Eph. 4:30",
      "Psa. 73:2-3, 13-15, 22; Job 1:22",
      "I Sam. 6:7-9",
      "Dan. 5:23",
      "Deut. 8:17; Dan. 4:30",
      "Hab. 1:16",
    ],
  },
  {
    id: 106,
    question:
      "What are we specially taught by these words before me in the first commandment?",
    answer:
      "These words before me, or before my face, in the first commandment, teach us, that God, who seeth all things, taketh special notice of, and is much displeased with, the sin of having any other God: that so it may be an argument to dissuade from it, and to aggravate it as a most impudent provocation:[1] as also to persuade us to do as in his sight,: Whatever we do in his service.[2]",
    proofTexts: ["Ezek. 8:5-18; Psa. 44:20-21", "I Chr. 28:9"],
  },
  {
    id: 107,
    question: "Which is the second commandment?",
    answer:
      "The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: Thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and shewing mercy unto thousands of them that love me, and keep my commandments.\n[1]",
    proofTexts: ["Exod. 20:4-6"],
  },
  {
    id: 108,
    question: "What are the duties required in the second commandment?",
    answer:
      "The duties required in the second commandment are, the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath instituted in his word;[1] particularly prayer and thanksgiving in the name of Christ;[2] the reading, preaching, and hearing of the word;[3] the administration and receiving of the sacraments;[4] church government and discipline;[5] the ministry and maintenance thereof;[6] religious fasting;[7] swearing by the name of God,[8] and vowing unto him:[9] as also the disapproving, detesting, opposing, all false worship;[10] and, according to each one’s place and calling, removing it, and all monuments of idolatry.[11]",
    proofTexts: [
      "Deut. 32:46-47; Matt. 28:20; Acts 2:42; I Tim. 6:13-14",
      "Phil. 4:6; Eph. 5:20",
      "Deut. 17:18-19; Acts 15:21; II Tim. 4:2; James 1:21-22",
      "Matt. 28:19; I Cor. 11:23-30",
      "Matt. 16:19; 18:15-17; I Cor. 5:1-13; 12:28",
      "Eph. 4:11-12; I Tim. 5:17-18; I Cor. 9:1-15",
      "Joel 2:12-13; I Cor. 7:5",
      "Deut. 6:13",
      "Isa. 19:21; Psa. 76:11",
      "Acts 17:22; Col. 2:21-23",
      "Deut. 7:5; Isa. 30:22",
    ],
  },
  {
    id: 109,
    question: "What are the sins forbidden in the second commandment?",
    answer:
      "The sins forbidden in the second commandment are, all devising,[1] counseling,[2] commanding,[3] using,[4] and anywise approving, any religious worship not instituted by God himself;[5] tolerating a false religion;[6] the making any representation of God, of all or of any of the three persons, either inwardly in our mind, or outwardly in any kind of image or likeness of any creature whatsoever;[7] all worshiping of it,[8] or God in it or by it;[9] the making of any representation of feigned deities,[10] and all worship of them, or service belonging to them;[11] all superstitious devices,[12] corrupting the worship of God,[13] adding to it, or taking from it,[14] whether invented and taken up of ourselves,[15] or received by tradition from others,[16] though under the title of antiquity,[17] custom,[18] devotion,[19] good intent, or any other pretense whatsoever;[20] simony;[21] sacrilege;[22] all neglect,[23] contempt,[24] hindering,[25] and opposing the worship and ordinances which God hath appointed.[26]",
    proofTexts: [
      "Num. 15:39",
      "Deut. 13:6-8",
      "Hosea 5:11; Micah 6:16",
      "I Kings 11:33; 12:33",
      "Deut. 12:30-32",
      "Deut. 13:6-12; Zech. 13:2-3; Rev. 2:2, 14-15, 20, Rev. 17:12, 16-17",
      "Deut. 4:15-19; Acts 17:29; Rom. 1:21-23, 25",
      "Dan. 3:18; Gal. 4:8",
      "Exod. 32:5",
      "Exod. 32:8",
      "I Kings 18:26, 28; Isa. 65:11",
      "Acts 17:22; Col. 2:21-23",
      "Mal. 1:7-8, 14",
      "Deut. 4:2",
      "Psa. 106:39",
      "Matt. 15:9",
      "I Peter 1:18",
      "Jer. 44:17",
      "Isa. 65:3-5; Gal. 1:13-14",
      "I Sam. 13:11-12; 15:21",
      "Acts 8:18",
      "Rom. 2:22; Mal. 3:8",
      "Exod. 4:24-26",
      "Matt. 22:5; Mal. 1:7, 13",
      "Matt. 23:13",
      "Acts 13:44-45; I Thess. 2:15-16",
    ],
  },
  {
    id: 110,
    question:
      "What are the reasons annexed to the second commandment, the more to enforce it?",
    answer:
      "The reasons annexed to the second commandment, the more to enforce it, contained in these words, For I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and showing mercy unto thousands of them that love me, and keep my commandments;[1] are, besides God’s sovereignty over us, and propriety in us,[2] his fervent zeal for his own worship,[3] and his revengeful indignation against all false worship, as being a spiritual whoredom;[4] accounting the breakers of this commandment such as hate him, and threatening to punish them unto divers generations;[5] and esteeming the observers of it such as love him and keep his commandments, and promising mercy to them unto many generations.[6]",
    proofTexts: [
      "Exod. 20:5-6",
      "Psa. 45:11; Rev. 20:3-4",
      "Exod. 34:13-14",
      "I Cor. 10:20-22; Jer. 7:18-20; Ezek. 16:26-27; Deut. 32:16-20",
      "Hosea 2:2-4",
      "Deut. 5:29",
    ],
  },
  {
    id: 111,
    question: "Which is the third commandment?",
    answer:
      "The third commandment is, Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that taketh his name in vain.[1]",
    proofTexts: ["Exod. 20:7"],
  },
  {
    id: 112,
    question: "What is required in the third commandment?",
    answer:
      "The third commandment requires, That the name of God, his titles, attributes,[1] ordinances,[2] the word,[3] sacraments,[4] prayer,[5] oaths,[6] vows,[7] lots,[8] his works,[9] and whatsoever else there is whereby he makes himself known, be holily and reverently used in thought,[10] meditation,[11] word,[12] and writing;[13] by an holy profession,[14] and Answerable conversation,[15] to the glory of God,[16] and the good of ourselves,[17] and others.[18]",
    proofTexts: [
      "Matt. 6:9; Deut. 28:58; Psa. 29:2; 68:4; Rev. 15:3-4",
      "Mal. 1:14; Eccl. 5:1",
      "Psa. 138:2",
      "I Cor. 11:24-25, 28-29",
      "I Tim. 2:8",
      "Jer. 4:2",
      "Eccl. 5:2, 4-6",
      "Acts 1:24, 26",
      "Job 36:24",
      "Mal. 3:16",
      "Psa. 8:1, 3-4, 9",
      "Col. 3:17; Psa. 105:2, 5",
      "Psa. 102:18",
      "I Peter 3:15; Micah 4:5",
      "Phil. 1:27",
      "Rom. 3:5, 7; 6:1-2",
      "Jer. 32:39",
      "I Peter 2:12",
    ],
  },
  {
    id: 113,
    question: "What are the sins forbidden in the third commandment?",
    answer:
      "The sins forbidden in the third commandment are, the not using of God’s name as is required;[1] and the abuse of it in an ignorant,[2] vain,[3] irreverent, profane,[4] superstitious,[5] or wicked mentioning, or otherwise using his titles, attributes,[6] ordinances,[7] or works,[8] by blasphemy,[9] perjury;[10] all sinful cursings,[11] oaths,[12] vows,[13] and lots;[14] violating of our oaths and vows, if lawful;[15] and fulfilling them, if of things unlawful;[16] murmuring and quarreling at,[17] curious prying into,[18] and misapplying of God’s decrees [19] and providences;[20] misinterpreting,[21] misapplying,[22] or any way perverting the word, or any part of it,[23] to profane jests,[24] curious or unprofitable Questions,[25] vain janglings, or the maintaining of false doctrines;[26] abusing it, the creatures, or anything contained under the name of God, to charms,[27] or sinful lusts and practices;[28] the maligning,[29] scorning,[30] reviling,[31] or any wise opposing of God’s truth, grace, and ways;[32] making profession of religion in hypocrisy, or for sinister ends;[33] being ashamed of it,[34] or a shame to it, by unconformable,[35] unwise,[36] unfruitful,[37] and offensive walking,[38] or backsliding from it.[39]",
    proofTexts: [
      "Mal. 2:2",
      "Acts 17:23",
      "Prov. 30:9",
      "Mal. 1:6-7, 12; 3:14",
      "I Sam. 4:3-5; Jer. 7:4, 9-10, 14, 31; Col. 2:20-22",
      "II Kings 18:30, 35; Exod. 5:2; Psa. 139:20",
      "Psa. 50:16-17",
      "Psa. 50:16-17",
      "Isa. 5:12",
      "II Kings 19:22; Lev. 24:11",
      "Zech. 5:4; 8:17",
      "I Sam. 17:43; II Sam. 16:5",
      "Jer. 5:7; 23:10",
      "Deut. 23:18; Acts 23:12, 14",
      "Esth. 3:7; 9:24; Psa. 22:18",
      "Psa. 24:4, Ezek. 17:16, 18-19",
      "Mark 6:26; I Sam. 25:22, 32-34",
      "Rom. 9:14, 19-20",
      "Deut. 29:29",
      "Rom. 3:5, 7; 6:1-2",
      "Eccl. 8:11; 9:3; Psa. 39:1-13",
      "Matt. 5:21-48",
      "Ezek 13:22",
      "II Peter 3:16; Matt. 22:24-31",
      "Isa. 22:18; Jer. 23:34, 36, 38",
      "I Tim. 1:4, 6-7; 6:4-5, 20; II Tim. 2:14; Titus. 3:9",
      "Deut. 18:10-14; Acts 19:13",
      "II Tim. 4:3-4; Rom. 13:13-14; I Kings 21:9-10; Jude 1:4",
      "Acts 13:45; I John 3:12",
      "Psa. 1:1; II Peter 3:3",
      "I Peter 4:4",
      "Acts 4:18; 13:45-46, 50; 19:9; I Thess 2:16; Heb. 10:29",
      "II Tim. 3:5; Matt. 6:1-2, 5, 16; 23:14",
      "Mark 8:38",
      "Psa. 73:14-15",
      "I Cor. 6:5-6; Eph. 5:15-17",
      "Isa. 5:4; II Peter 1:8-9",
      "Rom. 2:23-24",
      "Gal. 3:1, 3; Heb. 6:6",
    ],
  },
  {
    id: 114,
    question: "What reasons are annexed to the third commandment?",
    answer:
      "The reasons annexed to the third commandment, in these words, The Lord thy God, and, For the Lord will not hold him guiltless that taketh his name in vain,[1] are, because he is the Lord and our God, therefore his name is not to be profaned, or any way abused by us;[2] especially because he will be so far from acquitting and sparing the transgressors of this commandment, as that he will not suffer them to escape his righteous judgment,[3] albeit many such escape the censures and punishments of men.[4]",
    proofTexts: [
      "Exod. 20:7",
      "Lev. 19:12",
      "Ezek. 36:21-23; Deut. 28:58-59; Zech. 5:2-4",
      "I Sam. 2:12, 17, 22, 24; 3:18",
    ],
  },
  {
    id: 115,
    question: "Which is the fourth commandment?",
    answer:
      "The fourth commandment is, Remember the sabbath day, to keep it holy. Six days shalt thou labor, and do all thy work: but the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it.[1]",
    proofTexts: ["Exod. 20:8-11"],
  },
  {
    id: 116,
    question: "What is required in the fourth commandment?",
    answer:
      "The fourth commandment requires of all men the sanctifying or keeping holy to God such set times as he hath appointed in his word, expressly one whole day in seven; which was the seventh from the beginning of the world to the resurrection of Christ, and the first day of the week ever since, and so to continue to the end of the world; which is the Christian sabbath,[1] and in the New Testament called The Lord’s day.[2]",
    proofTexts: [
      "Deut. 5:12, 14, 18; Gen. 2:2-3; I Cor. 16:1-2; Acts 20:7; Matt. 5:17-18; Isa. 56:2, 4, 6-7",
      "Rev. 1:10",
    ],
  },
  {
    id: 117,
    question: "How is the sabbath or the Lord’s day to be sanctified?",
    answer:
      "The sabbath or Lord’s day is to be sanctified by an holy resting all the day,[1] not only from such works as are at all times sinful, but even from such worldly employments and recreations as are on other days lawful;[2] and making it our delight to spend the whole time (except so much of it as is to betaken up in works of necessity and mercy)[3] in the public and private exercises of God’s worship:[4] and, to that end, we are to prepare our hearts, and with such foresight, diligence, and moderation, to dispose and seasonably dispatch our worldly business, that we may be the more free and fit for the duties of that day.[5]",
    proofTexts: [
      "Exod. 20:8, 10",
      "Exod. 16:25-28; Neh. 13:15-22; Jer. 17:21-22",
      "Matt. 12:1-13",
      "Isa. 58:13-14; 66:23; Luke 4:16; Acts 20:7; I Cor. 16:1-2; Psa. 92:1-15; Lev. 23:3",
      "Exod. 16:22, 25-26, 29; 20:8; Luke 23:54, 56; Neh. 13:19",
    ],
  },
  {
    id: 118,
    question:
      "Why is the charge of keeping the sabbath more specially directed to governors of families, and other superiors?",
    answer:
      "The charge of keeping the sabbath is more specially directed to governors of families, and other superiors, because they are bound not only to keep it themselves, but to see that it be observed by all those that are under their charge; and because they are prone ofttimes to hinder them by employments of their own.[1]",
    proofTexts: [
      "Exod. 20:10; 23:12; Josh. 24:15; Neh. 13:15, 17; Jer. 17:20-22",
    ],
  },
  {
    id: 119,
    question: "What are the sins forbidden in the fourth commandment?",
    answer:
      "The sins forbidden in the fourth commandment are, all omissions of the duties required,[1] all careless, negligent, and unprofitable performing of them, and being weary of them;[2] all profaning the day by idleness, and doing that which is in itself sinful;[3] and by all needless works, words, and thoughts, about our worldly employments and recreations.[4]",
    proofTexts: [
      "Ezek. 22:26",
      "Acts 15:7, 9; Ezek. 33:30-32; Amos 8:5; Mal. 1:13",
      "Ezek. 23:38",
      "Jer. 17:24, 27; Isa. 58:13",
    ],
  },
  {
    id: 120,
    question:
      "What are the reasons annexed to the fourth commandment, the more to enforce it?",
    answer:
      "The reasons annexed to the fourth commandment, the more to enforce it, are taken from the equity of it, God allowing us six days of seven for our own affairs, and reserving but one for himself, in these words, Six days shalt thou labor, and do all thy work:[1] from God’s challenging a special propriety in that day, The seventh day is the sabbath of the Lord thy God:[2] from the example of God, who in six days made heaven and earth, the sea, and all that in them is, and rested the seventh day: and from that blessing which God put upon that day, not only in sanctifying it to be a day for his service, but in ordaining it to be a means of blessing to us in our sanctifying it; Wherefore the Lord blessed the sabbath day, and hallowed it.[3]",
    proofTexts: ["Exod. 20:9", "Exod. 20:10", "Exod. 20:11"],
  },
  {
    id: 121,
    question:
      "Why is the word Remember set in the beginning of the fourth commandment?",
    answer:
      "The word Remember is set in the beginning of the fourth commandment,[1] partly, because of the great benefit of remembering it, we being thereby helped in our preparation to keep it,[2] and, in keeping it, better to keep all the rest of the commandments,[3] and to continue a thankful remembrance of the two great benefits of creation and redemption, which contain a short abridgment of religion;[4] and partly, because we are very ready to forget it,[5] for that there is less light of nature for it,[6] and yet it restraineth our natural liberty in things at other times lawful;[7] that it comesthbut once in seven days, and many worldly businesses come between, and too often take off our minds from thinking of it, either to prepare for it, or to sanctify it;[8] and that Satan with his instruments much labor to blot out the glory, and even the memory of it, to bring in all irreligion and impiety.[9]",
    proofTexts: [
      "Exod. 20:8",
      "Exod. 16:23; Luke 23:54, 56; Mark 15:42; Neh. 13:19",
      "Psa. 92:13-14; Ezek. 20:12, 19-20",
      "Gen. 2:2-3; Psa. 118:22, 24; Acts 4:10, 11; Rev. 1:10",
      "Ezek. 22:26",
      "Neh. 9:14",
      "Exod. 34:21",
      "Deut. 5:14-15; Amos 8:5",
      "Lam. 1:7; Jer. 17:21-23; Neh. 13:15-23",
    ],
  },
  {
    id: 122,
    question:
      "What is the sum of the six commandments which contain our duty to man?",
    answer:
      "The sum of the six commandments which contain our duty to man is, to love our neighbor as ourselves,[1] and to do to others what we would have them to do to us.[2]",
    proofTexts: ["Matt. 22:39", "Matt. 7:12"],
  },
  {
    id: 123,
    question: "Which is the fifth commandment?",
    answer:
      "The fifth commandment is, Honor thy father and thy mother; that thy days may be long upon the land which the Lord thy God giveth thee.[1]",
    proofTexts: ["Exod. 20:12"],
  },
  {
    id: 124,
    question: "Who are meant by father and mother in the fifth commandment?",
    answer:
      "By father and mother, in the fifth commandment, are meant, not only natural parents,[1] but all superiors in age [2] and gifts;[3] and especially such as, by God’s ordinance, are over us in place of authority, whether in family,[4] church,[5] or commonwealth.[6]",
    proofTexts: [
      "Prov. 23:22-25; Eph. 6:1-2",
      "I Tim. 5:1-2",
      "Gen. 4:20-22; 45:8",
      "II Kings 5:13",
      "II Kings 2:12; 13:14; Gal. 4:19",
      "Isa. 49:23",
    ],
  },
  {
    id: 125,
    question: "Why are superiors styled Father and Mother?",
    answer:
      "Superiors are styled Father and Mother, both to teach them in all duties toward their inferiors, like natural parents, to express love and tenderness to them, according to their several relations;[1] and to work inferiors to a greater willingness and cheerfulness in performing their duties to their superiors, as to their parents.[2]",
    proofTexts: [
      "Eph. 6:4; II Cor. 12:14; I Thess. 2:7-8, 11; Num. 11:11-12",
      "I Cor. 4:14-16; II Kings 5:13",
    ],
  },
  {
    id: 126,
    question: "What is the general scope of the fifth commandment?",
    answer:
      "The general scope of the fifth commandment is, the performance of those duties which we mutually owe in our several relations, as inferiors, superiors, or equals.[1]",
    proofTexts: ["Eph. 5:21; I Peter 2:17; Rom. 12:10"],
  },
  {
    id: 127,
    question: "What is the honor that inferiors owe to their superiors?",
    answer:
      "The honor which inferiors owe to their superiors is, all due reverence in heart,[1] word,[2] and behavior;[3] prayer and thanksgiving for them;[4] imitation of their virtues and graces;[5] willing obedience to their lawful commands and counsels;[6] due submission to their corrections;[7] fidelity to,[8] defense [9] and maintenance of their persons and authority, according to their several ranks, and the nature of their places;[10] bearing with their infirmities, and covering them in love, that so they may be an honor to them and to their government.[11]",
    proofTexts: [
      "Mal. 1:6; Lev. 19:3",
      "Prov. 31:28; I Peter 3:6",
      "Lev. 19:32; I Kings 2:19",
      "I Tim. 2:1-2",
      "Heb. 13:7; Phil. 3:17",
      "Eph. 6:1-2, 5-7; I Peter 2:13-14; Rom. 13:1-5; Heb. 13:17; Prov. 4:3-4; 23:22; Exod. 18:19, 24",
      "Heb. 12:9; I Peter 2:18-20",
      "Titus 2:9-10",
      "I Sam. 26:15-16; II Sam. 18:3; Est. 6:2",
      "Matt. 22:21; Rom. 13:6-7; I Tim. 5:17-18; Gal. 6:6; Gen. 45:11; 47:12",
      "Psa. 127:3-5; Prov. 31:23",
    ],
  },
  {
    id: 128,
    question: "What are the sins of inferiors against their superiors?",
    answer:
      "The sins of inferiors against their superiors are, all neglect of the duties required toward them;[1] envying at,[2] contempt of,[3] and rebellion [4] against, their persons [5] and places,[6] in their lawful counsels,[7] commands, and corrections;[8] cursing, mocking,[9] and all such refractory and scandalous carriage, as proves a shame and dishonor to them and their government.[10]",
    proofTexts: [
      "Matt. 15:4-6",
      "Num. 11:28-29",
      "I Sam. 8:7; Isa. 3:5",
      "II Sam. 15:1-12",
      "Exod. 21:15",
      "I Sam. 10:27",
      "I Sam. 2:25",
      "Deut. 21:18-21",
      "Prov. 30:11, 17",
      "Prov. 19:26",
    ],
  },
  {
    id: 129,
    question: "What is required of superiors towards their inferiors?",
    answer:
      "It is required of superiors, according to that power they receive from God, and that relation wherein they stand, to love,[1] pray for,[2] and bless their inferiors;[3] to instruct,[4] counsel, and admonish them;[5] countenancing,[6] commending,[7] and rewarding such as do well;[8] and discountenancing,[9] reproving, and chastising such as do ill;[10] protecting,[11] and providing for them all things necessary for soul [12] and body:[13] and by grave, wise, holy, and exemplary carriage, to procure glory to God,[14] honor to themselves,[15] and so to preserve that authority which God hath put upon them.[16]",
    proofTexts: [
      "Col. 3:19; Titus 2:4",
      "I Sam. 12:23; Job 1:5",
      "I Kings 8:55-56; Heb. 7:7; Gen. 49:28",
      "Deut. 6:6-7",
      "Eph. 6:4",
      "I Peter 3:7",
      "I Peter 2:14; Rom. 13:3",
      "Esth. 6:3",
      "Rom. 13:3-4",
      "Prov. 29:15; I Peter 2:14",
      "Job 29:12-17; Isa. 1:10, 17",
      "Eph. 6:4",
      "I Tim. 5:8",
      "I Tim. 4:12; Titus 2:3-5",
      "I Kings 3:28",
      "Titus 2:15",
    ],
  },
  {
    id: 130,
    question: "What are the sins of superiors?",
    answer:
      "The sins of superiors are, besides the neglect of the duties required of them,[1] an inordinate seeking of themselves,[2] their own glory,[3] ease, profit, or pleasure;[4] commanding things unlawful,[5] or not in the power of inferiors to perform;[6] counseling,[7] encouraging,[8] or favoring them in that which is evil;[9] dissuading, discouraging, or discountenancing them in that which is good;[10] correcting them unduly;[11] careless exposing, or leaving them to wrong, temptation, and danger;[12] provoking them to wrath;[13] or any way dishonoring themselves, or lessening their authority, by an unjust, indiscreet, rigorous, or remiss behavior.[14]",
    proofTexts: [
      "Ezek. 34:2-4",
      "Phil. 2:21",
      "John 5:44; 7:18",
      "Isa. 56:10-11; Deut. 17:17",
      "Dan. 3:4-6; Acts 4:17-18",
      "Exod. 5:10-18; Matt. 23:2, 4",
      "Matt. 14:8; Mark 6:24",
      "II Sam. 13:28",
      "I Sam. 3:13",
      "John 7:46-49; Col. 3:21; Exod. 5:17",
      "I Peter 2:18-20; Heb. 12:9; Deut. 25:3",
      "Gen. 38:11, 26; Acts 18:17",
      "Eph. 6:4",
      "Gen. 9:21; I Kings 1:6; 12:13-16; I Sam. 2:29-31",
    ],
  },
  {
    id: 131,
    question: "What are the duties of equals?",
    answer:
      "The duties of equals are, to regard the dignity and worth of each other,[1] in giving honor to go one before another;[2] and to rejoice in each other’s gifts and advancement, as their own.[3]",
    proofTexts: ["I Peter 2:17", "Rom. 12:10", "Rom. 12:15-16; Phil. 2:3-4"],
  },
  {
    id: 132,
    question: "What are the sins of equals?",
    answer:
      "The sins of equals are, besides the neglect of the duties required,[1] the undervaluing of the worth,[2] envying the gifts,[3] grieving at the advancement of prosperity one of another;[4] and usurping preeminence one over another.[5]",
    proofTexts: [
      "Rom. 13:8",
      "II Tim. 3:3",
      "Acts 7:9; Gal. 5:26",
      "Num. 12:2; Est. 6:12-13",
      "III John 1:9; Luke 22:24",
    ],
  },
  {
    id: 133,
    question:
      "What is the reason annexed to the fifth commandment, the more to enforce it?",
    answer:
      "The reason annexed to the fifth commandment, in these words, That thy days may be long upon the land which the Lord thy God giveth thee,[1] is an express promise of long life and prosperity, as far as it shall serve for God’s glory and their own good, to all such as keep this commandment.[2]",
    proofTexts: ["Exod. 20:12", "Deut. 5:16; I Kings 8:25; Eph. 6:2-3"],
  },
  {
    id: 134,
    question: "Which is the sixth commandment?",
    answer: "The sixth commandment is, Thou shalt not kill.[1]",
    proofTexts: ["Exod. 20:13"],
  },
  {
    id: 135,
    question: "What are the duties required in the sixth commandment?",
    answer:
      "The duties required in the sixth commandment are, all careful studies, and lawful endeavors, to preserve the life of ourselves [1] and others [2] by resisting all thoughts and purposes,[3] subduing all passions,[4] and avoiding all occasions,[5] temptations,[6] and practices, which tend to the unjust taking away the life of any;[7] by just defense thereof against violence,[8] patient bearing of the hand of God,[9] quietness of mind,[10] cheerfulness of spirit;[11] a sober use of meat,[12] drink,[13] physic,[14] sleep,[15] labor,[16] and recreations;[17] by charitable thoughts,[18] love,[19] compassion,[20] meekness, gentleness, kindness;[21] peaceable,[22] mild and courteous speeches and behavior;[23] forbearance, readiness to be reconciled, patient bearing and forgiving of injuries, and requiting good for evil;[24] comforting and succoring the distressed, and protecting and defending the innocent.[25]",
    proofTexts: [
      "Eph. 5:28-29",
      "I Kings 18:4",
      "Jer. 26:15-16; Acts 23:12, 16-17, 21, 27",
      "Eph. 4:26-27",
      "II Sam. 2:22; Deut. 22:8",
      "Matt. 4:6-7; Prov. 1:10-11, 15-16",
      "I Sam. 24:2; 26:9-11; Gen. 37:21-22",
      "Psa. 82:4; Prov. 24:11-12; I Sam. 14:45",
      "James 5:7-11; Heb. 12:9",
      "I Thess. 4:11; I Peter 3:3-4; Psa. 37:8-11",
      "Prov. 17:22",
      "Prov. 25:16, 27",
      "I Tim. 5:23",
      "Isa. 38:21",
      "Psa. 127:2",
      "Eccl. 5:12; II Thess. 3:10, 12; Prov. 16:26",
      "Eccl. 3:4, 11",
      "I Sam. 19:4-5; 22:13-14",
      "Rom. 13:10",
      "Luke 10:33-34",
      "Col. 3:12-13",
      "James 3:17",
      "I Peter 3:8-11; Prov. 15:1; Judg. 8:1-3",
      "Matt. 5:24; Eph. 4:2, 32; Rom. 12:17, 20-21",
      "I Thess. 5:14; Job 31:19-20; Matt. 25:35-36; Prov. 31:8-9",
    ],
  },
  {
    id: 136,
    question: "What are the sins forbidden in the sixth commandment?",
    answer:
      "The sins forbidden in the sixth commandment are, all taking away the life of ourselves,[1] or of others,[2] except in case of public justice,[3] lawful war,[4] or necessary defense;[5] the neglecting or withdrawing the lawful and necessary means of preservation of life;[6] sinful anger,[7] hatred,[8] envy,[9] desire of revenge;[10] all excessive passions,[11] distracting cares;[12] immoderate use of meat, drink,[13] labor,[14] and recreations;[15] provoking words,[16] oppression,[17] quarreling,[18] striking, wounding,[19] and: Whatsoever else tends to the destruction of the life of any.[20]",
    proofTexts: [
      "Acts 16:28",
      "Gen. 9:6",
      "Num. 35:31, 33",
      "Jer. 48:10; Deut. 20:1-20",
      "Exod. 22:2-3",
      "Matt. 25:42-43; James 2:15-16; Eccl. 6:1-2",
      "Matt. 5:22",
      "I John 3:15; Lev. 19:17",
      "Prov. 14:30",
      "Rom. 12:19",
      "Eph. 4:31",
      "Matt. 6:31, 34",
      "Acts 24:24",
      "Prov. 2:16-20",
      "I Tim. 2:9",
      "I Cor. 7:2, 9",
      "Prov. 5:19-20",
      "I Peter 3:7",
      "Prov. 31:11, 27-28",
      "Prov. 5:8; Gen. 39:8-10",
    ],
  },
  {
    id: 137,
    question: "Which is the seventh commandment?",
    answer: "The seventh commandment is, Thou shalt not commit adultery.[1]",
    proofTexts: ["Exod. 20:14"],
  },
  {
    id: 138,
    question: "What are the duties required in the seventh commandment?",
    answer:
      "The duties required in the seventh commandment are, chastity in body, mind, affections,[1] words,[2] and behavior;[3] and the preservation of it in ourselves and others;[4] watchfulness over the eyes and all the senses;[5] temperance,[6] keeping of chaste company,[7] modesty in apparel;[8] marriage by those that have not the gift of continency,[9] conjugal love,[10] and cohabitation;[11] diligent labor in our callings;[12] shunning all occasions of uncleanness, and resisting temptations thereunto.[13]",
    proofTexts: [
      "I Thess. 4:4; Job 31:1; I Cor. 7:34",
      "Col. 4:6",
      "I Peter 2:3",
      "I Cor. 7:2, 35-36",
      "Job 31:1",
      "Acts 24:24",
      "Prov. 2:16-20",
      "I Tim. 2:9",
      "I Cor. 7:2, 9",
      "Prov. 5:19-20",
      "I Peter 3:7",
      "Prov. 31:11, 27-28",
      "Prov. 5:8; Gen. 39:8-10",
    ],
  },
  {
    id: 139,
    question: "What are the sins forbidden in the seventh commandment?",
    answer:
      "The sins forbidden in the seventh commandment, besides the neglect of the duties required,[1] are, adultery, fornication,[2] rape, incest,[3] sodomy, and all unnatural lusts;[4] all unclean imaginations, thoughts, purposes, and affections;[5] all corrupt or filthy communications, or listening thereunto;[6] wanton looks,[7] impudent or light behavior, immodest apparel;[8] prohibiting of lawful,[9] and dispensing with unlawful marriages;[10] allowing, tolerating, keeping of stews, and resorting to them;[11] entangling vows of single life,[12] undue delay of marriage;[13] having more wives or husbands than one at the same time;[14] unjust divorce,[15] or desertion;[16] idleness, gluttony, drunkenness,[17] unchaste company;[18] lascivious songs, books, pictures, dancings, stage plays;[19] and all other provocations to, or acts of uncleanness, either in ourselves or others.[20]",
    proofTexts: [
      "Prov. 5:7",
      "Heb. 13:4; Gal. 5:19",
      "II Sam. 13:14; I Cor. 5:1",
      "Rom. 1:24, 26-27; Lev. 20:15-16",
      "Matt. 5:28; 15:19; Col. 3:5",
      "Eph. 5:3-4; Prov. 7:5, 21-22",
      "Isa. 3:16; II Peter 2:14",
      "Prov. 7:10, 13",
      "I Tim. 4:3",
      "Lev. 18:1-21; Mark 6:18; Mal. 2:11-12",
      "I Kings 15:12; II Kings 23:7; Deut. 23:17-18; Lev. 19:29; Jer. 5:7; Prov. 7:24-27",
      "Matt. 19:10-11",
      "I Cor. 7:7-9; Gen. 38:26",
      "Mal. 2:14-15; Matt. 19:5",
      "Mal. 2:16; Matt. 5:32",
      "I Cor. 7:12-13",
      "Ezek. 16:49; Prov. 23:30-33",
      "Gen. 39:10; Prov. 5:8",
      "Eph. 5:4; Ezek. 23:14-16; Isa. 3:16; 23:15-17; Mark 6:22; Rom. 13:13; I Peter 4:3",
      "II Kings 9:30; Jer. 4:30; Ezek. 23:40",
    ],
  },
  {
    id: 140,
    question: "Which is the eighth commandment?",
    answer: "The eighth commandment is, Thou shalt not steal.[1]",
    proofTexts: ["Exod. 20:15"],
  },
  {
    id: 141,
    question: "What are the duties required in the eighth commandment?",
    answer:
      "The duties required in the eighth commandment are, truth, faithfulness, and justice in contracts and commerce between man and man;[1] rendering to everyone his due;[2] restitution of goods unlawfully detained from the right owners thereof;[3] giving and lending freely, according to our abilities, and the necessities of others;[4] moderation of our judgments, wills, and affections concerning worldly goods;[5] a provident care and study to get,[6] keep, use, and dispose these things which are necessary and convenient for the sustentation of our nature, and suitable to our condition;[7] a lawful calling,[8] and diligence in it;[9] frugality;[10] avoiding unnecessary lawsuits [11] and suretyship, or other like engagements;[12] and an endeavor, by all just and lawful means, to procure, preserve, and further the wealth and outward estate of others, as well as our own.[13]",
    proofTexts: [
      "Psa. 15:2, 4; Zech. 7:4, 10; 8:16-17",
      "Rom. 13:7",
      "Lev. 6:2-5; Luke 19:8",
      "Luke 6:30, 38; I John 3:17; Eph. 4:28; Gal. 6:10",
      "I Tim. 6:6-9; Gal. 6:14",
      "I Tim. 5:8",
      "Prov. 27:23-27; Eccl. 2:24; 3:12-13; I Tim. 6:17-18; Isa. 38:1; Matt. 11:8",
      "I Cor. 7:20; Gen. 2:15, 3:19",
      "Eph. 4:28; Prov. 10:4",
      "John 6:12; Prov. 21:20",
      "I Cor. 6:1-9",
      "Prov. 6:1-6; 11:15",
      "Lev. 25:35; Deut. 22:1-4; Exod. 23:4-5; Gen. 47:14, 20; Phil. 2:4, Matt. 22:39",
    ],
  },
  {
    id: 142,
    question: "What are the sins forbidden in the eighth commandment?",
    answer:
      "The sins forbidden in the eighth commandment, besides the neglect of the duties required,[1] are, theft,[2] robbery,[3] man-stealing,[4] and receiving anything that is stolen;[5] fraudulent dealing,[6] false weights and measures,[7] removing land marks,[8] injustice and unfaithfulness in contracts between man and man,[9] or in matters of trust;[10] oppression,[11] extortion,[12] usury,[13] bribery,[14] vexatious lawsuits,[15] unjust enclosures and depopulations;[16] engrossing commodities to enhance the price;[17] unlawful callings,[18] and all other unjust or sinful ways of taking or withholding from our neighbor what belongs to him, or of enriching ourselves;[19] covetousness;[20] inordinate prizing and affecting worldly goods;[21] distrustful and distracting cares and studies in getting, keeping, and using them;[22] envying at the prosperity of others;[23] as likewise idleness,[24] prodigality, wasteful gaming; and all other ways whereby we do unduly prejudice our own outward estate,[25] and defrauding ourselves of the due use and comfort of that estate which God hath given us.[26]",
    proofTexts: [
      "James 2:15-16; I John 3:17",
      "Eph. 4:28; Psa. 42:10",
      "Psa. 62:10",
      "I Tim. 1:10",
      "Prov. 29:24; Psa. 50:18",
      "I Thess. 4:6",
      "Prov. 11:1; 20:10",
      "Deut. 19:14; Prov. 23:10",
      "Amos 8:5; Psa. 37:21",
      "Luke 16:10-12",
      "Ezek. 22:29; Lev. 25:17",
      "Matt. 23:25; Ezek. 22:12",
      "Psa. 15:5",
      "Job 15:34",
      "I Cor. 6:6-8; Prov. 3:29-30",
      "Isa. 5:8; Micah 2:2",
      "Prov. 11:26",
      "Acts 19:19, 24-25",
      "Job. 20:19; James 5:4; Prov. 21:6",
      "Luke 12:15",
      "I Tim. 6:5; Col. 3:2; Prov. 23:5; Psa. 42:10",
      "Matt. 6:25, 31, 34, Eccl. 5:12",
      "Psa. 37:1, 7; 73:3",
      "II Thess. 3:11; Prov. 18:9",
      "Prov. 21:17; 23:20-21; 28:19",
      "Eccl. 4:8; 6:2; I Tim. 5:8",
    ],
  },
  {
    id: 143,
    question: "Which is the ninth commandment?",
    answer:
      "The ninth commandment is, Thou shalt not bear false witness against thy neighbor.[1]",
    proofTexts: ["Exod. 20:16"],
  },
  {
    id: 144,
    question: "What are the duties required in the ninth commandment?",
    answer:
      "The duties required in the ninth commandment are, the preserving and promoting of truth between man and man,[1] and the good name of our neighbor, as well as our own;[12] appearing and standing for the truth;[3] and from the heart,[4] sincerely,[5] freely,[6] clearly,[7] and fully,[8] speaking the truth, and only the truth, in matters of judgment and justice,[9] and in all other things whatsoever;[10] a charitable esteem of our neighbors;[11] loving, desiring, and rejoicing in their good name;[12] sorrowing for,[13] and covering of their infirmities;[14] freely acknowledging of their gifts and graces,[15] defending their innocency;[16] a ready receiving of a good report,[17] and unwillingness to admit of an evil report,[18] concerning them; discouraging talebearers,[19] flatterers,[20] and slanderers;[21] love and care of our own good name, and defending it when need requireth;[22] keeping of lawful promises;[23] studying and practicing of whatsoever things are true, honest, lovely, and of good report.[24]",
    proofTexts: [
      "Zech. 8:16",
      "III John 1:12",
      "Prov. 31:8-9",
      "Psa. 15:2",
      "II Chr. 19:9",
      "I Sam. 19:4-5",
      "Josh. 7:19",
      "II Sam. 14:18-20",
      "Lev. 19:15; Prov. 14:5, 25",
      "II Cor. 1:17-18; Eph. 4:25",
      "Heb. 6:9; I Cor. 13:7",
      "Rom. 1:8; II John 1:4; III John 1:3-4",
      "II Cor. 2:4; 12:21",
      "Prov. 17:9; I Peter 4:8",
      "I Cor. 1:4-5, 7; II Tim. 1:4-5",
      "I Sam. 22:14",
      "I Cor. 13:6-7",
      "Psa. 15:3",
      "Prov. 25:23",
      "Prov. 26:24-25",
      "Psa. 101:5",
      "Prov. 22:1; John 8:49",
      "Psa. 15:4",
      "Phil. 4:8",
    ],
  },
  {
    id: 145,
    question: "What are the sins forbidden in the ninth commandment?",
    answer:
      "The sins forbidden in the ninth commandment are, all prejudicing the truth, and the good name of our neighbors, as well as our own,[1] especially in public judicature;[2] giving false evidence,[3] suborning false witnesses,[4] wittingly appearing and pleading for an evil cause, outfacing and overbearing the truth;[5] passing unjust sentence,[6] calling evil good, and good evil; rewarding the wicked according to the work of the righteous, and the righteous according to the work of the wicked;[7] forgery,[8] concealing the truth, undue silence in a just cause,[9] and holding our peace when iniquity calleth for either a reproof from ourselves,[10] or complaint to others;[11] speaking the truth unseasonably,[12] or maliciously to a wrong end,[13] or perverting it to a wrong meaning,[14] or in doubtful and equivocal expressions, to the prejudice of truth or justice;[15] speaking untruth,[16] lying,[17] slandering,[18] backbiting,[19] detracting,[20] tale bearing,[21] whispering,[22] scoffing,[23] reviling,[24] rash,[25] harsh,[26] and partial censuring;[27] misconstructing intentions, words, and actions;[28] flattering,[29] vainglorious boasting,[30] thinking or speaking too highly or too meanly of ourselves or others;[31] denying the gifts and graces of God;[32] aggravating smaller faults;[33] hiding, excusing, or extenuating of sins, when called to a free confession;[34] unnecessary discovering of infirmities;[35] raising false rumors,[36] receiving and countenancing evil reports,[37] and stopping our ears against just defense;[38] evil suspicion;[39] envying or grieving at the deserved credit of any,[40] endeavoring or desiring to impair it,[41] rejoicing in their disgrace and infamy;[42] scornful contempt,[43] fond admiration;[44] breach of lawful promises;[45] neglecting such things as are of good report,[46] and practicing, or not avoiding ourselves, or not hindering: What we can in others, such things as procure an ill name.[47]",
    proofTexts: [
      "I Sam. 17:28; II Sam. 1:9-10, 15-16; 16:3",
      "Lev. 19:15; Hab. 1:4",
      "Prov. 6:16, 19; 19:5",
      "Acts 6:13",
      "Jer. 9:3, 5; Acts 24:2, 5; Psa. 3:1-4; 12:3-4",
      "Prov. 17:15; I Kings 21:9-14",
      "Isa. 5:23",
      "Psa. 119:69; Luke 16:5-7; 19:8",
      "Lev. 5:1; Acts 5:3, 8-9; II Tim. 4:6",
      "I Kings 1:6; Lev. 19:17",
      "Isa. 59:4",
      "Prov. 29:11",
      "I Sam. 22:9-10; Psa. 52:1",
      "Psa. 56:5; John 2:19; Matt. 26:60-61",
      "Gen. 3:5, 26:7, 9",
      "Isa. 59:13",
      "Lev. 19:11; Col. 3:9",
      "Psa. 50:20",
      "Psa. 15:3",
      "James 4:11; Jer. 38:4",
      "Lev. 19:16",
      "Rom. 1:29-30",
      "Gen. 21:9; Gal. 4:29",
      "I Cor. 6:10",
      "Mattt. 7:1",
      "Acts 28:4",
      "Gen. 38:24; Rom. 2:1",
      "Neh. 6:6-8; Rom. 3:8; Psa. 69:10; I Sam. 1:13-15; II Sam. 10:3",
      "Psa. 12:2-3",
      "II Tim. 3:2",
      "Luke 18:9, 11; Rom. 12:16; I Cor. 4:6; Acts 12:22; Exod. 4:10-14",
      "Job 4:6, 27:5-6",
      "Matt. 7:3-5",
      "Prov. 28:13; 30:20; Gen. 3:12-13; 4:9; Jer. 2:35; II Kings 5:25",
      "Gen. 9:22; Prov. 25:9-10",
      "Exod. 23:1",
      "Prov. 29:12",
      "Acts 7:56-57; Job 31:13-14",
      "I Cor. 13:5; I Tim. 6:4",
      "Num. 11:29; Matt. 21:15",
      "Ezra 4:12-13",
      "Jer. 48:27",
      "Psa. 35:15-16, 21; Matt. 27:28-29",
      "Jude 1:16; Acts 12:22",
      "Rom. 1:31; II Tim. 3:3",
      "I Sam. 2:24",
      "II Sam. 13:12-13; Prov. 5:8-9; 6:33",
    ],
  },
  {
    id: 146,
    question: "Which is the tenth commandment?",
    answer:
      "The tenth commandment is, Thou shalt not covet thy neighbor’s house, thou shalt not covet thy neighbor’s wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbor’s.[1]",
    proofTexts: ["Exod. 20:17"],
  },
  {
    id: 147,
    question: "What are the duties required in the tenth commandment?",
    answer:
      "The duties required in the tenth commandment are, such a full contentment with our own condition,[1] and such a charitable frame of the whole soul toward our neighbor, as that all our inward motions and affections touching him, tend unto, and further all that good which is his.[2]",
    proofTexts: [
      "Heb. 13:5; I Tim. 6:6",
      "Job 31:29; Psa. 122:7-9; I Tim. 1:5; Est. 10:3; I Cor. 13:4-7",
    ],
  },
  {
    id: 148,
    question: "What are the sins forbidden in the tenth commandment?",
    answer:
      "The sins forbidden in the tenth commandment are, discontentment with our own estate;[1] envying [2] and grieving at the good of our neighbor,[3] together with all inordinate motions and affections to anything that is his.[4]",
    proofTexts: [
      "I Kings 21:4; Est. 5:13; I Cor. 10:10",
      "Gal. 5:26; James 3:14, 16",
      "Psa. 112:9-10; Neh. 2:10",
      "Rom. 7:7-8; Rom. 13:9; Col. 3:5; Deut. 5:21",
    ],
  },
  {
    id: 149,
    question: "Is any man able perfectly to keep the commandments of God?",
    answer:
      "No man is able, either of himself,[1] or by any grace received in this life, perfectly to keep the commandments of God;[2] but doth daily break them in thought,[3] word, and deed.[4]",
    proofTexts: [
      "James 3:2; John 15:5; Rom. 8:3",
      "Eccl. 7:20; I John 1:8, 10; Gal. 5:17; Rom. 7:18-19",
      "Gen. 6:5, 8:21",
      "Rom. 3:9-19; James 3:2-13",
    ],
  },
  {
    id: 150,
    question:
      "Are all transgressions of the law of God equally heinous in themselves, and in the sight of God?",
    answer:
      "All transgressions of the law of God are not equally heinous; but some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.[1]",
    proofTexts: [
      "John 19:11; Ezek. 8:6, 13, 15; I John 5:16; Psa. 78:17, 32, 56",
    ],
  },
  {
    id: 152,
    question: "What doth every sin deserve at the hands of God?",
    answer:
      "Every sin, even the least, being against the sovereignty,[1] goodness,[2] and holiness of God,[3] and against his righteous law,[4] deserveth his wrath and curse,[5] both in this life,[6] and that which is to come;[7] and cannot be expiated but by the blood of Christ.[8]",
    proofTexts: [
      "James 2:10-11",
      "Exod. 20:1-2",
      "Hab. 1:13; Lev. 10:3; 11:44-45",
      "I John 3:4; Rom. 7:12",
      "Eph. 5:6; Gal. 3:10",
      "Lam. 3:39; Deut. 28:15-68",
      "Matt. 25:41",
      "Heb. 9:22; I Peter 1:18-19",
    ],
  },
  {
    id: 153,
    question:
      "What doth God require of us, that we may escape his wrath and curse due to us by reason of the transgression of the law?",
    answer:
      "That we may escape the wrath and curse of God due to us by reason of the transgression of the law, he requireth of us repentance toward God, and faith toward our Lord Jesus Christ,[1] and the diligent use of the outward means whereby Christ communicates to us the benefits of his mediation.[2]",
    proofTexts: [
      "Acts 16:30-31; 20:21; Matt. 3:7-8; Luke 13:3, 5; John 3:16, 18",
      "Prov. 2:1-5; 8:33-36",
    ],
  },
  {
    id: 154,
    question:
      "What are the outward means whereby Christ communicates to us the benefits of his mediation?",
    answer:
      "The outward and ordinary means whereby Christ communicates to his church the benefits of his mediation, are all his ordinances; especially the word, sacraments, and prayer; all which are made effectual to the elect for their salvation.[1]",
    proofTexts: ["Matt. 28:19-20; Acts 2:42, 46-47"],
  },
  {
    id: 155,
    question: "How is the word made effectual to salvation?",
    answer:
      "The Spirit of God makes the reading, but especially the preaching of the word, an effectual means of enlightening,[1] convincing, and humbling sinners;[2] of driving them out of themselves, and drawing them unto Christ;[3] of conforming them to his image,[4] and subduing them to his will;[5] of strengthening them against temptations and corruptions;[6] of building them up in grace,[7] and establishing their hearts in holiness and comfort through faith unto salvation.[8]",
    proofTexts: [
      "Neh. 8:8; Acts 26:18; Psa. 19:8",
      "I Cor. 14:24-25; II Chr. 34:18-19, 26-28",
      "Acts 2:37, 41; 8:27-39",
      "II Cor. 3:18",
      "II Cor. 10:4-6; Rom. 6:17",
      "Matt. 4:4, 7, 10; Eph. 6:16-17; Psa. 19:11; I Cor. 10:11",
      "Acts 20:32; II Tim. 3:15-17",
      "Rom. 1:16; 10:13-17; 15:4; 16:25; I Thess. 3:2, 10-11, 13",
    ],
  },
  {
    id: 156,
    question: "Is the word of God to be read by all?",
    answer:
      "Although all are not to be permitted to read the word publicly to the congregation,[1] yet all sorts of people are bound to read it apart by themselves,[2] and with their families:[3] to which end, the holy scriptures are to be translated out of the original into vulgar languages.[4]",
    proofTexts: [
      "Deut. 31:9, 11-13; Neh. 8:2-3; 9:3-5",
      "Deut. 17:19; Rev. 1:3; John 5:39; Isa. 34:16",
      "Deut. 6:6-9; Gen. 18:17, 19; Psa. 78:5-7",
      "I Cor. 14:6, 9, 11-12, 15-16, 24, 27-28",
    ],
  },
  {
    id: 157,
    question: "How is the word of God to be read?",
    answer:
      "The holy scriptures are to be read with an high and reverent esteem of them;[1] with a firm persuasion that they are the very word of God,[2] and that he only can enable us to understand them;[3] with desire to know, believe, and obey the will of God revealed in them;[4] with diligence,[5] and attention to the matter and scope of them;[6] with meditation,[7] application,[8] self-denial,[9] and prayer.[10]",
    proofTexts: [
      "Psa. 19:10; Neh. 8:3-10; Exod. 24:7; II Chr. 34:27; Isa. 66:2",
      "II Peter 1:19-21",
      "Luke 24:45; II Cor. 3:13-16",
      "Deut. 17:10, 20",
      "Acts 17:11",
      "Acts 8:30, 34; Luke 10:26-28",
      "Psa. 1:2, 119:97",
      "II Chr. 24:21",
      "Prov. 3:5; Deut 33:3",
      "Prov. 2:1-6; Psa. 119:18; Neh. 7:6, 8",
    ],
  },
  {
    id: 158,
    question: "By whom is the word of God to be preached?",
    answer:
      "The word of God is to be preached only by such as are sufficiently gifted,[1] and also duly approved and called to that office.[2]",
    proofTexts: [
      "I Tim. 3:2, 6; Eph. 4:8-11; Hosea 4:6; Mal. 2:7; II Cor. 3:6",
      "Jer. 14:15; Rom. 10:15; Heb. 5:4; I Cor. 12:28-29; I Tim. 3:10; 4:14; 5:22",
    ],
  },
  {
    id: 159,
    question:
      "How is the word of God to be preached by those that are called thereunto?",
    answer:
      "They that are called to labor in the ministry of the word, are to preach sound doctrine,[1] diligently,[2] in season and out of season;[3] plainly,[4] not in the enticing words of man’s wisdom, but in demonstration of the Spirit, and of power;[5] faithfully,[6] making known the whole counsel of God;[7] wisely,[8] applying themselves to the necessities and capacities of the hearers;[9] zealously,[10] with fervent love to God [11] and the souls of his people;[12] sincerely,[13] aiming at his glory,[14] and their conversion,[15] edification,[16] and salvation.[17]",
    proofTexts: [
      "Titus 2:1, 8",
      "Acts 18:25",
      "II Tim. 4:2",
      "I Cor. 14:19",
      "I Cor. 2:4",
      "Jer. 23:28; I Cor. 4:1-2",
      "Acts 20:27",
      "Col. 1:28; II Tim. 2:15",
      "I Cor. 3:2; Heb. 5:12-14; Luke 12:42",
      "Acts 18:25",
      "II Cor. 5:13-14; Phil. 1:15-17",
      "Col. 4:12; II Cor. 12:15",
      "II Cor. 2:17; 4:2",
      "I Thess. 2:4-6; John 7:18",
      "I Cor. 9:19-22",
      "II Cor. 12:19; Eph. 4:12",
      "I Tim. 4:16; Acts 26:16-18",
    ],
  },
  {
    id: 160,
    question: "What is required of those that hear the word preached?",
    answer:
      "It is required of those that hear the word preached, that they attend upon it with diligence,[1] preparation,[2] and prayer;[3] examine: What they hear by the scriptures;[4] receive the truth with faith,[5] love,[6] meekness,[7] and readiness of mind,[8] as the word of God;[9] meditate,[10] and confer of it;[11] hide it in their hearts,[12] and bring forth the fruit of it in their lives.[13]",
    proofTexts: [
      "Prov. 8:34",
      "I Peter 2:1-2; Luke 8:18",
      "Psa. 119:18; Eph. 6:18-19",
      "Acts 17:11",
      "Heb. 4:2",
      "II Thess 2:10",
      "James 1:21",
      "Acts 17:11",
      "I Thess 2:13",
      "Luke 9:44; Heb. 2:1",
      "Luke 24:14; Deut 6:6-7",
      "Prov. 2:1; Psa. 119:11",
      "Luke 8:15; James 1:25",
    ],
  },
  {
    id: 161,
    question: "How do the sacraments become effectual means of salvation?",
    answer:
      "The sacraments become effectual means of salvation, not by any power in themselves, or any virtue derived from the piety or intention of him by whom they are administered, but only by the working of the Holy Ghost, and the blessing of Christ, by whom they are instituted.[1]",
    proofTexts: ["I Peter 3:21; Acts 8:13, 23; I Cor. 3:6-7; 12:13"],
  },
  {
    id: 162,
    question: "What is a sacrament?",
    answer:
      "A sacrament is a holy ordinance instituted by Christ in his church,[1] to signify, seal, and exhibit [2] unto those that are within the covenant of grace,[3] the benefits of his mediation;[4] to strengthen and increase their faith, and all other graces;[5] to oblige them to obedience;[6] to testify and cherish their love and communion one with another;[7] and to distinguish them from those that are without.[8]",
    proofTexts: [
      "Gen. 17:7, 10; Exod. 12:1-51; Matt. 26:26-28; 28:19",
      "Rom. 4:11; I Cor. 11:24-25",
      "Rom. 15:8; Exod. 12:48",
      "Acts 2:38; I Cor. 10:16",
      "Rom. 4:11; Gal. 3:27",
      "Rom. 6:3-4; I Cor. 10:21",
      "Eph. 4:2-5; I Cor. 12:13",
      "Eph. 2:11-12; Gen. 34:14",
    ],
  },
  {
    id: 163,
    question: "What are the parts of a sacrament?",
    answer:
      "The parts of a sacrament are two; the one an outward and sensible sign, used according to Christ’s own appointment; the other an inward and spiritual grace thereby signified.[1]",
    proofTexts: ["Matt. 3:11; I Peter 3:21; Rom. 2:28-29"],
  },
  {
    id: 164,
    question:
      "How many sacraments hath Christ instituted in his church under the New Testament?",
    answer:
      "Under the New Testament Christ hath instituted in his church only two sacraments, Baptism and the Lord’s supper.[1]",
    proofTexts: ["Matt. 26:26-28; 28:19; I Cor. 11:20, 23"],
  },
  {
    id: 165,
    question: "What is Baptism?",
    answer:
      "Baptism is a sacrament of the New Testament, wherein Christ hath ordained the washing with water in the name of the Father, and of the Son, and of the Holy Ghost,[1] to be a sign and seal of ingrafting into himself,[2] of remission of sins by his blood,[3] and regeneration by his Spirit;[4] of adoption,[5] and resurrection unto everlasting life;[6] and whereby the parties baptized are solemnly admitted into the visible church,[7] and enter into an open and professed engagement to be wholly and only the Lord’s.[8]",
    proofTexts: [
      "Matt. 28:19",
      "Gal. 3:27",
      "Mark 1:4; Rev. 1:5",
      "Titus 3:5; Eph. 5:26",
      "Gal. 3:26-27",
      "I Cor. 15:29; Rom. 6:5",
      "I Cor. 12:13",
      "Rom. 6:4",
    ],
  },
  {
    id: 166,
    question: "Unto whom is Baptism to be administered?",
    answer:
      "Baptism is not to be administered to any that are out of the visible church, and so strangers from the covenant of promise, till they profess their faith in Christ, and obedience to him,[1] but infants descending from parents, either both, or but one of them, professing faith in Christ, and obedience to him, are in that respect within the covenant, and to be baptized.[2]",
    proofTexts: [
      "Acts 2:38; 8:36-37",
      "Gen. 17:7, 9; Gal. 3:9, 14; Col. 2:11-12; Acts 2:38-39; Rom. 4:11-12; 11:16; I Cor. 7:14; Matt 28:19; Luke 18:15-16",
    ],
  },
  {
    id: 167,
    question: "How is our Baptism to be improved by us?",
    answer:
      "The needful but much neglected duty of improving our Baptism, is to be performed by us all our life long, especially in the time of temptation, and when we are present at the administration of it to others;[1] by serious and thankful consideration of the nature of it, and of the ends for which Christ instituted it, the privileges and benefits conferred and sealed thereby, and our solemn vow made therein;[2] by being humbled for our sinful defilement, our falling short of, and walking contrary to, the grace of baptism, and our engagements;[3] by growing up to assurance of pardon of sin, and of all other blessings sealed to us in that sacrament;[4] by drawing strength from the death and resurrection of Christ, into whom we are baptized, for the mortifying of sin, and quickening of grace;[5] and by endeavoring to live by faith,[6] to have our conversation in holiness and righteousness,[7] as those that have therein given up their names to Christ;[8] and to walk in brotherly love, as being baptized by the same Spirit into one body.[9]",
    proofTexts: [
      "Col. 2:11-12; Rom. 6:4, 6, 11",
      "Rom. 6:3-5",
      "I Cor. 1:11-13; Rom. 6:2-3",
      "I Cor. 4:11-12; I Peter 3:21",
      "Rom. 4:11-12; I Cor. 10:16",
      "Gal. 3:26-27",
      "Rom. 6:22",
      "Acts 2:38",
      "I Cor. 12:13, 25-27",
    ],
  },
  {
    id: 168,
    question: "What is the Lord’s supper?",
    answer:
      "The Lord’s supper is a sacrament of the New Testament,[1] wherein, by giving and receiving bread and wine according to the appointment of Jesus Christ, his death is showed forth; and they that worthily communicate feed upon his body and blood, to their spiritual nourishment and growth in grace;[2] have their union and communion with him confirmed;[3] testify and renew their thankfulness,[4] and engagement to God,[5] and their mutual love and fellowship each with other, as members of the same mystical body.[6]",
    proofTexts: [
      "Luke 22:20",
      "Matt. 26:26-28; I Cor. 11:13-26",
      "I Cor. 10:16",
      "I Cor. 11:24",
      "I Cor. 10:14-16, 21",
      "I Cor. 10:17",
    ],
  },
  {
    id: 169,
    question:
      "How hath Christ appointed bread and wine to be given and received in the sacrament of the Lord’s supper?",
    answer:
      "Christ hath appointed the ministers of his word, in the administration of this sacrament of the Lord’s Supper, to set apart the bread and wine from common use, by the word of institution, thanksgiving, and prayer; to take and break the bread, and to give both the bread and the wine to the communicants: who are, by the same appointment, to take and eat the bread, and to drink the wine, in thankful remembrance that the body of Christ was broken and given, and his blood shed, for them.[1]",
    proofTexts: [
      "I Cor. 11:23-24; Matt. 26:26-28; Mark 14:22-24; Luke 22:19-20",
    ],
  },
  {
    id: 170,
    question:
      "How do they that worthily communicate in the Lord’s supper feed upon the body and blood of Christ therein?",
    answer:
      "As the body and blood of Christ are not corporally or carnally present in, with, or under the bread and wine in the Lord’s supper,[1] and yet are spiritually present to the faith of the receiver, no less truly and really than the elements themselves are to their outward senses;[2] so they that worthily communicate in the sacrament of the Lord’s supper, do therein feed upon the body and blood of Christ, not after a corporal and carnal, but in a spiritual manner; yet truly and really,[3] while by faith they receive and apply unto themselves Christ crucified, and all the benefits of his death.[4]",
    proofTexts: [
      "Acts 3:21",
      "Matt. 26:26, 28",
      "I Cor. 11:24-29",
      "I Cor. 10:16",
    ],
  },
  {
    id: 171,
    question:
      "How are they that receive the sacrament of the Lord’s supper to prepare themselves before they come unto it?",
    answer:
      "They that receive the sacrament of the Lord’s supper are, before they come, to prepare themselves thereunto, by examining themselves [1] of their being in Christ,[2] of their sins and wants;[3] of the truth and measure of their knowledge,[4] faith,[5] repentance;[6] love to God and the brethren,[7] charity to all men,[8] forgiving those that have done them wrong;[9] of their desires after Christ,[10] and of their new obedience;[11] and by renewing the exercise of these graces,[12] by serious meditation,[13] and fervent prayer.[14]",
    proofTexts: [
      "I Cor. 11:28",
      "II Cor. 13:5",
      "I Cor. 5:7; Exod. 12:15",
      "I Cor. 11:29",
      "I Cor. 13:5; Matt. 26:28",
      "Zech. 12:10; I Cor. 11:31",
      "I Cor. 10:16-17; Acts 2:46-47",
      "I Cor. 5:8; 11:18, 20",
      "Matt. 5:23-24",
      "Isa .55:1; John 7:37",
      "I Cor. 5:7-8",
      "I Cor. 11:25-26, 28; Heb. 10:21-22, 24; Psa. 26:6",
      "I Cor. 11:24-25",
      "II Chr. 30:18-19; Matt. 26:26",
    ],
  },
  {
    id: 172,
    question:
      "May one who doubteth of his being in Christ, or of his due preparation, come to the Lord’s supper?",
    answer:
      "One who doubteth of his being in Christ, or of his due preparation to the sacrament of the Lord’s supper, may have true interest in Christ, though he be not yet assured thereof;[1] and in God’s account hath it, if he be duly affected with the apprehension of the want of it,[2] and unfeignedly desires to be found in Christ,[3] and to depart from iniquity:[4] in which case (because promises are made, and this sacrament is appointed, for the relief even of weak and doubting Christians)[5] he is to bewail his unbelief,[6] and labor to have his doubts resolved;[7] and, so doing, he may and ought to come to the Lord’s supper, that he may be further strengthened.[8]",
    proofTexts: [
      "Isa. 1:10; I John 5:13; Psa. 77:1-12; 88:1-18; Jonah 2:4, 7",
      "Isa. 54:7-10; Matt. 5:3-4; Psa. 31:22; 73:13, 22-23",
      "Phil 3:8-9; Psa. 10:17; 42:1-2, 5, 11",
      "II Tim. 2:19; Isa. 1:10; Psa. 66:18-20",
      "Isa. 40:11, 29, 31; Matt. 11:28; 12:20; 26:28",
      "Mark 9:24",
      "Acts 2:37, 16:30",
      "Rom. 4:11; I Cor. 11:28",
    ],
  },
  {
    id: 173,
    question:
      "May any who profess the faith, and desire to come to the Lord’s supper, be kept from it?",
    answer:
      "Such as are found to be ignorant or scandalous, notwithstanding their profession of the faith, and desire to come to the Lord’s supper, may and ought to be kept from that sacrament, by the power which Christ hath left in his church,[1] until they receive instruction, and manifest their reformation.[2]",
    proofTexts: [
      "I Cor. 5:1-13; 11:27-31; Matt. 7:6; Jude 1:23; I Tim. 5:22",
      "II Cor. 2:7",
    ],
  },
  {
    id: 174,
    question:
      "What is required of them that receive the sacrament of the Lord’s supper in the time of the administration of it?",
    answer:
      "It is required of them that receive the sacrament of the Lord’s supper, that, during the time of the administration of it, with all holy reverence and attention they wait upon God in that ordinance,[1] diligently observe the sacramental elements and actions,[2] heedfully discern the Lord’s body,[3] and affectionately meditate on his death and sufferings,[4] and thereby stir up themselves to a vigorous exercise of their graces;[5] in judging themselves,[6] and sorrowing for sin;[7] in earnest hungering and thirsting after Christ,[8] feeding on him by faith,[9] receiving of his fulness,[10] trusting in his merits,[11] rejoicing in his love,[12] giving thanks for his grace;[13] in renewing of their covenant with God, and love to all the saints.[14]",
    proofTexts: [
      "Lev. 10:3; Heb. 12:18; Psa. 5:7; I Cor. 11:17, 26-27",
      "Exod. 24:8; Matt. 26:28",
      "I Cor. 11:29",
      "Luke 22:19",
      "I Cor. 10:3-5, 11, 14; 11:26",
      "I Cor. 11:31",
      "Zech. 12:10",
      "Rev. 22:17",
      "John 6:35",
      "John 1:16",
      "Phil. 1:16",
      "Psa. 63:4-5; II Chr. 30:21",
      "Psa. 22:26",
      "Jer. 1:5; Psa. 1:5",
      "Acts 2:42",
    ],
  },
  {
    id: 175,
    question:
      "What is the duty of Christians, after they have received the sacrament of the Lord’s supper?",
    answer:
      "The duty of Christians, after they have received the sacrament of the Lord’s supper, is seriously to consider how they have behaved themselves therein, and with what success;[1] if they find quickening and comfort, to bless God for it,[2] beg the continuance of it,[3] watch against relapses,[4] fulfil their vows,[5] and encourage themselves to a frequent attendance on that ordinance:[6] but if they find no present benefit, more exactly to review their preparation to, and carriage at, the sacrament;[7] in both which, if they can approve themselves to God and their own consciences, they are to wait for the fruit of it in due time:[8] but, if they see they have failed in either, they are to be humbled,[9] and to attend upon it afterwards with more care and diligence.[10]",
    proofTexts: [
      "Psa. 28:7, 85:8; I Cor. 11:17, 30-31",
      "II Chr. 30:21-16; Acts 2:42, 46",
      "Psa. 36:10; Song of Sol. 3:4; I Chr. 29:18",
      "I Cor. 10:3-5, 12",
      "Psa. 50:14",
      "I Cor. 11:25-26; Acts 2:42, 46",
      "Song of Sol. 5:1-6; Eccl. 5:1-6",
      "Psa. 42:5, 8; 43:3-5; 123:1-2",
      "II Chr. 30:18-19; Isa. 1:16, 18",
      "II Cor. 7:11; I Chr. 15:12-14",
    ],
  },
  {
    id: 176,
    question:
      "Wherein do the sacraments of baptism and the Lord’s supper agree?",
    answer:
      "The sacraments of baptism and the Lord’s supper agree, in that the author of both is God;[1] the spiritual part of both is Christ and his benefits;[2] both are seals of the same covenant,[3] are to be dispensed by ministers of the gospel, and by none other;[4] and to be continued in the church of Christ until his second coming.[5]",
    proofTexts: [
      "Matt. 28:19; I Cor. 11:23",
      "Rom. 6:3-4; I Cor. 10:16",
      "Rom. 4:11; Col. 2:12; Matt. 26:27-28",
      "John 1:33; Matt. 28:19; I Cor. 4:1; 11:23; Heb. 5:4",
      "Matt. 28:19-20; I Cor. 11:26",
    ],
  },
  {
    id: 177,
    question:
      "Wherein do the sacraments of baptism and the Lord’s supper differ?",
    answer:
      "The sacraments of baptism and the Lord’s supper differ, in that baptism is to be administered but once, with water, to be a sign and seal of our regeneration and ingrafting into Christ,[1] and that even to infants;[2] whereas the Lord’s supper is to be administered often, in the elements of bread and wine, to represent and exhibit Christ as spiritual nourishment to the soul,[3] and to confirm our continuance and growth in him,[4] and that only to such as are of years and ability to examine themselves.[5]",
    proofTexts: [
      "Matt. 3:11; Titus 3:5; Gal. 3:27",
      "Gen. 17:7, 9; Acts 2:38-39; I Cor. 7:14",
      "I Cor. 11:23-26",
      "I Cor. 10:16",
      "I Cor. 11:28-29",
    ],
  },
  {
    id: 178,
    question: "What is prayer?",
    answer:
      "Prayer is an offering up of our desires unto God,[1] in the name of Christ,[2] by the help of his Spirit;[3] with confession of our sins,[4] and thankful acknowledgment of his mercies.[5]",
    proofTexts: [
      "Psa. 62:8",
      "John 16:23",
      "Rom. 8:26",
      "Psa. 32:5-6; Dan. 9:4",
      "Phil. 4:6",
    ],
  },
  {
    id: 179,
    question: "Are we to pray unto God only?",
    answer:
      "God only being able to search the hearts,[1] hear the requests,[2] pardon the sins,[3] and fulfil the desires of all;[4] and only to be believed in,[5] and worshiped with religious worship;[6] prayer, which is a special part thereof,[7] is to be made by all to him alone,[8] and to none other.[9]",
    proofTexts: [
      "I Kings 8:39; Acts 1:24; Rom. 8:27",
      "Psa. 65:2",
      "Micah 7:18",
      "Psa. 145:18-19",
      "Rom. 10:14",
      "Matt. 4:10",
      "I Cor. 1:2",
      "Psa. 50:15",
      "Rom. 10:14",
    ],
  },
  {
    id: 180,
    question: "What is it to pray in the name of Christ?",
    answer:
      "To pray in the name of Christ is, in obedience to his command, and in confidence on his promises, to ask mercy for his sake;[1] not by bare mentioning of his name,[2] but by drawing our encouragement to pray, and our boldness, strength, and hope of acceptance in prayer, from Christ and his mediation.[3]",
    proofTexts: [
      "John 14:13-14, 16:24; Dan. 9:17",
      "Matt. 7:21",
      "Heb. 4:14-16; I John 5:13-15",
    ],
  },
  {
    id: 181,
    question: "Why are we to pray in the name of Christ?",
    answer:
      "The sinfulness of man, and his distance from God by reason thereof, being so great, as that we can have no access into his presence without a mediator;[1] and there being none in heaven or earth appointed to, or fit for, that glorious work but Christ alone,[2] we are to pray in no other name but his only.[3]",
    proofTexts: [
      "John 14:6; Isa. 59:2; Eph. 3:12",
      "John 6:27; Heb. 7:25-27; I Tim. 2:5",
      "Col. 3:17; Heb. 13:15",
    ],
  },
  {
    id: 182,
    question: "How doth the Spirit help us to pray?",
    answer:
      "We not knowing what to pray for as we ought, the Spirit helps our infirmities, by enabling us to understand both for whom, and what, and how prayer is to be made; and by working and quickening in our hearts (although not in all persons, nor at all times, in the same measure) those apprehensions, affections, and graces which are requisite for the right performance of that duty.[1]",
    proofTexts: ["Rom. 8:26-27; Psa. 10:17; Zech. 12:10"],
  },
  {
    id: 183,
    question: "For whom are we to pray?",
    answer:
      "We are to pray for the whole church of Christ upon earth;[1] for magistrates,[2] and ministers;[3] for ourselves,[4] our brethren,[5] yea, our enemies;[6] and for all sorts of men living,[7] or that shall live hereafter;[8] but not for the dead,[9] nor for those that are known to have sinned the sin unto death.[10]",
    proofTexts: [
      "Eph. 6:18; Psa. 28:9",
      "I Tim. 2:1-2",
      "Col. 4:3",
      "Gen. 32:11",
      "James 5:16",
      "Matt. 5:44",
      "I Tim. 2:1-2",
      "John 17:20; II Sam. 7:29",
      "II Sam. 12:21-23",
      "I John 5:16",
    ],
  },
  {
    id: 184,
    question: "For what things are we to pray?",
    answer:
      "We are to pray for all things tending to the glory of God,[1] the welfare of the church,[2] our own [3] or others good;[4] but not for anything that is unlawful.[5]",
    proofTexts: [
      "Matt. 6:9",
      "Psa. 51:18, 122:6",
      "Matt. 7:11",
      "Psa. 125:4",
      "I John 5:14",
    ],
  },
  {
    id: 185,
    question: "How are we to pray?",
    answer:
      "We are to pray with an awful apprehension of the majesty of God,[1] and deep sense of our own unworthiness,[2] necessities,[3] and sins;[4] with penitent,[5] thankful,[6] and enlarged hearts;[7] with understanding,[8] faith,[9] sincerity,[10] fervency,[11] love,[12] and perseverance,[13] waiting upon him,[14] with humble submission to his will.[15]",
    proofTexts: [
      "Eccl. 5:1",
      "Gen. 18:27; 32:10",
      "Luke 15:17-19",
      "Luke 18:13-14",
      "Psa. 51:17",
      "Phil. 4:6",
      "I Sam. 1:15, 2:1",
      "I Cor. 14:15",
      "Mark 11:24; James 1:6",
      "Psa. 17:1; 145:18",
      "James 5:16",
      "I Tim. 2:8",
      "Eph. 6:18",
      "Micah 7:7",
      "Matt. 26:39",
    ],
  },
  {
    id: 186,
    question:
      "What rule hath God given for our direction in the duty of prayer?",
    answer:
      "The whole word of God is of use to direct us in the duty of prayer;[1] but the special rule of direction is that form of prayer which our Savior Christ taught his disciples, commonly called The Lord’s prayer.[2]",
    proofTexts: ["I John 5:14", "Matt. 6:2-13; Luke 11:2-4"],
  },
  {
    id: 187,
    question: "How is the Lord’s prayer to be used?",
    answer:
      "The Lord’s prayer is not only for direction, as a pattern, according to which we are to make other prayers; but may also be used as a prayer, so that it be done with understanding, faith, reverence, and other graces necessary to the right performance of the duty of prayer.[1]",
    proofTexts: ["Matt. 6:9; Luke 11:2"],
  },
  // {
  //   id: 188,
  //   question: "Of how many parts doth the Lord’s prayer consist?",
  //   answer:
  //     "The Lord’s prayer consists of three parts; a preface, petitions, and a conclusion.",
  // },
  {
    id: 189,
    question: "What doth the preface of the Lord’s prayer teach us?",
    answer:
      "The preface of the Lord’s prayer (contained in these words, Our Father which art in heaven,)[1] teacheth us, when we pray, to draw near to God with confidence of his fatherly goodness, and our interest therein;[2] with reverence, and all other childlike dispositions,[3] heavenly affections,[4] and due apprehensions of his sovereign power, majesty, and gracious condescension:[5] as also, to pray with and for others.[6]",
    proofTexts: [
      "Matt. 6:9",
      "Luke 11:13; Rom. 8:15",
      "Isa. 64:9",
      "Psa. 123:1; Lam. 3:41",
      "Isa. 63:15-16; Neh. 1:4-6",
      "Acts 12:5",
    ],
  },
  {
    id: 190,
    question: "What do we pray for in the first petition?",
    answer:
      "In the first petition (which is, Hallowed be thy name,)[1] acknowledging the utter inability and indisposition that is in ourselves and all men to honor God aright,[2] pray, that God would by his grace enable and incline us and others to know, to acknowledge, and highly to esteem him,[3] his titles,[4] attributes,[5] ordinances, word,[6] works, and whatsoever he is pleased to make himself known by;[7] and to glorify him in thought, word,[8] and deed:[9] that he would prevent and remove atheism,[10] ignorance,[11] idolatry,[12] profaneness,[13] and whatsoever is dishonorable to him;[14] and, by his overruling providence, direct and dispose of all things to his own glory.[15]",
    proofTexts: [
      "Matt. 6:9",
      "II Cor. 3:5; Psa. 51:15",
      "Psa. 67:2-3",
      "Psa. 83:18",
      "Psa. 86:10-13, 15",
      "II Thess. 3:1; Psa. 138:1-3; 147:19-20; II Cor. 2:14-15",
      "Psa. 8:1-9; 145:1-21",
      "Psa. 19:14; 103:1",
      "Phil. 1:9, 11",
      "Psa. 67:1-4",
      "Eph. 1:17-18",
      "Psa. 97:7",
      "Psa. 74:18, 22-23",
      "II Kings 19:15-16",
      "II Chr. 20:6, 10-12; Psa. 83:1-18; 140:4, 8",
    ],
  },
  {
    id: 191,
    question: "What do we pray for in the second petition?",
    answer:
      "In the second petition (which is, Thy kingdom come,)[1] acknowledging ourselves and all mankind to be by nature under the dominion of sin and Satan,[2] we pray, that the kingdom of sin and Satan may be destroyed,[3] the gospel propagated throughout the world,[4] the Jews called,[5] the fulness of the Gentiles brought in;[6] the church furnished with all gospel officers and ordinances,[7] purged from corruption,[8] countenanced and maintained by the civil magistrate:[9] that the ordinances of Christ may be purely dispensed, and made effectual to the converting of those that are yet in their sins, and the confirming, comforting, and building up of those that are already converted:[10] that Christ would rule in our hearts here,[11] and hasten the time of his second coming, and our reigning with him forever:[12] and that he would be pleased so to exercise the kingdom of his power in all the world, as may best conduce to these ends.[13]",
    proofTexts: [
      "Matt. 6:10",
      "Eph. 2:2-3",
      "Psa. 68:1, 18; Rev. 12:10-11",
      "II Thess. 3:1",
      "Rom. 10:1",
      "John 17:9, 20; Rom. 11:25-26; Psa. 67:1-7",
      "Matt. 9:38; II Thess. 3:1",
      "Mal. 1:11; Zeph. 3:9",
      "I Tim. 2:1-2",
      "Acts 4:29-30; Eph. 6:18-20; Rom. 15:29-30, 32; II Thess. 1:11; 2:16-17",
      "Eph. 3:14-20",
      "Rev. 22:20",
      "Isa. 64:1-2; Rev. 4:8-11",
    ],
  },
  {
    id: 192,
    question: "What do we pray for in the third petition?",
    answer:
      "In the third petition (which is, Thy will be done in earth, as it is in heaven,)[1] acknowledging, that by nature we and all men are not only utterly unable and unwilling to know and do the will of God,[2] but prone to rebel against his word,[3] to repine and murmur against his providence,[4] and wholly inclined to do the will of the flesh, and of the devil:[5] we pray, that God would by his Spirit take away from ourselves and others all blindness,[6] weakness,[7] indisposedness,[8] and perverseness of heart;[9] and by his grace make us able and willing to know, do, and submit to his will in all things,[10] with the like humility,[11] cheerfulness,[12] faithfulness,[13] diligence,[14] zeal,[15] sincerity,[16] and constancy,[17] as the angels do in heaven.[18]",
    proofTexts: [
      "Matt. 6:10",
      "Rom. 7:18; Job 21:14; I Cor. 2:14",
      "Rom. 8:7",
      "Exod. 17:7; Num. 14:2",
      "Eph. 2:2",
      "Eph. 1:17-18",
      "Eph. 3:16",
      "Matt. 26:40-41",
      "Jer. 31:18-19",
      "Psa. 119:1, 8, 35-36; Acts 21:14",
      "Micah 6:8",
      "Psa. 100:2; Job 1:21; II Sam. 15:25-26",
      "Isa. 38:3",
      "Psa. 119:4-5",
      "Rom. 12:11",
      "Psa. 119:80",
      "Psa. 119:112",
      "Isa. 6:2-3; Psa. 103:20-21; Matt. 18:10",
    ],
  },
  {
    id: 193,
    question: "What do we pray for in the fourth petition?",
    answer:
      "In the fourth petition (which is, Give us this day our daily bread,)[1] acknowledging, that in Adam, and by our own sin, we have forfeited our right to all the outward blessings of this life, and deserve to be wholly deprived of them by God, and to have them cursed to us in the use of them;[2] and that neither they of themselves are able to sustain us,[3] nor we to merit,[4] or by our own industry to procure them;[5] but prone to desire,[6] get,[7] and use them unlawfully:[8] we pray for ourselves and others, that both they and we, waiting upon the providence of God from day to day in the use of lawful means, may, of his free gift, and as to his fatherly wisdom shall seem best, enjoy a competent portion of them;[9] and have the same continued and blessed unto us in our holy and comfortable use of them,[10] and contentment in them;[11] and be kept from all things that are contrary to our temporal support and comfort.[12]",
    proofTexts: [
      "Matt. 6:11",
      "Gen. 2:17, 3:17; Rom. 8:20-22; Jer. 5:25; Deut. 28:15-68",
      "Deut. 8:3",
      "Gen. 32:10",
      "Deut. 8:17-18",
      "Jer. 6:13; Mark 7:21-22",
      "Hosea 12:7",
      "James 4:3",
      "Gen. 28:20; 43:12-14; Eph. 4:28; II Thess. 3:11-12; Phil. 4:6",
      "I Tim. 4:3-5",
      "I Tim. 6:6-8",
      "Prov. 30:8-9",
    ],
  },
  {
    id: 194,
    question: "What do we pray for in the fifth petition?",
    answer:
      "In the fifth petition (which is, Forgive us our debts, as we forgive our debtors,)[1] acknowledging, that we and all others are guilty both of original and actual sin, and thereby become debtors to the justice of God; and that neither we, nor any other creature, can make the least satisfaction for that debt:[2] we pray for ourselves and others, that God of his free grace would, through the obedience and satisfaction of Christ, apprehended and applied by faith, acquit us both from the guilt and punishment of sin,[3] accept us in his Beloved;[4] continue his favor and grace to us,[5] pardon our daily failings,[6] and fill us with peace and joy, in giving us daily more and more assurance of forgiveness;[7] which we are the rather emboldened to ask, and encouraged to expect, when we have this testimony in ourselves, that we from the heart forgive others their offenses.[8]",
    proofTexts: [
      "Matt. 6:12",
      "Rom. 3:9-22; Matt. 18:24-25; Psa. 130:3-4",
      "Rom. 3:24-26; Heb. 9:22",
      "Eph. 1:6-7",
      "II Peter 1:2",
      "Hosea 14:2; Jer. 14:7",
      "Rom. 15:13; Psa. 51:7-10, 12",
      "Luke 11:4; Matt. 6:14-15; 18:35",
    ],
  },
  {
    id: 195,
    question: "What do we pray for in the sixth petition?",
    answer:
      "In the sixth petition (which is, And lead us not into temptation, but deliver us from evil,)[1] acknowledging, that the most wise, righteous, and gracious God, for divers holy and just ends, may so order things, that we may be assaulted, foiled, and for a time led captive by temptations;[2] that Satan,[3] the world,[4] and the flesh, are ready powerfully to draw us aside, and ensnare us;[5] and that we, even after the pardon of our sins, by reason of our corruption,[6] weakness, and want of watchfulness,[7] are not only subject to be tempted, and forward to expose ourselves unto temptations,[8] but also of ourselves unable and unwilling to resist them, to recover out of them, and to improve them;[9] and worthy to be left under the power of them:[10] we pray, that God would so overrule the world and all in it,[11] subdue the flesh,[12] and restrain Satan,[13] order all things,[14] bestow and bless all means of grace,[15] and quicken us to watchfulness in the use of them, that we and all his people may by his providence be kept from being tempted to sin;[16] or, if tempted, that by his Spirit we may be powerfully supported and enabled to stand in the hour of temptation;[17] or when fallen, raised again and recovered out of it,[18] and have a sanctified use and improvement thereof:[19] that our sanctification and salvation may be perfected,[20] Satan trodden under our feet,[21] and we fully freed from sin, temptation, and all evil, forever.[22]",
    proofTexts: [
      "Matt. 6:13",
      "II Chr. 32:31",
      "I Chr. 21:1",
      "Luke 21:34; Mark 4:19",
      "James 1:14",
      "Gal. 5:17",
      "Matt. 26:41",
      "Matt. 26:69-72; Gal. 2:11-14; II Chr. 18:3; 19:2",
      "Rom. 7:23-24; I Chr. 21:1-4; II Chr. 16:7-10",
      "Psa. 81:11-12",
      "John 17:15",
      "Psa. 51:10; 119:133",
      "II Cor. 12:7-8",
      "I Cor. 10:12-13",
      "Heb. 13:20-21",
      "Matt. 26:41; Psa. 19:13",
      "Eph. 3:14-17; I Thess. 3:13; Jude 1:24",
      "Psa. 51:12",
      "I Peter 5:8-10",
      "II Cor. 13:7, 9",
      "Rom. 16:20; Zech. 3:2; Luke 22:31-32",
      "John 17:15; I Thess. 5:23",
    ],
  },
  {
    id: 196,
    question: "What doth the conclusion of the Lord’s prayer teach us?",
    answer:
      "The conclusion of the Lord’s prayer (which is, For thine is the kingdom, and the power, and the glory, forever. Amen.),[1] teaches us to enforce our petitions with arguments,[2] which are to be taken, not from any worthiness in ourselves, or in any other creature, but from God;[3] and with our prayers to join praises,[4] ascribing to God alone eternal sovereignty, omnipotency, and glorious excellency;[5] in regard whereof, as he is able and willing to help us,[6] so we by faith are emboldened to plead with him that he would,[7] and quietly to rely upon him, that he will fulfil our requests.[8] And, to testify this our desire and assurance, we say, Amen.[9]",
    proofTexts: [
      "Matt. 6:13",
      "Rom. 15:30",
      "Dan. 9:4, 7-9, 16-19",
      "Phil. 4:6",
      "I Chr. 29:10-13",
      "Eph. 3:20-21; Luke 11:13",
      "II Chr. 20:6, 11",
      "II Chr. 14:11",
      "I Cor. 14:16; Rev. 22:20-21",
    ],
  },
];

module.exports = { originalFormat };
