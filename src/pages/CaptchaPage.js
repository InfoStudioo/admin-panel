import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleLoginToDashboard } from "../api/api";

const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const CaptchaPage = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120 seconds)
  const [timeExpired, setTimeExpired] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeExpired(true);
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerify = () => {
    if (!timeExpired && inputValue === captcha) {
      setVerified(true);
      setError(null);
    } else {
      setError("Incorrect CAPTCHA, please try again.");
    }
  };

  const handleTryLoginAgain = () => {
    navigate("/loginpage");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial",
        marginTop: "100px",
        backgroundColor: "#4a148c",
        color: "#ffffff",
        borderRadius: "10px",
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Verify CAPTCHA</h2>
      <div
        style={{
          fontSize: "20px",
          background: "#7b1fa2",
          padding: "10px",
          display: "inline-block",
          margin: "10px 0",
          borderRadius: "5px",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        {captcha}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "5px",
            borderRadius: "5px",
            border: "none",
            textAlign: "center",
            fontSize: "16px",
          }}
          disabled={timeExpired}
        />
      </div>
      <p>Time left: {formatTime(timeLeft)}</p>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {!timeExpired ? (
        !verified ? (
          <button
            onClick={handleVerify}
            style={{
              padding: "10px",
              marginTop: "10px",
              background: "#7b1fa2",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px",
            }}
            disabled={timeExpired}
          >
            Verify
          </button>
        ) : (
          <button
            onClick={() => handleLoginToDashboard(navigate, setError, setLoading)}
            style={{
              padding: "10px",
              marginTop: "10px",
              background: "#ffffff",
              color: "#4a148c",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px",
            }}
            disabled = {loading}
          >

           {loading ? "Logging In.." : "Continue to Dashboard" }

            
          </button>
        )
      ) : (
        <button
          onClick={handleTryLoginAgain}
          style={{
            padding: "10px",
            marginTop: "10px",
            background: "#ff1744",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Try Login Again
        </button>
      )}
    </div>
  );
};

export default CaptchaPage;
