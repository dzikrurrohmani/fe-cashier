import './LoginView.css';

export default function LoginView(props) {
  const { paswdInput, unameInput, unameValid, paswdValid, logChange, logSubmit, buttonOn } = props;
  return (
    <>
      <div
        className="html_allContainer"
        style={{ backgroundImage: 'url(/asset/background.jpg)' }}
      >
        <div className="html_textContainer">
          <h1 className="html_h_1_4">WMB</h1>
          <h6 className="html_h_1_4">
            <i>(Warung Makan Bahari)</i>
          </h6>
        </div>
        <div className="html_loginContainer">
          <div>
            <label>User Name</label>
            <br />
            <input
              className="html_input"
              type="text"
              name="unameInput"
              id="username"
              placeholder="admin@example.com"
              value={unameInput}
              onChange={logChange}
            />
            {unameValid ? (
              <h4 style={{ color: 'bisque', fontSize: '10px' }}>1</h4>
            ) : (
              <p style={{ color: 'red', fontSize: '10px' }}>
                email format isn't valid
              </p>
            )}
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              className="html_input"
              type="password"
              name="paswdInput"
              id="password"
              placeholder="12345678"
              value={paswdInput}
              onChange={logChange}
            />
            {paswdValid ? (
              <p style={{ color: 'bisque', fontSize: '10px' }}>1</p>
            ) : (
              <p style={{ color: 'red', fontSize: '10px' }}>
                password must have at least 6 character
              </p>
            )}
          </div>
          <button
            className="html_button"
            type="submit"
            onClick={logSubmit}
            disabled={unameValid && paswdValid && buttonOn ? false : true}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
