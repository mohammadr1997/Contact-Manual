import "bootstrap/dist/css/bootstrap.min.css";
function AllContacts({ newContacts, openAllContacts, setOpenAllContacts }) {
  return (
    <div className="w-100 bg-body d-flex justify-content-center p-3 AllContacts">
      <div className="bg-light rounded-4 d-flex flex-column justify-content-center w-75 text-center px-4 py-4 position-relative ">
        <span
          onClick={() => setOpenAllContacts(!openAllContacts)}
          className="position-absolute end-0 top-0 text-dark  d-inline-block m-2 "
          style={{ zIndex: "10", cursor: "pointer" }}
        >
          ✖
        </span>
        {newContacts.length > 0 ? (
          newContacts.map((contact) => {
            return (
              <ul className="list-unstyled fs-6  border border-2 mt-2">
                <li key={contact.id}>
                  {contact.id + 1} : Name : {contact.name} {"/ "} phone :{" "}
                  {contact.phone}
                </li>
              </ul>
            );
          })
        ) : (
          <div> No Contact Added yet !</div>
        )}
      </div>
    </div>
  );
}
export default AllContacts;
