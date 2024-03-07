import { Grid, FormControl, Button, FormLabel, TextField, InputLabel, Select, MenuItem, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { pink } from "@mui/material/colors";

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
      }}
    >
      <div
        className="center-position"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "440px",
        }}
      >
        <img
          src="/logo.png"
          width={"100%"}
          style={{
            userSelect: "none",
          }}
        />
        <div>
          <p style={pStyle}>để thuận tiện cho việc sắp xếp chỗ ngồi, vui lòng phản hồi giúp vợ chồng mình nhé!</p>
        </div>
        <ResponseForm />
      </div>
    </div>
  );
}

function ResponseForm() {
  const sendResponse = () => {};

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [willAttend, setWillAttend] = useState(false);

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
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField onChange={handleChange} name="name" value={formData.name} id="form-name" fullWidth label="Tên của bạn" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel id="demo-controlled-radio-buttons-group">Bạn sẽ tham dự chứ:</FormLabel>
            <RadioGroup
              sx={{
                flexDirection: "row",
                justifyContent: "space-around",
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
                    justifyContent: "space-around",
                  }}
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="guestType"
                  value={formData.guestType}
                  onChange={handleChange}
                >
                  <FormControlLabel value={0} control={<Radio sx={radioStyle} />} label="Chú rể" />
                  <FormControlLabel value={1} control={<Radio sx={radioStyle} />} label="Cô dâu" />
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
          <Button
            fullWidth
            onClick={sendResponse}
            variant="outlined"
            sx={{
              padding: "15px",
            }}
          >
            Gửi phản hồi
          </Button>
        </Grid>
      </Grid>
    </div>
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
