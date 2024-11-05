import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      updateStats();
    } else {
      console.log('Not enough money');
    }
  };
  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((item) => item.name !== fighter.name));
    setMoney(money + fighter.price);
    updateStats();
  };

  const updateStats = () => {
    const newStrength = team.reduce((acc, curr) => acc + curr.strength, 0);
    const newAgility = team.reduce((acc, curr) => acc + curr.agility, 0);
    setTotalStrength(newStrength);
    setTotalAgility(newAgility);
  };

  return (
    <div className="App">
      <h1>Zombie Fighter</h1>

      <h2>Money: {money}</h2>
      <div className="stats">
        <h4>Total Team Strength: {totalStrength}</h4>
        <h4>Total Team Agility: {totalAgility}</h4>
      </div>
      <div className="team">
        <h3>Your Team</h3>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt={fighter.name} />
                <p>{fighter.name}</p>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fighter-list">
        <h3>Available Fighters</h3>
        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter.name}>
              <img src={fighter.img} alt={fighter.name} />
              <p>{fighter.name}</p>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App


