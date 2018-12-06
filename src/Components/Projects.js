// will list all projects

import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
// blank React Application

class Projects extends Component {
  
  render() {
    let projectItems;
      if(this.props.projects){
        // test to see if there are any projects with if statement. props = product object
          projectItems = this.props.projects.map(project => {
            // inside Projects.js, mapping through the projects array,
              // console.log(project);
              return (
                  <ProjectItem key={project.title} project={project} />
                  // outputting a ProjectItem component
                  // good to have key there, usually id is placed there.
                  // pass in project={project} as a property into the ProjectItem.js component because ProjectItem is a child component of Projects.js.
// ProjectItem component, and then pass in each project, ={as a property, project}
// assigns each ProjectItem to the projectItems variable above set to this.props.projects.map
              );
    // above used to test to be sure we are receiving each project.
          });
          // since its an array, we will map through it.
    }
    // above code logs each individual project into console in chrome.


    return (
      <div className="Projects">
       {projectItems}

       
       
       {/* {this.props.test} */}
{/* //props is the identifier that connects a variable from another component, in this case test= from app.js and then props it into another component - with {this.props.test} */}

      {/* test to check components are talking
       {this.props.test*/}


      </div>
    );
  }
}

// when returning in a render, everything has to be within one html element. a div, or nav, but only can be 1 html element at top level within return.




export default Projects;



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