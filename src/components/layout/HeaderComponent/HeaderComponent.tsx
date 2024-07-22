import * as React from 'react';
import { Avatar, Drawer, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import Notifications from '../Notifications/Notifications';

export default function HeaderComponent() {
  const [isShowHeader, setIsShowHeader] = useState(false);
  const [isShowNotifications, setIsShowNotifications] = useState(false);

  const handleClickMenu = (isShow:boolean) => {
    setIsShowHeader(isShow);
  }

  const handleClickNotification = (isShow:boolean) => {
    setIsShowNotifications(isShow);
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: "#333333"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handleClickMenu(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AKA
          </Typography>
          <Badge  onClick={() => handleClickNotification(true)} badgeContent={4} color='success' sx={{ cursor: 'pointer', mr: 3 }}>
            <NotificationsIcon sx={{ color: '#fff' }} />
          </Badge>
          <Badge  onClick={handleClick}>
          <Avatar sx={{ bgcolor: deepOrange[500], cursor: 'pointer' }}>H</Avatar>
          </Badge>
        </Toolbar>
      </AppBar>
        <DrawerMenu isShowHeader={isShowHeader} handleClickMenu={handleClickMenu}/>
      <Drawer anchor="right" open={isShowNotifications} onClose={() => handleClickNotification(false)}>
        <Notifications handleClickNotification={handleClickNotification}/>
      </Drawer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
