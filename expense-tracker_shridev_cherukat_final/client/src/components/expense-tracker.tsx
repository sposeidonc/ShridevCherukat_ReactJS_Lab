import { useEffect, useState } from "react"
import { getAllExpenseItems } from "../services/expenses";
import { Container } from "react-bootstrap";
import { ExpenseSummary } from "./expense-summary";
import IExpenseItem from "../models/expense";
import { ExpenseItems } from "./expense-items";
import { ExpenseCreator } from "./expense-adder";



const ExpenseTracker = () => {

    const [expenseItems, setExpenseItems] = useState<IExpenseItem[]>([]);
  
    useEffect(() => {
  
      const getAllExpenseItemsInvoker = async () => {
  
        const response = await getAllExpenseItems();
        console.log(`Response is ${JSON.stringify(response)}`);
  
        setExpenseItems(response);
      }
  
      getAllExpenseItemsInvoker();
  
    }, [])
  
    const refreshForNewExpenseAddition = (newExpenseItem : IExpenseItem) => {
  
      console.log("Called from the child component [Expense Creator] component..")
    
      setExpenseItems(
        [newExpenseItem, ...expenseItems]
      )
    }
  
    return (
      
      <Container>
  
        <h2>
          Expense Tracker Application
  
          <ExpenseCreator expenseItems={expenseItems} refreshForNewExpenseAddition={refreshForNewExpenseAddition}></ExpenseCreator>
  
        </h2>
  
        <ExpenseItems expenseItems={expenseItems}></ExpenseItems>
  
        <ExpenseSummary expenseItems={expenseItems}></ExpenseSummary>
      </Container>
  
    )
  
  }
  
  export {ExpenseTracker}