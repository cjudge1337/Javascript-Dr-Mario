# Dr. Mario

## Background

Dr. Mario is a classic Nintendo puzzle game. Similar in style to Tetris, the game is based around positioning colored pills in order to eliminate randomly placed viruses. Once every virus is cleared the game is won.

There are 3 colors in the game: red, yellow, and blue. Pills can be either 2 different colored blocks or 2 blocks of the same color. Viruses are a single color block. Pills and viruses will be cleared when 4 in a row is made of a single color.

## Functionality & MVP

In Dr. Mario, users will be able to:

- [ ] Start and reset game board.
- [ ] See game instructions on the same page
- [ ] Move and rotate descending pills with arrow/WASD keys
- [ ] See their score
- [ ] See the next pill in advance

In addition, this project will include:

- [ ] A production Readme

## Wireframes

This app will consist of a single screen with game board, display for the next pill, game controls, and nav links to my LinkedIn and Github. Game controls will include start, reset on game over, and directional input for pills. If I decide to include music/sound effects there will be a mute button in the top right corner of the game board.

![wireframe](dr_mario.png)

## Architecture and Technologies
- The game will use mostly vanilla JavaScript and some jQuery for the overall game and logic.
- HTML5 Canvas will be used to render everything, and possibly with the help of the Easel JS library.
- Webpack to bundle the files together.

There will be five other scripts for this project as well:

`game.js`: This script will handle the main logic of the game such as creating/destroying pills and viruses and placing them, displaying upcoming pills, and calculating win/loss conditions.

`block.js`: Parent class object for pills and viruses that will hold their overlapping logic such as color, `create` and `destroy` functions.

`pill.js`: Will hold constructor and update functions for pill objects. Should create 2 block objects together with random color.

`virus.js`: Will hold constructor and update functions for virus objects.

## Implementation Timeline

Day 1:
- Set up necessary node modules/webpack.
- Create `webpack.config.js` as well as `package.json`.
- Lay framework for classes.
- Try and figure out how to draw a block and/or use a sprite image and render it to the screen.

Day 2:
- Fill out `block` object with core functionality.
- Fill out `virus` and `pill` objects with unique functions and attributes.
- Start working on `game` and figure out how to link viruses/pills to it and make pills move.

Day 3:
- Implement user input to pill movement and game state.
- Fill out functionality needed to stack, read, and destroy rows of pills/viruses
- Create game functions to know when user has won.

Day 4:
- Improve visuals and styling
- General bug fixing as needed by this point.

## Bonus Features
Some features that can be added in the future with more time:
- 2 player version
- Scaling levels of difficulty
