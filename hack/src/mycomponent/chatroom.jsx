import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import Chip from '@mui/material/Chip';
import './chatroom.css'
import { over } from 'stompjs'
import SockJS from 'sockjs-client'
import axios from 'axios';
var stompClient = null;
export default function Chat(props) {
  const [messages, setMessages] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const onPrivateMessage = (payload) => {
    console.log(payload, 19);
    var payloadData = JSON.parse(payload.body);
    console.log(767867986)
    console.log(messages, 2);
    //handleClickOpen('paper');
    addMessage(payloadData.senderName, payloadData.message, payloadData.date, payloadData.status);
    console.log(messages, 3);
  }
  const onConnected = () => {
    let id = "";
    console.log("Connected", props.user1, props.user2)
    if (props.user1.localeCompare(props.user2) == 1)
      id = props.user1 + props.user2;
    else
      id = props.user2 + props.user1;

    stompClient.subscribe('/user/' + id + '/private', onPrivateMessage);


  }
  const sendMessage = (message) => {
    if (stompClient) {
      var chatMessage = {
        senderName: props.user1,
        receiverName: props.user2,
        message: message,
        date: new Date().getTime(),
        status: "MESSAGE"
      };

      console.log(chatMessage, messages);
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));

    }
  }
  const onError = (err) => {
    console.log(err);

  }
  const connect = () => {
    let Sock = new SockJS('http://localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }





  const handleClickOpen = (scrollType) => () => {
    let id = "";
    if (props.user1.localeCompare(props.user2) == 1)
      id = props.user1 + props.user2;
    else
      id = props.user2 + props.user1;
    console.log(id, 1, props.user1, 1, props.user2);
    axios.get(`http://localhost:8080/Legal/connect/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        //    console.log(response.data);
        console.log(25);
        setMessages(response.data.messages)
         console.log(messages,100000000000)
        connect()
      })
      .catch(error => {
        console.error('Error:', error);
      });
    setOpen(true);

    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addMessage = (name, v, date, status) => {
    let r = {
      senderName: name,
      receiverName: name !== props.user1 ? props.user1 : props.user2,
      message: v,
      date: date,
      status: status
    }
    console.log(messages, 123, r)
    setMessages(oldArray => oldArray ? [...oldArray, r] : [r])
    console.log(messages, 321)
  }
  const handleMessage = (e) => {
    //console.log(messages,12)
    e.preventDefault();
    let v = document.getElementById('nameMessage').value;
    // console.log(v,messages);
    // document.getElementById('nameMessage').innerHTML="";
    sendMessage(v)
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen('paper')}>Chat</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={'md'}
        maxWidth={'md'}

      >
        <DialogTitle >Chat</DialogTitle>
        <DialogContent dividers={1}>
          <DialogContentText

            ref={descriptionElementRef}
            tabIndex={-1}
          ><div className='container' >

              {

                messages ? messages.map((message) => (<>

                  <div key={message} className={`item ${message.senderName !== props.user1 ? 'left' : 'right'}`}>
                    <Chip label={message.message} color={`${message.senderName !== props.user1 ? 'primary' : 'success'}`} />

                  </div>
                </>)) : <></>
              }
              <TextField
                autoFocus
                required
                margin="dense"
                id="nameMessage"
                name="Message"
                label="Message"
                type="email"
                fullWidth
                variant="standard"
              />
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions >
          <Button onClick={handleMessage} color='success'>Message</Button>

          {/* <Button onClick={handleClose}>Cancel</Button> */}

        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
