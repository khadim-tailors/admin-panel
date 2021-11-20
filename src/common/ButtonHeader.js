import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ButtonHeader({ link, handleCreateMode,hideAddNew }) {
  return (
    <div className="__header d-flex justify-content-between align-items-center mb-4">
      {link ? (
        <Link to={link} className="btn btn-outline-dark">
          <i className="fas fa-chevron-left mr-3"></i> Back
        </Link>
      ) : (
        ""
      )}
      { hideAddNew ? '' :
        <Button className="btn btn-primary" onClick={handleCreateMode}>
        Add New <i className="fas fa-plus ml-3"></i>
      </Button>
      }
    </div>
  );
}

export default ButtonHeader;
