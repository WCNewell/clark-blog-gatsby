import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import BlogIndex from "../index"

describe("BlogIndex component", () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Clark Newell`,
          description: `portfolio tech blog`,
          social: {
            twitter: `W. Clark Newell`,
          },
        },
      },
    })
  })
  it("renders the tests correctly", async () => {

    const { getByTestId } = render(
      <BlogIndex data={mockData} location={window.location} />
    )

    const { nodes } = mockData.allSanityPost
    const post1 = nodes.slug
    const post2 = nodes.slug

    expect(getByTestId(post1)).toHaveTextContent(nodes[0].title)
    expect(getByTestId(post2)).toHaveTextContent(
      nodes[1].tlDr
    )
    expect(nodes.length).toEqual(10)
  })
});