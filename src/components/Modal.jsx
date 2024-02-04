import classes from './Modal.module.css';

function Modal() {
    return (
        <>
            <div className={classes.backdrop}></div>
            <dialog className={classes.modal} />
        </>
    );
}
export default Modal;