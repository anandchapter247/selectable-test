import React from 'react'
import { createSelectable } from 'react-selectable-fast';

const Cells = ({ selectableRef, isSelected, isSelecting, number }) => (
  <td ref={selectableRef}>
    <div > Cells {number}</div >
  </td>
);

export default createSelectable(Cells);
