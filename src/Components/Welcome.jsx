import "../Style/Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="welcome-text welcome-part">
        <h1 style={{ fontFamily: "var(--title-font-family)" }}>
          IgrA: AGRI with AI
        </h1>
        <p>
          the development of serious games integrated with artificial
          intelligence technology
        </p>
        {/* <button>GET STARTED</button> */}
      </div>
      <div className="welcome-img welcome-part">
        <img src="https://i.postimg.cc/Dw29Bryb/game3.png" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
