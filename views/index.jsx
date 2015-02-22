var MainLayout = React.createClass({render: function() {return (
<html>
<head>
    <title>WikiHub</title>
    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
    <link rel="stylesheet" type="text/css" href="stylesheets/base.css"></link>
</head>

<body>
    <div id = "navbar"></div>
    <div id = "container"></div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="http://fb.me/react-0.12.2.js"></script>
<script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>

<script type="text/javascript" src="/javascripts/server.js"></script>
<script type="text/jsx" src="/jsx/components/navbar.jsx"></script>
<script type="text/jsx" src="/jsx/components/allRepos.jsx"></script>
<script type="text/jsx" src="/jsx/index.jsx"></script>

</html>
);}});

module.exports = MainLayout;