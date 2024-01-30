import styled from "styled-components";

const SpinnerContainer = styled.svg`
  @keyframes loading-rotate {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
    }
    to {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
    }
  }

  & circle {
    stroke-dasharray: 90, 150;
	  stroke-dashoffset: 0;
	  stroke-width: 3.6;
	  stroke: #000;
	  stroke-linecap: round;
	  animation: loading-dash 1.5s ease-in-out infinite;
  }

  animation: loading-rotate 2s linear infinite;
  color: #1976d2;
`;

export function SpinnerIcon({width}) {
  return (
    <SpinnerContainer width={width} viewBox="25 25 50 50">
		  <circle cx="50" cy="50" r="20" fill="none"></circle>
    </SpinnerContainer>
  )
}
