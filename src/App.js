import React, { Component } from 'react';

import './App.css';
import Projects from './Components/Projects';
// .js not necessary at the end.

// Blank React Application

// App.js is the component gateway to our main component.

// App.js component - IS PLACEHOLDER FOR ALL OTHER COMPONENTS, import components into the render.

// All projects will be held in state, main idea. usually from API or database.


class App extends Component {
  constructor() {
    super();



    // initial state keys go here for 99% of components. most all have initial state sections at top of class section.
    // always define the state and the keys here but not the actual data. only for this example, data goes here.
        this.state = {
            projects: []
              // state called projects, keep projects: as an empty array in the constructor.

        }
  }

// LifeCycle method: this below, fires off everytime the component is re-rendered.
    componentWillMount(){
      this.setState({projects: [
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
      ]})
    }

  // NEXT: (after declaring default state) take the initial state, begun above and then pass it into <Projects /> as a property
  
  // with an array of objects like this, you usually want to create a separate component for each individual item and map through those projects and output that component.

  
  render() {
    return (
      <div className="App">
       My App
          {this.props.test}

          {/* test to be sure the components are talking: <Projects test="Hello World" /> */}

          <Projects projects={this.state.projects} />
          {/* projects={} is required when we pass the initial state on to the child components. */}
          {/* in this case, App.js passes {this.state.projects} into the Projects component. Passing it into projects as a property. */}
            {/* required when you import it at top of the screen. */}

      </div>
    );
  }
}

 // only one grandparent div (html) element allowed inside of a this.render(){
      //   return(
      //     section. div goes here
      //   )
      // }





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