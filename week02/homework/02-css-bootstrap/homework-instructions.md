# Responsiveness Assignment

### Overview

In this assignment, you'll create two different portfolios. The first will be an update of the one you made last week. You'll enhance the portfolio you made last week with a mobile-responsive layout. For your second portfolio, you’ll build a layout using the Bootstrap CSS framework.

### Before You Begin

* You've learned a ton of material: HTML, CSS, GitHub, GitHub Pages, and Bootstrap. If you feel like you're falling behind, there's no need to panic. You'll have weeks to digest and master this material.

* We're diving into JavaScript next week, and HTML/CSS will start receiving less focus. Still, you'll find that a basic knowledge of HTML/CSS will help you understand JavaScript, especially when we use it to manipulate web pages.

### Instructions

1. Create two new GitHub repositories and name them `Responsive-Portfolio` and `Bootstrap-Portfolio`.

2. Clone these repositories to your computer.

3. Copy the contents of `Basic-Portfolio` (your first homework solution) and paste the mentioned files into `Responsive-Portfolio`.

4. Note: Be sure not to include any dot files (e.g. .git, .gitignore) from the `Basic-Portfolio` repo.

5. If you chose the `Skeleton` exercise for your first homework assignment, contact a TA, who will provide you with a template for your portfolio.

### Assignment One Instructions - (No Bootstrap)

1. Inside your `Responsive-Portfolio` folder, find your `styles.css` file. You will write your media queries at the bottom of `styles.css`.

2. Use three `@media screen` tags, each with one of these `max-width`s: `980px`, `768px` and `640px`.

   * You use `980px` because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before your content gets cut off.

   * `768px` is about the width of a tablet and `640px` is about the width of a phone in landscape.

3. Make the layout match the following screenshots:

4. `index.html`: [980px](Images/980-index.jpg), [768px](Images/768-index.jpg), [640px](Images/640-index.jpg)

5. `portfolio.html`: [980px](Images/980-portfolio.jpg), [768px](Images/768-portfolio.jpg), [640px](Images/640-portfolio.jpg)

6. `contact.html`: [980px](Images/980-contact.jpg), [768px](Images/768-contact.jpg), [640px](Images/640-contact.jpg)

7. Make the position of the header `static` (the default positioning) when the screen is `640px` wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site.

8. Be sure to include the `viewport` tag in all your HTML files, otherwise your media-queries won't function as expected on mobile devices. _(Hint: You won't need to use exact pixels for anything other than the container)_

9. **Protip**: Use the Chrome extensions [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) and [Browser Width](https://chrome.google.com/webstore/detail/browser-width/mlnegepkjlccabakompdmbcmdieaideh) to see the browser dimensions in Chrome.

10. Deploy your new portfolio (now with media queries!) to GitHub Pages.

### Assignment Two Instructions (Bootstrap)

1. Inside your `Bootstrap-Portfolio` repo, create `index.html`, `portfolio.html` and `contact.html`.

2. Using Bootstrap, recreate your portfolio site with the following items:

   * A navbar

   * A responsive layout (remember the grid, rows and columns are your friends)

     * eg. On `xs` and `sm` screens, each section should take up the entire grid. On `m` and larger screens, each section should take up 2/3 of the grid and the sidebar should take up 1/3 of the grid

   * Responsive images

   **BONUS**
   Using Bootstrap, make a sticky footer and use sub-rows and sub-solumns on your portfolio site _(Hint: Check out the Bootstrap documentation)_

3. Your Bootstrap solution should minimize use of media queries.

4. Deploy your new Bootstrap-powered portfolio to GitHub Pages.

### Submitting Your Work on [BootcampSpot-v2.com](http://bootcampspot-v2.com/)

1. Submit the GitHub links to your portfolio repositories on GitHub.

2. Submit the link to your (GitHub Pages) deployed site in the same input field.

### BONUS

* Incorporate CSS animations in your portfolio. [More info here](http://www.w3schools.com/css/css3_animations.asp).

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

## Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
