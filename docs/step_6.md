# Final SUBMIT  

## Focus
- The personal blog application should be a React application.
- Clen code: no redundant comments! 
- No unused code!
- No `console.log()`
- Function and variables names. think about meaningful names.
- Project no in ZIP files!  upload to GitHub

## Features
- 4 Pages:
  - Home page:  show some welcome message
  - Posts: show a list of posts
  - PostPage: show a single pots
  - Admin : form to add ne w post
- use `react router` for navigation between pages
- use https://react-hook-form.com/ for admin form (add new post)
- use `context` to handle all posts methods
    - set posts in `useState`
    - addPost, editPost, removePost (reuse the admin form?) (only if user!)
- In posts page:
  - show all posts
  - filter posts by title (add `input`)
- use `context` to handle user 
  - set user objet in `useState` `{name: 'nir}`
  - signIn, signOut (reuse the admin form?)
  - if user exist (signedIn), make the `admin` page accessible
 
