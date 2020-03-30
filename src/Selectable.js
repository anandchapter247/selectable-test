import React from 'react'
import Cells from './Cells';
import { SelectableGroup } from 'react-selectable-fast';

const getRows = (number) => {
  const items = [];
  for (let index = 0; index < number; index++) {
    const cells = []
    for (let j = 0; j < 30; j++) {
      cells.push(
        <Cells number={index + j} key={index + j} />
      )
    }
    items.push(
      <ul className="selectable" key={index} >
        {cells}
      </ul>
    )
  }
  return items
}
const getHead = () => {
  const head = []
  for (let j = 0; j < 30; j++) {
    head.push(
      <th key={j}>Col ${j}</th>
    )
  }
  return head
}
const Selectable = ({ onSelect }) => {
  return <SelectableGroup
    allowClickWithoutSelected
    className='custom-row-selector'
    clickClassName='tick'
    resetOnStart={true}
    onSelectionFinish={(selected) => {
      console.time("EEEE")
      console.log("Selection Started")
      onSelect(selected)
    }}
    ignoreList={['.name-col', '.h-col', '.s-col', '.u-col', '.v-col']}
  >
    <table border="1">
      <thead>
        <tr>
          {getHead()}
        </tr>
      </thead>
      <tbody>
        {getRows(100)}
      </tbody>
    </table>
  </SelectableGroup>
};

export default Selectable;