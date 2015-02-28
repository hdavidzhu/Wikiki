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
                    <EditButton data = {data} content="github_readme"/>
                    <div id="github_readme_content"> {data} </div>
                </div>)
                , document.getElementById('github_readme'));
        });

        return (<div id="github_readme"></div>);
    }
});

var EditContent = React.createClass({
    render: function ()  {
        return (
            <div id="editContentForm">
                <SaveButton content="contentBox" />
                <textarea id="contentBox"> {this.props.data} </textarea>
            <div>
        );
    }
});

var EditButton = React.createClass({
    OnClick: function () {
        removeElement({this.props.content + "_contentBox"});

        React.render(
            <div id={this.props.content + "_contentBox">
                <SaveButton name={this.props.content + "_edit"}/>
                <EditContent name={this.props.content} data={this.props.data} />
            </div>
            , document.getElementById(this.props.content));
    },
    render: function () {
        return (
            <button id={this.props.content + "_editButton"} onClick = {this.OnClick}> Edit </button>
        );
    }
});

var SaveButton = React.createClass({
    OnClick: function () {
        removeElement({this.props.content + "_editContentForm"});
    },
    render: function () {
        return (
            <button id="saveButton" onClick = {this.OnClick}> Save </button>
        );
    }
});


var removeElement = function (id) {
    var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
}
