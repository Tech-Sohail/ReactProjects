import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    maxWidth: 400,
    margin: "0 auto",
    textAlign: "left",
  },
  errorText: {
    color: "red",
  },
}));

const DQEmployeeList = () => {
  const classes = useStyles();

  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [compliance, setCompliance] = useState("both");
  const [groupBy, setGroupBy] = useState("location");
  const [format, setFormat] = useState("");
  const [saveToFavorites, setSaveToFavorites] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = React.useState(false);

  const validate = () => {
    const newErrors = {};
    if (!location) newErrors.location = "Location is required";
    if (!status) newErrors.status = "Status is required";
    if (!format) newErrors.format = "Format is required";
    return newErrors;
  };

  useEffect(() => {
    setErrors(validate());
  }, [location, status, format]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic
      console.log({
        location,
        status,
        compliance,
        groupBy,
        format,
        saveToFavorites,
      });
      setSubmitted(true);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const navigate = useNavigate();
  const handleCancel = (event) => {
    event.preventDefault();
    // navigate(-1, { replace: true });
    navigate("/Reports");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormLabel variant="h5" style={{ color: "Black", fontWeight: "bold" }}>
        DQ Employee List
      </FormLabel>

      <FormControl variant="outlined" error={!!errors.location}>
        <InputLabel>Locations</InputLabel>
        <Select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          label="Locations"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="location1">Location 1</MenuItem>
          <MenuItem value="location2">Location 2</MenuItem>
        </Select>
        {errors.location && (
          <FormLabel className={classes.errorText}>{errors.location}</FormLabel>
        )}
      </FormControl>

      <FormControl variant="outlined" error={!!errors.status}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="status1">Status 1</MenuItem>
          <MenuItem value="status2">Status 2</MenuItem>
        </Select>
        {errors.status && (
          <FormLabel className={classes.errorText}>{errors.status}</FormLabel>
        )}
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">In Compliance</FormLabel>
        <RadioGroup
          value={compliance}
          onChange={(e) => setCompliance(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="both" control={<Radio />} label="Both" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Group By</FormLabel>
        <RadioGroup
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
        >
          <FormControlLabel
            value="location"
            control={<Radio />}
            label="Location"
          />
          <FormControlLabel value="status" control={<Radio />} label="Status" />
          <FormControlLabel
            value="compliance"
            control={<Radio />}
            label="Compliance"
          />
        </RadioGroup>
      </FormControl>

      <FormControl variant="outlined" error={!!errors.format}>
        <InputLabel>Format</InputLabel>
        <Select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          label="Format"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Excel">Excel</MenuItem>
          <MenuItem value="Pdf">Pdf</MenuItem>
        </Select>
        {errors.format && (
          <FormLabel className={classes.errorText}>{errors.format}</FormLabel>
        )}
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={saveToFavorites}
            onChange={(e) => setSaveToFavorites(e.target.checked)}
            color="primary"
          />
        }
        label="Save to My Favorites"
      />

      <div>
        <Button
          variant="contained"
          color="default"
          onClick={(event) => handleCancel(event)}
        >
          Cancel
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Save & Run
        </Button>
      </div>
      <div>
        {submitted && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Submitted Successfully!
            </Alert>
          </Snackbar>
        )}
      </div>
    </form>
  );
};

export default DQEmployeeList;
