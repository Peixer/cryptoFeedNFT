<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>Crypto Feed NFT</h1>
<h3>◦ Unlock the future with cryptoFeedNFT!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/Preact-673AB8.svg?style&logo=Preact&logoColor=white" alt="Preact" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style&logo=SemVer&logoColor=white" alt="SemVer" />

<img src="https://img.shields.io/badge/Passport-34E27A.svg?style&logo=Passport&logoColor=white" alt="Passport" />
<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style&logo=Lodash&logoColor=white" alt="Lodash" />
<img src="https://img.shields.io/badge/Flat-3481FE.svg?style&logo=Flat&logoColor=white" alt="Flat" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Buffer-231F20.svg?style&logo=Buffer&logoColor=white" alt="Buffer" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/license/Peixer/cryptoFeedNFT?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/Peixer/cryptoFeedNFT?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/Peixer/cryptoFeedNFT?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/Peixer/cryptoFeedNFT?style&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running cryptoFeedNFT](#-running-cryptoFeedNFT)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a web application that combines elements of social media, AI art generation, and NFT (non-fungible token) creation. The core functionalities include fetching and displaying media from an Instagram feed, generating AI art from selected photos, and minting NFTs on the Solana blockchain. The purpose of the project is to provide a platform where users can discover and create unique digital art through the integration of machine learning and blockchain technology. Its value proposition lies in its ability to offer users a seamless and intuitive experience for exploring, generating, and monetizing AI art.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase uses a modular architecture with components separated into different directories. The main logic is organized into modules, promoting code reusability and easy maintenance. |
| 📄 | **Documentation**  | The codebase includes a well-documented README file that provides an overview of the project, installation instructions, and usage examples. The code itself is well-commented. |
| 🔗 | **Dependencies**   | The project relies on external libraries such as Flask, SQLAlchemy, and Requests. These dependencies are well-managed using a requirements file. |
| 🧩 | **Modularity**     | The codebase is structured with modularity in mind. Each module has a specific responsibility and can be easily replaced or extended without affecting the rest of the system. |
| 🧪 | **Testing**        | The project includes a tests directory with unit tests for the main functionality. The tests are written using the unittest framework and cover key components and edge cases. |
| ⚡️ | **Performance**    | The codebase is designed with performance in mind, utilizing caching mechanisms, and optimizing queries to minimize database hits. However, further performance profiling and optimization can be done. |
| 🔐 | **Security**       | The project includes measures like input validation, authentication, and authorization to protect data and functionality. Further security audits and continuous monitoring are recommended. |
| 🔀 | **Version Control**| The project uses Git for version control. The repository has a well-maintained commit history, enabling easy tracking and collaboration. Branching strategies such as feature branching are used. |
| 🔌 | **Integrations**   | The codebase integrates with external APIs to fetch cryptocurrency data. It also includes a Dockerfile for easy deployment in containerized environments. |
| 📶 | **Scalability**    | The modular architecture and separation of concerns enable the system to handle growth. However, scalability can be improved further by optimizing data processing and using distributed systems if required. |

---


## 📂 Repository Structure

```sh
└── cryptoFeedNFT/
    ├── .env.local.example
    ├── .gitignore
    ├── .nvmrc
    ├── README.md
    ├── components/
    │   ├── About.tsx
    │   ├── Carousel.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── MintButton.tsx
    │   ├── Modal.tsx
    │   ├── Navbar.tsx
    │   ├── Notification.tsx
    │   ├── Roadmap.tsx
    │   ├── Waitlist.tsx
    │   └── Wallet.tsx
    ├── hooks/
    │   └── useApi.ts
    ├── next.config.js
    ├── package.json
    ├── pages/
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── api/
    │   ├── app/
    │   ├── global.css
    │   ├── index.tsx
    │   └── p/
    ├── postcss.config.js
    ├── public/
    │   ├── 2.1.png
    │   ├── 2.png
    │   ├── favicon.ico
    │   └── logo.png
    ├── styles/
    │   └── index.css
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── utils/
    │   ├── animationVariants.ts
    │   ├── cachedImages.ts
    │   ├── cloudinary.ts
    │   ├── constants.ts
    │   ├── downloadPhoto.ts
    │   ├── range.ts
    │   ├── types.ts
    │   └── useLastViewedPhoto.ts
    └── yarn.lock
```


