import React, { Component } from 'react';
// app component gateway to our main component.
import './App.css';
import Projects from './Components/Projects';

// blank React Application

class App extends Component {
  constructor() {
    super();
    // initial state keys go here for 99% of components. most all have initial state sections at top of class section.
        this.state = {
            projects: [
                {
                  title: 'business website',
                  category: 'web design'
                },
                {
                  title: 'social app',
                  category: 'mobile development'
                },
                {
                  title: 'ecommerce shopping cart',
                  category: 'web development'
                }
            
            ]

        }


  }

  // NEXT: take the issued state for component and then pass it into <Projects /> as a property
  
  
  render() {
    return (
      <div className="App">
       My App
          {this.props.test}

          <Projects projects={this.state.projects} />
          {/* projects={} is required when we pass the initial state on to other components. */}
            {/* required when you import it at top of the screen. */}

      </div>
    );
  }
}

// when returning in a render, everything has to be within one html element. a div, or nav, but only can be 1 html element at top level within return.




export default App;



// // react - no backend functionality.
// V in MVC, View

// Advantages - simple views for each state in application: viewing inbox in email is a state.
// compose email is another state.
// react takes states and allows views and components for states of a website page.
// example: email client - composing or the inbox each have their own default state.
// everything in a view is encapsulated in a component.
// application wide state: is flux or redux

// virtual DOM - allows you to modify certain parts of your app that you need. react creates its own virtual dom, so its faster and more lightweight.

// data is always held in state, not in a api or database in this case.

// can render on the client or server.