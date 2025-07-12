import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProileModal({ show, onClose, user, onLogout }) {
  return (
    <div
      className={`mpda; fade ${show ? "show d-block" : "d-none"}`}
      tabIndex={-1}
    >
      <div className="modal-dialog modl-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">👤 Profile</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body text-center">
            <img
              src="https://ui-avatars.com/api/?name=Anaranya+M&background=332929&color=fff"
              alt="User Avatar"
              className="rounded-circle mb-3"
              width="80"
              height="80"
            />
            <h6>User</h6>
            <p className="text-muted">Email</p>
            <button className="btn btn-danger mt-3" onClick={onLogout}>
              {" "}
              <i className="bi bi-box-arrow-right me-2"></i>Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
