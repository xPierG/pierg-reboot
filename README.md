# pierg.com - 2025 Redesign

A complete, modern, and minimalist redesign of the personal website pierg.com, built with Eleventy and managed via a headless CMS.

---

### Tech Stack

* **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
* **Template Language:** [Nunjucks](https://mozilla.github.io/nunjucks/)
* **Styling:** Plain CSS with Flexbox
* **CMS:** Ho provato con [Decap CMS](https://decapcms.org/) ma ho fallito per numerosi problemi di permission che non ho risolto
* **CMS:** [TinaCMS](https://tina.io/) (Self-hosted for local editing)
* **Forms:** [Formspree](https://formspree.io/)
* **Hosting & Deployment:** [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions)

### Deployment

This site is automatically deployed to `pierg.com` on every push to the `master` branch. The deployment process is handled by the GitHub Action defined in `.github/workflows/deploy.yml`.

To trigger a new deployment, simply commit your changes and push them to the `master` branch:

    git add .
    git commit -m "Your descriptive commit message"
    git push origin master

### How to Run Locally

1.  Clone the repository.
2.  Install dependencies:

        npm install

3.  Start the local development server:

        npm start

    The site will be available at `http://localhost:8080`.

### How to Edit Content

Content editing is managed locally via TinaCMS. To start the editing interface:

1. Run the local development server: `npm start`
2. Open your browser and go to `http://localhost:8080/admin/`

This will open the TinaCMS interface, which allows you to edit blog posts and other content. Changes are saved directly to the local files and can then be committed and pushed to the repository.