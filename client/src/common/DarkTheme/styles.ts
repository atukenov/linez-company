import styled from "styled-components";

export const StyledDiv = styled("div")<any>`
  /* body {
    background-color: #25272a;
    -webkit-transition: background-color 150ms ease-out !important;
    transition: background-color 150ms ease-out !important;
  }

  body.day-background {
    background: #ffdb88;
  } */

  .button-con {
    cursor: default;
    position: relative;

    margin-left: -40px;
  }

  #dayIcon {
    position: relative;
    width: 26px;
    height: 26px;
    top: -3px;
    margin: 0 7px;
    fill: #9caec0;
  }

  #nightIcon {
    position: relative;
    width: 26px;
    height: 26px;
    top: -3px;
    margin: 0 7px;
    fill: #9caec0;
  }

  #dayIcon,
  #nightIcon {
    cursor: pointer;
  }

  .toggle {
    display: none;
  }

  .toggle,
  .toggle:after,
  .toggle:before,
  .toggle *,
  .toggle *:after,
  .toggle *:before,
  .toggle + .toggle-button {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .toggle::-moz-selection,
  .toggle:after::-moz-selection,
  .toggle:before::-moz-selection,
  .toggle *::-moz-selection,
  .toggle *:after::-moz-selection,
  .toggle *:before::-moz-selection,
  .toggle + .toggle-button::-moz-selection {
    background: none;
  }

  .toggle::selection,
  .toggle:after::selection,
  .toggle:before::selection,
  .toggle *::selection,
  .toggle *:after::selection,
  .toggle *:before::selection,
  .toggle + .toggle-button::selection {
    background: none;
  }

  .toggle + .toggle-button {
    outline: 0;
    display: inline-block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    border: 2px solid #333;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .toggle + .toggle-button:after,
  .toggle + .toggle-button:before {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
  }

  .toggle + .toggle-button:after {
    left: 0;
  }

  .toggle + .toggle-button:before {
    display: none;
  }

  .toggle:checked + .toggle-button:after {
    left: 50%;
  }

  .toggle + .toggle-button {
    padding: 2px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border: 2px solid rgba(156, 174, 192, 0.27);
    border-radius: 2em;
  }

  .toggle + .toggle-button:after {
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    background: rgba(156, 174, 192, 0.27);
    content: "";
    border-radius: 1em;
  }

  .toggle:checked + .toggle-button:after {
    left: 50%;
  }
`;
// background-color: rgb(255, 130, 92);
