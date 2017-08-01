import React from 'react'

import App from '../index'

test('App component', () => {
  const wrapper = render(<App />)
  expect(wrapper).toMatchSnapshot()
})
