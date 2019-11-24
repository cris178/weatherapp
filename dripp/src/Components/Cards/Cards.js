import React from "react";
import "./Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <h1></h1>
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
