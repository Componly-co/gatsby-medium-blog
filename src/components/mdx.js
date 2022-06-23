// defines mdx components styles to be used for post content
import * as React from "react"

import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"


const shortcodes = {
  p: props => (
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
        mt: "1.5rem",
        "@media (max-width: 900px)": {
          fontSize: "17px",
          lineHeight: "28px",
          mt: "1rem",
        },
      }}
      {...props}
    />
  ),
  h1: props => (
    <Typography
      variant="h2"
      sx={{
        mt: "4rem",
        mb: "-12px",
        fontSize: "24px !important",
        fontWeight: "900",
        lineHeight: "28px",
        letterSpacing: "0",
        "@media (max-width: 900px)": {
          fontSize: "22px !important",
        },
      }}
      {...props}
    />
  ),
  h2: props => (
    <Typography
      variant="h3"
      sx={{
        mt: "3rem",
        mb: "-12px",
        fontSize: "20px !important",
        letterSpacing: "0",
        fontWeight: "900",
        "@media (max-width: 900px)": {
          fontSize: "18px !important",
        },
      }}
      {...props}
    />
  ),
  blockquote: props => (
    <Typography
      variant="h2"
      sx={{
        pl: 2,
        my: "2rem",
        color: "text.secondary",
        lineHeight: "32px",
        borderLeft: "3px solid ",
        borderColor: "text.primary",
        fontStyle: "italic",
        "& > p": {
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
          letterSpacing: "-0.003em",
          lineHeight: "inherit",
          m: "unset",
        },
       
      }}
      {...props}
    />
  ),
  ul: props => (
    <ul
      {...props}
      style={{ 
        paddingLeft: "2rem", 
        marginBottom: "4rem", 
        marginTop: "2rem" 
      }}
    />
  ),
  li: props => (
    <li
      {...props}
      style={{
        marginTop: "1.14em",
        marginBottom: "-0.46em",
        fontFamily: "Charter, serif",
        fontSize: "20px",
        lineHeight: "32px",
        letterSpacing: "-0.003em",
      }}
    />
  ),
  hr: props => <Divider sx={{ mt: 6 }} />,
  a: props => <MuiLink {...props} />,
  img: props => (
    <Box {...props} sx={{ mt: "2rem", textAlign: "center" }}>
      <img {...props} style={{ width: "100%" }} alt={props.alt}/>
      <figcaption>
        <Typography
          variant="caption"
          sx={{
            lineHeight: "20px",
            fontSize: "14px",
            color: "text.secondary",
            letterSpacing: 0,
          }}
        >
          {props.alt}
        </Typography>
      </figcaption>
    </Box>
  ),

  figcaption: props => (
    <figcaption style={{ textAlign: "center" }}>
    <Typography
      variant="caption"
      {...props}
      sx={{
        lineHeight: "20px",
        fontSize: "14px",
        color: "text.secondary",
        letterSpacing: 0,
      }}
    >
    </Typography>
  </figcaption>
  ),
  pre: props => (
    <Box sx={{ my: "2rem"}}>
      <pre {...props} ></pre>
    </Box>
  ),
}

export default shortcodes
