import { useEffect, useState } from "react"
import FirebaseService from "./db/firestore";
import { Box, Button, Checkbox, Grid, IconButton, Modal, Snackbar, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CopyAllIcon from "@mui/icons-material/CopyAll"
import { ResponseForm } from "./parts/invite";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


export default function Admin() {
    const firestoreService = new FirebaseService();
    const [invitations, setInvitations] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        guestType: 0,
        attendees: 1,
        transport: 0,
    })

    const [open, setOpen] = useState(false);

    const handleOpen = (data) => {
        setOpen(true)
        setFormData(data)
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        GetAllInvitations();
        console.log(formData)
    }, [])

    async function GetAllInvitations() {
        firestoreService.getAllInvitations().then((result) => {
            setInvitations(result);
        })
    }

    const buttonStyle = {
        color: 'black',
        border: '1px solid black',
        marginLeft: '40px',
        height: '40px',
        "&:hover": {
            backgroundColor: 'black',
            border: '1px solid black',
            color: 'white'
        },
    }

    function handleCopyLink(id) {
        navigator.clipboard.writeText(process.env.REACT_APP_DEPLOY_URL + "invitation/" + id).then(() => {
            toast("Copied Invitation URL: " + id, {
                position: "bottom-left"
            })
        })
    }

    function handleDelete(id) {
        firestoreService.deleteReply(id).then(() => {
            GetAllInvitations()
        })
    }


    return (
        <div className="admin-page">
            <div className="control-bar" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1 >
                    Invitation Management
                </h1>
                <Button variant="outlined" sx={buttonStyle} onClick={GetAllInvitations}>Refresh</Button>
                <Button variant="outlined" sx={buttonStyle} onClick={() => {
                    handleOpen()
                }}>Add Invitation</Button>
                <Button variant="outlined" sx={buttonStyle}>Export Data</Button>
            </div>
            <div className="table-container">
                <InvitationTable invitations={invitations} copyLink={(id) => handleCopyLink(id)} deleteItem={(id) => handleDelete(id)} />
            </div>
            <Modal open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add New Invite
                    </Typography>
                    <ResponseForm
                        updateResponse={() => {
                            GetAllInvitations()
                            setOpen(false)
                        }}
                        formData={formData ?? {
                            name: "",
                            guestType: 0,
                            attendees: 1,
                            transport: 0,
                        }}
                        close={() => {
                            setOpen(false);
                        }} />
                </Box>
            </Modal>
            <ToastContainer position="bottom-left" />
        </div>
    )
}


function InvitationTable(props) {
    return (
        <div className="invitation-table">
            {
                props.invitations.map((invitation, index) => {
                    return <InvitationRow key={"invitation- " + index
                    } invitation={invitation} index={index} copyLink={props.copyLink} deleteItem={props.deleteItem} />
                })
            }
        </div>
    )
}

function InvitationRow(props) {

    function getWillAttend(willAttend) {
        return willAttend ? "Có" : "Không"
    }

    function getGuestType(type) {
        switch (type) {
            case 0:
                return "Chú rể"
            case 1:
                return "Cô dâu"
            case 2:
                return "Cả hai"
            default:
                return "N/A"
        }
    }

    function getTransportType(type) {
        switch (type) {
            case 0:
                return "Tự di chuyển"
            case 1:
                return "Xe Chú rể"
            case 2:
                return "Xe Cô dâu"
            default:
                return "N/A"
        }
    }

    return (
        <div className="table-row" style={{
            minWidth: '1200px'
        }}>
            <InvitationCell data={props.invitation.id} />
            <InvitationCell data={props.invitation.name} />
            <InvitationCell data={getWillAttend(props.invitation.willAttend)} />
            <InvitationCell data={getGuestType(props.invitation.guestType)} />
            <InvitationCell data={props.invitation.attendees} />
            <InvitationCell data={getTransportType(props.invitation.transport)} />
            <ActionCell copyHandler={() => props.copyLink(props.invitation.id)} deleteHandler={() => props.deleteItem(props.invitation.id)} />
        </div>

    )
}

function InvitationCell(props) {
    return (
        <div className="cell">
            {props.data}
        </div>

    )
}

function ActionCell(props) {
    return (
        <div className="cell">
            <IconButton>
                <CopyAllIcon onClick={props.copyHandler} />
            </IconButton>
            <IconButton>
                <DeleteIcon onClick={props.deleteHandler} />
            </IconButton>
        </div>
    )
}