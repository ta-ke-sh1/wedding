import { Grid, FormControl, Button, FormLabel, TextField, InputLabel, Select, MenuItem, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { pink } from "@mui/material/colors";
import FirebaseService from "../db/firestore";
import { Translate } from "@mui/icons-material";

export default function Invite(props) {
  const pStyle = {
    textAlign: "center",
    fontFamily: "regular",
    lineHeight: "32px",
    fontSize: "24px",
    marginTop: "40px",
  };

  return (
    <div
      className="section"
      id="rsvp"
      style={{
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "180px",
        paddingBottom: "50px",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 'fit-content'
        }}
      >
        <img
          src="/logo.png"
          width={"100%"}
          style={{
            maxWidth: "320px",
            userSelect: "none",
          }}
        />
        <div>
          <p style={{ ...pStyle, width: "75vw", maxWidth: "500px" }}>để thuận tiện cho việc sắp xếp chỗ ngồi, vui lòng phản hồi giúp vợ chồng mình nhé!</p>
        </div>
        <ResponseForm />
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white'
        }}>
        </div>

      </div>
    </div>
  );
}

export function ResponseForm(props) {
  const sendResponse = async () => {
    const firestoreService = new FirebaseService();
    if (formData.name == "" || !formData.name) {
      setError(true);
      return;
    } else {
      try {
        const oldId = localStorage.getItem("cacheResponseId");
        if (!oldId) {
          const id = await firestoreService.addReply(formData);
          formData.id = id;
          localStorage.setItem("cacheResponseId", id);
        } else {
          await firestoreService.editReply(oldId, formData);
        }
        refreshForm();
      } catch (e) {
        console.log(e.toString());
      }
    }
  };

  const refreshForm = () => {
    setWillAttend(false);
    setFormData({
      name: "",
      guestType: 0,
      willAttend: false,
      attendees: 0,
      transport: 0,
    });
  };

  const [willAttend, setWillAttend] = useState(false);
  const [isError, setError] = useState(false);

  const [formData, setFormData] = useState(props.formData ?? {
    name: "",
    guestType: 0,
    willAttend: false,
    attendees: 0,
    transport: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData.willAttend + " -> " + value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const radioStyle = {
    color: pink[800],
    "&.Mui-checked": {
      color: pink[600],
    },
  };

  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: { xs: "90vw", sm: "70vw", md: "60vw", lg: "45vw", xl: "30vw" },
      }}
    >
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField onChange={handleChange} name="name" value={formData.name} error={isError} id="form-name" fullWidth label="Tên của bạn" variant="standard" required />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel id="demo-controlled-radio-buttons-group">Bạn sẽ tham dự chứ:</FormLabel>
          <RadioGroup
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="willAttend"
            value={willAttend}
            onChange={() => {
              setWillAttend(!willAttend);
            }}
          >
            <FormControlLabel value={true} control={<Radio sx={radioStyle} />} label="Có" />
            <FormControlLabel value={false} control={<Radio sx={radioStyle} />} label="Không" />
            <FormControlLabel
              value={false}
              control={
                <Radio
                  sx={{
                    opacity: 0,
                    userSelect: "none",
                  }}
                />
              }
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {willAttend === true ? (
        <>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel id="demo-controlled-radio-buttons-group">Bạn là khách của</FormLabel>
              <RadioGroup
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="guestType"
                value={formData.guestType}
                onChange={handleChange}
              >
                <FormControlLabel value={0} control={<Radio sx={radioStyle} />} label="Nhà trai" />
                <FormControlLabel value={1} control={<Radio sx={radioStyle} />} label="Nhà gái" />
                <FormControlLabel value={2} control={<Radio sx={radioStyle} />} label="Cả hai" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="item-select-label-form">Số người tham dự</InputLabel>
              <Select
                id="form-attendees"
                defaultValue={1}
                name="attendees"
                value={formData.attendees ?? 1}
                label="Số người tham dự"
                MenuProps={{
                  onClick: (e) => {
                    e.preventDefault();
                  },
                }}
                onChange={handleChange}
              >
                <MenuItem value={"default"} disabled>
                  Chọn số lượng người tham dự
                </MenuItem>
                {constants.attendees.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="transport-select-label-form">Phương tiện di chuyển</InputLabel>
              <Select
                name="transport"
                defaultValue={0}
                value={formData.transport ?? 0}
                label="Phương tiện di chuyển"
                MenuProps={{
                  onClick: (e) => {
                    e.preventDefault();
                  },
                }}
                onChange={handleChange}
              >
                <MenuItem value={"default"} disabled>
                  Chọn phương tiện di chuyển
                </MenuItem>
                {constants.transportations.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </>
      ) : (
        <></>
      )}
      <Grid item xs={12}>
        <Button
          onClick={sendResponse}
          fullWidth
          variant="outlined"
          sx={{
            padding: "12px",
          }}
        >
          Gửi phản hồi
        </Button>
      </Grid>
    </Grid>
  );
}

const constants = {
  transportations: [
    {
      id: 0,
      name: "Tự di chuyển",
    },
    {
      id: 1,
      name: "Xe nhà chú rể",
    },
    {
      id: 2,
      name: "Xe nhà cô dâu",
    },
  ],

  attendees: [
    {
      id: 1,
      name: 1,
    },
    {
      id: 2,
      name: 2,
    },
    {
      id: 3,
      name: 3,
    },
    {
      id: 4,
      name: 4,
    },
  ],
};
