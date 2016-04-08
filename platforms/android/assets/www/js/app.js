var App = React.createclassName({
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
        <header classNameName="bar bar-nav">
          <button classNameName="btn pull-left">
            Left
          </button>
          <button classNameName="btn pull-right">
            Right
          </button>
          <h1 classNameName="title">Hello Cordova</h1>
        </header>

        <footer>
          <nav classNameName="bar bar-tab">
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
      )
    }
});

React.render(
    <App />,
    document.body
);
