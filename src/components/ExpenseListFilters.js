import React, { useState } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export function ExpenseListFilters({ filters, dispatch }) {
  const [calendarFocused, setCalendarFocused] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleFocusChange = calendarFocused => {
    setCalendarFocused(calendarFocused);
  };

  const handleTextChange = e => {
    setTextFilter(e.target.value);
  };

  const handleSortChange = e => {
    if (e.target.value === "date") sortByDate();
    else if (e.target.value === "amount") sortByAmount();
  };

  return (
    <div>
      <input type="text" value={filters.text} onChange={handleTextChange} />
      <select value={filters.sortBy} onChange={handleSortChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={handleDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={handleFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
