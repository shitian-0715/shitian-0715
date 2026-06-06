const reviewerJournals = [
  "ACM Computing Surveys (45 Days)",
  "ACM Transactions on Knowledge Discovery from Data (30 days)",
  "ACM Transactions on Multimedia Computing, Communications and Applications (42 days)",
  "Ad Hoc Networks (14 days)",
  "Advanced Engineering Informatics (21 days)",
  "Advances in Human-Computer Interaction (7 days)",
  "Aerospace (7 days)",
  "AIMS Mathematics (14 days)",
  "AIMS Public Health (14 days)",
  "Air Quality, Atmosphere & Health (20 days)",
  "Applied Artificial Intelligence (14 days)",
  "Applied Computational Intelligence and Soft Computing (14 days)",
  "Applied Economics (4 weeks)",
  "Applied Intelligence (40 days)",
  "Applied Sciences (7 days)",
  "Applied Soft Computing (21 days)",
  "AppliedMath (7 days)",
  "APSIPA Transactions on Signal and Information Processing (~20 days)",
  "Archives of Computational Methods in Engineering (28 days)",
  "Array (14 days)",
  "Artificial Intelligence Evolution (~25 days)",
  "Artificial Intelligence in Agriculture (30 days)",
  "Artificial Intelligence Review (2 months)",
  "Atmosphere (7 days)",
  "Automatika: Journal for Control, Measurement, Electronics, Computing and Communications (14 days)",
  "Big Data Mining and Analytics (~20 days)",
  "Bioengineering (7 days)",
  "Blockchain: Research and Applications",
  "BMC Endocrine Disorders (10 days)",
  "Buildings (7 days)",
  "CAAI Transactions on Intelligence Technology (14 days)",
  "China Communications (15 days)",
  "Chinese Journal of Electronics (1 month)",
  "Cluster Computing (10 days)",
  "CMC-Computers, Materials & Continua (10 days)",
  "CMES-Computer Modeling in Engineering & Sciences (14 days)",
  "Cogent Business & Management (14 days)",
  "Complex & Intelligent Systems (30 days)",
  "Computational Economics (60 days)",
  "Computer Communications (30 days)",
  "Computer Journal (4 weeks)",
  "Computer Methods and Programs in Biomedicine (18 days)",
  "Computer Networks (30 days)",
  "Computer Networks and Communications (14 days)",
  "Computers and Electrical Engineering (14 days)",
  "Computers and Electronics in Agriculture (16 days)",
  "Computers in Biology and Medicine (18 days)",
  "Contemporary Mathematics (~10 days)",
  "Crop Protection (14 days)",
  "CSSE-Computer Systems Science and Engineering (7 days)",
  "Cybersecurity (30 days)",
  "Cybernetics and Systems (14 days)",
  "Data Mining and Knowledge Discovery (30 days)",
  "Data Science and Management (28 days)",
  "Data Technologies and Applications (~30 days)",
  "Decision Making: Applications in Management and Engineering (~20 days)",
  "Defence Technology (21 days)",
  "Diagnostics (7 days)",
  "Digital Twins and Applications (2 weeks)",
  "Discover Artificial Intelligence (10 days)",
  "Discover Cities (10 days)",
  "Discover Computing (7 days)",
  "Discover Electronics (21 days)",
  "Discrete Dynamics in Nature and Society (14 days)",
  "Drones (7 days)",
  "DYNA (~30 days)",
  "EAI Endorsed Transactions on AI and Robotics (~21 days)",
  "EAI Endorsed Transactions on Cloud Systems (~21 days)",
  "EAI Endorsed Transactions on Energy Web (~21 days)",
  "EAI Endorsed Transactions on Industrial Networks and Intelligent Systems (14 days)",
  "EAI Endorsed Transactions on Internet of Things (14 days)",
  "EAI Endorsed Transactions on Mobile Communications and Applications (14 days)",
  "EAI Endorsed Transactions on Pervasive Health and Technology (~21 days)",
  "EAI Endorsed Transactions on Scalable Information Systems (~28 days)",
  "EAI Endorsed Transactions on Security and Safety (~21 days)",
  "EAI Endorsed Transactions on Smart Cities (~21 days)",
  "Egyptian Informatics Journal (30 days)",
  "Electronic Research Archive (14 days)",
  "Electronics (7 days)",
  "Energies (~10 days)",
  "Engineering (21 days)",
  "Engineering Applications of Artificial Intelligence (14 days)",
  "Engineering Reports (~20 days)",
  "Engineering Science and Technology, an International Journal (14 days)",
  "Environmental Modelling and Software (30 days)",
  "Environmental Science and Ecotechnology (14 days)",
  "EURASIP Journal on Advances in Signal Processing (28 days)",
  "Evolving Systems (35 days)",
  "Expert Systems (28 days)",
  "Expert Systems with Applications (21 days)",
  "Financial Innovation (1st round: ~30 days; 2nd round: ~15 days)",
  "Forum for Linguistic Studies (10 days)",
  "Franklin Open (12 days)",
  "Frontiers in Computer Science (10 days)",
  "Frontiers in Medicine (10 days)",
  "Frontiers in Plant Science (10 days)",
  "Frontiers of Information Technology & Electronic Engineering (30 days)",
  "Fundamental Research (40 days)",
  "Future Generation Computer Systems (30 days)",
  "Future Internet (~7 days)",
  "Future Transportation (~7 days)",
  "GeoJournal (21 days)",
  "Heliyon (14 days)",
  "High-Confidence Computing (14 days)",
  "Human-centric Computing and Information Sciences (10 days)",
  "Human-Centric Intelligent Systems (21 days)",
  "IEEE Access (7 days)",
  "IEEE Communications Letters (3 weeks)",
  "IEEE Communications Magazine (20 days)",
  "IEEE Communications Standards Magazine (1 month)",
  "IEEE Communications Surveys & Tutorials (~45 days)",
  "IEEE Data Descriptions (7 days)",
  "IEEE Internet of Things Journal (14 days)",
  "IEEE Internet of Things Magazine (21 days)",
  "IEEE Journal of Selected Areas in Sensors (2 weeks)",
  "IEEE Network (20 days)",
  "IEEE Networking Letters (3 weeks)",
  "IEEE Open Journal of Intelligent Transportation Systems (21 days)",
  "IEEE Open Journal of the Communications Society (2 weeks)",
  "IEEE Transactions on Artificial Intelligence (4 weeks)",
  "IEEE Transactions on Circuits and Systems for Video Technology (3 weeks)",
  "IEEE Transactions on Circuits and Systems II: Express Briefs (3 weeks)",
  "IEEE Transactions on Cognitive Communications and Networking (30 days)",
  "IEEE Transactions on Communications (45 days)",
  "IEEE Transactions on Computational Social Systems (4 weeks)",
  "IEEE Transactions on Consumer Electronics (~18 days)",
  "IEEE Transactions on Dependable and Secure Computing (6 weeks)",
  "IEEE Transactions on Emerging Topics in Computational Intelligence (4 weeks)",
  "IEEE Transactions on Evolutionary Computation (1 month)",
  "IEEE Transactions on Green Communications and Networking (30 days)",
  "IEEE Transactions on Industrial Cyber-Physical Systems (4 weeks)",
  "IEEE Transactions on Information Forensics and Security (4 weeks)",
  "IEEE Transactions on Intelligent Transportation Systems (4 Weeks)",
  "IEEE Transactions on Intelligent Vehicles (12 days)",
  "IEEE Transactions on Knowledge and Data Engineering (4 weeks)",
  "IEEE Transactions on Multimedia (4 weeks)",
  "IEEE Transactions on Mobile Computing (4 weeks)",
  "IEEE Transactions on Network Science and Engineering (3 weeks)",
  "IEEE Transactions on Neural Networks and Learning Systems (6 weeks)",
  "IEEE Transactions on Parallel and Distributed Systems (6 weeks)",
  "IEEE Transactions on Vehicular Technology (6 weeks)",
  "IEEE Transactions on Wireless Communications (6 weeks)",
  "IEEE Wireless Communications (30 days)",
  "IEICE Transactions on Information and Systems (~3 weeks)",
  "IET Image Processing (14 days)",
  "Imaging Science Journal (15 days)",
  "Indonesian Journal of Electrical Engineering and Computer Science (~1 month)",
  "Information (10 days)",
  "Information Fusion (14 days)",
  "Information & Management (30 days)",
  "Information Processing and Management (21 days)",
  "Information Processing in Agriculture (30 days)",
  "Information Sciences (35 days)",
  "Information Systems Frontiers (~43 days)",
  "Information Technology and Control (~30 days)",
  "INFORMS Journal on Data Science (45 days)",
  "INFORMS Journal on Optimization (6 weeks)",
  "INGENIERIA E INVESTIGACION (15 days)",
  "Intelligent and Converged Networks (1 month)",
  "Intelligent Automation & Soft Computing (7 days)",
  "Intelligent Systems with Applications (21 days)",
  "International Journal of Aeronautical and Space Sciences (28 days)",
  "International Journal of Communication Systems (4 weeks)",
  "International Journal of Computational Intelligence and Applications (30 days)",
  "International Journal of Computational Intelligence Systems (21 days)",
  "International Journal of Computer Applications in Technology (~40 days)",
  "International Journal of Computer Theory and Engineering (3 weeks)",
  "International Journal of Computer Vision (2 months)",
  "International Journal of Computers and Applications (2 weeks)",
  "International Journal of Critical Infrastructure Protection (30 days)",
  "International Journal of Digital Earth (3 weeks)",
  "International Journal of Electrical Power and Energy Systems (14 days)",
  "International Journal of Engineering Research in Africa (JERA)",
  "International Journal of Environmental Research and Public Health (7 days)",
  "International Journal of Human-Computer Interaction (2 weeks)",
  "International Journal of Information and Education Technology (3 weeks)",
  "International Journal of Information Security (28 days)",
  "International Journal of Intelligent Systems (14 days)",
  "International Journal of Information Technology & Decision Making (45 days)",
  "International Journal of Intelligent Transportation Systems Research (~1 month)",
  "International Journal of Machine Learning and Cybernetics (28 days)",
  "International Journal of Network Management (2 weeks)",
  "International Journal of Reconfigurable and Embedded Systems (5 weeks)",
  "International Journal of Satellite Communications and Networking (28 days)",
  "International Journal of Systems Science (3 weeks)",
  "International Journal of Web Information Systems (~1 month)",
  "International Review of Economics and Finance (8 weeks)",
  "International Transactions on Electrical Energy Systems (14 days)",
  "Internet Technology Letters (2 weeks)",
  "Iraqi Journal for Computer Science and Mathematics (3 weeks)",
  "ISA Transactions (21 days)",
  "iScience (10 days)",
  "ISPRS International Journal of Geo-Information (3 weeks)",
  "Journal of Advanced Research in Applied Sciences and Engineering Technology (~14 days)",
  "Journal of Advances in Information Technology (2 weeks)",
  "Journal of Arid Land (3 weeks)",
  "Journal of Business Analytics (21 days)",
  "Journal of Cloud Computing (45 days)",
  "Journal of Communications (2 weeks)",
  "Journal of Communications and Information Networks (5 weeks)",
  "Journal of Computational and Cognitive Engineering (~10 days)",
  "Journal of Computational and Graphical Statistics (3 weeks)",
  "Journal of Computational Methods in Sciences and Engineering (N/A)",
  "Journal of Cybersecurity and Privacy (7 days)",
  "Journal of Data Science and Intelligent Systems (~10 days)",
  "Journal of Field Robotics (30 days)",
  "Journal of Healthcare Engineering (14 days)",
  "Journal of Image and Graphics (14 days)",
  "Journal of Imaging Science and Technology (35 days)",
  "Journal of Industrial Information Integration (21 days)",
  "Journal of Information and Intelligence (14 days)",
  "Journal of Intelligent & Fuzzy Systems (1st round: ~30 days; 2nd round: ~15 days)",
  "Journal of Intelligent Medicine and Healthcare (7 days)",
  "Journal of Mobile Multimedia (~10 days)",
  "Journal of Network and Computer Applications (30 days)",
  "Journal of Open Source Software (6 weeks)",
  "Journal of Power Generation Technology (~1 week)",
  "Journal of Social Computing (1 month)",
  "Journal of Systems Architecture (21 days)",
  "Journal of the Franklin Institute (28 days)",
  "Journal on Artificial Intelligence (8 days)",
  "Knowledge (7 days)",
  "Knowledge-Based Systems (~49 days)",
  "Machine Learning for Computational Science and Engineering (10 days)",
  "Machine Learning with Applications (14 days)",
  "Mathematical Biosciences and Engineering (14 days)",
  "Mathematics (10 days)",
  "Metaverse (7 days)",
  "MethodsX (14 days)",
  "Mobile Networks and Applications (~6 weeks)",
  "Network: Computation in Neural Systems (21 days)",
  "Networks and Spatial Economics (45 days)",
  "Networks and Heterogeneous Media (14 days)",
  "Neural Computing and Applications (~2 months)",
  "Neural Networks (28 days)",
  "Neurocomputing (~30 days)",
  "Operations Management Research (21 days)",
  "Pattern Recognition (21 days)",
  "Peer-to-Peer Networking and Applications (21 days)",
  "PeerJ Computer Science (15 days)",
  "PeerJ Life & Environment (10 days)",
  "Physica A: Statistical Mechanics and its Applications (~20 days)",
  "Physical Communications (14 days)",
  "PLOS ONE (10 days)",
  "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
  "PROCEEDINGS OF THE INSTITUTION OF CIVIL ENGINEERS-TRANSPORT (3 weeks)",
  "Quality & Quantity (21 days)",
  "Quantitative Finance (6 weeks)",
  "Recent Advances in Electrical & Electronic Engineering (10 days)",
  "Reliability Engineering & System Safety (31 days)",
  "Register Journal (~30 days)",
  "Remote Sensing (10 days)",
  "Remote Sensing Applications: Society and Environment (14 days)",
  "Royal Society Open Science (2 weeks)",
  "Scientific Reports (10 days)",
  "Sensing and Imaging (20 days)",
  "Sensors (~7 days)",
  "Serbian Journal of Electrical Engineering (~21 days)",
  "Sigma Journal of Engineering and Natural Sciences",
  "Signal, Image and Video Processing (45 days)",
  "Smart Cities (7 days)",
  "Software (~7 days)",
  "Soft Computing (42 days)",
  "Structural Control and Health Monitoring (14 days)",
  "Sustainability (~10 days)",
  "Sustainable Cities and Society (29 days)",
  "Sustainable Computing: Informatics and Systems (30 days)",
  "Sustainable Futures (30 days)",
  "Symmetry (7 days)",
  "Systems (7 days)",
  "Telecommunication Systems (10 days)",
  "Telematics and Informatics Reports (14 days)",
  "Transactions on Emerging Telecommunications Technologies (14 days)",
  "Transportation Planning and Technology (~30 days)",
  "Transportation Research Interdisciplinary Perspectives (30 days)",
  "Transportation Research Record (21 days)",
  "Transportation Research Part C: Emerging Technologies (~30 days)",
  "Tsinghua Science and Technology (1 month)",
  "Water (10 days)",
  "Wireless Networks (28 days)",
  "World Wide Web (21 days)",
  "电子与信息学报 (~30 days)",
  "无人系统技术 (~10 days)",
  "电讯技术 (~1 month)",
  "南昌大学学报（工科版）(~20 days)",
  "自动化与信息工程(~7 days)",
  "河南师范大学学报（自然科学版）(20 days)",
  "计算机工程与应用(30 days)",
  "自动化学报(21 days)"
];

