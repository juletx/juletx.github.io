// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of research and development projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/cv/";
          },
        },{id: "news-started-phd-in-language-analysis-and-processing-at-hitz-center-ixa-group-ehu-working-on-improving-language-models-for-low-resource-languages",
          title: '🎓 Started PhD in Language Analysis and Processing at HiTZ Center IXA Group...',
          description: "",
          section: "News",},{id: "news-latxa-paper-accepted-at-acl-2024-latxa-is-a-family-of-large-language-models-for-basque-with-up-to-70-billion-parameters",
          title: '🚀 Latxa paper accepted at ACL 2024! Latxa is a family of large...',
          description: "",
          section: "News",},{id: "news-new-paper-bertaqa-how-much-do-language-models-know-about-local-culture-accepted-at-neurips-2024-datasets-and-benchmarks",
          title: '📄 New paper “BertaQA: How Much Do Language Models Know About Local Culture?”...',
          description: "",
          section: "News",},{id: "news-our-paper-latxa-an-open-language-model-and-evaluation-suite-for-basque-received-the-best-resource-paper-award-at-acl-2024",
          title: '🏆 Our paper “Latxa: An Open Language Model and Evaluation Suite for Basque”...',
          description: "",
          section: "News",},{id: "projects-academic-website",
          title: 'Academic Website',
          description: "Academic personal website in three languages built with Hugo and Wowchemy",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/academic-website/";
            },},{id: "projects-antxieta-arkeologi-taldea",
          title: 'Antxieta Arkeologi Taldea',
          description: "Website for archaeological research group in Gipuzkoa",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/antxieta-arkeologi-taldea/";
            },},{id: "projects-battleshipfeatureide",
          title: 'BattleshipFeatureIDE',
          description: "Java Battleship game as a Software Product Line",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/battleship-feature-ide/";
            },},{id: "projects-community-detection",
          title: 'Community Detection',
          description: "Detecting communities using metaheuristics on NIPS authors network",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/community-detection/";
            },},{id: "projects-computational-syntax",
          title: 'Computational Syntax',
          description: "Computational Syntax course materials",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/computational-syntax/";
            },},{id: "projects-corpus-linguistics",
          title: 'Corpus Linguistics',
          description: "Corpus Linguistics course materials",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/corpus-linguistics/";
            },},{id: "projects-deep-learning-for-nlp",
          title: 'Deep Learning for NLP',
          description: "Course materials for Deep Learning applied to Natural Language Processing",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/deep-learning-nlp/";
            },},{id: "projects-dialbot",
          title: 'Dialbot',
          description: "End-to-end dialogue system based on deep learning",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/dialbot/";
            },},{id: "projects-egunean-behin-vqa",
          title: 'Egunean Behin VQA',
          description: "Visual Question Answering dataset based on Basque quiz game",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/egunean-behin-vqa/";
            },},{id: "projects-github-website",
          title: 'GitHub Website',
          description: "Personal GitHub Pages website with repositories and topics",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/github-website/";
            },},{id: "projects-hackerrank",
          title: 'HackerRank',
          description: "Solutions for programming challenges in multiple languages",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/hackerrank/";
            },},{id: "projects-hyperpartisan-news-analysis",
          title: 'Hyperpartisan News Analysis',
          description: "Hyperpartisan News Analysis with Scattertext",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/hyperpartisan-news-analysis/";
            },},{id: "projects-image-caption-generation",
          title: 'Image Caption Generation',
          description: "Automatic image caption generation using CNN and LSTM",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/image-caption-generation/";
            },},{id: "projects-100iragarki",
          title: '100Iragarki',
          description: "Digital showcase for Network Services and Applications course",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/iragarkiak/";
            },},{id: "projects-mfds",
          title: 'MFDS',
          description: "Formal Methods for Software Development",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/mfds/";
            },},{id: "projects-ml-exercises",
          title: 'ML Exercises',
          description: "Machine Learning exercises with R",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/ml-exercises/";
            },},{id: "projects-mlnn-labs",
          title: 'MLNN Labs',
          description: "Machine Learning and Neural Networks laboratory exercises",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/mlnn-labs/";
            },},{id: "projects-mlnn-lectures",
          title: 'MLNN Lectures',
          description: "Machine Learning and Neural Networks lecture notes",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/mlnn-lectures/";
            },},{id: "projects-multilingual-question-answering",
          title: 'Multilingual Question Answering',
          description: "Zero-shot and translation experiments on multilingual QA datasets",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/multilingual-qa/";
            },},{id: "projects-nlp-applications-ii",
          title: 'NLP Applications II',
          description: "Information Extraction, QA, Recommender and Conversational Systems",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/nlp-applications-2/";
            },},{id: "projects-nlp-applications-i",
          title: 'NLP Applications I',
          description: "Text Classification, Sequence Labelling, Opinion Mining and QA",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/nlp-applications/";
            },},{id: "projects-prometa-io-system",
          title: 'ProMeta IO-System',
          description: "ProMeta project content management system",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/prometa-io-system/";
            },},{id: "projects-prometa-modeleditor",
          title: 'ProMeta ModelEditor',
          description: "ProMeta project model editor using Model-Driven Engineering",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/prometa-model-editor/";
            },},{id: "projects-prometa",
          title: 'ProMeta',
          description: "Software development process definition system based on metamodels",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/prometa/";
            },},{id: "projects-quiz",
          title: 'Quiz',
          description: "Question game for Web Systems course",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/quiz/";
            },},{id: "projects-shape-classification",
          title: 'Shape Classification',
          description: "Comparing classification algorithms on shape datasets",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/shape-classification/";
            },},{id: "projects-spatial-reasoning",
          title: 'Spatial Reasoning',
          description: "Grounding Language Models for Compositional and Spatial Reasoning",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/spatial-reasoning/";
            },},{id: "projects-spiking-neural-network",
          title: 'Spiking Neural Network',
          description: "Simulating the Izhikevich spiking neuron model with Brian2",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/spiking-neural-network/";
            },},{id: "projects-twitter-sentiment",
          title: 'Twitter Sentiment',
          description: "Twitter Sentiment and Emotion Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/twitter-sentiment/";
            },},{id: "projects-web-security-analysis",
          title: 'Web Security Analysis',
          description: "Improving web security using Hardenize and Security Headers",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/web-security/";
            },},{id: "projects-writing-systems",
          title: 'Writing Systems',
          description: "Comparing writing systems with multilingual G2P and P2G conversion",
          section: "Projects",handler: () => {
              window.location.href = "/al-folio/projects/writing-systems/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/al-folio/assets/rendercv/rendercv_output/Julen_Etxaniz_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%6C%65%74%78%61%72%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/juletx", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/juletxara", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/juletxara", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BDGXAjgAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2226458991", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-2099-7766", "_blank");
        },
      },{
        id: 'social-arxiv',
        title: 'arXiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/etxaniz_j_1.html", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/al-folio/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
