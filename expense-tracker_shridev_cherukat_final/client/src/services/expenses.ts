
import axios from "axios"
import IExpenseitem, { IExpenseCreateItem } from "../models/expense"

const getAllExpenseItems = async() =>{
    
    const expenseItemGetUrl = "http://localhost:4000/items"

    const response = await axios.get<IExpenseitem[]>(expenseItemGetUrl)

    return response.data;
}

const createExpenseItem = async (newExpenseItem : IExpenseCreateItem) => {

    const createExpenseItemPOSTUrl = "http://localhost:4000/items";
  
    const response = await axios.post(createExpenseItemPOSTUrl, newExpenseItem, {
      headers : {
        'Content-Type' : 'application/json'
      }
    })
  
    return response.data;
  }

export {getAllExpenseItems,createExpenseItem}