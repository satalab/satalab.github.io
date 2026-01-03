// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/index.html";
          },
        },{id: "nav-professor",
          title: "Professor",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/professor/";
          },
        },{id: "nav-members",
          title: "Members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "post-welcome-aboard-sion",
        
          title: "Welcome aboard, Sion!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/news/2025/lab_5/";
          
        },
      },{id: "post-welcome-aboard-seoyoung",
        
          title: "Welcome aboard, Seoyoung!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/news/2025/lab_4/";
          
        },
      },{id: "post-prof-se-min-lim-will-be-serving-on-the-session-chair-for-pact-2025",
        
          title: "Prof. Se-Min Lim will be serving on the session chair for PACT 2025!...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/news/2025/lab_3/";
          
        },
      },{id: "post-welcome-aboard-hunjune-and-sangjun",
        
          title: "Welcome aboard, Hunjune and Sangjun!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/news/2025/lab_2/";
          
        },
      },{id: "post-sata-lab-39-s-homepage-has-been-officially-launched",
        
          title: "SATA Lab&#39;s homepage has been officially launched!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/news/2025/lab_1/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-sata-lab-s-homepage-has-been-officially-launched",
          title: 'SATA Lab’s homepage has been officially launched!',
          description: "",
          section: "News",},{id: "news-hunjune-and-sangjun-joined-our-lab-as-undergraduate-interns-welcome",
          title: 'Hunjune and Sangjun joined our lab as undergraduate interns. Welcome!',
          description: "",
          section: "News",},{id: "news-seoyoung-joined-our-lab-as-an-undergraduate-intern-welcome",
          title: 'Seoyoung joined our lab as an undergraduate intern. Welcome!',
          description: "",
          section: "News",},{id: "news-sion-joined-our-lab-as-an-undergraduate-intern-welcome",
          title: 'Sion joined our lab as an undergraduate intern. Welcome!',
          description: "",
          section: "News",},{id: "projects-domain-specific-architectures",
          title: 'Domain-Specific Architectures',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/research_1/";
            },},{id: "projects-heterogeneous-computing-platform",
          title: 'Heterogeneous Computing Platform',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/research_2/";
            },},{id: "projects-disaggregated-systems",
          title: 'Disaggregated Systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/research/research_3/";
            },},{id: "projects-memory-or-storage-centric-processing",
          title: 'Memory or Storage-Centric Processing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
