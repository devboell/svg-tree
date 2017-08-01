import React from 'react'
import SVGTree from 'SVGTree'
import { transformTree } from 'transformTree'
import data from 'data/plantagenet'
import Wrapper from './Wrapper'

const dimensions = {
  boxWidth: 80,
  boxHeight: 60,
  marginX: 30,
  marginY: 30,
}

const App = () =>
  <Wrapper>
    <SVGTree
      treeData={transformTree(data, dimensions)}
      {...{ dimensions }}
    />
  </Wrapper>

export default App
