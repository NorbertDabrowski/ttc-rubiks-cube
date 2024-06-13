# ttc-rubiks-cube
Rubik’s Cube Coding Exercise

<br/>

# Steps to run the application

1. clone github repository
   `git clone https://github.com/NorbertDabrowski/ttc-rubiks-cube.git`

2. open cloned code in source-code editor (i.e. VS Code)

3. in Terminal run `npm install` and then `npm start`

4. open web browser and navigate to `http://localhost:3000/`

<br/>

# Coding exercise
Develop a program that simulates a Rubik’s cube. The aim of the program is not to solve the cube, just to
develop a programmatic Rubik’s cube that can correctly rotate any face.
The solution can be developed in any language however, it must be both buildable and runnable on a
Windows PC and ideally shared through a GitHub account or similar repository.

You can use https://rubiks-cube-solver.com/ to help you develop your solution.
The initial state of the cube in your solution should be “solved” and you should set
your cube up the same way as they do.
To test your solution, print out the colours on each face after applying the following face rotations to the
starting position:
1. Front face clockwise 90°
2. Right face anti-clockwise 90°
3. Up face clockwise 90°
4. Back face anti-clockwise 90°
5. Left face clockwise 90°
6. Down face anti-clockwise 90°

On https://rubiks-cube-solver.com/ this sequence can be setup on their UI using the following buttons in order:
`F R' U B' L D'`

You do not need to provide a UI, a solution that contains a console write statement is perfectly acceptable.
Although a working solution gets bonus points, what we are mainly assessing is if your code is close to
‘production quality’ in terms of being readable, maintainable, testable etc.

#### TOP TIPS:
- Focus on the structure of the code – allow us to see your thought process
- Provide a Readme with instructions on how to build/run your program