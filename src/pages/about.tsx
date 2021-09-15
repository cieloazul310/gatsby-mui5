import * as React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../layout';
import Link from '../components/Link';

export default function About(): JSX.Element {
  return (
    <Layout title="About">
      <Typography variant="h4" component="h1" gutterBottom>
        Gatsby v5-beta example
      </Typography>
      <Link to="/">Go to the main page</Link>
    </Layout>
  );
}
