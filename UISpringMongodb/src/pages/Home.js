import React from "react";
import { Typography, Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 10,
        px: 2,
      }}
    >
      <Typography variant="h3" gutterBottom color="primary">
        Get Hired or Hire People for Free!
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <Button
          variant="outlined"
          size="large"
          sx={{ borderRadius: 2, textTransform: "none", px: 4 }}
        >
          <Link
            to="/employer/dashboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Hire Talent
          </Link>
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{ borderRadius: 2, textTransform: "none", px: 4 }}
        >
          <Link
            to="/employee/feed"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Get Job Now
          </Link>
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
