# sb-39-03-14-es2015-module-exercise

## Technology Stack
- **Front-end**: N/A
- **Back-end**: N/A


## Assignment Details

The exercise gives practice with ES2015-style import/export. 

`npx create-react-app 39-03-14_ES2015-ModulesExercise` was issued to give the skeleton structure needed for this exercise. Even though files in `src` were deleted, there are lots of stuff that remain in `node_modules`.

To run the program, issue 
`npm start`
from bash. 

Once a browser opens with a tab for 'React App', go to the tab and open a browser console. You should see:
```
I'd like one 🥝, please index.js:7
Here you go: 🥝 index.js:10
Delicious! May I have another? index.js:13
I'm sorry, we're all out. We have 14 left.
```
where 🥝 is the random piece of fruit.

## Difficulties
- I did something wrong with the fruit export and I do not recall what I did, but the program did not work. The course notes used 
```
export defaut [
    "🍇", "🍈", "🍉", "🍊", "🍋", 
    "🍌", "🍍", "🍎", "🍏", "🍐", 
    "🍒", "🍓", "🥝", "🍅", "🥑" 
];
```
and that seemed to work. Once the code was working, I went back and retried 
`export default fruits;`


