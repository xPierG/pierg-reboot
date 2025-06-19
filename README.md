# pierg.com - 2025 Redesign

A complete, modern, and minimalist redesign of the personal website pierg.com, built with Eleventy and managed via a headless CMS.

---

### Tech Stack

* **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
* **Template Language:** [Nunjucks](https://mozilla.github.io/nunjucks/)
* **Styling:** Plain CSS with Flexbox
* **CMS:** [Decap CMS](https://decapcms.org/)
* **Forms:** [Formspree](https://formspree.io/)
* **Hosting & Deployment:** [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions)

### Deployment

This site is automatically deployed to `pierg.com` on every push to the `master` branch. The deployment process is handled by the GitHub Action defined in `.github/workflows/deploy.yml`.

To trigger a new deployment, simply push your commits:

    git push origin master

### How to Run Locally

1.  Clone the repository.
2.  Install dependencies:
    ```
    npm install
    ```
3.  Start the local development server:
    ```
    npm start
    ```
    The site will be available at `http://localhost:8080`.

### CMS Access

The content management interface is available at `https://pierg.com/admin/`. Access requires authentication via GitHub.