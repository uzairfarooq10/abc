'use client';

import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SensorsIcon from '@mui/icons-material/Sensors';
import Search from '../search';
import MenuIcon from '@mui/icons-material/Menu';
// import BadgeAvatars from '../avatar';

const Header = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position='fixed'
      sx={{
        zIndex: 100,
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar sx={{ display: 'flex' }}>
        <Stack direction='row' alignItems='center' width={'280px'}>
          {isMobile && (
            <IconButton edge='start' color='inherit' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant='h6'>LOGO</Typography>
        </Stack>

        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          gap={2}
          width={1}
          height={40}
        >
          <Search />

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                height: '40px',
              },
            }}
          >
            <IconButton color='inherit'>
              <SensorsIcon />
            </IconButton>
            <IconButton color='inherit'>
              <Typography fontSize={14}>EN</Typography>
            </IconButton>

            <IconButton color='inherit'>
              <NotificationsNoneIcon />
            </IconButton>

            <IconButton color='inherit'>
              <LogoutIcon />
            </IconButton>

            <IconButton color='inherit'>
              <FullscreenIcon />
            </IconButton>

            <Box
              display={'flex'}
              alignContent={'center'}
              sx={{
                gap: '1rem',
                backgroundColor: 'lightgrey',
                padding: 0,
                borderRadius: '99px',
              }}
            >
              <IconButton color='inherit'>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt='User Avatar'
                  src='/static/images/avatar/1.jpg'
                />
              </IconButton>

              <IconButton color='inherit'>
                <SettingsIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
