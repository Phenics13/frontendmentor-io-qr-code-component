import styled from "styled-components";

export const AppContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  max-width: 320px;
  border-radius: 15px;
  padding: 16px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsl(0, 0%, 100%);

  box-shadow: 0px 4.3px 3.4px rgba(0, 0, 0, 0.017),
    0px 12px 9.5px rgba(0, 0, 0, 0.025), 0px 28.9px 22.9px rgba(0, 0, 0, 0.033),
    0px 96px 76px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h1`
  margin-top: 25px;
  padding: 0 15px;

  color: hsl(218, 44%, 22%);
  font-weight: 700;
  font-size: 22px;
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 25px;
  padding: 0 15px;

  color: #9b9ea3;
  font-weight: 400;
  font-size: 15px;
`;

export const Image = styled.img`
  width: 288px;
  border-radius: 15px;
`;
