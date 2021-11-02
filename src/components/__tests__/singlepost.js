import React from 'react';
import renderer from 'react-test-renderer'

import SinglePost from '../SinglePost';

describe("SinglePost", () => {
  const tree = renderer
  .create(<SinglePost />)
  .toJSON()
  expect(tree).toMatchSnapshot()
});

