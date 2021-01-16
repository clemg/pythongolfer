# Python golfer
Code golfer and minifier for Python
Inspired by [dflook](https://github.com/dflook/python-minifier)'s minifier

# Q&A
### Why ?
In some cases, like in condigame's clash of codes for example, the goal is to make a program solving a problem but the program needs to be the shortest possible (with the less chars if you prefer). Python is pretty good for this, but you can win even more chars by converting the characters of your code from utf-8 to utf-16. This is very simple to do with IDLE for instance, but this sometime takes too much time and is repetitive.
This project aims to make this process faster.


### How does it work ?
It simply takes your input and use a single line of Python code to convert it, and the display it to the screen with the code needed to execute it.


### Why is sometime a white space added to the end ?
A single utf-16 is represented by two utf-8 chars. It means that is the length of your input code is not even, it is impossible to golf it using this method. To alleviate this problem, it simply adds a white space at the end of your code.


### The site is not loading, what should I do ?
Check the console using the devtools. If the console says "out of memory", it means that you used too much memory of the Python interpreter used. This happens because you used the site too much in a too short period of time. Try again later, or try in private browsing.


### Does it always make my code shorter ?
No, it basically can not do this. To exec the code given, it must be coated with some code. This always add length to the inputed code. If your code is very long, it will obviously make it shorter, but if not, it might not. There are some statistics at the bottom of the page, you can see here if you won there.


### Are there other automated methods to shorten Python code ?
Yes, they are. For instance there is [dflook](https://github.com/dflook/python-minifier)'s Python minifier which is working fine for some inputs. Those two tools combined can be very powerful to golf code fast.
