import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  MenuItem,
  Select,
  Switch,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

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

const AnnualReviewOfDrivingRecords = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    location: "",
    jobClass: "",
    status: "",
    annualReview: "expired",
    startDate: "",
    endDate: "",
    groupBy: "lastName",
    format: "PDF",
    saveToFavorites: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!values.location) tempErrors.location = "Location is required";
    if (!values.jobClass) tempErrors.jobClass = "Job Class is required";
    if (!values.status) tempErrors.status = "Status is required";
    if (values.annualReview === "soonToBeExpired") {
      if (!values.startDate) tempErrors.startDate = "Start date is required";
      if (!values.endDate) tempErrors.endDate = "End date is required";
    }
    if (!values.groupBy) tempErrors.groupBy = "Group By is required";
    if (!values.format) tempErrors.format = "Format is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    setErrors({});
  }, [values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <FormLabel>Annual Review of Driving Records</FormLabel>

        <FormControl fullWidth margin="normal" error={Boolean(errors.location)}>
          <InputLabel>Location</InputLabel>
          <TextField
            select
            label="Locations"
            name="location"
            value={values.location}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="location1">Location 1</MenuItem>
            <MenuItem value="location2">Location 2</MenuItem>
            <MenuItem value="location3">Location 3</MenuItem>
          </TextField>
          {errors.location && (
            <FormLabel className={classes.errorText}>
              {errors.location}
            </FormLabel>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.jobClass)}>
          <TextField
            select
            label="Job Class"
            name="jobClass"
            value={values.jobClass}
            onChange={handleChange}
          >
            <MenuItem value="class1">Class 1</MenuItem>
            <MenuItem value="class2">Class 2</MenuItem>
            <MenuItem value="class3">Class 3</MenuItem>
          </TextField>
          {errors.jobClass && (
            <FormLabel className={classes.errorText}>
              {errors.jobClass}
            </FormLabel>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.status)}>
          <TextField
            select
            label="Status"
            name="status"
            value={values.status}
            onChange={handleChange}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>
          {errors.status && (
            <FormLabel className={classes.errorText}>{errors.status}</FormLabel>
          )}
        </FormControl>

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Annual Reviews</FormLabel>
          <RadioGroup
            aria-label="annualReview"
            name="annualReview"
            value={values.annualReview}
            onChange={handleChange}
          >
            <FormControlLabel
              value="expired"
              control={<Radio />}
              label="Expired"
            />
            <FormControlLabel
              value="soonToBeExpired"
              control={<Radio />}
              label="Soon-to-be Expired"
            />
          </RadioGroup>
        </FormControl>

        {values.annualReview === "soonToBeExpired" && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.startDate)}
            >
              <TextField
                label="Start Date"
                name="startDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={values.startDate}
                onChange={handleChange}
                helperText={errors.startDate}
              />
            </FormControl>
            <FormControl
              fullWidth
              margin="normal"
              error={Boolean(errors.endDate)}
            >
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={values.endDate}
                onChange={handleChange}
                helperText={errors.endDate}
              />
            </FormControl>
          </>
        )}

        <FormControl fullWidth margin="normal">
          <FormLabel>Group By</FormLabel>
          <RadioGroup
            aria-label="groupBy"
            name="groupBy"
            value={values.groupBy}
            onChange={handleChange}
          >
            <FormControlLabel
              value="lastName"
              control={<Radio />}
              label="Last Name"
            />
            <FormControlLabel
              value="location"
              control={<Radio />}
              label="Location"
            />
            <FormControlLabel
              value="expirationDate"
              control={<Radio />}
              label="Expiration Date"
            />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth margin="normal" error={Boolean(errors.format)}>
          <TextField
            select
            label="Format"
            name="format"
            value={values.format}
            onChange={handleChange}
            helperText={errors.format}
          >
            <MenuItem value="PDF">PDF</MenuItem>
            <MenuItem value="Excel">Excel</MenuItem>
          </TextField>
        </FormControl>

        <FormControlLabel
          control={
            <Switch
              name="saveToFavorites"
              checked={values.saveToFavorites}
              onChange={handleChange}
            />
          }
          label="Save to My Favorites"
        />

        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={(event) => handleCancel(event)}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save & Run
          </Button>
        </div>
      </FormControl>
    </form>
  );
};

export default AnnualReviewOfDrivingRecords;
