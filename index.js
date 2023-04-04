const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = tutorials.map(tutorials,function (tutorial){return tutorials.push(tutorial)}); 
const titleCased = () =>
  
  tutorials.map((tutorial) => {
    const words = tutorial.split(' ');
    const titleCasedWord = words.map((word) =>{
    const firstLetter = word.charAt(0).toUpperCase()
    const restWords = word.slice(1);
    return `${firstLetter}${restWords}`
  })
    const result = titleCasedWord.join(' ')
    return result;
})



console.log(titleCased()); 

  
