import React from "react";
import "./Cards.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  image() {
    console.log("IN FUNCT" + this.props.des);
    if (this.props.des === "broken clouds") {
      return (
        <span role="img" aria-label="broken clouds">
          ⛅️
        </span>
      );
    } else if (this.props.des === "clear sky") {
      return (
        <span role="img" aria-label="clear sky">
          ☀️
        </span>
      );
    } else if (this.props.des === "scattered clouds") {
      return (
        <span role="img" aria-label="scattered clouds">
          ☁️
        </span>
      );
    } else if (this.props.des === "light rain") {
      return (
        <span role="img" aria-label="light rain">
          🌦
        </span>
      );
    } else if (this.props.des === "few clouds") {
      return (
        <span role="img" aria-label="few clouds">
          🌤
        </span>
      );
    } else if (this.props.des === "overcast clouds") {
      return (
        <span role="img" aria-label="few clouds">
          ☁️
        </span>
      );
    } else if (this.props.des === "overcast clouds") {
      return (
        <span role="img" aria-label="overcast clouds">
          ☁️
        </span>
      );
    }
  }

  render() {
    return (
      <div className="Cards">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.des}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Max: {this.props.tempMax}°F - Min: {this.props.tempMin}°F
            </h6>

            <div className="weatherImage">{this.image()}</div>
            <div className="details">
              <ul>
                <li>Pressure: {this.props.press}</li>
                <li>Winds: {this.props.winds}</li>
                <li>Humidity: {this.props.humid}%</li>
              </ul>
            </div>
          </div>

          <div className="card-footer text-muted">
            Max and Min Temp Captured Every 24 hours. {this.props.date}
          </div>
        </div>
      </div>
    );
  }
}

/*
<List className={classes.list}>
{this.state.rooms.map((chatroom) => {
  const name = chatroom.name;
  const lastMessage = chatroom.lastMessage;
  const createdBy = chatroom.createdBy;
  const userId = chatroom.uid;
  const chatId = chatroom.chatID;
  const chatURL = "TimeLine/id=" + chatroom.chatID;
  const hasRecentChat = (lastMessage == "" ? "Quiet room!" : "Active Room!");
  return (
    <ListItem key={name}>
      <BrowserRouter>
          <Switch>
              <a href={chatURL} className="selectRoom">
              </a>
          </Switch>
          </BrowserRouter>
      <ListItemText primary={name} secondary={createdBy} />
      <p>{hasRecentChat}</p>
      <form onSubmit={(event)=>{this.deleteChatRoom(event, {userId}, {chatId});}}>
       <input className="ratng" type="submit" value="Delete Room ❌" />
     </form>
    </ListItem>
*/

export default Cards;
