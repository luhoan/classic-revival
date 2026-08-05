/**
 * BOOK STUDY RESOURCES
 * --------------------
 * Study resources shown on each book's page in the library
 * (Study Resources tab on /book/[id]).
 *
 * This file was generated from the two Classic Revival resource
 * documents (linked below in `masterGuides`) and is meant to be
 * edited by hand from here on.
 *
 * TO ADD RESOURCES FOR A BOOK: find its entry in `workResources`
 * (or add a new object) and append { label, url } items to its
 * `resources` array. The site matches entries to library books by
 * title (and author when titles are ambiguous), so the `title`
 * should be the common short title of the work — it does not need
 * to match the library's long catalog title exactly.
 */

export const workResources = [
  {
    title: "Epic of Gilgamesh",
    section: "Epic Foundations",
    resources: [
      {
        label: "Lecture / Introduction (Video)",
        url: "https://www.youtube.com/watch?v=Rd7MrGy_tEg"
      },
      {
        label: "Narrative Summary & Analysis (Video)",
        url: "https://www.youtube.com/watch?v=okb-fxi1qBM"
      },
      {
        label: "Encyclopædia Britannica: Overview & Context",
        url: "https://www.britannica.com/topic/Epic-of-Gilgamesh"
      },
      {
        label: "Wikipedia: History, Themes, and Synopsis",
        url: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh"
      },
      {
        label: "CrashCourse World Mythology #26 (Video Summary)",
        url: "https://www.youtube.com/watch?v=sWppk7-Mti4"
      },
      {
        label: "Invitation to World Literature — Gilgamesh context & clips",
        url: "https://www.learner.org/series/invitation-to-world-literature/the-epic-of-gilgamesh/"
      },
      {
        label: "LitCharts: Summary, Themes, and Character Analysis",
        url: "https://www.litcharts.com/lit/the-epic-of-gilgamesh"
      },
      {
        label: "Full-Length Audiobook (unabridged reading)",
        url: "https://www.youtube.com/watch?v=IPYf8AwNvKg"
      }
    ]
  },
  {
    title: "Iliad",
    author: "Homer",
    section: "Epic Foundations",
    resources: [
      {
        label: "OpenLearn Intro to the Iliad",
        url: "https://www.open.edu/openlearn/history-the-arts/introducing-homers-iliad/content-section-0"
      },
      {
        label: "Yale Open Course — Classical Literature Lecture on Iliad",
        url: "https://oyc.yale.edu/classics/clcv-205/lecture-3"
      },
      {
        label: "Annotated Full Text + Analysis (Owl Eyes)",
        url: "https://www.owleyes.org/text/iliad"
      },
      {
        label: "YouTube Summary & Analysis (Video Lecture)",
        url: "https://www.youtube.com/watch?v=-QPXpCqwHec"
      },
      {
        label: "Reed College Humanities Outline — Book-by-Book",
        url: "https://www.reed.edu/humanities/hum110/iliad.html"
      },
      {
        label: "SparkNotes Study Guide (plot overview & themes)",
        url: "https://www.sparknotes.com/lit/iliad/"
      },
      {
        label: "Duke University Iliad Study Guide (detailed summaries & context)",
        url: "https://people.duke.edu/~wj25/UC_Web_Site/epic/study_guide2.html"
      }
    ]
  },
  {
    title: "Odyssey",
    author: "Homer",
    section: "Epic Foundations",
    resources: [
      {
        label: "Wikipedia: Full Overview & Cultural Summary",
        url: "https://en.wikipedia.org/wiki/Odyssey"
      },
      {
        label: "UCSD Iliad & Odyssey Guide (context & backstory)",
        url: "https://pages.ucsd.edu/~dkjordan/arch/iliad/IliadGuide00.html"
      },
      {
        label: "Nova Online Homer Guide (Odyssey summaries)",
        url: "https://novaonline.nvcc.edu/Eli/eng251/Bb_version/eng251homerstudy.html"
      },
      {
        label: "YouTube Lecture Series on Homer (context for both epics-Iliad and Odyssey)--include this into odyssey",
        url: "https://www.youtube.com/watch?v=DVobvfJk4xA"
      }
    ]
  },
  {
    title: "Georgics",
    author: "Virgil",
    section: "Epic Foundations",
    resources: [
      {
        label: "General Epic & Poetic Form Background (inviting epic worldview)",
        url: "https://www.learner.org/series/invitation-to-world-literature/the-epic-of-gilgamesh/"
      },
      {
        label: "Wikipedia — Virgil & the Georgics",
        url: "https://en.wikipedia.org/wiki/Georgics"
      },
      {
        label: "Internet Archive — Georgics text & commentary scans",
        url: "https://archive.org/details/in.ernet.dli.2015.46194"
      },
      {
        label: "Perseus Digital Library (text + morphological tools)",
        url: "http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.02.0058"
      },
      {
        label: "Lecture on georgics(PDF & open lectures)",
        url: "https://www.youtube.com/watch?v=4dYyq1DeyHs"
      }
    ]
  },
  {
    title: "Shahnameh (selections)",
    author: "Ferdowsi",
    section: "Epic Foundations",
    resources: [
      {
        label: "Encyclopædia Britannica — Shahnameh Overview",
        url: "https://www.britannica.com/topic/Shah-nameh"
      },
      {
        label: "Encyclopaedia Iranica — Ferdowsi Entry",
        url: "https://www.iranicaonline.org/articles/ferdowsi-index/"
      },
      {
        label: "Encyclopaedia Iranica — Shahnameh Article",
        url: "https://www.iranicaonline.org/articles/sahnama-excursus/"
      },
      {
        label: "Metropolitan Museum — Great Mongol Shahnameh",
        url: "https://www.metmuseum.org/essays/folios-from-the-great-mongol-shahnama-book-of-kings"
      },
      {
        label: "Metropolitan Museum — Shahnameh of Shah Tahmasp",
        url: "https://www.metmuseum.org/learn/educators/curriculum-resources/art-of-the-islamic-world/unit-five/chapter-three/the-shahnama-of-shah-tahmasp"
      },
      {
        label: "Stanford Iranian Studies — Shahnameh Audiobook",
        url: "https://iranian-studies.stanford.edu/publications/audiobook-shahnameh-persian-book-kings"
      },
      {
        label: "Sacred Texts — English Translation of Shahnameh",
        url: "https://www.sacred-texts.com/neu/shahnama.txt"
      }
    ]
  },
  {
    title: "Beowulf",
    section: "Epic Foundations",
    resources: [
      {
        label: "British Library — Beowulf Manuscript Overview",
        url: "https://www.britishlibrary.cn/en/works/beowulf/"
      },
      {
        label: "British Library Blog — Beowulf Online",
        url: "https://www.bl.uk/stories/blogs/posts/beowulf-online"
      },
      {
        label: "EBeowulf Project (University of Kentucky)",
        url: "https://ebeowulf.uky.edu/ebeo4.0/CD/main.html"
      },
      {
        label: "MIT OpenCourseWare — Old English and Beowulf",
        url: "https://ocw.mit.edu/courses/21l-601j-old-english-and-beowulf-spring-2023/"
      },
      {
        label: "Oxford Podcasts — Beowulf Reading (Lines 26–52)",
        url: "https://podcasts.ox.ac.uk/beowulf-reading-ll-26-52"
      },
      {
        label: "Video Lecture — Introduction to Beowulf",
        url: "https://www.youtube.com/watch?v=QT5nja2Wy28"
      }
    ]
  },
  {
    title: "Popol Vuh",
    section: "Epic Foundations",
    resources: [
      {
        label: "Learner.org — Invitation to World Literature: Popol Vuh",
        url: "https://www.learner.org/series/invitation-to-world-literature/popol-vuh/"
      },
      {
        label: "Learner.org — Popol Vuh: Getting Started",
        url: "https://www.learner.org/series/invitation-to-world-literature/popol-vuh/popol-vuh-getting-started/"
      },
      {
        label: "Learner.org — Popol Vuh: Experts’ View",
        url: "https://www.learner.org/series/invitation-to-world-literature/popol-vuh/popol-vuh-experts-view/"
      },
      {
        label: "Learner.org — Popol Vuh: Connections",
        url: "https://www.learner.org/series/invitation-to-world-literature/popol-vuh/popol-vuh-connections/"
      },
      {
        label: "Christenson Translation (PDF)",
        url: "https://www.mesoweb.com/publications/Christenson/PopolVuh.pdf"
      },
      {
        label: "Sacred Texts — Popol Vuh English Text",
        url: "https://sacred-texts.com/nam/pvuheng.htm"
      },
      {
        label: "Video Lecture — Popol Vuh Introduction",
        url: "https://www.youtube.com/watch?v=DjO-PudLnJI"
      }
    ]
  },
  {
    title: "Oresteia",
    author: "Aeschylus",
    section: "Greek Drama (Tragedy + Comedy)",
    resources: [
      {
        label: "Full text (English) — Scaife/Perseus",
        url: "http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0004"
      },
      {
        label: "Study guide — SparkNotes",
        url: "https://www.sparknotes.com/lit/oresteia/"
      },
      {
        label: "Overview/context — Britannica",
        url: "https://www.britannica.com/topic/Oresteia"
      }
    ]
  },
  {
    title: "Ajax",
    author: "Sophocles",
    section: "Greek Drama (Tragedy + Comedy)",
    resources: [
      {
        label: "Full text (English) — Scaife",
        url: "https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0011.tlg003/"
      },
      {
        label: "Reader view (English) — Scaife",
        url: "https://scaife.perseus.org/reader/urn%3Acts%3AgreekLit%3Atlg0011.tlg003.perseus-eng2%3A14/?right=perseus-eng2"
      },
      {
        label: "Sophocles play context — Scaife Sophocles library entry",
        url: "https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0011/"
      },
      {
        label: "Perseus/Scaife (Greek text)",
        url: "https://scaife.perseus.org/library/urn:cts:greekLit:tlg0011.tlg003.1st1K-grc1/"
      },
      {
        label: "Perseus/Scaife (English + apparatus edition listing)",
        url: "https://scaife.perseus.org/library/urn:cts:greekLit:tlg0011.tlg003/"
      },
      {
        label: "SFU Classics gateway (Ajax links hub)",
        url: "https://www.sfu.ca/classics/tragedy.htm"
      },
      {
        label: "Wikipedia (overview + themes)",
        url: "https://en.wikipedia.org/wiki/Ajax_(play)"
      },
      {
        label: "Britannica (Sophocles bio + context)",
        url: "https://www.britannica.com/biography/Sophocles"
      }
    ]
  },
  {
    title: "Philoctetes",
    author: "Sophocles",
    section: "Greek Drama (Tragedy + Comedy)",
    resources: [
      {
        label: "Full text (English) — Scaife",
        url: "https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0011.tlg006.perseus-eng2/"
      },
      {
        label: "Reader view (English) — Scaife",
        url: "https://scaife.perseus.org/reader/urn%3Acts%3AgreekLit%3Atlg0011.tlg006.perseus-eng2%3A26/?right=perseus-eng2"
      },
      {
        label: "Literary analysis PDF — Univ. of Washington",
        url: "https://faculty.washington.edu/rsoder/EDLPS579/MILPhiloctetes.pdf"
      }
    ]
  },
  {
    title: "Ion",
    author: "Euripides",
    section: "Greek Drama (Tragedy + Comedy)",
    resources: [
      {
        label: "Full text (English) — Scaife library entry",
        url: "https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0006.tlg010/"
      },
      {
        label: "Reader view (English) — Scaife",
        url: "https://scaife.perseus.org/reader/urn%3Acts%3AgreekLit%3Atlg0006.tlg010.perseus-eng2%3A59?right=perseus-eng2"
      },
      {
        label: "Euripides corpus hub — Scaife",
        url: "https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0006/"
      }
    ]
  },
  {
    title: "Birds",
    author: "Aristophanes",
    section: "Greek Drama (Tragedy + Comedy)",
    resources: [
      {
        label: "Full text (English) — Scaife",
        url: "https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0019.tlg006.perseus-eng2/"
      },
      {
        label: "Reader view (English) — Scaife",
        url: "https://scaife.perseus.org/reader/urn%3Acts%3AgreekLit%3Atlg0019.tlg006.perseus-eng2%3A30/?right=perseus-eng2"
      }
    ]
  },
  {
    title: "Gargantua and Pantagruel",
    author: "Rabelais",
    section: "Satire, Picaresque, and the Anti-Novel",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/8166"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/8166/8166-h/8166-h.htm"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/gargantua-and-pantagruel-by-francois-rabelais/"
      },
      {
        label: "Author/context hub — Gutenberg author listing",
        url: "https://www.gutenberg.org/ebooks/author/1337"
      },
      {
        label: "Reference overview — Britannica (work)",
        url: "https://www.britannica.com/topic/Gargantua-and-Pantagruel"
      }
    ]
  },
  {
    title: "Exemplary Novels",
    author: "Cervantes",
    section: "Satire, Picaresque, and the Anti-Novel",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/14420"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/14420/14420-h/14420-h.htm"
      },
      {
        label: "Author works hub — Gutenberg",
        url: "https://www.gutenberg.org/ebooks/author/505"
      },
      {
        label: "Collected works index (includes Exemplary Novels) — Gutenberg",
        url: "https://www.gutenberg.org/files/58328/58328-h/58328-h.htm"
      },
      {
        label: "Author works hub (alt listing) — Gutenberg",
        url: "https://www.gutenberg.org/ebooks/author/505?sort_order=release_date&start_index=26"
      }
    ]
  },
  {
    title: "Gulliver’s Travels",
    author: "Swift",
    section: "Satire, Picaresque, and the Anti-Novel",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/829"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/829/829-h/829-h.htm"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/gullivers-travels-by-jonathan-swift/"
      },
      {
        label: "Reference overview — Britannica",
        url: "https://www.britannica.com/topic/Gullivers-Travels"
      },
      {
        label: "Study guide — SparkNotes",
        url: "https://www.sparknotes.com/lit/gulliver/"
      }
    ]
  },
  {
    title: "Tristram Shandy",
    author: "Sterne",
    section: "Satire, Picaresque, and the Anti-Novel",
    resources: [
      {
        label: "Full text (Gutenberg) — author hub",
        url: "https://www.gutenberg.org/ebooks/author/419"
      },
      {
        label: "Plain text download (Gutenberg) — referenced excerpt points to",
        url: "https://www.gutenberg.org/cache/epub/1079/pg1079.txt"
      },
      {
        label: "Audiobook hub — LibriVox author page",
        url: "https://librivox.org/author/14"
      },
      {
        label: "Audiobook (Vol. 2) — LibriVox",
        url: "https://librivox.org/tristram-shandy-vol-2-by-laurence-sterne/"
      },
      {
        label: "Streaming audio (archive mirror) — Internet Archive",
        url: "https://archive.org/details/tristramshandy_1_0902_librivox"
      }
    ]
  },
  {
    title: "Dead Souls",
    author: "Gogol",
    section: "Satire, Picaresque, and the Anti-Novel",
    resources: [
      {
        label: "Author hub — Gutenberg (Gogol)",
        url: "https://www.gutenberg.org/ebooks/author/531"
      },
      {
        label: "Audiobook author hub — LibriVox (Gogol)",
        url: "https://librivox.org/author/644"
      },
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/1081"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/1081/1081-h/1081-h.htm"
      },
      {
        label: "Penn Online Books (formats + metadata)",
        url: "https://onlinebooks.library.upenn.edu/webbin/gutbook/lookup?num=1081"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Dead%20Souls&author=Gogol&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Britannica (Gogol bio)",
        url: "https://www.britannica.com/biography/Nikolai-Gogol"
      }
    ]
  },
  {
    title: "Lais",
    author: "Marie de France",
    section: "Medieval Romance + Early Renaissance Frame Narratives",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/11417"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/11417/11417-h/11417-h.htm"
      },
      {
        label: "Author hub — Gutenberg",
        url: "https://www.gutenberg.org/ebooks/author/3972"
      },
      {
        label: "Subject hub (Arthurian/related medieval lit) — Gutenberg",
        url: "https://www.gutenberg.org/ebooks/subject/385"
      }
    ]
  },
  {
    title: "Lancelot, or The Knight of the Cart",
    author: "Chrétien de Troyes",
    section: "Medieval Romance + Early Renaissance Frame Narratives",
    resources: [
      {
        label: "Full text (Gutenberg) — within “Four Arthurian Romances”",
        url: "https://www.gutenberg.org/ebooks/831"
      },
      {
        label: "Full HTML (Gutenberg) — includes Lancelot text",
        url: "https://www.gutenberg.org/files/831/831-h/831-h.htm"
      },
      {
        label: "Arthurian romances subject hub — Gutenberg",
        url: "https://www.gutenberg.org/ebooks/subject/385"
      },
      {
        label: "Lancelot subject hub — Gutenberg",
        url: "https://www.gutenberg.org/ebooks/subject/16253?sort_order=release_date"
      },
      {
        label: "Plain text excerpt mirror (shows the text stream exists) — Gutenberg txt",
        url: "https://www.gutenberg.org/ebooks/33702.txt.utf-8"
      }
    ]
  },
  {
    title: "Troilus and Criseyde",
    author: "Chaucer",
    section: "Medieval Romance + Early Renaissance Frame Narratives",
    resources: [
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/257/257-h/257-h.htm"
      },
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/257"
      },
      {
        label: "Download hub (UPenn Online Books for Gutenberg #257)",
        url: "https://onlinebooks.library.upenn.edu/webbin/gutbook/lookup?num=257"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/troilus-and-criseyde-by-geoffrey-chaucer/"
      },
      {
        label: "Internet Archive (LibriVox mirror)",
        url: "https://archive.org/details/troilus_criseyde_1208_librivox"
      }
    ]
  },
  {
    title: "Vita Nuova",
    author: "Dante",
    section: "Medieval Romance + Early Renaissance Frame Narratives",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/41085"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/41085/41085-h/41085-h.htm"
      },
      {
        label: "EPUB download (Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/41085.epub.images"
      },
      {
        label: "Internet Archive copy",
        url: "https://archive.org/details/thenewlifelavita41085gut"
      },
      {
        label: "Dante course that includes Vita nuova — Open Yale Courses",
        url: "https://oyc.yale.edu/italian-language-and-literature/ital-310"
      }
    ]
  },
  {
    title: "Decameron",
    author: "Boccaccio",
    section: "Medieval Romance + Early Renaissance Frame Narratives",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/23700"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/23700/23700-h/23700-h.htm"
      },
      {
        label: "Alt reader (Manifold)",
        url: "https://cuny.manifoldapp.org/read/the-decameron-of-giovanni-boccaccio/section/655ac6bd-5010-4b4b-9357-85b89f664e18"
      },
      {
        label: "Gutenberg data record (includes Wikipedia pointer, useful for context)",
        url: "https://www.gutenberg.org/cache/epub/23700/pg23700.rdf"
      },
      {
        label: "Code/text repo mirror (GITenberg)",
        url: "https://github.com/GITenberg/The-Decameron-of-Giovanni-Boccaccio_23700"
      }
    ]
  },
  {
    title: "Divine Comedy",
    author: "Dante",
    section: "Christian Classics + Dante (Philosophy/ Theology Core)",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/8800"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/8800/8800-h/8800-h.htm"
      },
      {
        label: "Full course lectures — Open Yale Courses (Dante in Translation)",
        url: "https://oyc.yale.edu/italian-language-and-literature/ital-310"
      },
      {
        label: "Same course (Yale online landing)",
        url: "https://online.yale.edu/courses/dante-translation"
      },
      {
        label: "Video lecture playlist (Mazzotta/Yale)",
        url: "https://www.youtube.com/playlist?list=PLD1450DFDA859F694"
      }
    ]
  },
  {
    title: "Confessions",
    author: "Augustine",
    section: "Christian Classics + Dante (Philosophy/ Theology Core)",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/3296"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/3296/3296-h/3296-h.htm"
      },
      {
        label: "Internet Archive full text",
        url: "https://archive.org/stream/theconfessionsof03296gut/tcosa10.txt"
      },
      {
        label: "Author hub (more Augustine works) — Gutenberg",
        url: "https://www.gutenberg.org/ebooks/author/1156"
      },
      {
        label: "Translation discussion (context for editions)",
        url: "https://www.catholicworldreport.com/2024/11/11/what-translation-of-augustines-confessions-should-i-read/"
      }
    ]
  },
  {
    title: "Consolation of Philosophy",
    author: "Boethius",
    section: "Christian Classics + Dante (Philosophy/ Theology Core)",
    resources: [
      {
        label: "Full text (Gutenberg) — main page",
        url: "https://www.gutenberg.org/ebooks/14328"
      },
      {
        label: "Full text (Gutenberg) — HTML",
        url: "https://www.gutenberg.org/files/14328/14328-h/14328-h.htm"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/the-consolation-of-philosophy-by-boethius/"
      },
      {
        label: "Full online edition — CCEL",
        url: "https://www.ccel.org/ccel/boethius/consolation.html"
      },
      {
        label: "Philosophy background — Stanford Encyclopedia (Boethius)",
        url: "https://plato.stanford.edu/entries/boethius/"
      }
    ]
  },
  {
    title: "Sermons",
    author: "Meister Eckhart",
    section: "Christian Classics + Dante (Philosophy/ Theology Core)",
    resources: [
      {
        label: "Full sermons online — CCEL main",
        url: "https://www.ccel.org/ccel/eckhart/sermons.html"
      },
      {
        label: "Full sermons (single-page version) — CCEL",
        url: "https://www.ccel.org/ccel/eckhart/sermons.all.html"
      },
      {
        label: "Philosophy background — Stanford Encyclopedia",
        url: "https://plato.stanford.edu/entries/meister-eckhart/"
      },
      {
        label: "Historical bio/context — Catholic Encyclopedia (New Advent)",
        url: "https://www.newadvent.org/cathen/05274a.htm"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/meister-eckharts-sermons-first-time-translated-into-english-by-meister-eckhart/"
      }
    ]
  },
  {
    title: "Essays",
    author: "Michel de Montaigne",
    section: "Renaissance Essays, Court Life, and Power",
    resources: [
      {
        label: "Full text (Project Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/3600"
      },
      {
        label: "Full HTML text",
        url: "https://www.gutenberg.org/files/3600/3600-h/3600-h.htm"
      },
      {
        label: "SEP overview (Montaigne)",
        url: "https://plato.stanford.edu/entries/montaigne/"
      },
      {
        label: "Britannica (Montaigne)",
        url: "https://www.britannica.com/biography/Michel-de-Montaigne"
      },
      {
        label: "LibriVox (audio – Montaigne selections/essays search page)",
        url: "https://librivox.org/search?title=Montaigne&author=Montaigne&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      }
    ]
  },
  {
    title: "The Book of the Courtier",
    author: "Baldassarre Castiglione",
    section: "Renaissance Essays, Court Life, and Power",
    resources: [
      {
        label: "Full text (Project Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/67799"
      },
      {
        label: "Full HTML text",
        url: "https://www.gutenberg.org/files/67799/67799-h/67799-h.htm"
      },
      {
        label: "Britannica (Castiglione + work context)",
        url: "https://www.britannica.com/biography/Baldassare-Castiglione"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Book%20of%20the%20Courtier&author=Castiglione&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Wikipedia (quick orientation + editions)",
        url: "https://en.wikipedia.org/wiki/The_Book_of_the_Courtier"
      }
    ]
  },
  {
    title: "Samson Agonistes",
    author: "John Milton",
    section: "Renaissance Essays, Court Life, and Power",
    resources: [
      {
        label: "Standard Ebooks (clean text)",
        url: "https://standardebooks.org/ebooks/john-milton/samson-agonistes"
      },
      {
        label: "Project Gutenberg (in Poetical Works)",
        url: "https://www.gutenberg.org/ebooks/1745"
      },
      {
        label: "Gutenberg HTML (same volume)",
        url: "https://www.gutenberg.org/files/1745/1745-h/1745-h.htm"
      },
      {
        label: "Internet Archive (a full book edition focused on Samson Agonistes)",
        url: "https://archive.org/details/miltonssamsonag02miltgoog"
      },
      {
        label: "Britannica (Milton bio + historical frame)",
        url: "https://www.britannica.com/biography/John-Milton"
      }
    ]
  },
  {
    title: "Measure for Measure",
    author: "William Shakespeare",
    section: "Renaissance Essays, Court Life, and Power",
    resources: [
      {
        label: "Folger “Entire Play” (read online)",
        url: "https://www.folger.edu/explore/shakespeares-works/measure-for-measure/read/"
      },
      {
        label: "Folger PDF (download)",
        url: "https://folger-main-site-assets.s3.amazonaws.com/uploads/2022/11/measure-for-measure_PDF_FolgerShakespeare.pdf"
      },
      {
        label: "Folger play hub (summaries + extras)",
        url: "https://www.folger.edu/explore/shakespeares-works/measure-for-measure/"
      },
      {
        label: "MIT Shakespeare site (full text + notes hub)",
        url: "http://shakespeare.mit.edu/measure_m/index.html"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Measure%20for%20Measure&author=Shakespeare&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      }
    ]
  },
  {
    title: "Coriolanus",
    author: "William Shakespeare",
    section: "Renaissance Essays, Court Life, and Power",
    resources: [
      {
        label: "Folger “Entire Play” (read online)",
        url: "https://www.folger.edu/explore/shakespeares-works/coriolanus/read/"
      },
      {
        label: "Folger PDF (download)",
        url: "https://folger-main-site-assets.s3.amazonaws.com/uploads/2022/11/coriolanus_PDF_FolgerShakespeare.pdf"
      },
      {
        label: "Folger play hub",
        url: "https://www.folger.edu/explore/shakespeares-works/coriolanus/"
      },
      {
        label: "MIT Shakespeare site (full text)",
        url: "http://shakespeare.mit.edu/coriolanus/"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Coriolanus&author=Shakespeare&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      }
    ]
  },
  {
    title: "The Princess of Cleves",
    author: "Madame de Lafayette",
    section: "European Romance, Letters, and Psychological Realism",
    resources: [
      {
        label: "Project Gutenberg search result (text)",
        url: "https://www.gutenberg.org/ebooks/search/?query=Princess+of+Cleves"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Princess%20of%20Cleves&author=Lafayette&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Wikipedia (work overview + context)",
        url: "https://en.wikipedia.org/wiki/The_Princess_of_Cl%C3%A8ves"
      },
      {
        label: "Internet Archive search (scans/editions)",
        url: "https://archive.org/search?query=%22Princess%20of%20Cleves%22"
      }
    ]
  },
  {
    title: "Les Liaisons dangereuses (Dangerous Liaisons)",
    author: "Choderlos de Laclos",
    section: "European Romance, Letters, and Psychological Realism",
    resources: [
      {
        label: "Gutenberg (French, Vol. 1)",
        url: "https://www.gutenberg.org/ebooks/69891"
      },
      {
        label: "Gutenberg (French, Vol. 2)",
        url: "https://www.gutenberg.org/ebooks/69913"
      },
      {
        label: "Gutenberg (English, “Dangerous Connections”)",
        url: "https://www.gutenberg.org/files/45512/45512-h/45512-h.htm"
      },
      {
        label: "LibriVox (French audio)",
        url: "https://librivox.org/les-liaisons-dangereuses-by-choderlos-de-laclos/"
      },
      {
        label: "Britannica (work + author context)",
        url: "https://www.britannica.com/topic/Les-Liaisons-dangereuses"
      }
    ]
  },
  {
    title: "The Sorrows of Young Werther",
    author: "Johann Wolfgang von Goethe",
    section: "European Romance, Letters, and Psychological Realism",
    resources: [
      {
        label: "Project Gutenberg search (text)",
        url: "https://www.gutenberg.org/ebooks/search/?query=Sorrows+of+Young+Werther"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Werther&author=Goethe&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Britannica (Werther)",
        url: "https://www.britannica.com/topic/The-Sorrows-of-Young-Werther"
      },
      {
        label: "Britannica (Goethe bio)",
        url: "https://www.britannica.com/biography/Johann-Wolfgang-von-Goethe"
      },
      {
        label: "Wikipedia (editions + reception)",
        url: "https://en.wikipedia.org/wiki/The_Sorrows_of_Young_Werther"
      }
    ]
  },
  {
    title: "Eugene Onegin",
    author: "Alexander Pushkin",
    section: "European Romance, Letters, and Psychological Realism",
    resources: [
      {
        label: "Project Gutenberg search (text)",
        url: "https://www.gutenberg.org/ebooks/search/?query=Eugene+Onegin"
      },
      {
        label: "LibriVox (audio)",
        url: "https://librivox.org/search?title=Eugene%20Onegin&author=Pushkin&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Wikipedia (poem-novel structure)",
        url: "https://en.wikipedia.org/wiki/Eugene_Onegin"
      }
    ]
  },
  {
    title: "The Red and the Black",
    author: "Stendhal",
    section: "European Romance, Letters, and Psychological Realism",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/files/44747/44747-h/44747-h.htm"
      },
      {
        label: "LibriVox (audio)",
        url: "https://librivox.org/the-red-and-the-black-version-2-by-stendhal/"
      },
      {
        label: "Internet Archive (scan)",
        url: "https://archive.org/details/redblackchronicl00steniala"
      },
      {
        label: "Britannica (work overview)",
        url: "https://www.britannica.com/topic/The-Red-and-the-Black"
      },
      {
        label: "Wikipedia (historical context)",
        url: "https://en.wikipedia.org/wiki/The_Red_and_the_Black"
      }
    ]
  },
  {
    title: "Michael Kohlhaas",
    author: "Heinrich von Kleist",
    section: "Moral Crisis, Violence, and the Birth of “Modern” Selfhood",
    resources: [
      {
        label: "LibriVox (English audio)",
        url: "https://librivox.org/michael-kohlhaas-english-translation-by-heinrich-von-kleist/"
      },
      {
        label: "Public-domain PDF (translation)",
        url: "https://nmi.org/wp-content/uploads/2015/01/1577.pdf"
      },
      {
        label: "Gutenberg (contains “Michael Kohlhaas” in anthology)",
        url: "https://www.gutenberg.org/ebooks/12060"
      },
      {
        label: "Wikipedia (plot + sources)",
        url: "https://en.wikipedia.org/wiki/Michael_Kohlhaas"
      },
      {
        label: "Internet Archive (related editions/search)",
        url: "https://archive.org/search?query=%22Michael%20Kohlhaas%22"
      }
    ]
  },
  {
    title: "Notes from Underground",
    author: "Fyodor Dostoyevsky",
    section: "Moral Crisis, Violence, and the Birth of “Modern” Selfhood",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/600"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/600/600-h/600-h.htm"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Notes%20from%20Underground&author=Dostoyevsky&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      }
    ]
  },
  {
    title: "Hadji Murat",
    author: "Leo Tolstoy",
    section: "Moral Crisis, Violence, and the Birth of “Modern” Selfhood",
    resources: [
      {
        label: "Free PDF (Penn State Electronic Classics)",
        url: "https://mthoyibi.files.wordpress.com/2011/03/hadji-murad_leo-tolstoy.pdf"
      },
      {
        label: "Internet Archive (scan)",
        url: "https://archive.org/details/hadjimurd00tolsuoft"
      },
      {
        label: "Britannica (Tolstoy bio + context)",
        url: "https://www.britannica.com/biography/Leo-Tolstoy"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/Hadji_Murat"
      },
      {
        label: "Internet Archive search (more editions)",
        url: "https://archive.org/search?query=%22Hadji%20Murat%22"
      }
    ]
  },
  {
    title: "Hunger",
    author: "Knut Hamsun",
    section: "Moral Crisis, Violence, and the Birth of “Modern” Selfhood",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/8387"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/8387/8387-h/8387-h.htm"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Hunger&author=Hamsun&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Britannica (Hamsun bio)",
        url: "https://www.britannica.com/biography/Knut-Hamsun"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)"
      }
    ]
  },
  {
    title: "Lost Illusions",
    author: "Honoré de Balzac",
    section: "Realism, Society, and the Marketplace",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/13159"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/cache/epub/13159/pg13159-images.html"
      },
      {
        label: "Penn Online Books (formats + metadata)",
        url: "https://onlinebooks.library.upenn.edu/webbin/gutbook/lookup?num=13159"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Lost%20Illusions&author=Balzac&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Britannica (Balzac bio)",
        url: "https://www.britannica.com/biography/Honore-de-Balzac"
      }
    ]
  },
  {
    title: "Sentimental Education",
    author: "Gustave Flaubert",
    section: "Realism, Society, and the Marketplace",
    resources: [
      {
        label: "Gutenberg (Vol 1)",
        url: "https://www.gutenberg.org/ebooks/34828"
      },
      {
        label: "Gutenberg HTML (Vol 1)",
        url: "https://www.gutenberg.org/files/34828/34828-h/34828-h.htm"
      },
      {
        label: "Gutenberg (Vol 2)",
        url: "https://www.gutenberg.org/ebooks/27537"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Sentimental%20Education&author=Flaubert&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Britannica (Flaubert bio)",
        url: "https://www.britannica.com/biography/Gustave-Flaubert"
      }
    ]
  },
  {
    title: "Effi Briest",
    author: "Theodor Fontane",
    section: "Realism, Society, and the Marketplace",
    resources: [
      {
        label: "Project Gutenberg (record page)",
        url: "https://www.gutenberg.org/ebooks/5323"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/cache/epub/5323/pg5323-images.html"
      },
      {
        label: "Britannica (Fontane bio)",
        url: "https://www.britannica.com/biography/Theodor-Fontane"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/Effi_Briest"
      },
      {
        label: "Internet Archive search (translations/editions)",
        url: "https://archive.org/search?query=%22Effi%20Briest%22"
      }
    ]
  },
  {
    title: "Daniel Deronda",
    author: "George Eliot",
    section: "Realism, Society, and the Marketplace",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/7469"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/7469/7469-h/7469-h.htm"
      },
      {
        label: "Britannica (George Eliot bio)",
        url: "https://www.britannica.com/biography/George-Eliot"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/Daniel_Deronda"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Daniel%20Deronda&author=Eliot&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      }
    ]
  },
  {
    title: "New Grub Street",
    author: "George Gissing",
    section: "Realism, Society, and the Marketplace",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/1709"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/1709/1709-h/1709-h.htm"
      },
      {
        label: "Standard Ebooks (clean edition)",
        url: "https://standardebooks.org/ebooks/george-gissing/new-grub-street"
      },
      {
        label: "Britannica (Gissing bio)",
        url: "https://www.britannica.com/biography/George-Gissing"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/New_Grub_Street"
      }
    ]
  },
  {
    title: "Fathers and Sons",
    author: "Ivan Turgenev",
    section: "Russian Social & Philosophical Novel",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/47935"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/47935/47935-h/47935-h.htm"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/Fathers_and_Sons_(novel)"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Fathers%20and%20Sons&author=Turgenev&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      }
    ]
  },
  {
    title: "Oblomov",
    author: "Ivan Goncharov",
    section: "Russian Social & Philosophical Novel",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/54700"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/54700/54700-h/54700-h.htm"
      },
      {
        label: "Britannica (Goncharov bio)",
        url: "https://www.britannica.com/biography/Ivan-Aleksandrovich-Goncharov"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/Oblomov"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Oblomov&author=Goncharov&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      }
    ]
  },
  {
    title: "The Idiot",
    author: "Fyodor Dostoyevsky",
    section: "Russian Social & Philosophical Novel",
    resources: [
      {
        label: "Project Gutenberg (text)",
        url: "https://www.gutenberg.org/ebooks/2638"
      },
      {
        label: "Gutenberg HTML",
        url: "https://www.gutenberg.org/files/2638/2638-h/2638-h.htm"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=The%20Idiot&author=Dostoyevsky&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Britannica (work/author context)",
        url: "https://www.britannica.com/biography/Fyodor-Dostoyevsky"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/The_Idiot"
      }
    ]
  },
  {
    title: "The Death of Ivan Ilyich",
    author: "Leo Tolstoy",
    section: "Russian Social & Philosophical Novel",
    resources: [
      {
        label: "Free PDF (Stanford-hosted)",
        url: "https://web.stanford.edu/~jsabol/existentialism/materials/tolstoy_death_ilyich.pdf"
      },
      {
        label: "CCEL PDF (multiple formats)",
        url: "https://www.ccel.org/ccel/t/tolstoy/ivan/cache/ivan.pdf"
      },
      {
        label: "LibriVox search (audio)",
        url: "https://librivox.org/search?title=Death%20of%20Ivan%20Ilyich&author=Tolstoy&reader=&keywords=&genre_id=0&status=all&project_type=either&recorded_language=&sort_order=catalog_date&search_page=1&search_form=advanced"
      },
      {
        label: "Britannica (Tolstoy bio)",
        url: "https://www.britannica.com/biography/Leo-Tolstoy"
      },
      {
        label: "Wikipedia (work overview)",
        url: "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich"
      }
    ]
  },
  {
    title: "Confessions of an English Opium-Eater",
    author: "De Quincey",
    section: "The Inner Life: Diaries, Fragments, Fever Dreams",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/2040"
      },
      {
        label: "HTML version — Project Gutenberg",
        url: "https://www.gutenberg.org/files/2040/2040-h/2040-h.htm"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/confessions-of-an-english-opium-eater-by-thomas-de-quincey/"
      },
      {
        label: "Author & work overview — Britannica",
        url: "https://www.britannica.com/topic/Confessions-of-an-English-Opium-Eater"
      }
    ]
  },
  {
    title: "Zibaldone (selections)",
    author: "Leopardi",
    section: "The Inner Life: Diaries, Fragments, Fever Dreams",
    resources: [
      {
        label: "Britannica — Leopardi bio",
        url: "https://www.britannica.com/biography/Giacomo-Leopardi"
      }
    ]
  },
  {
    title: "Aphorisms",
    author: "Georg Christoph Lichtenberg",
    section: "The Inner Life: Diaries, Fragments, Fever Dreams",
    resources: [
      {
        label: "Full text (Gutenberg)",
        url: "https://www.gutenberg.org/ebooks/10850"
      },
      {
        label: "Britannica — Lichtenberg bio",
        url: "https://www.britannica.com/biography/Georg-Christoph-Lichtenberg"
      }
    ]
  },
  {
    title: "Inferno",
    author: "August Strindberg",
    section: "The Inner Life: Diaries, Fragments, Fever Dreams",
    resources: [
      {
        label: "Project Gutenberg (English translation)",
        url: "https://www.gutenberg.org/ebooks/45480"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/45480/45480-h/45480-h.htm"
      },
      {
        label: "Britannica — Strindberg bio",
        url: "https://www.britannica.com/biography/August-Strindberg"
      },
      {
        label: "Wikipedia — Inferno overview",
        url: "https://en.wikipedia.org/wiki/Inferno_(Strindberg_novel)"
      }
    ]
  },
  {
    title: "The Notebooks of Malte Laurids Brigge",
    author: "Rainer Maria Rilke",
    section: "The Inner Life: Diaries, Fragments, Fever Dreams",
    resources: [
      {
        label: "Project Gutenberg (alt translation)",
        url: "https://www.gutenberg.org/ebooks/38436"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/38436/38436-h/38436-h.htm"
      },
      {
        label: "Britannica — Rilke bio",
        url: "https://www.britannica.com/biography/Rainer-Maria-Rilke"
      }
    ]
  },
  {
    title: "Wilhelm Meister’s Apprenticeship",
    author: "Goethe",
    section: "Coming-of-Age & Education of the Soul",
    resources: [
      {
        label: "Project Gutenberg (Vol. I)",
        url: "https://www.gutenberg.org/ebooks/36556"
      },
      {
        label: "Project Gutenberg (Vol. II)",
        url: "https://www.gutenberg.org/ebooks/36557"
      },
      {
        label: "Britannica — work overview",
        url: "https://www.britannica.com/topic/Wilhelm-Meisters-Apprenticeship"
      }
    ]
  },
  {
    title: "Buddenbrooks",
    author: "Thomas Mann",
    section: "Coming-of-Age & Education of the Soul",
    resources: [
      {
        label: "Project Gutenberg (English translation)",
        url: "https://www.gutenberg.org/ebooks/34811"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/34811/34811-h/34811-h.htm"
      },
      {
        label: "Britannica — Mann bio",
        url: "https://www.britannica.com/biography/Thomas-Mann"
      }
    ]
  },
  {
    title: "Young Törless",
    author: "Robert Musil",
    section: "Coming-of-Age & Education of the Soul",
    resources: [
      {
        label: "Internet Archive (English translation)",
        url: "https://archive.org/details/youngtorless00musi"
      },
      {
        label: "Britannica — Musil bio",
        url: "https://www.britannica.com/biography/Robert-Musil"
      },
      {
        label: "Wikipedia — novel overview",
        url: "https://en.wikipedia.org/wiki/The_Confusions_of_Young_T%C3%B6rless"
      }
    ]
  },
  {
    title: "The Lost Domain (Le Grand Meaulnes)",
    author: "Alain-Fournier",
    section: "Coming-of-Age & Education of the Soul",
    resources: [
      {
        label: "Project Gutenberg (English translation)",
        url: "https://www.gutenberg.org/ebooks/20304"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/20304/20304-h/20304-h.htm"
      },
      {
        label: "Britannica — Alain-Fournier bio",
        url: "https://www.britannica.com/biography/Alain-Fournier"
      },
      {
        label: "Wikipedia — novel overview",
        url: "https://en.wikipedia.org/wiki/Le_Grand_Meaulnes"
      }
    ]
  },
  {
    title: "Peer Gynt",
    author: "Ibsen",
    section: "Coming-of-Age & Education of the Soul",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/1326"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/1326/1326-h/1326-h.htm"
      },
      {
        label: "LibriVox audiobook",
        url: "https://librivox.org/peer-gynt-by-henrik-ibsen/"
      },
      {
        label: "Britannica — Ibsen bio",
        url: "https://www.britannica.com/biography/Henrik-Ibsen"
      },
      {
        label: "Yale lecture on Ibsen",
        url: "https://oyc.yale.edu/english/engl-291"
      }
    ]
  },
  {
    title: "The Civilization of the Renaissance in Italy",
    author: "Burckhardt",
    section: "Civilization, Culture, and Decline",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/2074"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/2074/2074-h/2074-h.htm"
      },
      {
        label: "Britannica — Burckhardt bio",
        url: "https://www.britannica.com/biography/Jacob-Burckhardt"
      },
      {
        label: "Stanford lecture (Renaissance historiography)",
        url: "https://oyc.yale.edu/history/hist-202"
      }
    ]
  },
  {
    title: "Culture and Anarchy",
    author: "Matthew Arnold",
    section: "Civilization, Culture, and Decline",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/4212"
      },
      {
        label: "Britannica — Arnold bio",
        url: "https://www.britannica.com/biography/Matthew-Arnold"
      }
    ]
  },
  {
    title: "The Renaissance",
    author: "Walter Pater",
    section: "Civilization, Culture, and Decline",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/2398"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/2398/2398-h/2398-h.htm"
      },
      {
        label: "Internet Archive scan",
        url: "https://archive.org/details/renaissancestudi00pateuoft"
      },
      {
        label: "Britannica — Pater bio",
        url: "https://www.britannica.com/biography/Walter-Pater"
      }
    ]
  },
  {
    title: "Sartor Resartus",
    author: "Thomas Carlyle",
    section: "Civilization, Culture, and Decline",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/11752"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/11752/11752-h/11752-h.htm"
      },
      {
        label: "Internet Archive scan",
        url: "https://archive.org/details/sartorresartus00carluoft"
      },
      {
        label: "Britannica — Carlyle bio",
        url: "https://www.britannica.com/biography/Thomas-Carlyle"
      },
      {
        label: "Victorian prose lecture",
        url: "https://oyc.yale.edu/english/engl-291"
      }
    ]
  },
  {
    title: "Against Nature",
    author: "Huysmans",
    section: "Civilization, Culture, and Decline",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/12341"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/12341/12341-h/12341-h.htm"
      },
      {
        label: "Britannica — Huysmans bio",
        url: "https://www.britannica.com/biography/Joris-Karl-Huysmans"
      }
    ]
  },
  {
    title: "Zeno’s Conscience",
    author: "Svevo",
    section: "Civilization, Culture, and Decline",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/58321"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/58321/58321-h/58321-h.htm"
      },
      {
        label: "Britannica — Svevo bio",
        url: "https://www.britannica.com/biography/Italo-Svevo"
      },
      {
        label: "Modernism lecture (Yale)",
        url: "https://oyc.yale.edu/english/engl-291"
      }
    ]
  },
  {
    title: "Heaven and Hell",
    author: "Swedenborg",
    section: "The Sacred, Mystical, and Unsettling",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/1739"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/1739/1739-h/1739-h.htm"
      },
      {
        label: "Britannica — Swedenborg bio",
        url: "https://www.britannica.com/biography/Emanuel-Swedenborg"
      },
      {
        label: "Stanford Encyclopedia (mysticism)",
        url: "https://plato.stanford.edu/entries/mysticism/"
      }
    ]
  },
  {
    title: "Masnavi",
    author: "Rumi",
    section: "The Sacred, Mystical, and Unsettling",
    resources: [
      {
        label: "Sacred Texts (English translation)",
        url: "https://www.sacred-texts.com/isl/masnavi/"
      },
      {
        label: "Britannica — Masnavi overview",
        url: "https://www.britannica.com/topic/Masnavi"
      },
      {
        label: "Audio recitation (Persian + English)",
        url: "https://www.youtube.com/watch?v=4xIfjN_ybG8"
      }
    ]
  },
  {
    title: "Upanishads",
    section: "The Sacred, Mystical, and Unsettling",
    resources: [
      {
        label: "Internet Archive (Max Müller translation)",
        url: "https://archive.org/details/upanishads01mluoft"
      },
      {
        label: "Britannica — Upanishads overview",
        url: "https://www.britannica.com/topic/Upanishad"
      }
    ]
  },
  {
    title: "Analects",
    author: "Confucius",
    section: "China: Order, Nature, and the Human Way",
    resources: [
      {
        label: "Chinese Text Project (Chinese + English)",
        url: "https://ctext.org/analects"
      },
      {
        label: "Project Gutenberg (Legge translation)",
        url: "https://www.gutenberg.org/ebooks/3330"
      },
      {
        label: "Stanford Encyclopedia (Confucianism)",
        url: "https://plato.stanford.edu/entries/confucius/"
      }
    ]
  },
  {
    title: "Mencius",
    author: "Mencius",
    section: "China: Order, Nature, and the Human Way",
    resources: [
      {
        label: "Chinese Text Project",
        url: "https://ctext.org/mengzi"
      },
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/3347"
      },
      {
        label: "Stanford Encyclopedia",
        url: "https://plato.stanford.edu/entries/mencius/"
      },
      {
        label: "Yale lecture (Confucian ethics)",
        url: "https://oyc.yale.edu/religious-studies/rlst-145"
      }
    ]
  },
  {
    title: "Zhuangzi",
    author: "Zhuangzi",
    section: "China: Order, Nature, and the Human Way",
    resources: [
      {
        label: "Chinese Text Project",
        url: "https://ctext.org/zhuangzi"
      },
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/43663"
      },
      {
        label: "Stanford Encyclopedia (Daoism)",
        url: "https://plato.stanford.edu/entries/daoism/"
      }
    ]
  },
  {
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    section: "Nietzsche & the Crisis of Modern Values",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/1998"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/1998/1998-h/1998-h.htm"
      },
      {
        label: "Stanford Encyclopedia — Nietzsche",
        url: "https://plato.stanford.edu/entries/nietzsche/"
      },
      {
        label: "Britannica — Zarathustra overview",
        url: "https://www.britannica.com/topic/Thus-Spoke-Zarathustra"
      },
      {
        label: "Yale lecture (Nietzsche & modernity)",
        url: "https://oyc.yale.edu/philosophy/phil-176"
      }
    ]
  },
  {
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    section: "Nietzsche & the Crisis of Modern Values",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/4363"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/4363/4363-h/4363-h.htm"
      },
      {
        label: "Stanford Encyclopedia — Nietzsche’s moral philosophy",
        url: "https://plato.stanford.edu/entries/nietzsche-moral-political/"
      },
      {
        label: "Britannica — Beyond Good and Evil",
        url: "https://www.britannica.com/topic/Beyond-Good-and-Evil"
      }
    ]
  },
  {
    title: "Genealogy of Morals",
    author: "Friedrich Nietzsche",
    section: "Nietzsche & the Crisis of Modern Values",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/52319"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/52319/52319-h/52319-h.htm"
      },
      {
        label: "Stanford Encyclopedia — ressentiment",
        url: "https://plato.stanford.edu/entries/nietzsche/#ResMor"
      },
      {
        label: "Britannica — Genealogy of Morals",
        url: "https://www.britannica.com/topic/On-the-Genealogy-of-Morals"
      },
      {
        label: "Yale discussion (slave vs master morality)",
        url: "https://oyc.yale.edu/philosophy/phil-176/lecture-10"
      }
    ]
  },
  {
    title: "Fear and Trembling",
    author: "Søren Kierkegaard",
    section: "Existentialism Before Existentialism",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/278"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/278/278-h/278-h.htm"
      },
      {
        label: "Stanford Encyclopedia — Kierkegaard",
        url: "https://plato.stanford.edu/entries/kierkegaard/"
      },
      {
        label: "Britannica — Fear and Trembling",
        url: "https://www.britannica.com/topic/Fear-and-Trembling"
      },
      {
        label: "Yale lecture (faith & subjectivity)",
        url: "https://oyc.yale.edu/philosophy/phil-176/lecture-14"
      }
    ]
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    section: "Existentialism Before Existentialism",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/2554"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/2554/2554-h/2554-h.htm"
      },
      {
        label: "Britannica — novel overview",
        url: "https://www.britannica.com/topic/Crime-and-Punishment"
      }
    ]
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    section: "Existentialism Before Existentialism",
    resources: [
      {
        label: "Project Gutenberg (English translation)",
        url: "https://www.gutenberg.org/ebooks/7849"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/7849/7849-h/7849-h.htm"
      },
      {
        label: "Britannica — The Trial",
        url: "https://www.britannica.com/topic/The-Trial-novel-by-Kafka"
      }
    ]
  },
  {
    title: "The Communist Manifesto",
    author: "Karl Marx",
    section: "Revolution, Ideology, and Political Fire",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/61"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/61/61-h/61-h.htm"
      },
      {
        label: "Stanford Encyclopedia — Marx",
        url: "https://plato.stanford.edu/entries/marx/"
      },
      {
        label: "Britannica — Communist Manifesto",
        url: "https://www.britannica.com/topic/The-Communist-Manifesto"
      },
      {
        label: "Yale lecture (Marx & capitalism)",
        url: "https://oyc.yale.edu/political-science/plsc-114"
      }
    ]
  },
  {
    title: "Democracy in America",
    author: "Alexis de Tocqueville",
    section: "Revolution, Ideology, and Political Fire",
    resources: [
      {
        label: "Project Gutenberg (Vol. I)",
        url: "https://www.gutenberg.org/ebooks/815"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/815/815-h/815-h.htm"
      },
      {
        label: "Britannica — Tocqueville",
        url: "https://www.britannica.com/biography/Alexis-de-Tocqueville"
      },
      {
        label: "Stanford Encyclopedia — democracy",
        url: "https://plato.stanford.edu/entries/democracy/"
      }
    ]
  },
  {
    title: "Reflections on the Revolution in France",
    author: "Edmund Burke",
    section: "Revolution, Ideology, and Political Fire",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/15679"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/15679/15679-h/15679-h.htm"
      },
      {
        label: "Stanford Encyclopedia — conservatism",
        url: "https://plato.stanford.edu/entries/conservatism/"
      },
      {
        label: "Yale lecture (French Revolution)",
        url: "https://oyc.yale.edu/history/hist-202"
      }
    ]
  },
  {
    title: "Republic",
    author: "Plato",
    section: "Myth, Archetype, and the Collective Mind",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/1497"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/1497/1497-h/1497-h.htm"
      },
      {
        label: "Stanford Encyclopedia — Plato",
        url: "https://plato.stanford.edu/entries/plato/"
      },
      {
        label: "Britannica — Republic",
        url: "https://www.britannica.com/topic/Republic-dialogue-by-Plato"
      },
      {
        label: "Yale lecture (Plato & justice)",
        url: "https://oyc.yale.edu/philosophy/phil-181"
      }
    ]
  },
  {
    title: "Modern Man in Search of a Soul",
    author: "Carl Jung",
    section: "Myth, Archetype, and the Collective Mind",
    resources: [
      {
        label: "Project Gutenberg (authorized edition)",
        url: "https://www.gutenberg.org/ebooks/56143"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/56143/56143-h/56143-h.htm"
      },
      {
        label: "Britannica — Jung",
        url: "https://www.britannica.com/biography/Carl-Jung"
      }
    ]
  },
  {
    title: "The Golden Bough",
    author: "James Frazer",
    section: "Myth, Archetype, and the Collective Mind",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/3623"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/3623/3623-h/3623-h.htm"
      },
      {
        label: "Britannica — Frazer",
        url: "https://www.britannica.com/biography/James-George-Frazer"
      }
    ]
  },
  {
    title: "The Waste Land",
    author: "T. S. Eliot",
    section: "Late Modernism & the Fragmented World",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/1321"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/1321/1321-h/1321-h.htm"
      },
      {
        label: "Britannica — The Waste Land",
        url: "https://www.britannica.com/topic/The-Waste-Land-poem"
      },
      {
        label: "Yale lecture (Modernist poetry)",
        url: "https://oyc.yale.edu/english/engl-310"
      },
      {
        label: "British Library — Eliot manuscripts",
        url: "https://www.bl.uk/collection-items/t-s-eliots-the-waste-land"
      }
    ]
  },
  {
    title: "Mrs Dalloway",
    author: "Virginia Woolf",
    section: "Late Modernism & the Fragmented World",
    resources: [
      {
        label: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/71865"
      },
      {
        label: "HTML version",
        url: "https://www.gutenberg.org/files/71865/71865-h/71865-h.htm"
      },
      {
        label: "Britannica — Woolf",
        url: "https://www.britannica.com/biography/Virginia-Woolf"
      },
      {
        label: "Yale lecture (stream of consciousness)",
        url: "https://oyc.yale.edu/english/engl-291"
      }
    ]
  },
  {
    title: "Waiting for Godot",
    author: "Samuel Beckett",
    section: "Late Modernism & the Fragmented World",
    resources: [
      {
        label: "Internet Archive (public-domain translation)",
        url: "https://archive.org/details/waitingforgodot00beck"
      },
      {
        label: "Britannica — Godot",
        url: "https://www.britannica.com/topic/Waiting-for-Godot"
      },
      {
        label: "Stanford Encyclopedia — camus(read about absurd)",
        url: "https://plato.stanford.edu/entries/camus/"
      },
      {
        label: "British Library — Beckett archive",
        url: "https://www.bl.uk/collection-items/samuel-beckett-archive"
      }
    ]
  },
  {
    title: "A Treatise of Human Nature",
    author: "David Hume",
    section: "Learning How to Think",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/4705"
      },
      {
        label: "Audiobook — LibriVox (Volume 1)",
        url: "https://librivox.org/treatise-of-human-nature-vol-1-by-david-hume/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Hume)",
        url: "https://plato.stanford.edu/entries/hume/"
      },
      {
        label: "Simplified text — Early Modern Texts (Hume)",
        url: "https://www.earlymoderntexts.com/authors/hume"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/A_Treatise_of_Human_Nature"
      }
    ]
  },
  {
    title: "Discourse on the Method",
    author: "René Descartes",
    section: "Learning How to Think",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/59"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/discourse-on-the-method-by-rene-descartes/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Descartes)",
        url: "https://plato.stanford.edu/entries/descartes/"
      },
      {
        label: "Simplified text — Early Modern Texts (Descartes)",
        url: "https://www.earlymoderntexts.com/authors/descartes"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Discourse_on_the_Method"
      }
    ]
  },
  {
    title: "Ethics",
    author: "Benedictus de Spinoza",
    section: "Learning How to Think",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/3800"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/the-ethics-by-spinoza-benedict-de/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Spinoza)",
        url: "https://plato.stanford.edu/entries/spinoza/"
      },
      {
        label: "Simplified text — Early Modern Texts (Spinoza)",
        url: "https://www.earlymoderntexts.com/authors/spinoza"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Ethics_(Spinoza)"
      }
    ]
  },
  {
    title: "Parmenides",
    author: "Plato",
    section: "Learning How to Think",
    resources: [
      {
        label: "Full text — Project Gutenberg (Jowett translation)",
        url: "https://www.gutenberg.org/ebooks/1687"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/parmenides-by-plato/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Plato’s Parmenides)",
        url: "https://plato.stanford.edu/entries/plato-parmenides/"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Parmenides_(dialogue)"
      }
    ]
  },
  {
    title: "Theaetetus",
    author: "Plato",
    section: "Learning How to Think",
    resources: [
      {
        label: "Full text — Project Gutenberg (Jowett translation)",
        url: "https://www.gutenberg.org/ebooks/1726"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/theaetetus-by-plato/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Plato’s Theaetetus)",
        url: "https://plato.stanford.edu/entries/plato-theaetetus/"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Theaetetus_(dialogue)"
      }
    ]
  },
  {
    title: "Pensées",
    author: "Blaise Pascal",
    section: "Learning How to Think",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/18269"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/pensees_by_blaise_pascal/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Pascal)",
        url: "https://plato.stanford.edu/entries/pascal/"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Pens%C3%A9es"
      }
    ]
  },
  {
    title: "The Bacchae",
    author: "Euripides",
    section: "Greek Tragedy Starter Pack",
    resources: [
      {
        label: "Full text — Project Gutenberg (Gilbert Murray translation)",
        url: "https://www.gutenberg.org/ebooks/35173"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/the-bacchae-by-euripides/"
      },
      {
        label: "Study guide — LitCharts",
        url: "https://www.litcharts.com/lit/the-bacchae"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/The_Bacchae"
      }
    ]
  },
  {
    title: "Book of Illustrations: Ancient Tragedy",
    author: "Richard G. Moulton",
    section: "Greek Tragedy Starter Pack",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/19559"
      },
      {
        label: "Background — Wikipedia (Greek tragedy)",
        url: "https://en.wikipedia.org/wiki/Greek_tragedy"
      }
    ]
  },
  {
    title: "The Birth of Tragedy",
    author: "Friedrich Nietzsche",
    section: "Nietzsche & the Crisis of Modern Values",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/51356"
      },
      {
        label: "Audiobook — LibriVox",
        url: "https://librivox.org/birth-of-tragedy-by-friedrich-nietzsche/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Nietzsche)",
        url: "https://plato.stanford.edu/entries/nietzsche/"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/The_Birth_of_Tragedy"
      }
    ]
  },
  {
    title: "The World as Will and Idea",
    author: "Arthur Schopenhauer",
    section: "Learning How to Think",
    resources: [
      {
        label: "Full text — Project Gutenberg (Vol. 1)",
        url: "https://www.gutenberg.org/ebooks/38427"
      },
      {
        label: "Audiobook — LibriVox (Vol. 1)",
        url: "https://librivox.org/the-world-as-will-and-idea-v1-by-arthur-schopenhauer/"
      },
      {
        label: "Encyclopedia — Stanford Encyclopedia of Philosophy (Schopenhauer)",
        url: "https://plato.stanford.edu/entries/schopenhauer/"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/The_World_as_Will_and_Representation"
      }
    ]
  },
  {
    title: "The Tale of Genji",
    author: "Murasaki Shikibu",
    section: "Classical Japanese Literature",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/66057"
      },
      {
        label: "Study guide — LitCharts",
        url: "https://www.litcharts.com/lit/the-tale-of-genji"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/The_Tale_of_Genji"
      }
    ]
  },
  {
    title: "The Pillow Book",
    author: "Sei Shōnagon",
    section: "Classical Japanese Literature",
    resources: [
      {
        label: "Full text — Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/76016"
      },
      {
        label: "Overview — Wikipedia",
        url: "https://en.wikipedia.org/wiki/The_Pillow_Book"
      }
    ]
  },
  {
    title: "Beacon Lights of History",
    author: "John Lord",
    section: "History",
    resources: [
      {
        label: "Full text — Project Gutenberg (Vol. 3 part 2: Renaissance and Reformation)",
        url: "https://www.gutenberg.org/ebooks/1499"
      }
    ]
  }
]

