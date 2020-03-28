import React from "react"

import leapYearStyles from "./leapYear.module.css"
import CheckIcon from "./checkIcon"
import CrossIcon from "./crossIcon"

const year = new Date().getFullYear()

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

function getNextLeapYear(year: number): number {
  if (!isLeapYear(year)) {
    return getNextLeapYear(year + 1)
  }

  return year
}

const nextLeapYear = getNextLeapYear(year)

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
      <h1 className={leapYearStyles.title}>
        {nextLeapYear === year ? "This year" : nextLeapYear}
      </h1>
      <ul className={leapYearStyles.list}>
        <li className={leapYearStyles.listItem}>
          <CheckIcon className={leapYearStyles.listItemIcon} />
          {nextLeapYear} is evenly divisible by 4
        </li>
        <li className={leapYearStyles.listItem}>
          {year % 100 !== 0 ? (
            <CheckIcon className={leapYearStyles.listItemIcon} />
          ) : (
            <CrossIcon className={leapYearStyles.listItemIcon} />
          )}
          {nextLeapYear} cannot be divided by 100
        </li>
        {nextLeapYear % 400 === 0 && (
          <li className={leapYearStyles.listItem}>
            <CheckIcon className={leapYearStyles.listItemIcon} />
            {nextLeapYear} can be divided by 400
          </li>
        )}
      </ul>
    </>
  )
}

export default LeapYear
