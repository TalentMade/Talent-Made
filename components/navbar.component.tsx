import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(null);
    }

    return (
        <nav className='flex justify-between w-full h-16 bg-white absolute top-0 z-20'>
            <div className='flex ml-4 font-bold text-3xl h-full w-1/2 text-[#57CC99] items-center'>
                <Link href='/'>TALENT MADE</Link>
            </div>
            <div className='md:flex mr-4 w-1/2 text-[#22577a] font-bold items-center justify-end gap-4 hidden'>
                <Link href='/'>Sign Up</Link>
                <Link href='/'>Log In</Link>
            </div>
            <div className='flex mr-4 w-1/2 text-amber-500 font-bold items-center justify-end gap-4 md:hidden'>
                <button onClick={handleOpenNavMenu}>
                    <MenuIcon ></MenuIcon>
                </button>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </nav>
    );
}
export default Navbar;