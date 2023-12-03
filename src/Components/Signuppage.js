import Button from "react-bootstrap/Button";
import React, { Fragment, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Signuppage = () => {
  const enetredemail = useRef();
  const enetredPwd = useRef();
  const renenterdpwd = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = enetredemail.current.value;
    const pwd = enetredPwd.current.value;
    const renterdpwd = renenterdpwd.current.value;

    if (pwd === renterdpwd) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA20QgzIbGGBJE2GjAckzUje0TsQ023o2M",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pwd,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            alert("account created successfully");
          } else {
            throw new Error("could not create account");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("password are not same");
    }
  };
  return (
    <Fragment>
      <Container
        className="d-flex  align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {/* The d-flex class makes the container a flex container, align-items-center centers items vertically, and justify-content-center centers items horizontally. The minHeight: "100vh" ensures the container takes at least the full height of the viewport. */}
        <Row>
          <Col xs={18} md={20} xl={14}>
            {/* xs={12} makes the column take full width on small screens, and md={6} makes it take half width on medium and larger screens. */}
            <Card style={{ backgroundColor: "gray" }}>
              <Card.Body>
                <form onSubmit={submitHandler}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    ref={enetredemail}
                  ></input>
                  {/* The form-control class styles the input as a block-level element with full width. mb-2 adds margin-bottom for spacing. */}
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control mb-2"
                    ref={enetredPwd}
                  ></input>
                  {/* <label>Re-enter Password</label> */}
                  <input
                    type="password"
                    placeholder="Re-enter Password"
                    className="form-control mb-3"
                    ref={renenterdpwd}
                  ></input>
                  {/* Added label for re-enter password and adjusted the spacing. */}
                  <Button type="submit" variant="primary" block>
                    Sign Up
                  </Button>
                  {/* The block prop makes the button a block-level element, taking full width of the parent. */}
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Signuppage;
