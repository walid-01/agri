import "../Style/Welcome.css";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="welcome-text welcome-part">
        <h1>CREATING WEBSITES THAT MAKE YOU STOP & STARE</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          ullam, nesciunt esse dolorem magnam incidunt. Dolorum fugit ab, ex
          porro minus magnam exercitationem delectus quibusdam nisi quos?
          Excepturi reprehenderit labore facere iusto quasi ipsa, porro
          similique totam. Exercitationem, facere velit!
        </p>
        <button>GET STARTED</button>
      </div>
      <div className="welcome-img welcome-part">
        <img src="https://yourimageshare.com/ib/tacjvdnPUP.webp" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
