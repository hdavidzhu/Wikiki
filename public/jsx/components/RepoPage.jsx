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
            
            //FIXME Add processing for Showdown here.
            var processedData = showdownConverter.makeHtml(data);

            React.render((

                <div
                  dangerouslySetInnerHTML={{
                    __html: processedData
                  }}
                ></div>)

                // <div>
                //     {data}
                // </div>
                , document.getElementById('github_readme'));
        });

        return (
            <div>
                <div id="github_readme"></div>
            </div>
        );
    }
});