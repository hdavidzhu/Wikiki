var RepoPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1> @{this.props.owner}/{this.props.name}</h1>
                <ReadMe name={this.props.name} />
            </div>
            );
    }
});

var ReadMe = React.createClass({
    render: function () {
        github.README(this.props.name, function (data) {
            var processedData = Utils.showdownConverter.makeHtml(data);
            React.render(
                (<div id="readme_contentBox">
                    <EditButton data = {data} content="readme"/>
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
        removeElement(this.props.content + "_contentBox");

        React.render(
            <div id={this.props.content + "_editContentBox"}>
                <EditContent content={this.props.content} data={this.props.data} />
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
                <SaveButton content={this.props.content}/>
                <textarea defaultValue={this.props.data}/>
            </div>
        );
    }
});

var SaveButton = React.createClass({
    whenClicked: function () {
        removeElement(this.props.content + "_editContentBox");
    },
    render: function () {
        return (
            <button onClick = {this.whenClicked}> Save </button>
        );
    }
});