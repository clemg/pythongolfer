# Python golfer
Python code golfer and Python code minifier
Inspired by [dflook](https://github.com/dflook/python-minifier)'s minifier




# Table of Contents
1. [Demo](#1---demo)
2. [Examples](#2---examples)\
  2.1 [Primes](#21-primes)\
  2.2 [Greatest Common Divisor](#22-greatest-common-divisor)\
  2.3 [Biggest int](#23-biggest-int)
3. [Q&A](#3---qa)\
  3.1. [Why ?](#31-why-)\
  3.2. [How does it work ?](#32-how-does-it-work-)\
  3.3. [Why is sometime a white space added to the end ?](#33-why-is-sometime-a-white-space-added-to-the-end-)\
  3.4. [Does it always make my code shorter ?](#34-does-it-always-make-my-code-shorter-)\
  3.5. [Are there other automated methods to shorten Python code ?](#35-are-there-other-automated-methods-to-shorten-python-code-)\
  3.6. [Can I contribute ?](#36-can-i-contribute-)
4. [Known bugs](#4---known-bugs)\
  4.1. [Reversed coated code](#41-reversed-coated-code)




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




# 2 - Examples
### 2.1 Primes
**Problem statement:** In a range from 1 to `N` included, print the number followed by True if this number is prime, False otherwise. (Example: `7: True`, or `8: False`)

Input code:
```Python
n = int(input())

for i in range(1,n+1):
    if all(i%d!=0 for d in range(2,i)):
        print(str(i)+": True")
    else:
        print(str(i)+": False")
```

Result:
```Python
exec(bytes('⁮‽湩⡴湩異⡴⤩昊牯椠椠⁮慲杮⡥ⰱ⭮⤱਺††晩愠汬椨搥㴡‰潦⁲⁤湩爠湡敧㈨椬⤩਺††††牰湩⡴瑳⡲⥩∫›牔敵⤢ †攠獬㩥 †††瀠楲瑮猨牴椨⬩㨢䘠污敳⤢','u16')[2:])
```
Stats: 101 chars - 51 diff - 66.45% of the original size (-33.55%)

[Try it online!](https://tio.run/##PU5NS8NAEP05acFLlXrwr4gXJeCpClawtw0oJKWChQbqQdgtu7qLMSZpPLTQ/yIvMvsz4pSI8BjmDfM@rifjy6vRUduGd@FF73wyDm96AaIcYkcbB1Xz9GnBC7Sj5dQnn6Qlg3/ooaKXHMqgKPGRQ5ffdgshGfTs6F5SmZG29GSaWkEUtHtFVCHSe89Y0kZR@tbElnTG5v/aDj4pugJ@voaqYBzid4itTxaUfkGvIKb7oIX0j1njTEf/tHw3lZ/nfmZ9UnMHZK6xq58lV@LQNcuDg@B2cBz0Tw9PzvptOxj@Ag "Python 3 – Try It Online")

---
### 2.2 Greatest Common Divisor
**Problem statement:** Print the greatest common divisor between the two givens numbers.

Input code:
```Python
a, b = map(int, input().split())

def gcd(a, b):
    while b:
        a, b = b, a%b
    return a

print(gcd(a,b))
```

Result:
```Python
exec(bytes('ⱡ戠㴠洠灡椨瑮‬湩異⡴⸩灳楬⡴⤩搊晥朠摣愨‬⥢਺††桷汩⁥㩢 †††愠‬⁢‽Ɫ愠戥 †爠瑥牵⁮੡牰湩⡴捧⡤ⱡ⥢ ','u16')[2:])
```
Stats: 81 chars - 31 diff - 72.32% of the original size (-27.68%)

[Try it online!](https://tio.run/##JY49CsJAEEavYrcGbFQM6lXERglYqaCCdllIkQiCKSwEi92YxSyIGIz4A94lTGD2GOuGwBQzj8d833yznMymba2dtTOujzZLZ1EnkHL0WZExzJiiHONEhTdwr/iR6nAHnsFbKvpAcS33WOJ@i0eBJ4bhGb3EmCCiPPmCy8wgf2EqgYpCRuBuK1hyj5UmNfAHaWRO9EUlKJ@pUKjgCfSWS66Cu4k2Wbi7AI9NPfMfXEkaZNW0iTVo9YeW1r1urWP/AQ "Python 3 – Try It Online")

---
### 2.3 Biggest int
**Problem statement:** Print the maximum int in a list.

Input code:
```Python
n = map(int, input().split())

m = 0

for e in n:
    if e > m:
        m = e

print(m)
```

Result:
```Python
exec(bytes('⁮‽慭⡰湩ⱴ椠灮瑵⤨献汰瑩⤨਩⁭‽ਰ潦⁲⁥湩渠਺††晩攠㸠洠਺††††⁭‽੥牰湩⡴⥭','u16')[2:])
```
Stats: 67 chars - 17 diff - 79.76% of the original size (-20.24%)

[Try it online!](https://tio.run/##K6gsycjPM/7/P7UiNVkjqbIktVhD/VHjukcNe5@1rn20cMOznSsfbdzybMmC543rnk/c@mjJiuc9655t3PB84kog@8GKlY8a1wIVP1ix4dneZY8aNz1qXArU8mzHggcrdj1qWABEz2aufDZlweMdC55tQQhCEUTvyqXPO8EWLdzyaOladR31UkMzdc1oI6tYzf//TY0VzA0UTC0UTCwVLM0UTAwVzIwVLM0VTI2A4gA "Python 3 – Try It Online")




# 3 - Q&A
### 3.1 Why ?
In some cases, like in Codingame's [Clash of Code](https://www.codingame.com/multiplayer/clashofcode) or [code.golf](https://www.code.golf) for example, the goal is to make a program to solve a problem but the program needs to be the shortest possible (with the less chars if you prefer). Python is pretty efficient for this, but you can win even more chars by converting the characters of your code from utf-8 to utf-16. This is very simple to do with IDLE for instance, but this sometime takes too much time and is repetitive.
This project aims to make this process faster.

---
### 3.2 How does it work ?
Your input is converted by the `golfcode` function in the [script.js](https://github.com/clemg/pythongolfer/blob/main/script.js) file. In fact, every pair of two adjacent chars in your input code is jammed together to make only 1 char, resulting in a golfed code length of x/2+25, given that x is the length of your input code.

---
### 3.3 Why is sometime a white space added to the end ?
A single utf-16 is represented by two utf-8 chars. It means that is the length of your input code is not even, it is impossible to golf it using this method. To alleviate this problem, it simply adds a white space at the end of your code.

---
### 3.4 Does it always make my code shorter ?
No, it basically can not do this. To execute the given code, it must be coated with some additional code. This always add length to the inputed code. If your code is very long, it will obviously make it shorter, but if not, it might not. There are some statistics at the bottom of the page, you can see there if you won some chars.

---
### 3.5 Are there other automated methods to shorten Python code ?
Yes, they are. For instance there is [dflook](https://github.com/dflook/python-minifier)'s Python minifier which is working fine for some inputs. Those two tools combined can be very powerful to golf code fast.

---
### 3.6 Can I contribute ?
Of course! Fork the repo and create a pull request.




# 4 - Known bugs
### 4.1 Reversed coated code
Where the ungolfed code contains the precise string `. ` or `+ `, for some reasons, the coated string after the returned code is reversed. It turns into `([:2]('61u','`. Also, this string appears in the middle. (See [#2](https://github.com/clemg/pythongolfer/issues/2))
