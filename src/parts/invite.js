import {
  Grid,
  FormControl,
  Button,
  FormLabel,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { pink } from "@mui/material/colors";
import FirebaseService from "../db/firestore";

export default function Invite() {
  const pStyle = {
    textAlign: "center",
    fontFamily: "regular",
    lineHeight: "32px",
    fontSize: "24px",
    marginTop: "40px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        <img
          src="/logo.png"
          width={"100%"}
          style={{
            maxWidth: "360px",
            userSelect: "none",
          }}
        />
        <div>
          <p style={pStyle}>
            để thuận tiện cho việc sắp xếp chỗ ngồi,
            <br />
            vui lòng phản hồi giúp vợ chồng mình nhé!
          </p>
        </div>
        <ResponseForm />
      </div>
    </div>
  );
}

function ResponseForm() {
  const sendResponse = () => {
    const firestoreService = new FirebaseService();
    console.log(formData)
    if (formData.name == "" || !formData.name) {
      setError(true)
      return
    } else {
      try {
        firestoreService.addReply(formData)
      } catch (e) {
        console.log(e.toString())
      }
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [willAttend, setWillAttend] = useState(false);
  const [isError, setError] = useState(false)

  const [formData, setFormData] = useState({
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
    <>
      <Grid container spacing={3} sx={{
        width: { xs: '90vw', sm: '70vw', md: '50vw', lg: '35vw' }
      }}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField onChange={handleChange} name="name" value={formData.name} error={isError} id="form-name" fullWidth label="Tên của bạn" variant="outlined" required />
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
              <FormControlLabel value={false} control={<Radio sx={{
                opacity: 0,
                userSelect: 'none'
              }} />} />
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
              <FormControl fullWidth>
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
              <FormControl fullWidth>
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
          <Button fullWidth variant="outlined" sx={{
            padding: '12px'
          }}>Gửi phản hồi</Button>
        </Grid>
      </Grid>
    </>
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
}