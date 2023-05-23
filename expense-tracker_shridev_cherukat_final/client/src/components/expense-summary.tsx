import { Table } from "react-bootstrap"
import IExpenseItem from "../models/expense";
import { getAllUniquePayeeNames } from "../utils/expense-utils";


type ExpenseSummaryModel = {
    expenseItems: IExpenseItem[];
}
const ExpenseSummary = ({ expenseItems }: ExpenseSummaryModel) => {

    const getAllUniquePayeeNamesLocal = () => {

        return getAllUniquePayeeNames(expenseItems);
        
    }

    const totalExpensesByPayee = (payeeName: string) => {

        let totalExpense = 0;

        expenseItems.forEach((expenseItem) => {

            if (expenseItem.payeeName === payeeName) {
                totalExpense += expenseItem.price;
            }
        })
        return totalExpense;
    }


    const calculateGrandTotal = () => {

        let grandTotal = 0;
        expenseItems.forEach((expenseItem) => {

            grandTotal += expenseItem.price;

        })
        return grandTotal;
    }


    const calculatePendingAmt = (payeeName: string) => {

        const totalExpense = calculateGrandTotal();
        const totalContributionByPayee = totalExpensesByPayee(payeeName);
        const halfAmt = totalExpense / getAllUniquePayeeNamesLocal().length;


        if (totalContributionByPayee >= halfAmt) {
            return 0;
        } else {
            return (halfAmt - totalContributionByPayee);

        }
    }

    return (
        <>
            <Table striped bordered hover>
               
                <tbody>
                <tr>
                        
                        <td>Total</td>
                        <td>{calculateGrandTotal()}</td>
                    </tr>
                    {
                        getAllUniquePayeeNamesLocal().map((payeeName, index) => {
                            return (
                                <tr key = {index+1} >
                                    
                                    <td>{payeeName} {` paid :`}</td>
                                    <td>{totalExpensesByPayee(payeeName)}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>
            <Table striped bordered hover>
                <tbody>
                    {
                        getAllUniquePayeeNamesLocal().map((payeeName, index) => {

                            return (
                                <tr key={index + 1} >
                                    <td>{` Pay ${payeeName}`}</td>
                                    <td>{calculatePendingAmt(payeeName)}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </>
    )
}

export { ExpenseSummary }