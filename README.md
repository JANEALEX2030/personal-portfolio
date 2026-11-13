# Jane Alex - Personal Portfolio

## Project overview

This project is a responsive, multi-page personal portfolio for Jane Alex, a third-year Computer Science student at DMI St. John the Baptist University. It introduces her background and professional interests, presents selected software projects, demonstrates front-end animations, and provides ways to make contact. The website is built as a static site using HTML, CSS, and JavaScript.

## Objectives

- Establish a professional online presence and introduce the portfolio owner.
- Present education, technical skills, interests, and career aspirations.
- Showcase software projects, their purpose, and the technologies used.
- Demonstrate web-page structure, navigation, images, hyperlinks, responsive styling, and interactive animation.
- Make it straightforward for visitors to contact the owner and explore her GitHub profile.

## Website sections

| Page | Purpose and content |
|---|---|
| `index.html` - Home | Introduces Jane Alex with a profile photograph, study programme, professional interests, animated role text, and links to the other pages. |
| `about.html` - About | Describes personal background, education, technical skills, coursework, interests, career goals, and contact options. Includes a contact form that opens an email draft. |
| `projects.html` - Projects | Shows four project cards with descriptions, representative images, technology lists, category filters, and interactive detail dialogs. |
| `animations.html` - Animations | Demonstrates animated text, pointer tilt, progress indicators, scroll reveals, a moving canvas background, and an interactive code explorer. |

## Key features and how the project works

- All four pages share the stylesheet and JavaScript file, keeping the design and navigation consistent.
- The navigation links connect the pages; JavaScript marks the current page and toggles the compact mobile menu.
- CSS creates the responsive layout, visual theme, background image, hover effects, and animation styling.
- JavaScript filters project cards by category and fills a dialog with each project's details.
- Animation examples include a typing effect, scroll-triggered reveals, animated skill meters, interactive tilt, and ambient canvas particles. They enhance the presentation while the page content remains readable.
- The About contact form validates required fields in the browser and opens the visitor's default email app with a prepared message; it does not send or store messages on a server.
- Project image cards and repository buttons link directly to their matching GitHub repositories where available. The Mental Health Companion repository is private, so visitors without repository access cannot view it. The DMI Student Management & Voting System repository has not been identified yet.

## Featured projects

| Project | Overview and problem addressed | Technologies | Representative image | GitHub repository |
|---|---|---|---|---|
| DMI Student Management & Voting System | Supports student voter verification, confidential digital ballots, and election results. Intended to reduce delays and disputes from paper ballot counting and manual verification. | Java, Spring Boot, MySQL, React, Tailwind CSS, REST API | `images/Voting SYstem.jpeg` | Repository link needed |
| Inventory Control System | Python desktop application for managing inventory items, orders, restocking, and low-stock levels using a database-backed interface. | Python, SQLite, Tkinter | `images/Inventory Control 1.jpeg` | [inventory-control-system](https://github.com/JANEALEX2030/inventory-control-system) |
| Email Client Application | Desktop email client for sending messages and viewing recent inbox messages over SMTP and IMAP. | Python, Tkinter, SMTP, IMAP, threading | `images/Email Sender Application.jpg` | [EMAIL-SENDER-APPLICATION](https://github.com/JANEALEX2030/EMAIL-SENDER-APPLICATION) |
| Mental Health Companion System | Flutter mobile app for mental wellness, connected to a Python and Flask development backend. | Flutter, Dart, Python, Flask | `images/Mobile App on Mental Health.jpeg` | [mental-health-companion-system](https://github.com/JANEALEX2030/mental-health-companion-system) (private; public visitors need access) |

## Technologies used

| Technology | Use in this project |
|---|---|
| HTML5 | Structures the four pages, content, navigation, images, project cards, tables, and contact form. |
| CSS3 | Provides shared visual styling, responsive layouts, the site background, hover treatments, and animation effects. |
| Vanilla JavaScript | Powers responsive navigation, project filters and detail dialogs, the contact form's email draft, and interactive animation demonstrations. |
| GitHub Pages | Intended static hosting platform; deployment is not confirmed yet. |



## Project structure

| File or folder | Description |
|---|---|
| `PersonalPortfolio/` | Root folder containing the complete website project. |
| `index.html` | Home page and personal introduction. |
| `about.html` | Education, skills, interests, career goals, and contact details. |
| `projects.html` | Featured project cards, images, filters, and details. |
| `animations.html` | Interactive animation demonstrations and code examples. |
| `css/style.css` | Shared styling, page layout, and responsive design. |
| `js/script.js` | Shared navigation behavior and interactive features. |
| `images/` | Folder containing the website's profile, background, and project images. |
| `images/profile.jpg` | Profile photograph used on the Home page. |
| `images/background.jpeg` | Site-wide background photograph. |
| `images/Voting SYstem.jpeg` | Student voting project image. |
| `images/Inventory Contro 2.jpeg` | Additional inventory project image. |
| `images/Inventory Control 1.jpeg` | Inventory project image shown on the Projects page. |
| `images/Inventroy Control.jpeg` | Additional inventory project image. |
| `images/Email Sender Application.jpg` | Multi-channel sender project image. |
| `images/Mobile App on Mental Health.jpeg` | Mental Health Companion project image. |
| `images/project1.jpg` | Additional project image. |
| `images/project2.jpg` | Additional project image. |
| `images/project3.jpg` | Additional project image. |
| `README.md` | Project overview, local setup, and hosting instructions. |

In this repository, the repository root is the `PersonalPortfolio` project folder. Use relative asset paths so pages and images work both locally and when hosted under the repository's GitHub Pages URL.

## Run locally

Open `index.html` in a browser, or start a local static server from the project folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Live website and GitHub repository

- Repository: [JANEALEX2030/personal-portfolio](https://github.com/JANEALEX2030/personal-portfolio)
- Expected GitHub Pages URL: [https://janealex2030.github.io/personal-portfolio/](https://janealex2030.github.io/personal-portfolio/) - deployment has not been confirmed, so this URL may not be live yet.

To publish the site, push the website files to the `main` branch, open the repository's **Settings > Pages**, choose **Deploy from a branch**, select `main` and the root (`/`) folder, and save. After deployment, use the URL GitHub Pages displays and verify the navigation, images, animations, and external links.

## Submission evidence

The following screenshots represent the major sections of the portfolio website.

- Home Page
- About Me Page
- Projects Page
- Animated Concepts Page
