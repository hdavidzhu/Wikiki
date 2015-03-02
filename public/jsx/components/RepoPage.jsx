var RepoPage = React.createClass({
    render: function () {
        return (
            <div id="repoPage">
                <h1> @{this.props.owner}/{this.props.name}</h1>
                <ReadMe name={this.props.name} />
            </div>
            );
    }
});

var ReadMe = React.createClass({
    render: function () {
        var name = this.props.name;
        github.README(this.props.name, function (data) {
            var processedData = Utils.showdownConverter.makeHtml(data["content"]);
            React.render(
                (<div id="readme_contentBox">
                    <EditButton name={{name:name, sha:data["sha"]}} data={data["content"]} content="readme"/>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: processedData
                      }}
                    ></div>
                </div>)
                , document.getElementById('readme'));
        });

        return (<div id="readme"></div>);
    }
});

var EditButton = React.createClass({
    whenClicked: function () {
        Utils.removeElement(this.props.content + "_contentBox");

        React.render(
            <div id={this.props.content + "_editContentBox"}>
                <EditContent name={this.props.name} content={this.props.content} data={this.props.data} />
            </div>
            , document.getElementById(this.props.content));
    },
    render: function () {
        return (
            <button onClick = {this.whenClicked}> Edit </button>
        );
    }
});

var EditContent = React.createClass({
    render: function ()  {
        return (
            <div>
                <SaveButton name={this.props.name} content={this.props.content}/>
                <textarea id={this.props.content + "_editedText"} defaultValue={this.props.data}/>
            </div>
        );
    }
});

var SaveButton = React.createClass({
    whenClicked: function () {
        var name = this.props.name;
        var content = this.props.content;
        var data = document.getElementById(content + "_editedText").value;
        Utils.removeElement(content + "_editContentBox");

        // Package new JSON
        var editedContents = {
            repo: name["name"],
            message: "olinwikihub user #15 edit README", // FIXME Change the hardcode.
            content: Base64.encode(data),
            sha: name["sha"],
            path: "README.md"
        }

        // Send Server changes for authenticated Push
        server.POST("/pushContent", editedContents, function(result){
            React.render(<ReadMe name={name["name"]} />, document.getElementById(content));
        });
    },
    render: function () {
        return (
            <button onClick = {this.whenClicked}> Save </button>
        );
    }
});