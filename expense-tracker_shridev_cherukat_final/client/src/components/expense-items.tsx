import Table from 'react-bootstrap/Table';
import IExpenseItem from '../models/expense';
import format from 'date-fns/format';

type ExpenseItemsModel = {
    expenseItems: IExpenseItem[];
}

const ExpenseItems = (expenseItemsModel: ExpenseItemsModel) => {

    const dateString = (date: Date) => {
        try {
            return (format(date, "yyyy-MM-dd"));
        } catch (error) {
            return format(new Date(), "yyyy-MM-dd");
        }
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Product Purchased</th>
                    <th>Price</th>
                    <th>Payee</th>


                </tr>
            </thead>
            <tbody>
                {
                    expenseItemsModel.expenseItems.map((expenseItem, index) => {
                        return (
                            <tr>
                                <td>{dateString(expenseItem.date)}</td>
                                <td>{expenseItem.expenseDescription}</td>
                                <td>{expenseItem.price}</td>
                                <td>{expenseItem.payeeName}</td>

                                
                            </tr>

                        )
                    })
                }

            </tbody>
        </Table>
    );
}

export { ExpenseItems };


