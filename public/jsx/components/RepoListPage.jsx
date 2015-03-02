var RepoListBox = React.createClass({
  render: function() {
    server.GET('/allRepos', null, function (data) {
      React.render(
          <div id="repoList">
            <AddRepoForm />
            <ReposList repos={data.repos}/>
          </div>,
            document.getElementById('container')
      );
    });
    return false;
  }
});

// Form to add Repo
var AddRepoForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var input = $('input#githuburl').val();

    server.POST('/addRepo', {url: input}, function (data) {
      // Repopulate Repos
      React.render(
        <RepoListBox />,
        document.getElementById('container')
      );
    }, function (err, status) {
      alert("Make sure URL is an existing Github HTTPS URL.\n\nYou can get this by copy-pasting the link when you visit your Github repo page.");
    });
  },

  render: function () {
    return  (<form id="addRepoForm" onSubmit={this.handleSubmit}>
              <span><input id="githuburl" type="text" placeholder="HTTPS URL"></input></span>
              <input id="githubSubmitButton" type="submit" value="Add"></input>
            </form>);
  }
})

// List of Repos
var ReposList = React.createClass({
  render: function () {
    return (
      <ul className="repo"> {
        this.props.repos.map(
          function (repo) {
              return <Repo owner={repo.owner} name={repo.name} />
          })
      }</ul>
    );
  }
});


var Repo = React.createClass({
  OnClick: function () {
    React.render(
      <RepoPage owner={this.props.owner} name={this.props.name} />,
      document.getElementById('container'));
      return true;
  },
  render: function () {
    return (<li onClick={this.OnClick}>@{this.props.owner}/{this.props.name}</li>)
  }
})