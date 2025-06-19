# pierg.com - 2025 Redesign

A complete, modern, and minimalist redesign of the personal website pierg.com, built with Eleventy and managed via a headless CMS.

---

### Tech Stack

* **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
* **Template Language:** [Nunjucks](https://mozilla.github.io/nunjucks/)
* **Styling:** Plain CSS with Flexbox
* **CMS:** [Decap CMS](https://decapcms.org/) (for content management)
* **Forms:** [Formspree](https://formspree.io/)
* **Hosting & Deployment:** [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions)

### Deployment Strategy

The live site `pierg.com` is served from the `master` branch of the `xPierG.github.io` repository. The deployment is fully automated via a GitHub Action defined in `.github/workflows/deploy.yml`.

### How to Run Locally

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the local development server:
    ```bash
    npm start
    ```
    The site will be available at `http://localhost:8080`.

### CMS Access

The content management interface is available at `/admin/` on the deployed website. Access requires authentication via GitHub.