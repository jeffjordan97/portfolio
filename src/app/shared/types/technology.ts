import { TechnologyType } from './technology-type';

export interface Technology {
  name: string;
  type: TechnologyType;
  image: string;
  color: string;
  description: string;
  url: string;
  isSelected: Boolean;
}

// Individual Technology Constants

// Languages
export const java: Technology = {
  name: 'Java',
  type: TechnologyType.languages,
  image: './assets/images/technologies/java.svg',
  color: '',
  description: 'Java is a general-purpose programming language.',
  url: 'https://www.java.com/',
  isSelected: false,
};

export const cSharp: Technology = {
  name: 'C#',
  type: TechnologyType.languages,
  image: './assets/images/technologies/csharp.svg',
  color: '#178600',
  description: 'C# is a general-purpose programming language.',
  url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  isSelected: false,
};

export const javaScript: Technology = {
  name: 'JavaScript',
  type: TechnologyType.languages,
  image: './assets/images/technologies/javascript.svg',
  color: '#f1e05a',
  description: 'JavaScript is a lightweight, interpreted programming language.',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  isSelected: false,
};

export const typeScript: Technology = {
  name: 'TypeScript',
  type: TechnologyType.languages,
  image: './assets/images/technologies/typescript.svg',
  color: '#007ACC',
  description:
    'TypeScript is a superset of JavaScript that compiles to plain JavaScript.',
  url: 'https://www.typescriptlang.org/',
  isSelected: false,
};

export const html: Technology = {
  name: 'HTML',
  type: TechnologyType.languages,
  image: './assets/images/technologies/html5.svg',
  color: '#e34f26',
  description: 'HTML is the standard markup language for creating web pages.',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  isSelected: false,
};

export const css: Technology = {
  name: 'CSS',
  type: TechnologyType.languages,
  image: './assets/images/technologies/css3.svg',
  color: '#1e90ff',
  description:
    'CSS is a stylesheet language used to describe the look and formatting of a document.',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  isSelected: false,
};

export const sql: Technology = {
  name: 'SQL',
  type: TechnologyType.languages,
  image: './assets/images/technologies/sql.svg',
  color: '#4169e1',
  description:
    'Structured Query Language (SQL) is a relational database management system language.',
  url: 'https://www.w3schools.com/sql/',
  isSelected: false,
};

// Frameworks and Tools
export const vue: Technology = {
  name: 'Vue',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/vue.png',
  color: '#dd0031',
  description:
    'An open-source frontend JavaScript framework for building user interfaces and single-page applications',
  url: 'https://vuejs.org/',
  isSelected: false,
};

export const nuxt: Technology = {
  name: 'Nuxt',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/nuxt.png',
  color: '#dd0031',
  description:
    'A free and open-source framework with an intuitive and extendable way to create type-safe, performant and production-grade web applications with Vue.js.',
  url: 'https://nuxt.com/',
  isSelected: false,
};

export const angular: Technology = {
  name: 'Angular',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/angular.svg',
  color: '#dd0031',
  description:
    'Angular is a TypeScript-based open-source web application framework developed by Google.',
  url: 'https://angular.io/',
  isSelected: false,
};

export const bootstrap: Technology = {
  name: 'Bootstrap',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/bootstrap.svg',
  color: '#563d7c',
  description:
    'Bootstrap is a free and open-source front-end framework for designing websites and web applications.',
  url: 'https://getbootstrap.com/',
  isSelected: false,
};

export const tailwind: Technology = {
  name: 'Tailwind CSS',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/tailwind.png',
  color: '#563d7c',
  description:
    'An open-source framework used to style your website in HTML without external CSS.',
  url: 'https://tailwindcss.com/',
  isSelected: false,
};

export const primeNg: Technology = {
  name: 'PrimeNG',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/primeng.png',
  color: '#e62117',
  description:
    'PrimeNG is a powerful, feature-rich UI component library for Angular.',
  url: 'https://www.primefaces.org/primeng/',
  isSelected: false,
};

