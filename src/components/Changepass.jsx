import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Changepass() {


    const [pass, setPass] = useState({
        old:"",
        new:"",
        confirm:"",
        successMsg:""
    })
   


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleClose2 =()=>{
        setPass({
            old:"",
            new:"",
             confirm:""
        })
    };
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Change password
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className="col">
                            <div className="mb-3 w-75">
                                <label htmlFor="Name :">Enter Old Password</label>
                                <input type="password" className='form-control' placeholder=' Old Password' value={pass.old} onChange={(e)=>setPass({...pass,old:e.target.value})} />
                            </div>
                            <div className="mb-3 w-75">
                                <label htmlFor="Name :">Enter New Password</label>
                                <input type="password" className='form-control' placeholder=' New Password' value={pass.new} onChange={(e)=>setPass({...pass,new:e.target.value})} />
                            </div>
                            <div className="mb-3 w-75">
                                <label htmlFor="Name :">Confirm New Password</label>
                                <input type="password" className='form-control' placeholder=' Confirm New Password ' value={pass.confirm} onChange={(e)=>setPass({...pass,confirm:e.target.value})}/>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success"  >
                        Update Password
                    </Button>
                    <Button variant="danger" onClick={handleClose2}>
                        Reset
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Changepass