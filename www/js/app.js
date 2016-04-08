var App = React.createClass({
    getInitialState: function() {
      return {
      }
    },
    componentDidMount: function() {
      return {
      }
    },
    render: function() {
      return(
        <div>
          <header className="bar bar-nav">
            <button className="btn pull-left">
              Left
            </button>
            <button className="btn pull-right">
              Right
            </button>
            <h1 className="title">Hello Cordova</h1>
          </header>

          <footer>
            <nav className="bar bar-tab">
              <a className="tab-item active" href="#">
                <span className="icon icon-home"></span>
                <span className="tab-label">Home</span>
              </a>
              <a className="tab-item" href="#">
                <span className="icon icon-person"></span>
                <span className="tab-label">Profile</span>
              </a>
              <a className="tab-item" href="#">
                <span className="icon icon-star-filled"></span>
                <span className="tab-label">Favorites</span>
              </a>
              <a className="tab-item" href="#">
                <span className="icon icon-search"></span>
                <span className="tab-label">Search</span>
              </a>
              <a className="tab-item" href="#">
                <span className="icon icon-gear"></span>
                <span className="tab-label">Settings</span>
              </a>
            </nav>
          </footer>
        </div>
      )
    }
});

ReactDOM.render(
    <App />,
    document.body
);
