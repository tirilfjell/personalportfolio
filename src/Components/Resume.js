import React, { Component } from "react";

class Resume extends Component {
  render() {
    function refreshPage() {
      window.location.reload(false);
    }

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;

      var skills = this.props.data.skills.map(function(skills) {
        var className = " bar-expand " + skills.name.toLowerCase();

        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
            <button id="skillbutton" onClick={refreshPage}>
              Click To Make Skills Grow
            </button>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
