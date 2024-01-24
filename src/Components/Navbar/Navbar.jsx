import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";

import FormHelperText from "@mui/material/FormHelperText";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: 270,
}));
const Search = styled("div")(({ theme }) => ({
  height: 40,
  justifyContent: "center",
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  border: "solid 1px rgb(208, 215, 222)",
  width: "80%",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    width: "50%",
    // marginLeft:10
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  height: "100%",
  // justifyContent:"flexStart",
  zIndex: 0,
  backgroundColor: "white",
  borderRadius: 10,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "80vw",
    },
  },
}));

export default function Navbar({
  handleFilter,
  searchTerm,
  handleSort,
  sortParam,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgb(246, 248, 250)",
          height: 80,
          justifyContent: "center",
          boxShadow: "none",
          borderBottom: "solid 1px rgb(208, 215, 222)",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>

          <FormControl
            sx={{ m: 1, minWidth: 120, maxHeight: 40, marginLeft: -4 }}
          >
            <InputLabel
              id="demo-simple-select-helper-label"
              sx={{
                textAlign: "center",
                marginRight: 20,
                marginTop: -0.5,
                backgroundColor: "rgb(246, 248, 250)",
              }}
            >
              Sort By...
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={sortParam}
              label="sort"
              onChange={handleSort}
              sx={{ height: 40 }}
            >
              <StyledMenuItem value="" divider={true} sx={{ marginTop: -1 }}>
                {/* <em>Sort By :</em> */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Sort By :</span>
                  <span>x</span>
                </div>
              </StyledMenuItem>
              <StyledMenuItem value={"episode_id"} divider={true}>
                Episode
              </StyledMenuItem>
              <StyledMenuItem
                value={"release_date"}
                sx={{ marginBottom: 10 }}
                divider={true}
              >
                Year
              </StyledMenuItem>
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
            {/* <FormHelperText>With label + helper text</FormHelperText> */}
          </FormControl>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, color: "black" }}
          ></Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "gray", zIndex: 1 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleFilter}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
