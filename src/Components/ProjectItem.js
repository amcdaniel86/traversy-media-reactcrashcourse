// will list all projects

import React, { Component } from 'react';

// blank React Application

class ProjectItem extends Component {

  
    deleteProject(id){
      // console.log('test'); to test
      this.props.onDelete(id);


    }
    // click on button in this component but then pass it up to the main component so the result removes an actual project.
    // FIRST: pass it up to Projects.js
    // THEN: pass it up to main App.js file.
  
  
  render() {

        // console.log(this.props); to test


    return (
      <li className="Project">
       
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
        {/* from Project.js, we output each project into a li on the ProjectItem.js component, with the original state's title and category all the way from grandparent component App.js in this case. */}
        {/* .id or .title will show what is configured from parent component in the object */}



       {/* nothing is inputted on screen, only three li bullet points, because this section hasn't been filled in yet. */}
       {/* {this.props.test} */}
{/* //props is the identifier that connects a variable from another component, in this case test= from app.js and then props it into another component - with {this.props.test} */}

      {/* test to check components are talking
       {this.props.test*/}


      </li>
    );
  }
}


// ProjectItem.propTypes = {
//   project: React.propTypes.object,
//   onDelete: React.PropTypes.func
// }



export default ProjectItem;

// when returning in a render, everything has to be within one html element. a div, or nav, but only can be 1 html element at top level within return.


// // react - no backend functionality.
// V in MVC, View

// Advantages - simple views for each state in application: viewing inbox in email is a state.
// compose email is another state.
// react takes states and allows views and components for states.
// everything in a view is encapsulated in a component.
// application wide state: is flux or redux

// virtual DOM - allows you to modify certain parts of your app that you need. react creates its own virtual dom, so its faster and more lightweight.

