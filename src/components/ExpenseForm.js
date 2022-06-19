import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

function ExpenseForm({ onSubmit, expense }) {
  const [description, setDescription] = useState(
    expense ? expense.description : ""
  );
  const [note, setNote] = useState(expense ? expense.note : "");
  const [amount, setAmount] = useState(
    expense ? (expense.amount / 100).toString() : ""
  );
  const [createdAt, setCreatedAt] = useState(
    expense ? moment(expense.createdAt) : moment()
  );
  const [calendarFocused, setCalendarFocused] = useState(false);
  const [error, setError] = useState("");

  const handleDescriptionChange = e => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleNoteChange = e => {
    const note = e.target.value;
    setNote(note);
  };

  const handleAmountChange = e => {
    const change = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(change);
    }
  };

  const handleDateChange = createdAt => {
    if (createdAt) setCreatedAt(createdAt);
  };

  const handleFocusChange = ({ focused }) => {
    setCalendarFocused(focused);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!description || !amount)
      setError("Please provide description and amount");
    else {
      setError("");
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          autoFocus
        />
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Amount"
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={handleDateChange}
          focused={calendarFocused}
          onFocusChange={handleFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Add a note for your expense (optional)"
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
