import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { CgClose } from "react-icons/cg";

import './EmailSendBox.css'

export default function EmailSendBox() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/email/list');
  };

  return (
    <div>
    <div className='email-box'>
    <div className="email-right-box">
      <div className="toolbar" role="toolbar">
        {/* <div className="btn-group mb-3">
          <button type="button" className="btn btn-light"><i className="fa fa-archive"></i></button>
          <button type="button" className="btn btn-light"><i className="fa fa-exclamation-circle"></i></button>
          <button type="button" className="btn btn-light"><i className="fa fa-trash"></i></button>
        </div> */}
        {/* <div className="btn-group mb-3">
          <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-folder"></i> <b className="caret ms-2"></b>
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-header">Move to</span>
            <Link className="dropdown-item" href="#">Social</Link>
            <Link className="dropdown-item" href="#">Promotions</Link>
            <Link className="dropdown-item" href="#">Updates</Link>
            <Link className="dropdown-item" href="#">Forums</Link>
          </div>
        </div> */}
        {/* <div className="btn-group mb-3">
          <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
            <i className="fa fa-tag"></i> <b className="caret ms-2"></b>
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-header">Label as:</span>
            <Link className="dropdown-item" href="#">Updates</Link>
            <Link className="dropdown-item" href="#">Social</Link>
            <Link className="dropdown-item" href="#">Promotions</Link>
            <Link className="dropdown-item" href="#">Forums</Link>
          </div>
        </div> */}
        {/* <div className="btn-group mb-3">
          <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
            More <span className="caret ms-2"></span>
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-header">More Option :</span>
            <Link className="dropdown-item" href="#">Mark as Unread</Link>
            <Link className="dropdown-item" href="#">Add to Tasks</Link>
            <Link className="dropdown-item" href="#">Add Star</Link>
            <Link className="dropdown-item" href="#">Mute</Link>
          </div>
        </div> */}
      </div>

      <div className="compose-content mt-5">
        <form>
          <div className="form-group mb-3">
            <input type="text" className="custom-email-from form-control bg-transparent" placeholder="To" />
          </div>
          <div className="form-group mb-3">
            <input type="text" className="custom-email-from form-control bg-transparent" placeholder="Subject" />
          </div>
          <div className="form-group mb-3">
            <textarea className="custom-email-from form-control bg-light" rows="15" placeholder="Enter text ..."></textarea>
          </div>
        </form>

        <h5 className="mb-3">
          <i className="fa fa-paperclip me-2"></i> Attachment
        </h5>
        <form className="dropzone">
          <div className="form-group">
            <input className="custom-email-from form-control" name="file" type="file" multiple />
          </div>
        </form>
      </div>

      <div className="button-group d-flex justify-content-end mt-3">
        <button onClick={goBack} className="button-box btn btn-primary me-2 d-flex justify-content-center align-items-center" type="button">
          <i className="fa fa-paper-plane me-2 email-plane-icon"></i>
          <span>Send</span>
        </button>
        <button onClick={goBack} className="button-box btn btn-dark d-flex justify-content-center align-items-center" type="button">
          <CgClose className='ioclose-icon'></CgClose>
          <span>Discard</span>
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}