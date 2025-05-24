import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './EmailSendBox.css'

export default function EmailSendBox() {
  return (
    <div>
    <div className="email-right-box">
      <div className="toolbar" role="toolbar">
        <div className="btn-group mb-3">
          <button type="button" className="btn btn-light"><i className="fa fa-archive"></i></button>
          <button type="button" className="btn btn-light"><i className="fa fa-exclamation-circle"></i></button>
          <button type="button" className="btn btn-light"><i className="fa fa-trash"></i></button>
        </div>
        <div className="btn-group mb-3">
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
        </div>
        <div className="btn-group mb-3">
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
        </div>
        <div className="btn-group mb-3">
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
        </div>
      </div>

      <div className="compose-content mt-5">
        <form>
          <div className="form-group mb-3">
            <input type="text" className="form-control bg-transparent" placeholder="To" />
          </div>
          <div className="form-group mb-3">
            <input type="text" className="form-control bg-transparent" placeholder="Subject" />
          </div>
          <div className="form-group mb-3">
            <textarea className="form-control bg-light" rows="15" placeholder="Enter text ..."></textarea>
          </div>
        </form>

        <h5 className="mb-3">
          <i className="fa fa-paperclip me-2"></i> Attachment
        </h5>
        <form className="dropzone">
          <div className="form-group">
            <input className="form-control" name="file" type="file" multiple />
          </div>
        </form>
      </div>

      <div className="text-left mt-3">
        <button className="btn btn-primary me-2" type="button">
          <i className="fa fa-paper-plane me-2"></i> Send
        </button>
        <button className="btn btn-dark" type="button">
          <i className="ti-close me-2"></i> Discard
        </button>
      </div>
    </div>
    </div>
  );
}