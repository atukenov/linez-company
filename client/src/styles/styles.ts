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


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #FAF3DD;
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #1D1E18;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
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

		.fullscreen-modal {
			height: 100vh;
			width: 100vw !important;
			max-width: 100vw;
			margin: 0;
			top: 0;
			left: 0;
			position: absolute;
		}

		.fullscreen-modal .ant-modal-header, .ant-modal-body, .ant-modal-footer {
			background-color: ##FAF3DD;
		}

		.fullscreen-modal .ant-modal-header {
			border-bottom: 1px solid #95D5B2;
		}

		.fullscreen-modal .ant-btn {
			background: #000;
			color: #fff;
			font-size: 1rem;
			font-weight: 700;
			width: 100%;
			border: 1px solid #edf3f5;
			border-radius: 4px;
			cursor: pointer;
			max-width: 180px;
			transition: all 0.3s ease-in-out;
			box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

			&:hover,
			&:active,
			&:focus {
				color: #fff;
				border: 1px solid #52b788;
				background-color: #52b788;
			}
		}

		.ant-modal-body {
			height: calc(100vh - 110px);
		}

		
`;
