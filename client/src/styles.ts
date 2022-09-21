import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

		@font-face {
			font-family: "NotoSans Light";
			src: url("/fonts/NotoSans-Light.ttf") format("truetype");
			font-style: normal;
	}

	@font-face {
			font-family: "NotoSans Bold";
			src: url("/fonts/NotoSans-Bold.ttf") format("truetype");
			font-style: normal;
	}

    @font-face {
        font-family: "GloriaHallelujah Regular";
        src: url("/fonts/GloriaHallelujah-Regular.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: "NotoSans Light", sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        // background: linear-gradient(#005aa7, #000);
				//background-image: url('/img/gif/linez.gif');
        background-image: black;
    	background-size: cover;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #000 0px 0px 0px 1px;
        }
    }

    h1 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 56px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    h2 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 42px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 35.25px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 24px;
        }
    }

    h3 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 32.8px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 27.5px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 18.7px;
        }
    }

    h4 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 28px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 23.5;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 16px;
        }
    }

    h5 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 23.3px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 19.5px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 13.3px;
        }
    }

    h6 {
        font-family: 'NotoSans Bold', serif;
        color: #1d1e18;
        font-size: 18.8px;
        line-height: 1.18;
        margin: 0;

        @media only screen and (max-width: 890px) {
          font-size: 15.8px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 10.7px;
        }
    }

    p {
        color: #1D1E18;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #1D1E18;

        :hover {
            color: #2e186a;
        }
    }

    ul {
      list-style-type: none;
    }
    
    li {
      font-size: 1.2rem;
    }

    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .center {
        align-items: center;
        text-align: center;
        vertical-align: middle;
        justify-content: center;
    }
`;
