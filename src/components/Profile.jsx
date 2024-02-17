import React from "react";

class Profile extends React.Component {
  constructor(props) {
    //this is a place used for intialization.
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "loc",
        avatar_url: "df",
      },
    };
    console.log("In the Constructor!!");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("shaibaz");
    }, 1000);
    console.log("Inside Mount");
    const gitUser = await fetch(
      "https://api.github.com/users/mohammadshaibazqaisar"
    );
    const info = await gitUser.json();
    console.log(info);
    this.setState({
      userInfo: info,
    });
  }

  componentDidUpdate() {
    console.log("in CompoenetDidUpdate!");
  }

  componentWillUnmount() {
    //this is how we use unMount.
    //we need clear things up
    clearInterval(this.timer);
    console.log("In unMount!");
  }

  render() {
    console.log("In the render!");
    console.log(this.state.userInfo.name);
    return (
      //Here we arent able to write jsxt wihtout {}, cause, here we need to return jsx element.
      <div>
        {console.log("in the return")}
        <h1>In Profile Component {this.props.name}</h1>
        <h1>Name: {this.state.userInfo.name}</h1>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h2>Count : {this.state.count} </h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default Profile;