export const git: Technology = {
  name: 'Git',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/git.svg',
  color: '#e1e1e1',
  description: 'Git is a distributed version control system.',
  url: 'https://git-scm.com/',
  isSelected: false,
};

export const springBoot: Technology = {
  name: 'Spring Boot',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/spring.svg',
  color: '#6db33f',
  description:
    'Spring Boot is a framework for building production-ready Spring applications.',
  url: 'https://spring.io/projects/spring-boot',
  isSelected: false,
};

export const dotNetCore: Technology = {
  name: '.NET Core',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/NET_Core.svg',
  color: '#5C2D91',
  description:
    '.NET Core is a cross-platform development platform for building modern applications.',
  url: 'https://dotnet.microsoft.com/download/dotnet-core',
  isSelected: false,
};

export const kubernetes: Technology = {
  name: 'Kubernetes',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/kubernetes.svg',
  color: '#326CE5',
  description: 'Kubernetes is an open-source container orchestration platform.',
  url: 'https://kubernetes.io/',
  isSelected: false,
};

export const docker: Technology = {
  name: 'Docker',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/docker.svg',
  color: '#0084C7',
  description: 'Docker is an open-source containerization platform.',
  url: 'https://www.docker.com/',
  isSelected: false,
};

export const maven: Technology = {
  name: 'Maven',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/maven.svg',
  color: '#C21B7E',
  description: 'Maven is a software project management and comprehension tool.',
  url: 'https://maven.apache.org/',
  isSelected: false,
};

export const npm: Technology = {
  name: 'NPM',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/npm.svg',
  color: '#CB3837',
  description: 'npm is a package manager for JavaScript and TypeScript.',
  url: 'https://www.npmjs.com/',
  isSelected: false,
};

export const pnpm: Technology = {
  name: 'PNPM',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/pnpm.png',
  color: '#CB3837',
  description:
    'A package manager for JavaScript projects, offering a faster and more disk-efficient way to manage dependencies.',
  url: 'https://www.pmpm.io/',
  isSelected: false,
};

export const nuget: Technology = {
  name: 'NuGet',
  type: TechnologyType.frameworksAndTools,
  image: './assets/images/technologies/nuget.png',
  color: '#5D2B86',
  description: 'Nuget is a package manager for.NET development.',
  url: 'https://www.nuget.org/',
  isSelected: false,
};

// Cloud and DevOps
export const aws: Technology = {
  name: 'AWS',
  type: TechnologyType.CloudDevOps,
  image: './assets/images/technologies/aws.svg',
  color: '#0072C6',
  description: 'AWS is a cloud computing platform provided by Amazon.',
  url: 'https://aws.amazon.com/',
  isSelected: false,
};

export const azure: Technology = {
  name: 'Azure',
  type: TechnologyType.CloudDevOps,
  image: './assets/images/technologies/azure.svg',
  color: '#0072C6',
  description: 'Azure is a cloud computing platform provided by Microsoft.',
  url: 'https://azure.microsoft.com/',
  isSelected: false,
};

export const terraform: Technology = {
  name: 'Terraform',
  type: TechnologyType.CloudDevOps,
  image: './assets/images/technologies/terraform.png',
  color: '#0072C6',
  description:
    'An open-source tool that allows users to define infrastructure as code, enabling the provisioning and management of cloud and on-premises resources.',
  url: 'https://developer.hashicorp.com/terraform/intro',
  isSelected: false,
};

export const spinnaker: Technology = {
  name: 'Spinnaker',
  type: TechnologyType.CloudDevOps,
  image: './assets/images/technologies/spinnaker.png',
  color: '#F5A623',
  description: 'Spinnaker is an open-source CI/CD platform for Kubernetes.',
  url: 'https://spinnaker.io/',
  isSelected: false,
};

