import React from "react";

function HeroDetails({ hero, closeHeroDetails }) {
  if (!hero) return null; // Ensure that hero is not null

  // Destructure properties for easier access
  const { name, images, biography, powerstats, connections } = hero;

  return (
    <div className="hero-details-overlay" onClick={closeHeroDetails}>
      <div className="hero-details-content" onClick={(e) => e.stopPropagation()}>
        <h2>{name}</h2>
        <img src={images.md} alt={name} />
        <p><strong>Full Name:</strong> {biography.fullName}</p>
      <p><strong>Powers:</strong></p>
        <ul>
          <li><strong>Intelligence:</strong> {powerstats.intelligence}</li>
          <li><strong>Strength:</strong> {powerstats.strength}</li>
          <li><strong>Speed:</strong> {powerstats.speed}</li>
          <li><strong>Durability:</strong> {powerstats.durability}</li>
          <li><strong>Power:</strong> {powerstats.power}</li>
          <li><strong>Combat:</strong> {powerstats.combat}</li>
        </ul>
        
   
        <button onClick={closeHeroDetails}>Close</button>
      </div>
    </div>
  );
}

export default HeroDetails;