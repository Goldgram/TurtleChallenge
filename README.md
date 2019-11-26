# Turtle Challenge

Part of my one of my jobs was to interview candidates for developer positions on our team. We used this challenge to test how the candidates think. I created this solution because if I was going to interview people with this challenge.

I thought that I should analyse, come up with various approaches, and implement a clean solution to benchmark the code I was reviewing.

### Points the challenge is trying to highlight:

- What approach to take (elegant/abstract/brute force)?
- What type of data structure to use? 
- Scalable? How performant is the code?
- Simple / Readable / Testable?
- Code without obfuscation (no 3rd party libraries/enterprise structure).

## Solution Details

### Approach:

The most obvious approach for this problem is by brute force, making a 2D array and mapping through it like a champ, this however is completely redundant.

The main consideration here is what changes state through the process, the simple answer is only the turtle position and orientation.

This approach recursively goes through the moves once. It changes the turtle's property, checking the result, then repeats for the remaining characters. This returns a string of the result message. I used a few helper functions to check statuses and update values. This takes a functional programming approach so no global states exist and only returns a result based on the inputs.

### Data Structures:

The data structure follows the approach in being simple and not adding any redundant grid structure.

The moves input is an string array (but could easily be just one string and split).

The settings object is a readable key/value pair, having most value types inheriting from an object with x and y numbers. This means that the functions written for these can be reused for partial checks of these types (turtle at exit, turtle at a mine etc.).

### Scalability:

By only going through the moves list once and not creating and redundant structures, it cuts down how much processing is needed per move character. This makes the other inputs irrelevant, the grid size, and locations of mines/exit doesn't effect the performance.

### Simple and Readable:

I write this code to make each function small so that each one would be easy to understand and test. The variable/function names are made to be declarative, readable, and a bit verbose so that comments are not needed in the code itself.

### Testable:

I made some basic console tests to cover the major use cases with a variety of moves. The point I was trying to make is that you don't need any libraries with complex and redundant build processes to test simple functionality (but use testing frameworks as an appropriate tool when needed).

Because I took a simple and functional approach earlier, I don't need to worry about tests affecting each other or global states.  

### Additional Info:

I have seen many versions of this challenge since I wrote this code (in a few different languages also), and some have had good ideas and some very bad ideas. By taking part in exercises like this as an interviewee you can get introduced to new ideas and patterns of how you tackle problems, it has enforced good development practices with me. By analysing the problem, coming up with various approaches, and picking an appropriate solution we can be confident in the code we implement.
