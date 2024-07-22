import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { useNavigate } from "react-router-dom";

type DrawerMenuProps = {
  isShowHeader: boolean;
  handleClickMenu: (open: boolean) => void;
};

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isShowHeader, handleClickMenu }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClickMenu(false); 
  };

  return (
    <Drawer anchor="left" open={isShowHeader} onClose={() => handleClickMenu(false)}>
      <Box
        sx={{ width: 250, bgcolor: "#333333", height: "100%" }}
        role="presentation"
        onClick={() => handleClickMenu(false)}
        onKeyDown={() => handleClickMenu(false)}
      >
        <Typography p={5} sx={{ textAlign: "center" }}>
          Aloo
        </Typography>
        <Divider />
        <List>
          <ListItem onClick={() => handleNavigation("/product")} key="product" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="product" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => handleNavigation("/")} key="home" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="home" sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "#fff" }} />
                  ) : (
                    <MailIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
