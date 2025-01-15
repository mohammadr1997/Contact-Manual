import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../Style.css";

function ModalAddContact({
  OpenAddContact,
  setOpenAddContact,
  newContacts,
  setNewContacts,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [validContact, setValidContact] = useState(0);

  const setPhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    const phonePattern =
      /^(?:\+1[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    setIsValidPhone(phonePattern.test(value));
  };
  const warnToastify = () => {
    toast.warn("please insert name and phone", {
      position: "top-center",
      style: {
        fontFamily: "custom-font",
      },
    });
  };
  const successToastify = () => {
    toast.success("your contact has been added ✔", {
      position: "top-center",
      style: {
        fontFamily: "custom-font",
      },
    });
  };
  const errorToastify = () => {
    toast.error("fullName or phone is incorrect ❌", {
      position: "top-center",
      style: { fontFamily: "custom-font" },
    });
  };
  const setNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    const namePattern = /^[A-Za-z\s]+$/;
    setIsValidName(namePattern.test(value));
  };
  function handleSaveChanges() {
    if (name && isValidName && isValidPhone && phone) {
      successToastify();
      const id = newContacts.length;
      setNewContacts((prevContacts) => [
        ...prevContacts,
        { id: id, name: name, phone: phone },
      ]);
      setName("");
      setPhone("");
    } else if (!name || !phone) {
      warnToastify();
    } else {
      //show error message
      errorToastify();
    }
  }

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add your Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ fontFamily: "custom-font" }}>
            <InputGroup className="mb-3b">
              <InputGroup.Text>Full Name</InputGroup.Text>
              <Form.Control
                aria-label="name"
                required
                value={name}
                onChange={setNameChange}
              />
            </InputGroup>
            <InputGroup className="mb-3b mt-2">
              <InputGroup.Text>Phone Number</InputGroup.Text>
              <Form.Control
                aria-label="phone"
                required
                onChange={setPhoneNumberChange}
                value={phone}
              />
            </InputGroup>

            <ToastContainer />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => setOpenAddContact(!OpenAddContact)}
            variant="secondary"
          >
            Close
          </Button>
          <Button onClick={() => handleSaveChanges()} variant="primary">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

// function InputContacts() {
//   return (
//     <div style={{ fontFamily: "custom-font" }}>
//       <InputGroup className="mb-3b">
//         <InputGroup.Text>Full Name</InputGroup.Text>
//         <Form.Control aria-label="name" required />
//       </InputGroup>
//       <InputGroup className="mb-3b mt-2">
//         <InputGroup.Text>Phone Number</InputGroup.Text>
//         <Form.Control
//           aria-label="phone"
//           required
//           pattern="^\+?[1-9]\d{1,14}$"
//         />
//       </InputGroup>
//     </div>
//   );
// }

export default ModalAddContact;
