# Python golfer
Python code golfer and Python code minifier
Inspired by [dflook](https://github.com/dflook/python-minifier)'s minifier




# Table of Contents
1. [Demo](#demo)
2. [Q&A](#qa)\
  2.1. [Why ?](#why-)\
  2.2. [How does it work ?](#how-does-it-work-)\
  2.3. [Why is sometime a white space added to the end ?](#why-is-sometime-a-white-space-added-to-the-end-)\
  2.4. [Does it always make my code shorter ?](#does-it-always-make-my-code-shorter-)\
  2.5. [Are there other automated methods to shorten Python code ?](#are-there-other-automated-methods-to-shorten-python-code-)\
  2.6. [Can I contribute ?](#can-i-contribute-)
3. [Known bugs](#known-bugs)\
  3.1. [Reversed coated code](#reversed-coated-code)




# 1 - Demo
1. Go to the [web page](https://clemg.github.io/pythongolfer)
2. Wait until the result box displays "Ready!":
![](https://i.imgur.com/czqWBmZ.png)
3. Enter your Python code in the top box:
![](https://i.imgur.com/88ftMZE.png)
4. Click the "Golf it!" button
5. Get the result from the bottom box
![](https://i.imgur.com/CrWZyqU.png)
6. [Try it online!](https://tio.run/##TY7BSsNAGIQfJy14qaKHvor0ogQ8qWAL9rZ7ENKQS8FAL8KuJHVX222bbg8R@i5hlv77GHGLUAo/w8/wzTDP4@HD0@NV28av8X3nbjyMXzoRuAHbU60hbVCfr8ODQlOWUr3y0y3VEtwGxrFPJKZRKe3n4BW4PvKJCADlXy5RYAuonZt9O6XBUjBBhQCf00ZCLpBr8NJZ6YI/E36yovd/wNBbRR8GssS6OjqFbtRviJ8fZeJ8j7M/PgsllgrVKO1ZSmXlp4YydcIOS3vYhcE6uohGvZuoe3vZH3Tbtnf9Bw "Python 3 – Try It Online")




# 2 - Q&A
### 2.1 Why ?
In some cases, like in Codingame's [Clash of Code](https://www.codingame.com/multiplayer/clashofcode) or [code.golf](https://www.code.golf) for example, the goal is to make a program to solve a problem but the program needs to be the shortest possible (with the less chars if you prefer). Python is pretty efficient for this, but you can win even more chars by converting the characters of your code from utf-8 to utf-16. This is very simple to do with IDLE for instance, but this sometime takes too much time and is repetitive.
This project aims to make this process faster.

---
### 2.2 How does it work ?
Your input is converted by the `golfcode` function in the [script.js](https://github.com/clemg/pythongolfer/blob/main/script.js) file. In fact, every pair of two adjacent chars in your input code is jammed together to make only 1 char, resulting in a golfed code length of x/2+25, given that x is the length of your input code.

---
### 2.3 Why is sometime a white space added to the end ?
A single utf-16 is represented by two utf-8 chars. It means that is the length of your input code is not even, it is impossible to golf it using this method. To alleviate this problem, it simply adds a white space at the end of your code.

---
### 2.4 Does it always make my code shorter ?
No, it basically can not do this. To execute the given code, it must be coated with some additional code. This always add length to the inputed code. If your code is very long, it will obviously make it shorter, but if not, it might not. There are some statistics at the bottom of the page, you can see there if you won some chars.

---
### 2.5 Are there other automated methods to shorten Python code ?
Yes, they are. For instance there is [dflook](https://github.com/dflook/python-minifier)'s Python minifier which is working fine for some inputs. Those two tools combined can be very powerful to golf code fast.

---
### 2.6 Can I contribute ?
Of course! Fork the repo and create a pull request.




# 3 - Known bugs
### Reversed coated code
Where the ungolfed code contains the precise string `. ` or `+ `, for some reasons, the coated string after the returned code is reversed. It turns into `([:2]('61u','`. Also, this string appears in the middle. (See [#2](https://github.com/clemg/pythongolfer/issues/2))