export const jenkins: Technology = {
  name: 'Jenkins',
  type: TechnologyType.CloudDevOps,
  image: './assets/images/technologies/jenkins.svg',
  color: '#003262',
  description:
    'Jenkins is an open-source automation server for building, testing, and deploying software.',
  url: 'https://www.jenkins.io/',
  isSelected: false,
};

export const rancher: Technology = {
  name: 'Rancher',
  type: TechnologyType.CloudDevOps,
  image: './assets/images/technologies/rancher.png',
  color: '#00D27F',
  description: 'Rancher is an open-source container orchestration platform.',
  url: 'https://rancher.com/',
  isSelected: false,
};

// Other Technologies
export const visualStudioCode: Technology = {
  name: 'Visual Studio Code',
  type: TechnologyType.other,
  image: './assets/images/technologies/vscode.svg',
  color: '#007ACC',
  description: 'Visual Studio Code is a free and open-source code editor.',
  url: 'https://code.visualstudio.com/',
  isSelected: false,
};

export const visualStudio: Technology = {
  name: 'Visual Studio',
  type: TechnologyType.other,
  image: './assets/images/technologies/Visual_Studio.svg',
  color: '#5C2D91',
  description: 'Visual Studio is a Microsoft development environment.',
  url: 'https://visualstudio.microsoft.com/',
  isSelected: false,
};

export const intelliJIdea: Technology = {
  name: 'IntelliJ IDEA',
  type: TechnologyType.other,
  image: './assets/images/technologies/intellij.svg',
  color: '#000000',
  description: 'IntelliJ IDEA is a Java IDE developed by JetBrains.',
  url: 'https://www.jetbrains.com/idea/',
  isSelected: false,
};

export const eclipse: Technology = {
  name: 'Eclipse',
  type: TechnologyType.other,
  image: './assets/images/technologies/eclipse.svg',
  color: '#2C2C2C',
  description: 'Eclipse is a Java IDE developed by Eclipse Foundation.',
  url: 'https://www.eclipse.org/',
  isSelected: false,
};

export const postman: Technology = {
  name: 'Postman',
  type: TechnologyType.other,
  image: './assets/images/technologies/postman.svg',
  color: '#FF6C37',
  description: 'Postman is a collaboration platform for API development.',
  url: 'https://www.postman.com/',
  isSelected: false,
};

export const bruno: Technology = {
  name: 'Bruno',
  type: TechnologyType.other,
  image: './assets/images/technologies/bruno.png',
  color: '#FF6C37',
  description: 'Bruno is a platform for API development.',
  url: 'https://www.usebruno.com/',
  isSelected: false,
};

export const bitbucket: Technology = {
  name: 'Bitbucket',
  type: TechnologyType.other,
  image: './assets/images/technologies/bitbucket.svg',
  color: '#0052CC',
  description: 'Bitbucket is a Git hosting platform.',
  url: 'https://bitbucket.org/',
  isSelected: false,
};

export const gitlab: Technology = {
  name: 'GitLab',
  type: TechnologyType.other,
  image: './assets/images/technologies/gitlab.png',
  color: '#0052CC',
  description:
    'An Open Source code repository and collaborative software development platform for large DevOps and DevSecOps projects.',
  url: 'https://gitlab.com/',
  isSelected: false,
};

export const dynatrace: Technology = {
  name: 'Dynatrace',
  type: TechnologyType.other,
  image: './assets/images/technologies/dynatrace.svg',
  color: '#34A340',
  description: 'Dynatrace is a monitoring and troubleshooting platform.',
  url: 'https://www.dynatrace.com/',
  isSelected: false,
};

export const elasticSearch: Technology = {
  name: 'ElasticSearch',
  type: TechnologyType.other,
  image: './assets/images/technologies/elasticsearch.svg',
  color: '#005C7A',
  description:
    'ElasticSearch is a distributed, RESTful search and analytics engine.',
  url: 'https://www.elastic.co/elasticsearch/',
  isSelected: false,
};

