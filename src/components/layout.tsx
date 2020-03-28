import React from "react"

import layoutStyles from "./layout.module.css"
import TwitterIcon from "./twitterIcon"

export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main className={layoutStyles.root}>{children}</main>
      <a
        className={layoutStyles.link}
        href="https://twitter.com/nieknijland"
        title="Created by Niek Nijland, link to Twitter"
      >
        <TwitterIcon width="32" height="32" />
      </a>
    </>
  )
}

export default Layout
