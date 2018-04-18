---
path: "/react-slots"
date: "2018-04-17T14:19:33.962Z"
title: "The React One Armed Bandit"
---

## The Plan
On my return flight from Vegas, I had a couple of hours to kill before I was home. Sitting in the airport before boarding, I was thinking about the dollars I fed slot machines. This gave me an idea, could I build a slot machine in JavaScript before I made it home?  


Spoiler: I sort of did.
- Live Demo [https://react-slots.firebaseapp.com/](https://react-slots.firebaseapp.com/)
- Github Repo (all code discussed is from Initial Commit) [https://github.com/dgading/react-slots](https://github.com/dgading/react-slots)

## The Setup
The first thing I do when starting any project is write down what I think I need to do. I came up with the following:
1. Build a webpage
1. Add some numbers
1. Add a button that gives random results
1. Give credits if results match
1. Take away credits for each push of the button

## The Webpage
It was time to break out my trusty `create-react-app react-slots`. Out of the box it provided everything I would need in just command. After a few minutes I was ready to start to my challenge. I cleared the default text and started adding components that I new I would need. I decided five would probably be enough. 
- A button component
- A credit component
- A slot container
- A play button
- A slot component

Now it was time to make it into a game. Already I realized I didn’t need the PlayButton component. I could just add some gameActive state and then call the following function when clicking the play button.

```javascript
onClick={() => this.setState({ 
  gameActive: !this.state.gameActive 
})}
```

## The Heart
At the very core, a slot machine isn’t matching numbers or cards, it’s taking money. I decided I should add that function in next. Time to give the player some credits and then take them away. The initial state of the game set a predetermined amount of credits. Removing credits was easy, just create a function that will take the credit state and just subtract some. Now we had a game that couldn’t be won. If you pressed the button, you lost credits.

## The Logic
Before I could give credits back, I had to figure out what would trigger adding new credits. First I needed some random numbers to match. Since I didn’t have access to the internet, the best option I could think of was `Math.random * 10`. I thought I would be clever and start a weighted number option, but I didn’t really use `Math.random` correctly so only some of my array items actually appear. If you take a look at the function `getWeightedData()` I’m just nesting some conditionals to try and get 1-5 more often. 

This function isn't impressive, but as a proof of concept it does the job. Everything else is just room for improvement.

Since I created the `getWeightedData()` function, I was able to add an array to my state and call the function 3 times, so I could map these in the render array. 

## The Play
Now I needed to give the player something back once I took their credits. I needed to return that slim chance of a positive result. 

The first iteration was designed to take 5 credits and return 10. That seemed simple enough, on a button click I fire the `getSlotData()` function. The main idea behind this function is to update state. Add some new slot cards and figure out if it was a winning result.

## The Hitch
Checking for a win seemed easy enough, I would just hardcode some conditionals and the return an updated credit amount. But calling this function always returned on the previous state so my game was giving out credits as a match on the first spin and then the wins never seemed to matched what was actually appearing on the page. 

Luckily I was saved by a layover. I was able to pull out my phone check some StackOverflow entries and found out I could add a function as a callback after setState. Now I could update my state with new slot data, credit amount, and set win to false. Then fire off my didWin() function and check those new slots and return the correct updated state. 

## The End Game
After boarding and getting back up to 10,000 feet, I was able to add any stretch goals to my one armed bandit. But then I remembered something, there was no check to see if you were out of money. I could go negative and that’s not good. So in my didWin() function I added a little check to make sure my new credit amount wasn’t equal or below zero and if it was, returned a game over state. 

Okay, now I could add stretch goals. 

### Raising the Stakes
Five credits per game was fun, but I want that big payout. I added a new parameter to the getSlotData function, a credit amount. Now I can put in 25 or 50 and get more back on a win. Since I only had a couple of hours left, I added a simple switch statement to check how much was bet and then updated a multiplier variable I could pass to any functions calculating credit wins. While not very elegant it worked and I could now burn through my credits in 2 turns instead of 20. 

### The High
I was now about 1 hour from landing and realized I had made a dumb matching game but didn’t have the one thing that made put that second dollar in a slot machine. The need to win more than the last dollar I put in. Luckily I already had all the part in place, I just need a high score displayed while playing. I added a new state to the game when calculating a win, one that would not be wiped after each game over. All this state needed was a ternary operator that would check if the current high score was greater than the current credit amount, and then either set a new credit amount or keep the high score amount. Now I could play this game over and over trying to beat the previous high score. 

## The Takeaway
All together this project took about 4 hours of work. It needs a lot more if I want to make it winnable and more fun, but it was a good exercise in pushing my collected knowledge without having the internet handy. What would I like to add? Without a doubt, there needs to be a much better logic rewrite, where I can research actual weighted results and multiline matching, as most slot machines are checking around 40 different lines of possible matches. Styling is a big that that is missing, I tossed in some borders and flexbox to make it easier to look at, but there is a lot of room for playing with animations and extending the rounds to keep games a little longer. And lastly I think a some sort of cash out feature, to save the highscore and share would be neat. 
