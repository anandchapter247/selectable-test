import React from 'react'
import Cells from './Cells';
import { SelectableGroup } from 'react-selectable-fast';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';

const getRows = (number) => {
  const items = [];
  for (let index = 0; index < number; index++) {
    const cells = []
    for (let j = 0; j < 30; j++) {
      cells.push(
        <li className="ui-state-default" key={j} data-id={index + j}>
          <Cells number={index + j} />
        </li>
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
const selectedItems = [];
const Selectable = ({ onSelect }) => {
  setTimeout(() => {
    $(".selectable").selectable({
      selected: (event, ui) => {
        console.time("EEEE")
        console.log(ui.selected, $(ui.selected).data("id"))
        console.log("Selection Started")
        onSelect([""])
      },
      unselected: (event, ui) => {
        console.log(ui)
      }
    });
  }, 500);
  // <SelectableGroup
  //   allowClickWithoutSelected
  //   className='custom-row-selector'
  //   clickClassName='tick'
  //   resetOnStart={true}
  //   onSelectionFinish={(selected) => {
  //     console.time("EEEE")
  //     console.log("Selection Started")
  //     onSelect(selected)
  //   }}
  //   ignoreList={['.name-col', '.h-col', '.s-col', '.u-col', '.v-col']}
  // >
  //   <table border="1">
  //     <thead>
  //       <tr>
  //         {getHead()}
  //       </tr>
  //     </thead>
  //     <tbody>
  return <>
    {getRows(100)}
  </>
  //     </tbody>
  //   </table>
  // </SelectableGroup>
};

export default Selectable;