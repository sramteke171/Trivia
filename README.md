# Country Trivia
READ ME

Country Trivia 

Pseudo code & Draft UI:-
 

Technologies used includes:
-	HTML
-	CSS
-	JavaScript

Browser compliant: Chrome, IE, Firefox 



MVP User Stories:
1.	As a user I want to see a Trivia welcome page, with some encouragement to play. For ex. Perfect score will get $100.
2.	As a user I would like to enter my name before playing
3.	As a user I want to see a Play and Next buttons.
4.	As a user when I click on Play button, I want to see the first Trivia question
5.	As a user when I click on the options presented in the answer, I want to see an alert message to indicate that I selected the right or wrong answer
6.	As a user, when I select the answer, I want to see my score updated
7.	As a user, when I click on NEXT button, I want to see the next trivia question
8.	When all questions are answered, I want to see the results of the game with appropriate user messages.

Winning logic:
- At least 5 correct answers are needed to win the country trivia
- if you are a winner, then you get $10 gift card
- Perfect score wins $100

Code Logic:

Play button triggers play function

PLAY function(){
-	Checks if user entered Name, if so, presents Que01 and starts timer; tracks scores


showPanel(){
-	If Q1 then creates imgages, div -> add Q1 img to Div ->add Div to message panel
-	CheckImageclick();
-	Based on what image was clicked, shows messages, updates scores, and win amt
}


When it reaches the last question, call   winLogic(){}


Nice to Haves:
9.	As a user I would like to see the list of trivia questions and answers after I answer each question
10.	It would be nice to see the timer for the game., which can alert after time outs, and stop the game

Future items:
a.	We will require trivia game categories. For example, country flags challenge OR foods and cultures
b.	As an admin, the ability to create new questionnaire 
