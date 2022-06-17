#  :flying_saucer: UFOs :flying_saucer:
Challenge Week11 Data Analysis BootCamp using JavaScript, HTML, CSS, Boostrap.

## ⚡Overview of the Project: 

In this project, we built a dynamic webpage that can give us interesting data about UFO cases in the US. JavaScript, a Bootstrap framework, HTML and CSS were the tools used to create this webpage and several filters that allows users search specific cities, dates, states, and other data.

Click here to take a look at UFOs Sightings webpage --> https://annarochav.github.io/UFOs/

<img src="https://github.com/annarochav/UFOs/blob/main/static/images/image1.png" width="970" height="" />

## ⚡Results: 







**Search Procedure:**

At the top left of webpage, the user can click in the ‘UFO Sightings’ button to re-initialize the search every time its needed. 

<img src="https://github.com/annarochav/UFOs/blob/main/static/images/image2.png" width="770" height="" />

**Filtering**

The user can pick a date, city, state, country, and/or shape to get the desired information.  When the user presses ‘Enter’, the filter will be detected and the table updated with the results. This is an example of how a date filter looks like by entering 1/7/2010 and the result returns 6 matches:

<img src="https://github.com/annarochav/UFOs/blob/main/static/images/filter_date.png" width="770" height="" />

This is an example of how a city filter looks like by entering 'bonita' and the result returns 1 match:

<img src="https://github.com/annarochav/UFOs/blob/main/static/images/filter_city.png" width="770" height="" />

This is an example of how a state filter looks like by entering 'nc' and the result returns 4 matches:

<img src="https://github.com/annarochav/UFOs/blob/main/static/images/filter_state.png" width="770" height="" />

This is an example of how a state filter and a shape filter looks like by entering 'ca' + 'triangle' and the result returns 7 matches:

<img src="https://github.com/annarochav/UFOs/blob/main/static/images/filter_double.png" width="770" height="" />

**NOTE: It’s important that the user uses only lower cases to get the desired results.**

## ⚡Summary: 

1. One drawback of this webpage is that user needs to guess the parameter to filter instead of knowing the existing data. One way to fix this would be to add a drop-down list including all the values that can be filtered, each list would need to update after a parameter has been selected.

2. Also, I can suggest including a closer button that cleans the filters because going all the way up is not efficient and can affect the users experience. Adding a function that makes the webpage not case sensitive would be great too. 
