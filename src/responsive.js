import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 414px) {
      ${props}
    }

    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const mobileduo = (props) => {
  return css`
    @media only screen and (max-width: 540px) {
      ${props}
    }
  `;
};

export const mini = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 912px) {
      ${props}
    }

    @media only screen and (max-width: 820px) {
      ${props}
    }
  `;
};
