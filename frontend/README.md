# Readable Project

Assessment project for Udacity's React & Redux course.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Project structure
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   ├── index.html # DO NOT MODIFY
│   └── manifest.json # Web App Manifest
└── src
    ├── Actions
    │   └── actions.js # redux actions for posts, comments, categories
    ├── Components
    │   ├── app.js # This is the root of the app, mainly user for routing.
    │   ├── app.test.js # Used for testing. Provided with Create React App.
    │   ├── categories-list.js # Component to render Categories list with links to category page.
    │   ├── comment-form.js # Component to render a form for new Comment.
    │   ├── editor.js # Component to render a form to edit an existing Post or Comment
    │   ├── item.js # Component to represent an Item - a single Post or Comment
    │   ├── item-footer.js # Component to render a footer part of Item
    │   ├── item-header.js # Component to render a header part of Item
    │   ├── items-list.js # Component to render a list of Items (Posts or Comments)
    │   ├── nav-bar.js # Component to render a navigatrion bar (logo, Categories list, and new Post button)
    │   ├── post-form.js # Component to render a form for new Post.
    │   ├── post-page.js # Component to render a single Post page.
    │   ├── root-page.js # Component to render a Root page (list of Posts).
    │   └── sorting-panel.js # Component to render By Time/ By Votes sorting selection.
    ├── Reducers
    │   └── reducer.js # redux combined reducers for posts, comments, categories
    ├── Utils
    │   ├── api.js # API functions
    │   └── uuid.js # UUID generator
    ├── index.css # Global styles.
    ├── logo.svg # React Logo. Provided with Create React App.
    ├── registerServiceWorker.js # Provided with Create React App.
    └── index.js # Used for DOM rendering only.
```