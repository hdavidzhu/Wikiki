/**
* Navigation Bar JSX
* Loads the nav bar across the top
*/

var Navbar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">WikiHub</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#about">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});