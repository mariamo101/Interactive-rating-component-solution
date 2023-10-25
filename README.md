# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents

- [Gif](#Gif)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Gif
<img src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3g1b2JzdTJ5MDdkNXU3azlkdTI1d3hvNWh2YjE3aWZhdmJ2cDkzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yWE8FiJXDpVZorEoD2/giphy.gif"/>


### Screenshot

<img width="1022" alt="Screenshot 2023-10-25 at 16 42 31" src="https://github.com/mariamo101/qr_code_component/assets/117212859/a97cabea-0736-4815-998f-36d17da722bf">


### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)
- Live Site URL: [Live site URL here](https://mm-interactive-rating-component.netlify.app/)



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactor.bitcamp.ge/kvira-2-more-jsx-props-and-conditional-rendering.-re-rendering-and-state.-component-lifecycle/more-jsx-props-and-conditional-rendering.-re-rendering-and-state) - JS library


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

 see below:

```jsx
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("")

  const Button = ({number}) =>{
  return <button className='numbers' onClick={() => setItems(number)}> {number}</button> 
```
```jsx
const ThankYou = ({items}) => {
  return (
    <div className='container'>
<img src={illustration} className='illustration' alt=""/>
<div className='select'>
  <p className='youSelect'> You selected {items} out of 5</p>
```

### Useful resources

- [Example resource ](https://val-do.com/categories/6363efa7f6dc171e0c243426) - This is an amazing web site which helped me finally understand jsx. I'd recommend it to anyone still learning this concept.


