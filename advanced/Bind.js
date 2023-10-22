// Example 1: Understanding Function Binding

// Scenario: We have a Man object with a `name` property and a `speak` function.
const Man = {
    name: 'Ankit',
    speak: function() {
      console.log(`${this.name} says Hello`);
    }
  };
  
  // When Ankit speaks, he identifies himself.
  Man.speak(); // Output: Ankit says Hello!
  
  // Now, let's introduce a new variable `speakFunc`.
  const speakFunc = Man.speak;
  
  // Problem: If we try to call `speakFunc()` now, we'll get an error because `this` is not defined.
  // It doesn't know which Man is speaking.
  
  // Solution: We need to bind `speakFunc` to the `Man` object.
  const boundspeakFunc = speakFunc.bind(Man);
  
  // Now, `boundspeakFunc` is essentially the `speak` function, but it is permanently tied to the `Man` object.
  boundspeakFunc(); // Output: Ankit says Hello!
  
  // Example 2: Event Handling in React 


  // React => 
  
  // Scenario: We have a React component with a button. When the button is clicked, it should alert a message.
  
  class MyComponent extends React.Component {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      alert('Button clicked!');
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click Me
        </button>
      );
    }
  }
  
  // Explanation: In React, we bind the event handler function `handleClick` to the component instance using `bind(this)` in the constructor.
  // This ensures that when the button is clicked, it knows which component's `handleClick` function to call.
  