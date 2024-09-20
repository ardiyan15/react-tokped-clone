import Modal from "react-bootstrap/Modal";

import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../../redux/slices/showModal";
import { Fragment, useState } from "react";
import Input from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import Spinner from "../Elements/Spinner/Index";

import { login } from "../../services/auth.service";

import "../../styles/components/fragments/modal.css";
import "../../styles/components/header.css";

const ModalLogin = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrectLogin, setIsCorrectLogin] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setShow(false));
    setIsDisabled(true);
    setIsCorrectLogin(true);
    setUsername("");
    setPassword("");
  };
  const isShow = useSelector((state) => state.setModal.isShow);

  const handleActiveButton = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    }

    if (name === "password") {
      setPassword(value);
    }

    if (value !== "" && (name === "username" ? password : username) !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsSubmit(true);

    const data = { username, password };

    login(data, (status, res) => {
      if (status) {
        console.log(status);
        console.log(res);
      } else {
        setIsCorrectLogin(false);
        setIsSubmit(false)
      }
    });
  };

  return (
    <Fragment>
      <Modal
        show={isShow}
        onHide={handleClose}
        className="d-flex justify-content-center align-items-center"
      >
        <Modal.Header
          closeButton
          style={{ width: "350px", border: "0px solid #fff" }}
        ></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLogin}>
            <div className="row" style={{ marginBottom: "2rem" }}>
              <div className="col-6">
                <h4 className="font-weight-bold">Masuk</h4>
              </div>
              <div className="col-6 d-flex justify-content-end align-items-end">
                <span className="align-self-end primary-color">Daftar</span>
              </div>
            </div>
            {!isCorrectLogin && (
              <p className="text-danger">Username atau Password salah!</p>
            )}
            <small>Username dan Password</small>
            <Input
              name="username"
              placeholder="username"
              customClass="on-focus mb-3"
              onchange={handleActiveButton}
              isFocus={isShow}
            />

            <Input
              name="password"
              placeholder="password"
              customClass="on-focus"
              onchange={handleActiveButton}
            />
            <div className="w-100">
              <p className="text-end primary-color">Butuh Bantuan?</p>
            </div>
            <div className="w-100">
              {isSubmit ? (
                <div className="text-center w-100">
                  <Spinner />
                </div>
              ) : (
                <Button
                  classname={`w-100 btn  ${
                    isDisabled ? "btn-disabled" : "btn-primary"
                  }`}
                  isdisabled={isDisabled}
                >
                  Masuk
                </Button>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer
          style={{
            marginTop: "5%",
            borderColor: "grey",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          <div
            className="w-100  d-flex justify-content-center align-items-center"
            style={{ position: "absolute", marginTop: "-5%" }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "grey",
                marginLeft: "8rem",
                marginTop: "2%",
                backgroundColor: "white",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              atau masuk dengan
            </p>
          </div>
        </Modal.Footer>

        <div
          style={{ padding: "5px", marginRight: "20px" }}
          className="w-100 d-flex justify-content-center align-items-center"
        >
          <div className="d-flex flex-column w-100">
            <button
              style={{
                border: "0.1px solid #BFC9D9",
                padding: "0.5rem",
                marginBottom: "0.5rem",
              }}
              className="bg-white rounded w-100 text-center"
            >
              Scan Kode QR
            </button>
            <button
              style={{
                border: "0.1px solid #BFC9D9",
                padding: "0.5rem",
                fontWeight: "bold",
              }}
              className="bg-white rounded w-100 text-center"
            >
              Metode Lain
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ModalLogin;
