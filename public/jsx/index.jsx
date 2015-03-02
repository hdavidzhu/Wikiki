var React = window.React;

React.render(
  <Navbar />,
  document.getElementById('homeButton')
);

React.render(
  <RepoListBox />,
  document.getElementById('container')
);