import "../Style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavBar({
  setOpenAddContact,
  OpenAddContact,
  openAllContacts,
  setOpenAllContacts,
  newContacts,
  setSearchedContact,
  searchedContact,
}) {
  const handleSearchedContacts = (e) => {
    const foundContact = newContacts.filter(
      (contact) => contact.name.toLowerCase() == e.target.value.toLowerCase()
    );
    if (foundContact.length > 0) {
      setSearchedContact(foundContact[0]);
    } else if (!e.target.value) {
      setSearchedContact(null);
    } else {
      setSearchedContact("not found");
    }
  };
  return (
    <>
      <div className="NavContainer justify-content-start">
        <div
          style={{ fontFamily: "custom-font" }}
          className=" d-flex flex-column bg-body-tertiary justify-content-start p-2 d-md-none w-100 d-md-none"
        >
          <Form inline className="mt-4 mb-2  ">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <i
                  className="fa fa-address-book-o"
                  style={{ fontSize: "34px" }}
                ></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Search Contacts"
                aria-label="Username"
                aria-describedby="basic-addon1"
                size="md"
                onChange={handleSearchedContacts}
              />
            </InputGroup>
          </Form>
          <Form className="mt-4 mb-2 w-100">
            <Row>
              <Col>
                <Button
                  onClick={() => setOpenAllContacts(!openAllContacts)}
                  style={{ fontSize: "14px" }}
                  className="px-8 py-1 w-25 mx-1 "
                  type="button"
                >
                  See All Contacts
                </Button>
                <Button
                  style={{ fontSize: "14px" }}
                  className="px-8 py-1 w-25 mx-1 "
                  type="button"
                  onClick={() => setOpenAddContact(!OpenAddContact)}
                >
                  Add New Contact
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <div
        style={{ fontFamily: "custom-font" }}
        className=" NavContainer bg-body-tertiary d-none d-md-flex justify-content-around w-80"
      >
        <Form inline className="mt-4 mb-2 w-3/4 ">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              <i
                className="fa fa-address-book-o"
                style={{ fontSize: "38px" }}
              ></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search Contacts"
              aria-label="Username"
              aria-describedby="basic-addon1"
              size="lg"
              onChange={handleSearchedContacts}
            />
          </InputGroup>
        </Form>
        <Form className="mt-4 mb-2 ">
          <Row>
            <Col className="w-100 d-flex">
              <Button
                onClick={() => setOpenAllContacts(!openAllContacts)}
                className="px-4 py-1 w-50 fs-6 mx-1"
                type="button"
              >
                See All Contacts
              </Button>
              <Button
                onClick={() => setOpenAddContact(!OpenAddContact)}
                className="px-4 py-1 w-50 fs-6 mx-1"
                type="button"
              >
                Add New Contact
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default NavBar;
