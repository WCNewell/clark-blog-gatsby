import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import SEO from "../seo"

describe("SEO component", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Clark Newell Portfolio Blog`,
          description: `portfolio and tech blog`,
          social: {
            twitter: `W. Clark Newell`,
          },
        },
      },
    })
  })

  it("renders the tests correctly", () => {
    const mockTitle = "Clark Newell Blog"
    const mockDescription = "portfolio and tech blog"
    const mockTwitterHandler = "W. Clark Newell"

    render(<SEO title="Clark Newell" />)
    const { title, metaTags } = Helmet.peek()

    expect(title).toBe(mockTitle)
    expect(metaTags[0].content).toBe(mockDescription)
    expect(metaTags[5].content).toBe(mockTwitterHandler)
    expect(metaTags.length).toBe(8)
  })
})