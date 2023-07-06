import React, { Children } from 'react'
interface ModalProps {
    modalOpen: boolean,
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children}) => {
    return (
        <dialog id="my_modal_1" className={`modal ${modalOpen ? "modal-open": ""}`}>
            <form method="dialog" className="modal-box">
                {children}
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={() => setModalOpen(false)} className="btn bg-red-500">Close</button>
                </div>
            </form>
        </dialog>
    )
}

export default Modal