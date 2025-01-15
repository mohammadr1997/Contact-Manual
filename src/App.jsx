import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/NavBar";
import AllContacts from "./Components/AllContacts";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import ModalAddContact from "./Components/ModalAddContact";
import "./style.css";

function App() {
  const [OpenAddContact, setOpenAddContact] = useState(false);
  const [openAllContacts, setOpenAllContacts] = useState(false);
  const [newContacts, setNewContacts] = useState([]);
  const [searchedContact, setSearchedContact] = useState(null);

  return (
    <>
      <NavBar
        OpenAddContact={OpenAddContact}
        setOpenAddContact={setOpenAddContact}
        openAllContacts={openAllContacts}
        setOpenAllContacts={setOpenAllContacts}
        newContacts={newContacts}
        setSearchedContact={setSearchedContact}
        searchedContact={searchedContact}
      />
      <div
        style={{ fontFamily: "custom-font" }}
        className="w-100 d-flex justify-content-center mt-2 mb-2 "
      >
        <p>Search Result : </p>
        {searchedContact ? (
          searchedContact == "not found" ? (
            <p className="bg-body-secondary w-25 text-center rounded-2 text-dark">
              Contact Not Found{" "}
            </p>
          ) : (
            <ul
              style={{ marginTop: "-10px" }}
              className="list-unstyled fs-6  border border-2   w-50 text-center  rounded-2 bg-body-secondary"
            >
              <li key={searchedContact.id}>Name : {searchedContact.name}</li>
              <li> phone : {searchedContact.phone}</li>
            </ul>
          )
        ) : null}
      </div>
      <div className="w-100 position-relative mt-2 d-flex justify-content-center">
        {OpenAddContact ? (
          <div className="position-absolute top-0 z-3 w-75">
            <ModalAddContact
              setOpenAddContact={setOpenAddContact}
              OpenAddContact={OpenAddContact}
              newContacts={newContacts}
              setNewContacts={setNewContacts}
            />
          </div>
        ) : null}

        {openAllContacts ? (
          <div className="position-absolute top-0 z-1 w-100">
            <AllContacts
              setOpenAllContacts={setOpenAllContacts}
              openAllContacts={openAllContacts}
              newContacts={newContacts}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
export default App;