const root = document.documentElement;
const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const themeToggle = document.querySelector('.theme-toggle');
const reviewerList = document.getElementById('reviewer-list');
const reviewerSearch = document.getElementById('reviewer-search');
const reviewerCount = document.getElementById('reviewer-count');
const reviewerMore = document.getElementById('reviewer-more');
const panelToggle = document.querySelector('.panel-toggle');
const panelBody = document.getElementById('reviewer-panel-body');
let expanded = false;

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('academic-homepage-theme', theme);
}

const storedTheme = localStorage.getItem('academic-homepage-theme');
if (storedTheme) setTheme(storedTheme);
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function renderReviewers() {
  const query = reviewerSearch.value.trim().toLowerCase();
  const matches = reviewerJournals.filter(item => item.toLowerCase().includes(query));
  const visible = expanded || query ? matches : matches.slice(0, 18);
  reviewerList.replaceChildren(...visible.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  }));
  reviewerCount.textContent = matches.length;
  reviewerMore.hidden = Boolean(query) || matches.length <= 18;
  reviewerMore.textContent = expanded ? 'Show fewer journals' : 'Show all journals';
}

reviewerSearch.addEventListener('input', renderReviewers);
reviewerMore.addEventListener('click', () => {
  expanded = !expanded;
  renderReviewers();
});

panelToggle.addEventListener('click', () => {
  const isHidden = panelBody.hasAttribute('hidden');
  panelBody.toggleAttribute('hidden', !isHidden);
  panelToggle.textContent = isHidden ? 'Collapse' : 'Expand';
  panelToggle.setAttribute('aria-expanded', String(isHidden));
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

document.getElementById('current-year').textContent = new Date().getFullYear();
renderReviewers();
