# Dr. Mario

[Dr. Mario live][mario]

[mario]: https://cjudge1337.github.io/Javascript-Dr-Mario/

Dr. Mario is a recreation of the Nintendo puzzle game. The objective is to clear the board of all the viruses using the colored pills.
Matching 4 or more in a row of the same color clears the row.

Controls are as follows:

Up arrow or W key: Rotate current pill
Left arrow or A key: Move current pill left
Down arrow or S key: Move current pill down
Right arrow or D key: Move current pill right

![screenshot](./docs/screenshot.png)

The game was built using vanilla Javascript and HTML5 Canvas. A two-dimensional array is used to store the game's state. Each frame, the grid is redrawn based on the colors and properties stored in a Block object assigned to each space of the array.
