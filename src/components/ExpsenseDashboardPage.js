import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

function ExpsenseDashboardPage() {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}

export default ExpsenseDashboardPage;
