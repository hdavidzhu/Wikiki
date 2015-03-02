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
                </div>
            </nav>
        );
    }
});