# Python golfer
Python code golfer and Python code minifier
Inspired by [dflook](https://github.com/dflook/python-minifier)'s minifier




# Table of Contents
1. [Demo](#demo)
2. [Q&A](#qa)\
  2.1. [Why ?](#why-)\
  2.2. [How does it work ?](#how-does-it-work-)\
  2.3. [Why is sometime a white space added to the end ?](#why-is-sometime-a-white-space-added-to-the-end-)\
  2.4. [The site is not loading, what should I do ?](#the-site-is-not-loading-what-should-i-do-)\
  2.5. [Does it always make my code shorter ?](#does-it-always-make-my-code-shorter-)\
  2.6. [Are there other automated methods to shorten Python code ?](#are-there-other-automated-methods-to-shorten-python-code-)\
  2.7. [Can I contribute ?](#can-i-contribute-)
3. [Known bugs](#known-bugs)\
  3.1. [Nothing](#nothing)




# Demo
1. Go to the [web page](https://clemg.github.io/pythongolfer)
2. Wait until the result box displays "Ready!":
![](https://i.imgur.com/czqWBmZ.png)
3. Enter your Python code in the top box:
![](https://i.imgur.com/88ftMZE.png)
4. Click the "Golf it!" button
5. Get the result from the bottom box
![](https://i.imgur.com/CrWZyqU.png)




# Q&A
### Why ?
In some cases, like in condigame's clash of codes for example, the goal is to make a program solving a problem but the program needs to be the shortest possible (with the less chars if you prefer). Python is pretty good for this, but you can win even more chars by converting the characters of your code from utf-8 to utf-16. This is very simple to do with IDLE for instance, but this sometime takes too much time and is repetitive.
This project aims to make this process faster.

---
### How does it work ?
It simply takes your input and use a single line of Python code to convert it, and the display it to the screen with the code needed to execute it.

---
### Why is sometime a white space added to the end ?
A single utf-16 is represented by two utf-8 chars. It means that is the length of your input code is not even, it is impossible to golf it using this method. To alleviate this problem, it simply adds a white space at the end of your code.

---
### The site is not loading, what should I do ?
Check the console using the devtools. If the console says "out of memory", it means that you used too much memory of the Python interpreter used. This happens because you used the site too much in a too short period of time. Try again later, or try in private browsing.

---
### Does it always make my code shorter ?
No, it basically can not do this. To exec the code given, it must be coated with some code. This always add length to the inputed code. If your code is very long, it will obviously make it shorter, but if not, it might not. There are some statistics at the bottom of the page, you can see here if you won there.

---
### Are there other automated methods to shorten Python code ?
Yes, they are. For instance there is [dflook](https://github.com/dflook/python-minifier)'s Python minifier which is working fine for some inputs. Those two tools combined can be very powerful to golf code fast.

---
### Can I contribute ?
Of course! Fork the repo and create a pull request.




# Known bugs
### Nothing
No bug found so far!
