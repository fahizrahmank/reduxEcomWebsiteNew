import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Apps from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';

export default function AdminSideBar() {
  const nav = useNavigate()
  return (
    <div>  
      <div>
      </div>
    <List
      sx={{
        maxWidth: 320,
      }}
    >
      <ListItem>
        <ListItemButton selected>
          <ListItemDecorator>
            <Home />
          </ListItemDecorator>
          Home
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <Apps />
          </ListItemDecorator>
          Dealers
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={() => nav('/adminusers')}>
          <ListItemDecorator />
          Users
        </ListItemButton>
      </ListItem>
    </List>
    </div>
  );
}