export const github: Technology = {
  name: 'GitHub',
  type: TechnologyType.other,
  image: './assets/images/technologies/github.svg',
  color: '#181717',
  description:
    'GitHub is a platform for hosting and collaborating on software projects.',
  url: 'https://github.com/',
  isSelected: false,
};

export const figma: Technology = {
  name: 'Figma',
  type: TechnologyType.other,
  image: './assets/images/technologies/figma.svg',
  color: '#F24E1E',
  description: 'Figma is a prototyping and design tool.',
  url: 'https://www.figma.com/',
  isSelected: false,
};

export const jira: Technology = {
  name: 'JIRA',
  type: TechnologyType.other,
  image: './assets/images/technologies/jira.svg',
  color: '#0052CC',
  description: 'JIRA is a project management tool.',
  url: 'https://www.atlassian.com/software/jira/',
  isSelected: false,
};

export const moveit: Technology = {
  name: 'MoveIT',
  type: TechnologyType.other,
  image: './assets/images/technologies/moveit.png',
  color: '#00A6ED',
  description: 'MoveIT is a managed file transfer software product',
  url: 'https://www.progress.com/moveit',
  isSelected: false,
};

export const ibmMQ: Technology = {
  name: 'IBM MQ',
  type: TechnologyType.other,
  image: './assets/images/technologies/mq.png',
  color: '#0052CC',
  description: 'IBM Message Queuing is a message broker.',
  url: 'https://www.ibm.com/messaging/mq/',
  isSelected: false,
};

export const swagger: Technology = {
  name: 'Swagger',
  type: TechnologyType.other,
  image: './assets/images/technologies/swagger.svg',
  color: '#85144B',
  description:
    'Swagger is an open-source framework for describing and documenting APIs.',
  url: 'https://swagger.io/',
  isSelected: false,
};

export const trello: Technology = {
  name: 'Trello',
  type: TechnologyType.other,
  image: './assets/images/technologies/trello.svg',
  color: '#0079BE',
  description: 'Trello is a visual task management tool.',
  url: 'https://trello.com/',
  isSelected: false,
};

// Grouping Constants by TechnologyType
export const languages: Technology[] = [
  java,
  cSharp,
  javaScript,
  typeScript,
  html,
  css,
];

export const frameworksAndTools: Technology[] = [
  git,
  springBoot,
  maven,
  vue,
  nuxt,
  angular,
  npm,
  pnpm,
  nuget,
  tailwind,
  bootstrap,
  primeNg,
  dotNetCore,
];

export const cloudDevOps: Technology[] = [
  aws,
  azure,
  terraform,
  kubernetes,
  docker,
  jenkins,
  spinnaker,
  rancher,
];

export const otherTechnologies: Technology[] = [
  visualStudioCode,
  visualStudio,
  intelliJIdea,
  eclipse,
  figma,
  postman,
  bruno,
  swagger,
  bitbucket,
  gitlab,
  dynatrace,
  elasticSearch,
  jira,
  trello,
  moveit,
  ibmMQ,
];

export const allTechnologies: Technology[] = [
  java,
  cSharp,
  javaScript,
  typeScript,
  html,
  css,
  angular,
  bootstrap,
  vue,
  nuxt,
  tailwind,
  primeNg,
  git,
  springBoot,
  dotNetCore,
  maven,
  npm,
  pnpm,
  nuget,
  aws,
  azure,
  terraform,
  kubernetes,
  docker,
  spinnaker,
  jenkins,
  rancher,
  visualStudioCode,
  visualStudio,
  intelliJIdea,
  eclipse,
  figma,
  postman,
  bruno,
  swagger,
  bitbucket,
  gitlab,
  dynatrace,
  elasticSearch,
  jira,
  trello,
  moveit,
  ibmMQ,
];
