import { BsFillPlusCircleFill } from "react-icons/bs";
import ModalForm from "./ModalForm";

const Modal = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center p-3">
        <BsFillPlusCircleFill
          className="display-4 text-dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-warning-subtle">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ModalForm />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-warning w-100 rounded-5"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
