import React from 'react'

/*
 * Add global scripts to ensure Bootstrap and jQuery JS is included
 */
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <link key="font-Signika" href="https://fonts.googleapis.com/css?family=Signika:300,400,700|Poppins:300,400,700|Josefin+Sans:300,400,700&display=swap" rel="stylesheet"></link>,
  ])
}