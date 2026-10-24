// YOUR CONTENT CONTROL ROOM
// Update this file when you add projects, change copy, skills, links, or contact details.
// Projects marked `review` are deliberately shown with a coursework/data-access note.

export const profile = {
  name: 'Yanira De Souza',
  school: 'University of Michigan–Ann Arbor',
  role: 'Data Science & Robotics student',
  introduction: 'I build computational studies and intelligent systems at the meeting point of data science, robotics, and AI/ML.',
  about: 'I am a Data Science and Robotics student at the University of Michigan–Ann Arbor, developing a practice in AI/ML for intelligent systems. I am especially drawn to the questions that arise when models meet motion, uncertainty, and complex behavior. Outside the lab notebook, museums, architecture, theatre, and visual storytelling inform the way I shape and communicate technical work.',
  github: 'https://github.com/ydes-cyber',
  // Leave blank until you want to make an email public.
  email: 'yds.studiio@gmail.com',
}

export const categories = ['Featured', 'AI & Agents', 'Robotics', 'Data & ML', 'Systems & Quant']

export const projects = [
  {
    title: 'Determinism, Noise & Multi-Agent Dynamics', category: 'AI & Agents', featured: true,
    status: 'Ongoing research project', year: '2026', tone: 'plum',
    summary: 'An ongoing research project whose current artifact is a two-dimensional simulation demo comparing a small initial perturbation with explicit stochastic acceleration.',
    detail: 'The runnable demo models local attraction and separation in a bounded environment, writes trajectory figures and positional-RMSE CSVs, and supports seeded stochastic trials. It is not a completed chaos study: the repository explicitly does not estimate a Lyapunov exponent or establish chaos, and two placeholder metrics functions remain unimplemented.',
    tech: ['Python', 'Matplotlib', 'unittest', 'Simulation'],
    url: 'https://github.com/ydes-cyber/ai-multiagent-dynamics',
    sourceLabel: 'Open research demo',
  },
  {
    title: 'Order Book Friction Strategy', category: 'Systems & Quant', featured: true,
    status: 'Early-stage prototype', year: '2025', tone: 'silver',
    summary: 'An exploratory order-book codebase with a hard-coded snapshot-pressure exercise and utility functions for basic market features.',
    detail: 'The executable backtest script labels a small, hard-coded series as long, short, or neutral from aggregate quantities; feature helpers calculate spread, VWAP, imbalance, and depth. A separate matching-engine file is incomplete and contains implementation errors, so this is not a validated strategy, market simulator, or profitability result.',
    tech: ['Python', 'Order-book features', 'VWAP', 'Prototype backtest'],
    url: 'https://github.com/ydes-cyber/orderbook-friction-strategy',
    sourceLabel: 'Open repository',
  },
  {
    title: 'The Veil — Adaptive NPC Core', category: 'AI & Agents', featured: true,
    status: 'Working prototype / concept', year: '2025', tone: 'rose',
    summary: 'A Python console prototype for an NPC persona with short- and long-term memory lists, trait updates, keyword-based sentiment handling, and parsed structured responses.',
    detail: 'DNA.py implements the local state and interactive shell, then attempts an external Gemini API call. Its request and response assumptions are not demonstrated as working, and its sentiment component is keyword logic rather than a trained classifier. This is an architecture prototype, not a completed game-engine integration or validated autonomous NPC system.',
    tech: ['Python', 'Prompt design', 'State management', 'HTTP API prototype'],
    url: 'https://github.com/ydes-cyber/The-Veil-',
    sourceLabel: 'Open repository',
  },
  {
    title: 'Multi-Tier Harmful-Speech Detection', category: 'Data & ML', featured: true,
    status: 'Early-stage prototype — needs repair', year: '2025', tone: 'olive',
    summary: 'A proposed harmful-speech classification script with TF-IDF, candidate model selection, keyword boosting, and severity labels.',
    detail: 'The repository contains one Python script outlining the pipeline and dataset-loading logic, but the checked-in file has a syntax error and cannot run as provided. No dataset, trained model, evaluation artifact, or reproducible performance result is included; it should not be presented as a deployable moderation system.',
    tech: ['Python', 'TF-IDF', 'scikit-learn', 'XGBoost'],
    url: 'https://github.com/ydes-cyber/therapy-ai',
    sourceLabel: 'Open repository',
  },
  {
    title: 'Robotics Projects', category: 'Robotics', featured: true,
    status: 'Robot Motion & Forward Kinematics', year: '2026', tone: 'ink',
    summary: 'A course repository containing assignment specifications, starter materials, and a substantial Python implementation for the Project 2 arm simulation.',
    detail: 'Project 2 includes socket-based runtime code, numerical integration helpers, PID-style control state, inverse-kinematics routines, and 2/3-link dynamics. Project 1 and Project 3 primarily contain specifications and starter material; the Project 3 TODO document explicitly describes work still to be done. Do not link this coursework publicly until course policy and authorship boundaries are confirmed.',
    tech: ['Python', 'Sockets / JSON', 'Numerical integration', 'Robot-arm simulation'],
    url: 'https://github.com/ydes-cyber/robotics',
    sourceLabel: 'View repository', review: true,
  },
  {
    title: 'Day Trading App', category: 'Systems & Quant', featured: false,
    status: 'In Progress', year: '2026', tone: 'silver',
    summary: 'An unfinished React/Node paper-trading interface with account, positions, quote, order, and order-history route code.',
    detail: 'The React client and Express server are present, and the server is configured for Alpaca paper credentials. The client calls an unimplemented bars endpoint, there are no automated tests, and the repository does not demonstrate a working end-to-end session. It is not a finished trading system or a claim of live/validated trading.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'Alpaca paper API'],
    url: 'https://github.com/ydes-cyber/daytrading-app', sourceLabel: 'Open repository',
  },
  {
    title: 'AI Research Assistant', category: 'AI & Agents', featured: false,
    status: 'Early-stage prototype', year: '2026', tone: 'plum',
    summary: 'A partially implemented Python foundation for dataset reporting, splitting, imputation, scaling, baseline models, and cross-validation.',
    detail: 'Several utility modules are present, and a heart-data CSV is included, but the experiment-agent module and saved result files are empty. The optimizer imports names that do not exist in the checked-in modules, and the provided test script only prints dataset information. Automated experiment design, optimization, and recommendation are goals—not demonstrated end-to-end capabilities.',
    tech: ['Python', 'pandas', 'scikit-learn', 'Data preprocessing'],
    url: 'https://github.com/ydes-cyber/ai-research-assistant', sourceLabel: 'Open repository',
  },
  {
    title: 'Forest Fire ISI Study', category: 'Data & ML', featured: false,
    status: 'Completed notebook study', year: '2025', tone: 'olive',
    summary: 'A decision-tree regression notebook for estimating the Initial Spread Index from Algerian forest-fire features.',
    detail: 'The checked-in notebook contains data download, cleaning, train/test split, DecisionTreeRegressor grid search, prediction, metrics, and visualization cells with saved outputs. The repository reports metrics in its README; they have not been independently reproduced here because the external dataset is not versioned in the repository.',
    tech: ['Python', 'scikit-learn', 'GridSearchCV', 'Jupyter'],
    url: 'https://github.com/ydes-cyber/Classification-Practice', sourceLabel: 'Open notebook',
  },
  {
    title: 'Stroke Prediction Pipeline', category: 'Data & ML', featured: false,
    status: 'Completed notebook study', year: '2025', tone: 'rose',
    summary: 'A healthcare-data classification workflow featuring encoding, balancing, random forests, and evaluation visualizations.',
    detail: 'The checked-in notebook contains Kaggle download, preprocessing, oversampling, Random Forest fitting, a grid search, and saved output cells. Its reported accuracy is not independently reproduced here, and oversampling before the train/test split can compromise evaluation; it must not be represented as clinical performance.',
    tech: ['Python', 'Random Forest', 'scikit-learn', 'Jupyter'],
    url: 'https://github.com/ydes-cyber/Stroke-Predictor', sourceLabel: 'Open notebook',
  },
  {
    title: 'Regression from First Principles', category: 'Data & ML', featured: false,
    status: 'Completed notebook study', year: '2025', tone: 'ink',
    summary: 'A comparative notebook exploring least-squares and orthogonal regression with symbolic, numerical, and library approaches.',
    detail: 'The notebook contains six code cells covering symbolic least squares, scikit-learn regression, symbolic and numerical orthogonal fitting, and SciPy ODR on a six-point illustrative dataset. It is a compact methods study, not a predictive model benchmark.',
    tech: ['Python', 'NumPy', 'SciPy', 'SymPy', 'scikit-learn'],
    url: 'https://github.com/ydes-cyber/Linear_Regression_Practice', sourceLabel: 'Open notebook',
  },
  {
    title: 'Sales Clustering Exploration', category: 'Data & ML', featured: false,
    status: 'Notebook study — review data link', year: '2025', tone: 'silver',
    summary: 'A KMeans clustering exercise for identifying patterns in product-sales records.',
    detail: 'The notebook contains cells for loading a Google Drive CSV, standardization, KMeans with five clusters, elbow visualization, labels, and inverse-transformed centroids. The external data file is not versioned in the repository, so the reported scale and interpretations need confirmation before stronger claims are made.',
    tech: ['Python', 'pandas', 'KMeans', 'Yellowbrick'],
    url: 'https://github.com/ydes-cyber/flight_predictor', sourceLabel: 'Open notebook',
  },
]

