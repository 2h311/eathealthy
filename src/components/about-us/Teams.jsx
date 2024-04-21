import React from "react";

import { teamMembersData } from "../../assets/data/data";
import Team from "../about-us/Team";

const Teams = () => {
  const allTeams = [...teamMembersData];

  return (
    <div className="team">
      <div className="team__inner">
        <div className="team__up">
          <h2 className="team__h2">Meet the Team</h2>
        </div>
        <div className="team__down">
          {allTeams.map((team, key) => (
            <Team key={key} {...team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
