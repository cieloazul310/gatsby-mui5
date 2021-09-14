/* eslint @typescript-eslint/no-explicit-any: "off" */
import * as React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

type GatsbyLinkComposedProps<T = Record<string, unknown>> = Omit<GatsbyLinkProps<T>, 'ref'>;

const GatsbyLinkComposed = React.forwardRef<any, GatsbyLinkComposedProps>((props, ref) => {
  const { to, state, ...other } = props;
  return <GatsbyLink to={to} state={state} ref={ref} {...other} />;
});

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type LinkProps = LinkPropsBase & GatsbyLinkComposedProps & Omit<MuiLinkProps, 'href'>;

function Link(props: LinkProps): JSX.Element {
  const {
    color = 'secondary',
    underline = 'hover',
    innerRef,
    naked,
    to,
    ...other
  } = props;

  if (naked) {
    return <GatsbyLinkComposed ref={innerRef} to={to} {...other} />;
  }

  return (
    <MuiLink component={GatsbyLinkComposed} to={to} ref={innerRef} color={color} underline={underline} {...other} />
  );
}

export default Link;
