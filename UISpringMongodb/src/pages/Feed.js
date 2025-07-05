import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };

    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      setPost(response.data);
    };

    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

  return (
    <Box sx={{ padding: "2% 4%" }}>
      {/* Top Bar */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" color="primary">
          Job Feed
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

      {/* Search Box */}
      <Box
        sx={{
          maxWidth: 600,
          margin: "0 auto 3%",
        }}
      >
        <TextField
          fullWidth
          placeholder="Search by job profile..."
          variant="outlined"
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Posts Grid */}
      <Grid container spacing={3}>
        {post?.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                padding: 3,
                borderRadius: 3,
                boxShadow: 2,
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1 }}
                color="primary"
              >
                {p.profile}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 2 }}
              >
                {p.desc}
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Experience: <strong>{p.exp} years</strong>
              </Typography>

              <Box mt={1}>
                <Typography variant="subtitle2" gutterBottom>
                  Skills:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {p.techs.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feed;
