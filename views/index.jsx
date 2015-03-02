var MainLayout = React.createClass({render: function() {return (
<html>
<head>
    <title>WikiHub</title>
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
    <link rel="stylesheet" type="text/css" href="stylesheets/base.css"></link>
</head>

<body>
    <div id = "homeButton"></div>
    <div id = "container"></div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js"></script>

<script type="text/javascript" src="https://cdn.rawgit.com/showdownjs/showdown/master/compressed/Showdown.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/showdownjs/showdown/master/compressed/extensions/github.min.js"></script>

<script type="text/javascript" src="/javascripts/utils.js"></script>
<script type="text/javascript" src="/javascripts/server.js"></script>

<script type="text/jsx" src="/jsx/components/NavBar.jsx"></script>
<script type="text/jsx" src="/jsx/components/RepoListPage.jsx"></script>
<script type="text/jsx" src="/jsx/components/RepoPage.jsx"></script>
<script type="text/jsx" src="/jsx/index.jsx"></script>

</html>
);}});

module.exports = MainLayout;