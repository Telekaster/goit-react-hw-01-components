import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>      

          <tbody>     
                {items.map((item) => {
                    const { id, type, amount, currency } = item;
                    return (
                        <tr id={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
          </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};



export default TransactionHistory;