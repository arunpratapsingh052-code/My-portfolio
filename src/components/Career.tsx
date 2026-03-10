import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Developer</h4>
                <h5>ESP Softtech Pvt. Ltd.</h5>
              </div>
              <h3>2024 </h3>
            </div>
            <p>
              Working as a Core Blockchain Developer building decentralized
              applications across Solana, Ethereum, Polygon and Binance Smart
              Chain.
            </p>
          </div>

          {/* Project Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Project</h4>
                <h5>Loin Pay (Payment System)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed Solana-based SPL tokens and NFT minting systems.
              Implemented secure smart-contract payment flows and optimized
              blockchain transactions for lower gas fees.
            </p>
          </div>

          {/* CLI Tool */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Infrastructure Tool</h4>
                <h5>Anannta Chain CLI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a validator management CLI tool using Go and Cobra
              framework. Automated node setup, staking operations, validator
              creation, and governance workflows for Cosmos SDK based chains.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;