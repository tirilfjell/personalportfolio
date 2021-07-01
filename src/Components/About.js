import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faAddressCard,
  faChevronLeft,
  faChevronRight,
  faHandPointUp
} from "@fortawesome/free-solid-svg-icons";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Tiril Fjell Profile Pic"
            />
            <h1 id="profilepictext">
              Click my picture
              <FontAwesomeIcon id="pointericon" icon={faHandPointUp} />
            </h1>
          </div>
          <div className="nine columns main-col">
            <h2>
              <FontAwesomeIcon icon={faChevronLeft} /> About Me
              <FontAwesomeIcon icon={faChevronRight} />
            </h2>

            <p>{bio}</p>
            <h2>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Work
            </h2>
            <p>
              <b>At the moment hired by:</b> <br />- On project
            </p>

            <div className="row">
              <div className="columns contact-details">
                <h2>
                  <FontAwesomeIcon icon={faAddressCard} /> Contact Details
                </h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