/** The two master documents containing the full curriculum & resource library. */
export const masterGuides = [
  {
    label: 'Classic Revival Curriculum & Study Guide',
    url: 'https://docs.google.com/document/d/1_oD1cobwylRIjpe555ONgy_sJo6S2z1qT9H37vCLiq8/edit?usp=sharing',
  },
  {
    label: 'Classic Revival Reading List & Resource Library',
    url: 'https://docs.google.com/document/d/1SqqO_qvQB2HXu_1Xij9stFvR_zlOeUrwG-Rogg37IdE/edit?usp=sharing',
  }
]

// ---------- lookup helpers (no need to edit below) ----------

const STOP_WORDS = new Set(['the', 'a', 'an', 'of', 'and', 'or', 'in', 'on', 'by', 'to', 'la', 'le', 'de', 'selections', 'complete', 'volume', 'vol', 'part'])

function normalize(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\[\]\(\)]/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokens(s) {
  return normalize(s).split(' ').filter((t) => t && !STOP_WORDS.has(t))
}

function tokenMatch(a, b) {
  if (a === b) return true
  return a.length >= 4 && b.length >= 4 && (a.startsWith(b) || b.startsWith(a))
}

function lastName(a) {
  const t = tokens(a)
  return t.length ? t[t.length - 1] : ''
}

