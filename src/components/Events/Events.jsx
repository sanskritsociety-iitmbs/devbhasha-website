import React from "react";
import styles from "../../app/page.module.scss";

const Events = () => {
  return (
    <div id="events" className={styles.calendarContainer}>
      <h2>Events 📅</h2>
      <iframe
        className={styles.calendar}
        src="https://calendar.google.com/calendar/u/0/embed?color=%23fbe983&src=sanskrit.society@study.iitm.ac.in"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Events;
