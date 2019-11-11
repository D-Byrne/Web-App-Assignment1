# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: David Byrne

## Overview.

This is a book recommendation web app. The app allows users to share book recommendations to other users. Users can upvote posts. Users can also comment on posts and have discussions about the book inside the posts. The app supports user sign up and log in. 

. . . . . List of user features  . . . .

- Firebase Authentiation used for account registration and user login.
- Users can upload posts.
- Users can upvote posts.
- Users can comment on posts.
- Users can upvote comments.
- Users can delete posts.
- Posts can be sorted by upvotes or year.

## Setup.

- Move to project folder.
- Use 'npm install' command.
- Use 'npm start' command to start web app on localhost:3000.

## Data Model Design.

- Stub Api containing posts

~~~
{
            id: 1,
            title: "Gotta Get Theroux This",
            year: 2019,
            link: "https://www.easons.com/gotta-get-theroux-this-louis-theroux-9781509880386",
            author: "Louis Theroux",
            comments: [],
            upvotes: 10
        },
~~~

## UI Design.

![][main]

>> Shows a post for each post in the datastore. The posts are sorted by upvotes. A post can be added, receive upvotes, and can be deleted. Posts can also receive comments which can be upvoted. Once a user logs out using the log out button they are sent the the login page.

![][detailsSignup]

>> The user is presented first with the sign up page. An email and password are input into the fields and the user is registered. Once registered the user is sent to the home page.

![][detailsLogin]

>> The user can enter the email and password of a previously registered account to login. Once the details are entered the user is taken to the home page.

![][detailsPostComment]

>> When a user clicks on a post they can add a comment and upvote other comments.

## Routing.

- / (public) - Displays SignUp page.
- /home (private) - Displays Home page when logged in.
- /login (public) - Displays Login page.
- /posts/:id (public) - Displays post by id.

## Storybook.

![][stories]

## Authentication.

- The app uses Firebase authentication. The authentication used was email/password authentication. The authentication supports sign up and log in. Emails ceated are stored by Firebase. Authentiation is used in the implementation of private routes.

## Independent learning.

- The surge module is used to deploy the web app at: http://book-recommend.surge.sh

[main]: ./img/main.png
[detailsSignup]: ./img/detailsSignup.png
[detailsLogin]: ./img/detailsLogin.png
[detailsPostComment]: ./img/detailsPostComment.png
[stories]: ./img/stories.png
