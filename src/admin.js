import { useEffect, useState } from "react"
import FirebaseService from "./db/firestore";
import { Box, Button, Checkbox, Grid, IconButton, Modal, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { ResponseForm } from "./parts/invite";

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
    const [formData, setFormData] = useState({})

    const [open, setOpen] = useState(false);

    const handleOpen = (data) => {
        setOpen(true)
        setFormData(data)
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        GetAllInvitations();
    }, [])

    async function GetAllInvitations() {
        // firestoreService.getAllInvitations().then((result) => {
        //     setInvitations(result);
        // })

        setInvitations([
            {
                "willAttend": false,
                "attendees": 1,
                "name": "Hà Thế Trung",
                "transport": 0,
                "guestType": 0
            },
            {
                "willAttend": true,
                "attendees": 0,
                "name": "Hoàng Hà Phương",
                "transport": 0,
                "guestType": 0
            },
            {
                "willAttend": true,
                "name": "Tô Hiến Long",
                "transport": 1,
                "guestType": 0,
                "id": "vTTq3dhaAVfaTkVpAABB",
                "attendees": 3
            },
        ])
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
                <InvitationTable invitations={invitations} />
            </div>
            <Modal open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add New Invite
                    </Typography>
                    <ResponseForm formData={formData} />
                </Box>
            </Modal>
        </div>
    )
}


function InvitationTable(props) {

    const [selected, setSelected] = useState([])

    function handleSelection(index) {

    }

    return (
        <div className="invitation-table">
            {
                props.invitations.map((invitation, index) => {
                    return <InvitationRow invitation={invitation} index={index} />
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
        <div className="table-row">
            <InvitationCell data={props.invitation.name} />
            <InvitationCell data={getWillAttend(props.invitation.willAttend)} />
            <InvitationCell data={getGuestType(props.invitation.guestType)} />
            <InvitationCell data={props.invitation.attendees} />
            <InvitationCell data={getTransportType(props.invitation.transport)} />
            <ActionCell />
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
        <div className="cell" style={{ width: '7%' }}>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <EditIcon />
            </IconButton>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}