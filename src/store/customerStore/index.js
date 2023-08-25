import { create } from "zustand";
import url from "../../myClass/url";
export const customerStore = create((set, get) => ({
  customerList: [],
  formCustomer: {
    firstname: "",
    lastname: "",
    dateOfBirth: "2023-08-25",
    phoneNumber: "",
    email: "",
    bankAccountNumber: ""
  },
  termsofUse: false,
  setformCustomer: (e) => set((state) => ({ formCustomer: { ...state.formCustomer, [e.target.id]: e.target.value } })),
  setTermsofUse: (e) => set((state) => ({ termsofUse: e.target.checked })),
  sendformCustomer: async () => {
    const object = {
      "firstname": "reza",
      "lastname": "string",
      "dateOfBirth": "2023-08-25T08:46:12.839Z",
      "phoneNumber": "stringstrin",
      "email": "string",
      "bankAccountNumber": "string"
    }
    const _url = await new url("/api/Customer").put(get().formCustomer).build()
    var _customer = await _url.json()
    return (_customer)
  },
  readFormCustomer: async () => {
    const _url = await new url("/api/Customer").get().build()
    var _customerList = await _url.json()
    set((state) => ({ customerList: _customerList }))
  }
}))
