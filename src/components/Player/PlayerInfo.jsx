import React from "react";
import "./PlayerInfo.css";

function getProgressColor(progress) {
  let color;
  if (progress <= 0.33) {
    const ratio = progress / 0.33;
    color = interpolateColor([36, 209, 99], [255, 210, 0], ratio);
  } else if (progress <= 0.66) {
    const ratio = (progress - 0.33) / 0.33;
    color = interpolateColor([255, 210, 0], [255, 165, 0], ratio);
  } else {
    const ratio = (progress - 0.66) / 0.34;
    color = interpolateColor([255, 165, 0], [255, 20, 0], ratio);
  }

  return `rgb(${color.join(",")})`;
}

function interpolateColor(colorStart, colorEnd, ratio) {
  const r = Math.round(colorStart[0] + (colorEnd[0] - colorStart[0]) * ratio);
  const g = Math.round(colorStart[1] + (colorEnd[1] - colorStart[1]) * ratio);
  const b = Math.round(colorStart[2] + (colorEnd[2] - colorStart[2]) * ratio);
  return [r, g, b];
}

const PlayerInfo = ({ name, cardCount, level, totalTime, elapsedTime }) => {
  const progress = elapsedTime / totalTime;
  const remainingTime = totalTime - elapsedTime;

  return (
    <div className="player-info drop-shadow-md">
      <div className="player-badge">
        <div className="player-level">
          <div className="player-level">
            <svg width="30" viewBox="0 0 21 21">
              <path
                d="M9.11701 1.12246C9.42577 0.221289 10.7003 0.22129 11.009 1.12246L11.9575 3.89084C12.1526 4.46019 12.8028 4.7295 13.3433 4.46484L15.9715 3.17799C16.8271 2.75909 17.7283 3.66031 17.3094 4.51585L16.0225 7.14408C15.7579 7.68462 16.0272 8.33477 16.5965 8.52984L19.3649 9.47834C20.2661 9.7871 20.2661 11.0616 19.3649 11.3704L16.5965 12.3189C16.0272 12.5139 15.7579 13.1641 16.0225 13.7046L17.3094 16.3329C17.7283 17.1884 16.8271 18.0896 15.9715 17.6707L13.3433 16.3839C12.8028 16.1192 12.1526 16.3885 11.9575 16.9579L11.009 19.7262C10.7003 20.6274 9.42577 20.6274 9.11701 19.7262L8.16851 16.9579C7.97344 16.3885 7.32329 16.1192 6.78275 16.3839L4.15453 17.6707C3.29898 18.0896 2.39776 17.1884 2.81666 16.3329L4.10351 13.7046C4.36817 13.1641 4.09887 12.5139 3.52951 12.3189L0.761131 11.3704C-0.140039 11.0616 -0.140039 9.7871 0.761132 9.47834L3.52951 8.52984C4.09887 8.33477 4.36817 7.68462 4.10351 7.14408L2.81666 4.51585C2.39776 3.66031 3.29898 2.75909 4.15453 3.17799L6.78275 4.46484C7.32329 4.7295 7.97344 4.46019 8.16851 3.89084L9.11701 1.12246Z"
                fill="#D9D9D9"
              />
            </svg>
            <span className="player-level-text">{level}</span>
          </div>
        </div>
        <div className="player-avatar">
          <div className="player-avatar-image"></div>
          <div className="timer-fade"></div>
          <div className="player-avatar-timer">{remainingTime}</div>
        </div>
        <svg className="player-progress-bar" viewBox="0 0 110 110">
          <circle
            cx="55"
            cy="55"
            r="50"
            strokeWidth="10"
            stroke="#a8a8b3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset="calc(245 - (251.2 * 1))"
            transform="rotate(119 55 55)"
          />
          <circle
            cx="55"
            cy="55"
            r="50"
            strokeWidth="10"
            stroke={getProgressColor(progress)}
            fill="none"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset={`calc(245 - (251.2 * ${progress}))`}
            transform="rotate(119 55 55)"
          />
        </svg>
      </div>
      <div className="player-details">
        <div className="player-name">{name}</div>
        <div className="player-cards">
          <span className="card-icon"> 🃏 </span>
          <span className="card-count">{cardCount}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
