import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export function EditExpensePage(props) {
  const onSubmit = expense => {
    props.editExpense(editExpense(props.expense.id, expense));
    props.history.push("/");
  };

  const onRemove = () => {
    props.removeExpense(removeExpense({ id: props.expense.id }));
    props.history.push("/");
  };

  return (
    <div>
      <ExpenseForm expense={props.expense} onSubmit={onSubmit} />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
