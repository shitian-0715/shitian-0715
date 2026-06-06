# Tian Shi Academic Homepage

A modern, dependency-light academic homepage prepared for GitHub Pages.

## Included files

```text
academic-homepage-template/
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/style.css
    ├── img/favicon.svg
    ├── img/tian-shi-profile-v2.jpg
    └── js/main.js
```

## Quick deployment to GitHub Pages

1. Create a repository named `YOUR_USERNAME.github.io`.
2. Upload the **contents** of this folder to the repository root. `index.html` must be visible at the top level.
3. Open `Settings → Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select `main` and `/(root)`, then save.
6. Visit `https://YOUR_USERNAME.github.io` after deployment completes.

## Information imported from the supplied screenshots

The homepage has been populated with the details visible in the supplied profile screenshots:

- Name: Tian Shi
- Current status: Ph.D. candidate in information and communication engineering
- Affiliation: School of Electronics and Information Technology, Sun Yat-sen University, Guangzhou, China
- Completed degrees: B.Sc. in information and computing science (2019) and M.Sc. in mathematics (2023), Guilin University of Electronic Technology
- Research areas: UAV communications, stochastic geometry, wireless communications, and complex networks
- Three selected publications visible in the Google Scholar screenshot
- Verified institutional email domain: `mail2.sysu.edu.cn`

The complete email address, GitHub URL, CV file, teaching records, and award records were not visible in the supplied materials. They have intentionally not been invented. The supplied Google Scholar and ORCID links have been added to the homepage.

## Research interests

The `Research Interests` section contains three editable focus areas:

- UAV Communications
- Stochastic Geometry
- Complex Networks

## Preserved reviewer list

The section **Reviewer for Journals (review time period)** is rendered from `reviewerJournals` near the top of `assets/js/main.js`. It contains the entries extracted from the supplied reference homepage. The page supports search, collapse, and show-all interactions.

To add or remove journals, edit the JavaScript array. Each line is one list item.

## Optional additions

Add a public CV by creating:

```text
files/cv.pdf
```

Add the complete public email address and GitHub URL directly in `index.html` when those details are ready for publication.

## Imported academic profile links

- Google Scholar: linked from the homepage hero area and Contact section.
- ORCID: `0009-0003-6363-3585`, linked from the homepage hero area and Contact section.
