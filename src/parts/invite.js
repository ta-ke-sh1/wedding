import { Grid, FormControl, Button, FormLabel, TextField, InputLabel, Select, MenuItem, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";
import FirebaseService from "../db/firestore";

export default function Invite(props) {

  const pStyle = {
    textAlign: "center",
    fontFamily: "regular",
  };

  const [hasResponse, setHasResponse] = useState(false);
  const [content, setContent] = useState("");

  const updateResponse = (form) => {
    setHasResponse(true);
    if (form.willAttend) {
      setContent("Cảm ơn vì đã gửi phản hồi cho chúng tôi! Chúng tôi sẽ mong chờ sự hiện diện của bạn tại bữa tiệc!");
    } else {
      setContent("Cảm ơn vì đã gửi phản hồi cho chúng tôi! Rất tiếc vì bạn đã không thể tham dự được!");
    }
  };

  return (
    <div
      className="section"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "50px",
      }}
    >
      {hasResponse ? (
        <p className="bodyText" style={{ ...pStyle, width: "75vw", maxWidth: "500px" }}>
          {content}
        </p>
      ) : (
        <div>
          <p className="bodyText" style={{ ...pStyle, width: "75vw", maxWidth: "500px" }}>
            để thuận tiện cho việc sắp xếp chỗ ngồi, vui lòng phản hồi<br />  giúp gia đình chúng tôi nhé!
          </p>
          <ResponseForm updateResponse={updateResponse} formData={props.invitation} />
        </div>
      )}
    </div>
  );
}

export function ResponseForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    guestType: 0,
    attendees: 1,
    transport: 0,
  });

  const [willAttend, setWillAttend] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!window.location.href.endsWith("/secret/admin") && !window.location.href.endsWith("/home")) {
      let cachedData = sessionStorage.getItem("invitationCache");
      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        setFormData(parsed);
        setWillAttend(parsed.willAttend);
      }
    }
  }, [props]);

  const refreshForm = () => {
    setWillAttend(false);
    setFormData({
      name: "",
      guestType: 0,
      attendees: 1,
      transport: 0,
    });
  };

  const sendResponse = async () => {
    const firestoreService = new FirebaseService();
    if (formData.name == "" || !formData.name) {
      setError(true);
      console.log("error");
      return;
    } else {
      console.log(formData);
      console.log(props)
      try {
        formData.willAttend = willAttend;
        if (props.formData.id) {
          console.log("edit");
          await firestoreService.editReply(props.formData.id, formData);
          if (props.close) {
            props.close()
          }
        } else {
          console.log("add new");
          await firestoreService.addReply(formData);
          if (props.close) {
            props.close()
          }
        }

        sessionStorage.setItem("invitationCache", JSON.stringify(formData));
        refreshForm();
        props.updateResponse(formData);
      } catch (e) {
        console.log(e.toString())
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        width: { xs: "80vw", sm: "70vw", md: "60vw", lg: "40vw", xl: "30vw" },
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
