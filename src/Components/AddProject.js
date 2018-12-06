
import React, { Component } from 'react';



class AddProject extends Component {
    constructor(){
        super();
          this.state = {
            newProject:{}
          }
       }

      static defaultProps = {
        categories: ['web design', 'web development', 'mobile development']
      }
// goal is to map through these and output them in options.


handleSubmit(e){
  if(this.refs.title.value === ''){
      alert('title is required');
  } else {
      this.setState({newProject:{
          title: this.refs.title.value,
          category: this.refs.category.value
        // this is the updated state that takes over initial state when handleSubmit function is ran, in this case everytime the form button Submit is clicked.
      }}, function(){
          // console.log(this.state);
          this.props.addProject(this.state.newProject);

          // state is logged here
      });
  }
  // this must be referenced below in the event handler function with .bind on handleSubmit
  e.preventDefault();
  // prevents from submitting, when it is clicked.
}


render() {
  let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
  });
    return (
      <div>
          <h3>Add Project</h3>
       
       {/* eventHandlers: onSubmit, onClick, etc. */}
          <form onSubmit={this.handleSubmit.bind(this)}>
          {/* handleSubmit function found above render, functions in form, eventHandler={this.function} */}
              <div>
                <label>Title</label> <br />
                <input type="text" ref="title" />
              </div>
              <div>
                <label>Category</label> <br />
                <select ref="category">
                  {categoryOptions}
                  {/* goal is to have categories become properties of the component. */}
                </select>
              </div>
            <input type="submit" value="Submit" />
          </form>

       {/* {this.props.test} */}
{/* //props is the identifier that connects a variable from another component, in this case test= from app.js and then props it into another component - with {this.props.test} */}

      {/* test to check components are talking
       {this.props.test*/}


      </div>
    );
  }
}

// when returning in a render, everything has to be within one html element. a div, or nav, but only can be 1 html element at top level within return.




export default AddProject;

// back end is COMPLETELY SEPARATE


// // react - no backend functionality.
// V in MVC, View

// Advantages - simple views for each state in application: viewing inbox in email is a state.
// compose email is another state.
// react takes states and allows views and components for states.
// everything in a view is encapsulated in a component.
// application wide state: is flux or redux

// virtual DOM - allows you to modify certain parts of your app that you need. react creates its own virtual dom, so its faster and more lightweight.

// to pass a prop between components, it goes from parent to child -
// from Projects.js to ProjectItem.js
// return (
  // <ProjectItem key={project.title} project={project} /> )
  // and then pass into the child component, in the html element text space (ProjectItem.js) the below code:
  //  {this.props.project.title} - {this.props.project.category}