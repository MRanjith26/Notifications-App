const Notification = (props) => {
  const { icon, text, className } = props;
  return (
    <div className={`card ${className}`}>
      <img src={icon} className="icon" />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Notifications</h1>
      <div class="notification-container">
        <Notification
          icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          text="Information Message"
          className="information"
        />
        <Notification
          icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          text="Success Message"
          className="success"
        />
        <Notification
          icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          text="Warning Message"
          className="warning"
        />
        <Notification
          icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          text="Error Message"
          className="error"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
