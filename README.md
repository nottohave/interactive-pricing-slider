# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Project-Blog](#project-blog)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![desktop-preview](./desktop-preview.jpg)


### Links

[Add solution URL here](https://your-solution-url.com)
[Live Site](https://nottohave.github.io/interactive-pricing-slider/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned


To see how you can add code snippets, see below:

```html
    <label class="toggle-monthlyBilling">
        <input type="checkbox" class="inp_checkbox" onclick="applyDiscount()" name="toggle-for-monthly-billing">
        <span class="round-slider"></span>
    </label>
```
```css
    /* typography */

    /* extra bold header */
    .container__header > h1,
    .main__pageViews > p,
    .main__pageViews > p > span,
    .main__click-btn,
    .billing__discount {
        font-family: "Ex manrope";
    }
```
```js
    // first load, default value is 100k - $16
    output.textContent = slider.value;
    dollarOutput.textContent = slider.value * 4;
    viewsOutput.textContent = "100K";
    checkbox.checked = false;
```


### Continued development

Maybe after user clicks start my trial, a form pops up and asks for user email information. Once the user enter their email, it will display a message the trial has started.


### Useful resources

I used W3 source then customize it to match with the design in this project.
- [How to - toggle switch W3 source](https://www.w3schools.com/howto/howto_css_switch.asp) 

- [How to - range slider W3 source](https://www.w3schools.com/howto/howto_js_rangeslider.asp)

MDN is another great source. In my opinion, it is more technical and reliable when you first google things. I tend to fall back on W3 if MDN does not have the answer.

- [MDN Grid order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)

## Author

- Github site - [Fay D](https://github.com/nottohave)
- Frontend Mentor - [@nottohave](https://www.frontendmentor.io/profile/nottohave)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

### Project Blog

1/21/22
    Initialize the interactive pricing project

1/22/22
    Begin building semantic file

1/23/22
    Semantic & typography

1/24/22
    Add slider & upgrade styles

1/25/22
    Update toggle labels

1/26/22
    Update slider range with different price

1/27/22
    Update slider value and add apply discount function on script js
    Update semantic html
    Remove string $ and .00 and replace it with css styling.
    25% discount apply to monthly prices when user toggle on yearly billing. 
    
1/28/22
    Update on html and style for desktop design.