export const researchInterests = [
  ['AI/ML for robotics', 'How learning systems reason, adapt, and act in physical settings.'],
  ['Autonomous & multi-agent systems', 'Coordination, emergent behavior, and interpretable local rules.'],
  ['Uncertainty & statistical analysis', 'Measuring variation rather than mistaking it for certainty.'],
  ['Computational modeling', 'Simulation as a careful instrument for asking technical questions.'],
]

// A course-deliverable feature. The video was recorded from the real Project 3
// runtime; the linked assets live in public/videos so they deploy with the site.
export const project3Feature = {
  title: 'Forward Kinematics — Fetch in Motion',
  eyebrow: 'ROB 511 · Project 3',
  status: 'Coursework demonstration',
  video: './videos/fetch-fk-choreography.webm',
  poster: './videos/fetch-fk-choreography-poster.png',
  choreography: 'home → observe → reach → salute',
  summary: 'A recorded finite-state-machine choreography driven through a submitted forward-kinematics runtime and displayed in an external Three.js viewer.',
  detail: 'The runtime publishes one column-major world transform for each Fetch link on /xform_world. The viewer receives those actual TCP messages through a local bridge and applies each matrix directly to an original placeholder link form. The supplied Fetch mesh references were not included in the course kit, so this is a transform visualization—not a reproduction of Fetch mesh geometry.',
  attribution: 'Fetch robot description © Fetch Robotics, Inc., CC BY-NC-SA 4.0.',
}

export const skills = [
  ['Programming', ['Python', 'JavaScript', 'C/C++ materials']],
  ['Data & machine learning', ['pandas', 'scikit-learn', 'XGBoost', 'NumPy', 'SciPy']],
  ['Robotics & simulation', ['Numerical integration', 'URDF / forward kinematics materials', 'Multi-agent simulation']],
  ['Tools & practices', ['Git / GitHub', 'Jupyter notebooks', 'Vite / React', 'Matplotlib']],
]
