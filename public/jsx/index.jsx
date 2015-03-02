/**
* Skeleton of Index (Template)
* Loads the components that make up the skeleton of each page.
*/

var React = window.React;

React.render(
  <Navbar />,
  document.getElementById('homeButton')
);

React.render(
  <RepoListBox />,
  document.getElementById('container')
);