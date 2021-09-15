import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import { useColorMode } from '../../plugins/gatsby-plugin-top-layout/ColorModeContext';

interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps): JSX.Element {
  const { palette } = useTheme();
  const { toggleColorMode } = useColorMode();
  return (
    <div>
      <HideOnScroll>
        <AppBar color="default" sx={{ bgcolor: 'background.paper' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              {title ?? 'Layout'}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Tooltip title={palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}>
                <IconButton onClick={toggleColorMode}>
                  {palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Container maxWidth="sm" sx={{ pt: '56px' }}>
        <Box sx={{ py: 4 }}>
          {children}
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default Layout;
