import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
// .js not necessary at the end.

// Blank React Application

// App.js is the component gateway to our main component.

// App.js component - IS PLACEHOLDER FOR ALL OTHER COMPONENTS, import components into the render.

// All projects will be held in state, main idea. usually from API or database.

// each component has its own state.


class App extends Component {
  constructor() {
    super();



    // initial state keys go here for 99% of components. most all have initial state sections at top of class section.
    // always define the state and the keys here but not the actual data. only for this example, data goes here.
        this.state = {
            projects: [],
            todos: []
              // state called projects, keep projects: as an empty array in the constructor.

        }
  }

    getToDos(){
      $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        cache: false,
        success: function(data){
            this.setState({todos: data}, function(){
              console.log(this.state);
            })
        }.bind(this),
        error: function(xhr, status, err){
        console.log(err);
        }
      });

    }
// above describes how to get data from an api and push it into our react app.


    getProjects(){
      this.setState({projects: [
        {
          id:uuid.v4(),
          // each time this is used, it creates a new id.
          title: 'business website',
          category: 'web design'
        },
        {
          id:uuid.v4(),
          title: 'social app',
          category: 'mobile development'
        },
        {
          id:uuid.v4(),
          title: 'ecommerce shopping cart',
          category: 'web development'
        }
      ]})
    }


// LifeCycle method: this below, fires off everytime the component is re-rendered. react docs show when these methods fire off. DidMount is different than WillMount for example.
    componentWillMount(){
        this.getProjects();
        this.getToDos();
    }
    // if using an ajax call, to communicate with an API, it is done here in a LifeCycle Method as well.
    // much better to have data, if data is within App.js; better to have the data in componentWillMount(){}

  // NEXT: (after declaring default state) take the initial state, begun above and then pass it into <Projects /> as a property
  
  // with an array of objects like this, you usually want to create a separate component for each individual item and map through those projects and output that component.

  // state is immutable, don't want to change state, you want to update it, push the new project to the state, and then push it again.

      componentDidMount(){
          this.getToDos();

      }



      handleAddProject(project){
        // console.log(project); used to test
          let projects = this.state.projects;
          projects.push(project);
          this.setState({projects:projects});

      }


      handleDeleteProject(id){
          let projects = this.state.projects;
          // grab it from its current state. then remove the project we want and then reset the state.
          let index = projects.findIndex(x => x.id === id);
          // look through all the projects, find all the id's, match them to current id being passed in
          projects.splice(index, 1);
          this.setState({projects:projects});
      }

  render() {
    return (
      <div className="App">
      
       <AddProject addProject={this.handleAddProject.bind(this)} />
       {/* now outputting the AddProject.js component. */}

          {this.props.test}

          {/* test to be sure the components are talking: <Projects test="Hello World" /> */}

          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
          {/* projects={} is required when we pass the initial state on to the child components. */}
          {/* in this case, App.js passes {this.state.projects} into the Projects component. Passing it into projects as a property. */}
            {/* required when you import it at top of the screen. */}
            <hr />
            <Todos todos={this.state.todos} />
            {/* must pass along the todos we have in state. */}

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