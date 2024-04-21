import React from "react";

const Team = ({ name, title, imageLink }) => {
  return (
    <div className="team-member">
      <img className="team__image" src={imageLink} alt={name} />
      <p className="team__name">{name}</p>
      <small className="team__title">{title}</small>
    </div>
  );
};

export default Team;
