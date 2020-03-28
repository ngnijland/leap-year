import React from "react"

import layoutStyles from "./layout.module.css"

export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

function Layout({ children }: LayoutProps): JSX.Element {
  return <main className={layoutStyles.root}>{children}</main>
}

export default Layout
