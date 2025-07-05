import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  const skillSet = ["Javascript", "Java", "Python", "Django", "Rust"];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));

    navigate("/employee/feed");
  };

  const handleTechChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      techs: checked
        ? [...prev.techs, value]
        : prev.techs.filter((tech) => tech !== value),
    }));
  };

  const { profile, exp, desc, techs } = form;

  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 600,
        margin: "4% auto",
        padding: 4,
        borderRadius: 4,
        bgcolor: "#fdfdfd",
      }}
    >
      <Typography variant="h5" align="center" color="primary" gutterBottom>
        Create New Job Post
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Job Profile"
            variant="outlined"
            fullWidth
            required
            value={profile}
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
          />
          <TextField
            label="Years of Experience"
            variant="outlined"
            type="number"
            fullWidth
            required
            inputProps={{ min: 0 }}
            value={exp}
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
          />
          <TextField
            label="Job Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            value={desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
          />
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Required Skills
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2}>
              {skillSet.map((skill, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={techs.includes(skill)}
                      onChange={handleTechChange}
                      value={skill}
                      color="primary"
                    />
                  }
                  label={skill}
                />
              ))}
            </Box>
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              borderRadius: 2,
              textTransform: "none",
              paddingY: 1.2,
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
