# React Quiz Builder
We provided some simple React template code. Your goal is to make it a functional quiz app. The user should be able to answer questions and see feedback after submitting their answers. After completing all questions, the user should be shown their total score.

Initially, the quiz will show the first question from the list. Once the user chooses an option and clicks ```"Submit"```, the application should display feedback on whether the answer was
```"Correct!"``` or ```"Incorrect!"```. If there are more questions, the next question should be shown with the previous feedback text still on screen.
Otherwise, the app should display the user's total score out of the number of questions:
```"Quiz Complete! You scored 2 out of 2!"```.

For each question, users should be presented with multiple-choice options where each answer has a corresponding radio input type to the left of it. They should be able to select one by clicking on a radio button. Make sure to also assign unique ID's to each radio input element in the format: input [index], e.g. option1, option2, etc. with the first element starting at index 1.
You must use React's useState hooks to manage state. You are free to add classes and styles, but make sure you leave the component ID's and classes provided as they ware. Submit your code once it is complete, and our system will validate your output.
