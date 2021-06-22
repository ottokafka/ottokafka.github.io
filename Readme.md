# Otto Kafka

This is Otto Kafka's Personal website. This is a website to show some of his projects articles and tutorials that he has done over the years.

This website was written in React for the front end and Node.js for the backend.

Check out my page: https://ottokafka.github.io

Feel free to copy this project to display your software developer skills.

# Tech Stack
My Goal use technologies that were free to use with hosting as well. Come on ottokafka.github.io is a pretty slick domain name for developers. 

1. FrontEnd: ReactJs
2. BackEnd: NodeJs
3. Database: Google firestore - free

Hosting
1. ReactJs: Github Pages - free
2. NodeJS: Heroku - free


# GitHub Page

ReactJS github pages script used:

```bash
 cd client/ && git pull && npm run build && mv -fv build/css/* ../css/  && mv -fv build/static/css/* ../static/css/ && mv -fv build/static/js/* ../static/js/ && mv -fv build/static/media/* ../static/media/ && mv -fv build/* ../ | echo "copy completd" && cd .. && git add . && git commit -am "build update" && git push && echo "website updated"

```

Super easy solution for Github pages reload 404 error.

in the src/public/ index.js file add this script below to the bottom body:
Index.js https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html

Create a 404.html file in the root directory:
404.html https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html

# FireStore database

Start up firebase Authentication & FireStore

Authentication choices enabled
1. email & pass

FireStore security rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if request.auth.token.email == "a@email.com";
      allow read, write: if request.auth.token.email == "anotheruser@email.com";
    }
  }
}

```

# Heroku NodeJS

Heroku is used to host NodeJS. This is our api to update the fireStore database everytime a user visits the page. It updates the database in the background.

Express CORS was enabled to allow otto.github.io to communicate with NodeJS api from github

# Developer Getting started

So you decided to copy this project?

First git clone

```
git clone
```

then

```
npm install
```

Finally

```
npm start
```

The project will be started on localhost:3000