/**
 * Find the study resources for a library book.
 * @param {string} title  The book's title as it appears in the library.
 * @param {string} [author]  Optional author, used to break ties.
 * @returns {{title: string, section?: string, resources: {label: string, url: string}[]} | null}
 */
export function getResourcesForBook(title, author) {
  const libTokens = tokens(title)
  if (!libTokens.length) return null
  let best = null
  let bestScore = 0
  for (const entry of workResources) {
    const entryTokens = tokens(entry.title)
    if (!entryTokens.length) continue
    const authorMatch = Boolean(
      author && entry.author && tokenMatch(lastName(entry.author), lastName(author))
    )
    let shared = 0
    for (const t of entryTokens) if (libTokens.some((b) => tokenMatch(t, b))) shared++
    if (shared < entryTokens.length) {
      // every token of the entry's short title must appear in the library title;
      // fall back to author-name match for eponymous works (e.g. Zhuangzi)
      if (authorMatch && normalize(entry.title) === normalize(entry.author)) {
        return entry
      }
      continue
    }
    // One-word titles ("Republic", "Essays") are too ambiguous on their own:
    // require the author to agree, unless the library title is just as short.
    if (entryTokens.length === 1 && !authorMatch && libTokens.length > 2) continue
    let score = 1 + shared / libTokens.length
    if (authorMatch) score += 2
    if (score > bestScore) {
      best = entry
      bestScore = score
    }
  }
  return best
}
