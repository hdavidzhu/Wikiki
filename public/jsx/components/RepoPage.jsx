var RepoPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1> @{this.props.owner}/{this.props.name}</h1>
                <RepoContent name={this.props.name} />
            </div>
            );
    }
});

var RepoContent = React.createClass({
    render: function () {
        github.README(this.props.name, function (data) {
            React.render(
                (<div>
                    {data}
                </div>)
                , document.getElementById('github_readme'));
        });

        return (<div>
            <div id="github_readme"> </div>
            </div>);
    }
});