# 👉 Visit the website [here](https://farahmand-m.github.io/shahnama/).

## What is this?

This repository and its [Pages](https://pages.github.com/) contain 
[Ferdowsi's Shahnama](https://en.wikipedia.org/wiki/Shahnameh), the national epic of Greater Iran. I couldn't find a 
tool online for browsing and searching through it, so I created this SPA!

## Source?

I've collected the verses by painfully scrapping [کافه کتاب](https://kaffeketab.ir/ferdowsi/). Check their website out 
for a lot of awesome content.

### Where can I get the verses?

All the verses, as well as the _chapters_, if you could call them that, are available in the `static/data` directory. 
Make sure to check the licensing section of this README.

### I found an error in the verses.

Feel free to open an issue. You can also open a pull request and edit the files in `static/data` directly. Reporting any
errors you run into in the webapp is also appreciated.

## Why are the verses procedurally loaded?

Glad you asked! This was the result of a limitation in both Webkit and Gecko in the face of the sheer size of Shahnama!
Check out 
[this article](https://mfarahmand.medium.com/chrome-and-firefox-both-chock-on-css-grid-42da0b7f3093#592b-cc92b7b30ae3) 
to learn more about it.

## What's up with the license?

The current version of the **webapp** as well as the **scrapped data** are published under a GPLv3 license, to ensure 
that any improvement in the code or use of data remain open-sourced and accessible to everyone.
