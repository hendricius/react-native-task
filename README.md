# React native test task

The goal is to do a little bit of react native work and show that you can build a UI and work with a rest API.

Pick any subreddit you like, you could pick https://www.reddit.com/r/aww.json for instance. Contains super cute puppy pictures.

Setup a basic react native app.

The app should have 2 views. One view should be a UI that shows the recent posts from the subreddit. The second view should be a list of the interactions the user did with view 1.

**View 1:**

Use a UI like on tinder where the user can swipe left/right to approve/disapprove the image. You can use any existing plugins there are, if you find something use it, no need to re-invent the wheel. If you are unsure how this works - [here a are a couple of examples.](https://www.google.de/search?q=tinder+screenshot&espv=2&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiR_pfhl9vSAhULtxQKHXx-AgUQ_AUICCgB&biw=1676&bih=953)

**View 2:**

This is a list that lists the interactions with the puppy pictures from step one. It should 
show a small preview of the image, as well as whether the user upvoted/downvoted the entry.

It would be nice to have a menu or something similar to switch between View 1 and View 2.

# Installation of contributed Solution

1. Make sure React-Native CLI with minor version 2.0.0 is installed on your machine. If not, [follow the installation instructions](https://www.npmjs.com/package/react-native-cli).
2. run ```npm install``` or ```yarn install``` to install all project dependencies
3. run ```react-native link``` to install all peer dependencies
4. after you checked a proper installation of Xcode (version > 8.0.0), run ```react-native run-ios``` to start the application in your emulator.