import './style.scss';
import { useEffect } from "react";
import { customerStore } from '../../store/customerStore';
function List() {
    const readFormCustomer = customerStore(state => state.readFormCustomer)
    const customerList = customerStore(state => state.customerList)
    useEffect(() => {
        readFormCustomer();
    }, [readFormCustomer]);
    return (
        <div className="list">
            <ul className="tilesWrap">
                {Array.isArray(customerList) ?
                    customerList.map((e) =>
                        <li key={e.id}>
                            <h2>{e.lastname[0]}</h2>
                            <h3>{e.firstname}</h3>
                            <h3>{e.lastname}</h3>
                            <p>
                                {e.phoneNumber}
                            </p>
                            <button>Read more</button>
                        </li>

                    )
                    : null}
            </ul>
        </div>
    );
}

export default List;

