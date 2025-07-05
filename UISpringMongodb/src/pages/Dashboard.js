import React from "react";
import { Box, Tab, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Create from "./Create";

export default function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#f5f5f5",
          padding: "2%",
          borderRadius: 2,
          boxShadow: 2,
          margin: "2% auto",
          maxWidth: "90%",
        }}
      >
        <Typography variant="h4" color="primary">
          Employer Dashboard
        </Typography>
        <Button
          variant="outlined"
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              padding: "6px 12px",
              display: "inline-block",
            }}
          >
            Home
          </Link>
        </Button>
      </Box>

      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          bgcolor: "#ffffff",
          padding: 2,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="Employer dashboard tabs"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Create Post" value="1" />
              {/* Future tabs can go here */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <Create />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
