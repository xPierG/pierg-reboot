# pierg.com - 2025 Redesign

A complete, modern, and minimalist redesign of the personal website pierg.com, built with Eleventy. This version includes a dynamic blog feed populated from local Markdown files.

---

### Tech Stack

* **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
* **Template Language:** [Nunjucks](https://mozilla.github.io/nunjucks/)
* **Styling:** Plain CSS with Flexbox and CSS Grid.
* **Forms:** [Formspree](https://formspree.io/)
* **Hosting & Deployment:** [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions)

### Adding a New Post (Manual Workflow)

This workflow describes how to create a new blog post from a LinkedIn post.

1.  **Create the image folder:** Make sure the `src/img/blog/` directory exists.
2.  **Use the template:** Duplicate the file `src/posts/_template.md` and rename it using the format `YYYY-MM-DD-your-post-title.md`.
3.  **Fill the front matter:**
    * `title`: The title of the post.
    * `date`: The publication date.
    * `featured_image`: The path to the image (e.g., `/img/blog/your-image.jpg`).
    * `excerpt`: A short summary for the post preview.
    * `linkedin_url`: The full URL of the original LinkedIn post.
4.  **Add the content:** Paste the text of your post below the `---` front matter section.
5.  **Publish:** Commit and push the changes to the `master` branch.

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
    The site will be available at `http://localhost:8080`

### Deployment

This site is automatically deployed on every push to the `master` branch.

To publish all your changes (new posts, etc.), run the following command from your terminal:

```bash
npm run publish