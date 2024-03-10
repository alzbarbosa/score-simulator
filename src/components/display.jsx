import React, { useState } from "react";

const Display = () => {
  const [results, setResults] = useState([
    ["A", 0, 0],
    ["B", 0, 0],
    ["D", 0, 0],
    ["A", 0, 0],
    ["B", 0, 0],
    ["D", 0, 0],
  ]);

  const getResult = (teamA, teamB) => {
    let draw = 30;
    let lose = 30;

    let teamADecision = "";

    const probability = Math.floor(Math.random() * 100);

    let diference = teamA >= teamB ? teamA - teamB : teamB - teamA;

    if (teamA > teamB && diference === 10) {
      draw = 25;
      lose = 25;
    } else if (teamA > teamB && diference === 20) {
      draw = 20;
      lose = 20;
    } else if (teamA > teamB && diference === 30) {
      draw = 15;
      lose = 15;
    } else if (teamA > teamB && diference === 40) {
      draw = 10;
      lose = 10;
    } else if (teamA > teamB && diference === 50) {
      draw = 5;
      lose = 5;
    } else if (teamA < teamB && diference === 10) {
      draw = 25;
      lose = 40;
    } else if (teamA < teamB && diference === 20) {
      draw = 20;
      lose = 50;
    } else if (teamA < teamB && diference === 30) {
      draw = 20;
      lose = 60;
    } else if (teamA < teamB && diference === 40) {
      draw = 15;
      lose = 70;
    } else if (teamA < teamB && diference === 50) {
      draw = 10;
      lose = 80;
    } else {
      draw = 30;
      lose = 30;
    }

    let winDecision = draw + lose;

    if (probability > winDecision) {
      teamADecision = "win";
    } else if (probability < lose) {
      teamADecision = "lose";
    } else {
      teamADecision = "draw";
    }

    let score1 =
      Math.floor(Math.random() * 3) +
      Math.floor(Math.random() * (diference / 10));
    let score2 =
      Math.floor(Math.random() * 3) +
      Math.floor(Math.random() * (diference / 10));

    if (score1 === score2) {
      score2 += 1;
    }

    let winner = "";
    if (teamADecision === "win") {
      winner = "HOME";
    } else if (teamADecision === "lose") {
      winner = "AWAY";
    } else {
      winner = "DRAW";
      score2 = score1;
    }

    return [winner, score1, score2];
  };

  const defineResult = (power1, power2) => {
    let resultsGenerate = [];
    resultsGenerate.push(getResult(power1, power2));
    resultsGenerate.push(getResult(power1, power2));
    resultsGenerate.push(getResult(power1, power2));
    resultsGenerate.push(getResult(power1, power2));
    resultsGenerate.push(getResult(power1, power2));
    resultsGenerate.push(getResult(power1, power2));
    setResults(resultsGenerate);
  };
  return (
    <div id="wrapper">
      <div>
        <button onClick={() => defineResult(50, 50)}>50/50</button>
      </div>
      <div>
        <button onClick={() => defineResult(60, 40)}>60/40</button>
      </div>
      <div>
        <button onClick={() => defineResult(70, 30)}>70/30</button>
      </div>
      <div>
        <button onClick={() => defineResult(80, 20)}>80/20</button>
      </div>
      <div>
        <button onClick={() => defineResult(40, 60)}>40/60</button>
      </div>
      <div>
        <button onClick={() => defineResult(30, 70)}>30/70</button>
      </div>
      <div>
        <button onClick={() => defineResult(20, 80)}>20/80</button>
      </div>

      <div className="containerResults">
        <div className="result">
          <p className="teamWinner">{results[0][0]}</p>
          <span>{results[0][1]}</span>
          <p>x</p>
          <span>{results[0][2]}</span>
        </div>
        <div className="result">
          <p className="teamWinner">{results[1][0]}</p>
          <span>{results[1][1]}</span>
          <p>x</p>
          <span>{results[1][2]}</span>
        </div>
        <div className="result">
          <p className="teamWinner">{results[2][0]}</p>
          <span>{results[2][1]}</span>
          <p>x</p>
          <span>{results[2][2]}</span>
        </div>
        <div className="result">
          <p className="teamWinner">{results[3][0]}</p>
          <span>{results[3][1]}</span>
          <p>x</p>
          <span>{results[3][2]}</span>
        </div>
        <div className="result">
          <p className="teamWinner">{results[4][0]}</p>
          <span>{results[4][1]}</span>
          <p>x</p>
          <span>{results[4][2]}</span>
        </div>
        <div className="result">
          <p className="teamWinner">{results[5][0]}</p>
          <span>{results[5][1]}</span>
          <p>x</p>
          <span>{results[5][2]}</span>
        </div>
      </div>
    </div>
  );
};

export default Display;
