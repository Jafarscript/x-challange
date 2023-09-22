import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="testy">
      <h3>Timeline</h3>
      <p>
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <div className="timeline">
        <div className="container left">
          <div className="date colored">November 18, 2023</div>
          <duv className="content">
            <h3 className="colored">Hackathon Announcement</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </duv>
        </div>
        <div className="container right">
          <div className="date colored">November 18, 2023</div>
          <duv className="content">
            <h3 className="colored">Teams Registration begins</h3>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </duv>
        </div>
        <div className="container left">
          <div className="date colored">November 18, 2023</div>
          <duv className="content">
            <h3 className="colored">Teams Registration ends</h3>
            <p>Interested Participants are no longer Allowed to register</p>
          </duv>
        </div>
        <div className="container right">
          <div className="date colored">November 18, 2023</div>
          <duv className="content">
            <h3 className="colored">
              Announcement of the accepted teams and ideas
            </h3>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </duv>
        </div>
        <div className="container left">
          <div className="date colored">November 18, 2023</div>
          <duv className="content">
            <h3 className="colored">
              Getlinked Hackathon 1.0 Offically Begins
            </h3>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </duv>
        </div>
        <div className="container right">
          <div className="date colored">November 18, 2023</div>
          <duv className="content">
            <h3 className="colored">Demo Day</h3>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announcedTeams get the opportunity
              to pitch their projects to judges. The winner of the hackathon
              will also be announced on this day
            </p>
          </duv>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
