import { inject, observer } from "mobx-react";
import TableRow from "./TableRow";

const TableRowAction = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    return (
      <TableRow
        handleSave={() => {
          wordsStore.updateWord();
        }}
        deleteWord={() => {
          wordsStore.deleteWord();
        }}
      ></TableRow>
    );
  })
);

export default TableRowAction;
