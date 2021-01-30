# CHATTZZY
[![CHATTZZY Website preview](https://firebasestorage.googleapis.com/v0/b/my-portfolio-dcec7.appspot.com/o/chattzzy.jpg?alt=media&token=e9795dea-b03c-4768-a1af-cc7f825b778b  "CHATTZZY Website")](http://chattzzy.web.app/)

A chat website app where you can chat with random people all around the world 😃. Built over the cloud firestore feature of Firebase to get messages up-to-date with a firestore subscription.

Table of content:
  - [1. Getting Started](#1-getting-started)
    - [1.1. Prerequisites](#11-prerequisites)
    - [1.2. Installing](#12-installing)
    - [1.3. Firebase](#13-firebase)
      - [1.3.1. Initiate firebase project](#131-initiate-firebase-project)
      - [1.3.2. Initiate firebase cloud firestore](#132-initiate-firebase-cloud-firestore)
      - [1.3.3. Initiate firebase authentication](#133-initiate-firebase-authentication)
      - [1.3.4. Change firebase configs](#134-change-firebase-configs)
      - [1.3.5. Finalizing](#135-finalizing)
  - [2. Built With](#2-built-with)
  - [3. Main Features](#3-main-features)
  - [4. Git Style](#4-git-style)
    - [4.1. Message Structure](#41-message-structure)
      - [4.1.1. The Type](#411-the-type)
      - [4.1.2. The Subject](#412-the-subject)
      - [4.1.3. The Body](#413-the-body)

## 1. Getting Started

These instructions will get you a copy of the project up and running on your local machine or hosted on firebase hosting if required.

### 1.1. Prerequisites
You have to have Node.js v14.15.4+, and npm 6.14.11+ installed.  
To be able to run firebase commands you need to have  Firebase CLI installed by running:
```
npm install -g firebase-tools
```
for more info check [the official Firebase CLI docs](https://firebase.google.com/docs/cli).  
Also, check `./package.json` for all the packages used in this project

### 1.2. Installing

Clone this repo, open the terminal and navigate to the repo directory on your local machine, and then run:

```
npm install
```
wait until it's done and you're good to go  

Note: There will be a high severity audit problem when you install the packages.  
This Problem is caused by `react-scripts` package.  
This is a false positive according to  [#9469 (comment)](https://github.com/facebook/create-react-app/issues/9469#issuecomment-672984368) from the maintainers on this issue, so there's nothing to worry about.

### 1.3. Firebase
#### 1.3.1. Initiate firebase project

In order for this project to work for you properly you will need a firebase project.  
if you already have a firebase project set up, skip to [Change firebase configs](#134-change-firebase-configs).  
To initiate your own firebase project, go to [firebase](https://firebase.google.com/), log in with your google account, then click "Go to console" at the top right corner.
In the console you'll see all your project if any, and you'll see "Add project" button.  
Click it and fill the form, and Voilà you're ready.

#### 1.3.2. Initiate firebase cloud firestore 
Now, in your project overview page you'll need to click on firestore that's located in the sidenav bar.  
In the firestore page you'll need to click on the "Get started" button.  
Now you have your firestore ready, you will need to have data matching the message interface.
You can find the message interface in ` ./src/@types`  
Note: check the `./firestore.rules` for the rules I am using, copy it if you don't want to create your own.

#### 1.3.3. Initiate firebase authentication

To do that, go to "Authentication" by clicking on it, located in the sidenav bar, and click on the "Get started" button just like before with the firestore.  
Now, for this project to work exactly like mine you'll need to go to "Sign-in methods" and Enable the Google sign-in method.


#### 1.3.4. Change firebase configs

Last step, in your project overview page you'll need to go to "Settings" then "Project settings".  If you scroll down you'll see "Your apps" section.  
In "Your apps" section you'll need to click "Add app", choose "Web", name it, and that's it.  
Now you'll see the app in the "Your apps" section. In this app click on the "Config" radio button, and copy the app config and replace the config in `./src/Firebase.ts` with your own config.

#### 1.3.5. Finalizing

By now the website should be working just fine on your local host when you run `npm start`, but if you wanna host it, then go to your project page, click "Hosting" and then click "Get started", and go to `./firebase.json` and `./.firebaserc` change the data there with your own hosting data.
Now you have the Hosting ready, go to your CLI, navigate to the project main directory, and run: 
```
firebase deploy
```  

## 2. Built With

* [TypeScript](https://www.typescriptlang.org/) - The main language used.
* [React](https://reactjs.org/) - The web library used.

## 3. Main Features
* Light and dark modes.
* Live messages subscription and auto-updating.
* Oauth to log in with a google account.
* UI that shows the image and name of the sender of the message.
* can be installed as a PWA on chrome browsers. 

## 4. Git Style

### 4.1. Message Structure
A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:
```
type: subject

body
```

#### 4.1.1. The Type
The type is contained within the title and can be one of these types:

* **feat:** a new feature
* **fix:** a bug fix
* **docs:** changes to documentation
* **style:** formatting, missing semi colons, etc; no code change
* **refactor:** refactoring production code
* **test:** adding tests, refactoring test; no production code change
* **chore:** updating build tasks, package manager configs, etc; no production code change

#### 4.1.2. The Subject
Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period.

Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

#### 4.1.3. The Body
Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.

When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.

For more information about the style guide for Git and programming Languages check: [Udacity's Code Style Guide](https://udacity.github.io/git-styleguide/)