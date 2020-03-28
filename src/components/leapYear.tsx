import React from "react"

import leapYearStyles from "./leapYear.module.css"
import CheckIcon from "./checkIcon"

function LeapYear(): JSX.Element {
  return (
    <>
      <h2 className={leapYearStyles.subtitle}>
        When is the next{" "}
        <a
          href="https://www.timeanddate.com/date/leapyear.html"
          rel="external noopener noreferrer"
        >
          leap year
        </a>
        ?
      </h2>
      <h1 className={leapYearStyles.title}>This year</h1>
      <ul className={leapYearStyles.list}>
        <li className={leapYearStyles.listItem}>
          <CheckIcon className={leapYearStyles.listItemIcon} />
          2020 is evenly divisible by 4
        </li>
        <li className={leapYearStyles.listItem}>
          <CheckIcon className={leapYearStyles.listItemIcon} />
          2020 cannot be divided by 100
        </li>
      </ul>
    </>
  )
}

export default LeapYear
