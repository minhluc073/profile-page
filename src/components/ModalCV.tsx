import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

interface ModalCVProps {
  isOpen?: boolean;
  toggleShow?: any;
  children?: any;
  title?: string;
  btnClose?: string;
}

export default function ModalCV({
  isOpen = false,
  toggleShow = () => {},
  children = () => {},
  btnClose = "close",
}: ModalCVProps) {
  return (
    <>
      <MDBModal show={isOpen} setShow={() => toggleShow} tabIndex="-1">
        <MDBModalDialog size='lg' centered>
          <MDBModalContent>
            <MDBModalHeader>
              {/* <MDBModalTitle>{title}</MDBModalTitle> */}
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{children()}</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                {btnClose}
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
