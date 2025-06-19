# pierg.com - 2025 Redesign

A complete, modern, and minimalist redesign of the personal website pierg.com, built with Eleventy and managed via a headless CMS.

---

### Tech Stack

* **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
* **Template Language:** [Nunjucks](https://mozilla.github.io/nunjucks/)
* **Styling:** Plain CSS with Flexbox
* **CMS:** [Decap CMS](https://decapcms.org/) (for content management)
* **Forms:** [Formspree](https://formspree.io/)
* **Hosting & Deployment:** [GitHub Pages](https://pages.github.com/)

### Design Principles

* Minimalist, content-focused aesthetic.
* "V-Card" style homepage.
* Typography-centric design featuring 'Inter' and 'JetBrains Mono'.

### Project Structure

This project follows the standard Eleventy structure, with all source files located in the `/src` directory. The final static site is compiled into the `/_site` directory.

* `src/`: Contains all source files (Markdown pages, Nunjucks layouts, assets).
* `src/_includes/`: Nunjucks layouts for pages and posts.
* `src/posts/`: Markdown files for blog posts.
* `src/assets/`: Static assets like CSS, fonts, and images.
* `admin/`: Configuration and entry point for Decap CMS.
* `.eleventy.js`: Eleventy's main configuration file.

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

The content management interface is available at `/admin/` on the deployed website. Access requires authentication via GitHub as a repository collaborator.