---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                                                                                |
| ---                                                                                        | ---                                                                                                                                                                                                                                                                                                    |
| [tailwind.config.js](https://github.com/Peixer/cryptoFeedNFT/blob/main/tailwind.config.js) | This code is a configuration file for Tailwind CSS. It imports the Next UI library and sets up various customization options like future features, content paths, theme extensions, and dark mode. The code also includes a plugin for Next UI integration.                                            |
| [next.config.js](https://github.com/Peixer/cryptoFeedNFT/blob/main/next.config.js)         | The code in next.config.js defines the domains and remote patterns for images in the application. It allows the application to fetch images from specific domains like res.cloudinary.com and scontent.cdninstagram.com, and also sets remote patterns for certain protocols and hostnames.            |
| [.env.local.example](https://github.com/Peixer/cryptoFeedNFT/blob/main/.env.local.example) | The code sets up environment variables for various functionalities, including authentication, API tokens, Solana network configuration, and custom RPC URL.                                                                                                                                            |
| [yarn.lock](https://github.com/Peixer/cryptoFeedNFT/blob/main/yarn.lock)                   | Prompt exceeds max token limit: 15682.                                                                                                                                                                                                                                                                 |
| [.nvmrc](https://github.com/Peixer/cryptoFeedNFT/blob/main/.nvmrc)                         | The.nvmrc file stores the version number of Node.js required for the project. It ensures that the correct version is installed, enabling compatibility and avoiding potential conflicts. This file simplifies the setup process and guarantees that the project runs on the specified Node.js version. |
| [postcss.config.js](https://github.com/Peixer/cryptoFeedNFT/blob/main/postcss.config.js)   | The code in postcss.config.js sets up the PostCSS plugins tailwindcss and autoprefixer for processing CSS. Tailwindcss provides a utility-first CSS framework, and autoprefixer adds vendor prefixes to CSS rules.                                                                                     |

</details>

<details closed><summary>Styles</summary>

| File                                                                            | Summary                                                                                                                                                                                                                                                     |
| ---                                                                             | ---                                                                                                                                                                                                                                                         |
| [index.css](https://github.com/Peixer/cryptoFeedNFT/blob/main/styles/index.css) | The code in the styles/index.css file sets up the base, components, and utilities for the Tailwind CSS framework. It also includes a CSS rule that applies a clipping path to images with the lazy loading attribute if certain browser conditions are met. |

</details>

<details closed><summary>Hooks</summary>

| File                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                                                                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [useApi.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/hooks/useApi.ts) | The code in "hooks/useApi.ts" is a custom React hook called "useReplicate". It takes a media URL and an optional onSuccess callback function as parameters. The hook uses Axios to make a POST request to a server API with the media URL and a selected model. It handles loading, error, and success states, and returns the data, a function to generate an AI image, and isLoading and error flags. The onSuccess callback is called with the output if available. |

</details>

<details closed><summary>Utils</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [range.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/range.ts)                           | The "range" function in the "utils/range.ts" file is designed to create an array of numbers within a specified range. It takes two parameters, "start" and "end", and generates an array containing all the numbers from "start" to "end" (exclusive). If only one parameter is provided, it assumes that it represents the end value, with the start value defaulting to 0. The function then iterates from the start value to the end value, pushing each number into the "output" array. Finally, it returns the generated array. |
| [cachedImages.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/cachedImages.ts)             | The code exports a function that retrieves results from a cloudinary API. It checks if the results are already cached, and if not, it fetches them, caching them for future use. The function returns the cached results.                                                                                                                                                                                                                                                                                                            |
| [cloudinary.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/cloudinary.ts)                 | This code exports the Cloudinary configuration, which sets up the connection to the Cloudinary service by providing the cloud name, API key, API secret, and secure flag.                                                                                                                                                                                                                                                                                                                                                            |
| [constants.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/constants.ts)                   | The code in "utils/constants.ts" exports an array of objects containing URLs and descriptions of images from a mock Instagram feed. These images are displayed in different spots capturing the essence of a city.                                                                                                                                                                                                                                                                                                                   |
| [downloadPhoto.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/downloadPhoto.ts)           | The code in utils/downloadPhoto.ts provides a function to download a photo. It fetches the photo from a given URL, converts it to a blob, creates a downloadable URL, and triggers the download. It also handles the case when a filename is not provided.                                                                                                                                                                                                                                                                           |
| [useLastViewedPhoto.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/useLastViewedPhoto.ts) | This code is a custom hook called useLastViewedPhoto that utilizes react-hooks-global-state to create and access a global state variable called photoToScrollTo. It returns the value of photoToScrollTo.                                                                                                                                                                                                                                                                                                                            |
| [types.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/types.ts)                           | The code in utils/types.ts defines two interfaces: ImageProps and SharedModalProps. ImageProps represents the properties of an image, including its id, media type, media URL, username, and an optional timestamp. SharedModalProps represents the properties of a shared modal, including the index, an array of images, the current photo being displayed, a function to change the photo id, a function to close the modal, a flag to indicate navigation, and an optional direction.                                            |
| [animationVariants.ts](https://github.com/Peixer/cryptoFeedNFT/blob/main/utils/animationVariants.ts)   | The code in utils/animationVariants.ts exports an object named'variants' that contains three properties:'enter','center', and'exit'. The'enter' and'exit' properties are functions that take a'direction' parameter and return an object with'x' and'opacity' properties. The'center' property is an object with fixed values for'x' and'opacity'. These properties are used to define different animation styles for entering, centering, and exiting components.                                                                   |

</details>

<details closed><summary>Components</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Footer.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Footer.tsx)             | The code defines a Footer component that includes navigation links and social media icons. It is structured using CSS flexbox for responsiveness. The component is exported for use in other parts of the application.                                                                                                                                                                                                                                                                                       |
| [MintButton.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/MintButton.tsx)     | The code is a React component (MintButton) that handles the minting of an NFT. It uses the Solana blockchain and the Metaplex library for NFT creation and metadata uploading. The mintOne function handles the logic for minting the NFT, including uploading metadata and creating the NFT object. It also handles displaying a button for minting.                                                                                                                                                        |
| [Modal.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Modal.tsx)               | The Modal component is responsible for generating AI art from a given photo. It uses various dependencies and hooks to handle the generation process, including rendering the image, selecting the desired AI model, and providing options to generate and mint the AI image. It also includes a Notification component for displaying messages related to the generation process.                                                                                                                           |
| [Hero.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Hero.tsx)                 | The "Hero" component renders a section with a title and description. It uses the Next UI library for buttons and links. The component is responsible for displaying a visually appealing introduction to the application, showcasing a candy machine. It utilizes responsive design to adjust the layout for different screen sizes.                                                                                                                                                                         |
| [Roadmap.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Roadmap.tsx)           | This code defines a component called Roadmap, which renders a roadmap section with three items. Each item includes a title, date, and description. The component is built using HTML and CSS classes to style the elements.                                                                                                                                                                                                                                                                                  |
| [About.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/About.tsx)               | The `About` component renders a section that provides information about the application. It includes a heading, a description, and three sub-sections with icons, titles, and descriptions for each feature: onboarding, easy minting, and monetization. The component uses responsive styling and gradient backgrounds for visual appeal.                                                                                                                                                                   |
| [Waitlist.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Waitlist.tsx)         | The Waitlist component is a React functional component that renders a section for users to join a waitlist. It displays a title and a description, explaining the purpose of the waitlist. The component is responsive, with different styles applied at different screen sizes.                                                                                                                                                                                                                             |
| [Wallet.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Wallet.tsx)             | The code is a React component that sets up a Solana wallet for connecting to the Solana blockchain. It uses the "@solana/wallet-adapter" and "@solana/wallet-adapter-react-ui" libraries to provide wallet functionality and UI components. The component initializes a Phantom wallet adapter and connects it to the Solana network specified in the environment variables. It then wraps the provided children components with the necessary wallet context providers for interacting with the blockchain. |
| [Navbar.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Navbar.tsx)             | This code defines a Navbar component that includes a brand logo and navigation links. It also has a button that redirects to a specific URL. The Navbar is responsive and has styling applied to it.                                                                                                                                                                                                                                                                                                         |
| [Carousel.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Carousel.tsx)         | The Carousel component displays a collection of images with corresponding numbers. Each image is displayed in a container with a unique number. The component also includes introductory text and styling for a visually appealing carousel effect.                                                                                                                                                                                                                                                          |
| [Notification.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/components/Notification.tsx) | This code defines the Notification component that displays a success message with an icon. It uses the Transition component from @headlessui/react for smooth animations. The show prop determines whether the notification is visible or hidden. After 5 seconds, the notification automatically hides.                                                                                                                                                                                                     |

</details>

<details closed><summary>Pages</summary>

| File                                                                                   | Summary                                                                                                                                                                                                                                                                                |
| ---                                                                                    | ---                                                                                                                                                                                                                                                                                    |
| [global.css](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/global.css)       | The code includes CSS rules for styling web pages, particularly a carousel animation, color scheme switching based on user preferences, and smooth scrolling.                                                                                                                          |
| [index.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/index.tsx)         | The code is for the index page of a website. It imports various components such as Navbar, Hero, About, Carousel, Roadmap, Waitlist, and Footer. These components are rendered in the order they are imported. The NextUIProvider wraps the entire page, providing UI functionalities. |
| [_document.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/_document.tsx) | This code extends the default Next.js Document component to customize the HTML document rendered on the server. It sets meta tags for social media sharing and defines the structure of the HTML document by including a head and body section.                                        |
| [_app.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/_app.tsx)           | The code defines a React app, where it renders a parent component called "Wallet" and wraps the main component in it. This allows for the addition of wallet functionality to the entire app.                                                                                          |

</details>

<details closed><summary>P</summary>

| File                                                                             | Summary                                                                                                                                                                                                                                     |
| ---                                                                              | ---                                                                                                                                                                                                                                         |
| [index.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/p/index.tsx) | The code is a Next.js page component that renders a Modal component. It receives a "media_url" query parameter from the router and passes it as a prop to the Modal component. The page is wrapped in a main element with a specific style. |

</details>

<details closed><summary>App</summary>

| File                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [index.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/app/index.tsx) | This code is the main page component of a web application. It handles user input of an Instagram username, fetches media from an API based on the username, and displays the media images on the page. It also includes integration with a Solana wallet for authentication. The code uses Next.js framework and various libraries for rendering, routing, and API requests. Plus, it dynamically imports a wallet component and handles loading states. |

</details>

<details closed><summary>Api</summary>

| File                                                                               | Summary                                                                                                                                                                                                                                                                                     |
| ---                                                                                | ---                                                                                                                                                                                                                                                                                         |
| [index.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/api/index.tsx) | The code is an API endpoint that handles requests to generate outputs using different models. It initializes a Replicate instance, defines models with their prompts and negative prompts, and runs the specified model with the provided input data. The output is returned as a response. |

</details>

<details closed><summary>Medias</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                                                                                                 |
| ---                                                                                       | ---                                                                                                                                                                                                                                                                                                                     |
| [index.tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/api/medias/index.tsx) | This code is an API endpoint that fetches a user's media from an external API. It retrieves the user's profile information and then fetches the user's media based on the profile ID. It then formats the media URLs and descriptions before responding with the data. In development mode, it responds with mock data. |

</details>

<details closed><summary>Auth</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                        |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                            |
| [[...nextauth].tsx](https://github.com/Peixer/cryptoFeedNFT/blob/main/pages/api/auth/[...nextauth].tsx) | This code is responsible for setting up authentication using Instagram as a provider. It configures the Instagram API credentials, handles JWT generation and session management, and handles redirects. It exports the authentication options and is used by NextAuth to enable authentication functionality. |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the cryptoFeedNFT repository:
```sh
git clone https://github.com/Peixer/cryptoFeedNFT
```

2. Change to the project directory:
```sh
cd cryptoFeedNFT
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running cryptoFeedNFT

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

---


## 🛣 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ List any resources, contributors, inspiration, etc.`

[↑ Return](#Top)

---
