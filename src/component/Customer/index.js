import './style.scss';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { customerStore } from '../../store/customerStore';
function Customer() {
    const navigate = useNavigate();
    const send = async () => {
        var res = await sendformCustomer();
        if (res.status) {
            toast.success(res.message);
            setTimeout(function () {
                navigate("/list")
            }, 1000);
        }
        else {
            //success , warn , error ,info
            toast.warn(res.message);
        }
    }

    const [lengthNumber, setLengthNumber] = useState(0);

    const formCustomer = customerStore(state => state.formCustomer)
    const setformCustomer = customerStore(state => state.setformCustomer)
    const termsofUse = customerStore(state => state.termsofUse)
    const setTermsofUse = customerStore(state => state.setTermsofUse)
    const sendformCustomer = customerStore(state => state.sendformCustomer)
    return (
        <div className="customer">
            <div className="wrapper" >
                <div className="inner">
                    <div className="form" action="/list">
                        <h3>Registration Form</h3>
                        <div className="form-group">
                            <div className="form-wrapper">
                                <label>First Name</label>
                                <input type="text" className="form-control" id='firstname' value={formCustomer.firstname || ''} onChange={(e) => setformCustomer(e)} />
                            </div>
                            <div className="form-wrapper">
                                <label>Last Name</label>
                                <input type="text" className="form-control" id='lastname' value={formCustomer.lastname || ''} onChange={(e) => setformCustomer(e)} />
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <label>Date Of Birth</label>
                            <input type="text" className="form-control" id='dateOfBirth' value={formCustomer.dateOfBirth || ''} onChange={(e) => setformCustomer(e)} />
                        </div>
                        <div className="form-wrapper">
                            <label>Phone Number</label>
                            <input minLength={11} maxLength={11} required type="text" className="form-control" id='phoneNumber' value={formCustomer.phoneNumber || ''} onChange={(e) => { setformCustomer(e); setLengthNumber(e.target.value.length) }} />
                        </div>
                        <div className="form-wrapper">
                            <label>Email</label>
                            <input type="text" className="form-control" id='email' value={formCustomer.email || ''} onChange={(e) => setformCustomer(e)} />
                        </div>
                        <div className="form-wrapper">
                            <label>Bank Account Number</label>
                            <input type="text" className="form-control" id='bankAccountNumber' value={formCustomer.bankAccountNumber || ''} onChange={(e) => setformCustomer(e)} />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" id='checkbox' value={termsofUse || false} onChange={(e) => setTermsofUse(e)} /> I caccept the Terms of Use &amp; Privacy Policy.
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <button className={termsofUse ? "" : "gray"} disabled={termsofUse ? false : true} onClick={() => { lengthNumber == 11 ? send() : toast.warn("شماره تلفن باید 11 عدد باشد") }} >Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;
