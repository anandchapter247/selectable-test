import React from 'react'
import { createSelectable } from 'react-selectable-fast';

const Cells = ({ selectableRef, isSelected, isSelecting, number }) => (
  <td ref={selectableRef} className={`${isSelected ? "selected" : ""} ${isSelecting ? "selecting" : ""}`}>
    <div > Cells {number}</div >
  </td>
);

export default createSelectable(Cells);
