A simple, one-page, website which displays the enemies Mario has caught as well as their value.
There are also a few drop-up boxes to contain contact information.

It was designed by Drew Nauman as part of the curriculum for the V-School full-stack web development bootcamp.

The site uses bootstrap for css formatting
The main.js has some objects which store the relevant "baddie" info. 
It also handles the simple arithmetic for calculating total prices and displays them.

### THIS IS A MODIFIED VERSION OF THE ORGINAL PROJECT - MARIO PEST CONTROL
### See original and modified specs below:

the site is also (probably) fully responsive.

The original assignment can be found below:

# Mario Pest Control

06 JULY 2015 on Homework, JavaScript, Static Websites, Level 2, Project

Princess Peach has a huge infestation of Goombas, Bob-ombs, and Cheep-cheeps, and has commissioned Mario to take care of her pest problem. Mario did the job, but he is having trouble keep track of how many he has caught and has asked you to build him a website that keeps track of how many baddies he caught for Princess Peach so he can send her a bill.

*Pricing:
    1.Goombas: 5 Coins
    2.Bob-ombs: 7 Coins
    3.Cheep-cheeps: 11 Coins
*Baddies Caught:
    1.Goombas: 12
    2.Bob-ombs: 8
    3.Cheep-cheeps: 5
    4.Project Requirements

The website must contain the following:

1. A list displaying each baddie by type. Each list item must:
    *Have baddie image
    *Have baddie name
    *Show total caught of that type
    *Show total price of that type
2.A total price at the bottom that adds sums the total cost of baddies caught
(must use Javascript for this math - no hard coded values)
3.A footer showing:
 *Mario's email address
 *Mario's company website url
 *Mario's physical address
 *A large title at the top of the page entitled "Mario Pest Control"

Passing Criteria: Visual Inspection by Instructor

Student demonstrated a solid understanding with the following levels of the skills tree:
    *Static Websites, Level 1
    *CSS Selectors
    *Colors in CSS
    *Fonts in CSS
    *Using external CSS stylesheets and JavaScript files
    *Deployment, Level 1
    *Opening an HTML document in browser

Extra Credit
Build Mario Pest Control website to be responsive, meaning it looks great when shrunk down to the screen size of a smart phone.

# jQuery Pest Control
10 MAY 2016

### Practice jQuery using MARIO PEST CONTROL

All you have to do with this exercise is duplicate your Mario's Pest Control project and convert everything that was originally in vanilla (plain) JavaScript to use the jQuery library instead.

Rename the copy of the Mario's Pest Control folder you make to jquery-pest-control and put it in your exercises folder instead of the projects folder.

*You must also add the following things to the project:

  1. For those who added a calculation feature where the user can choose how many pests were killed (instead of hardcoding the values), make it so every time the calculation is done, a mario "coin" sound is played. The sound can be downloaded either here or here.
  2. For those who didn't let the users pick how many pests were killed, use the pipe-down sound when the page finishes loading. Sound can be found here.
  3. Make sure all JavaScript is only run when the document is fully loaded.
  4. Add a button for nighttime viewing. If the button is clicked, it should switch a lot of the background color to dark and the text to a light gray. If you have a background image, either add a dark shade over the image or replace the background image entirely either with a different image, or just with a dark solid background.
    *Clicking the button should toggle it back and forth, and the text of the button should change from "dark mode" to "light mode" and back. (Or "night mode" and "day mode" if you prefer).
