import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
  margin-top: 50px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`;

export const Description = styled.div`
  margin-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: #808080;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  color: #808080;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  border-top: 1px solid #85929e;
  background-color: #d4e6f1;

  & > li {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 33%;
  }

  & > li:not(:last-child) {
    border-right: 1px solid #85929e;
  }
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #353535;
`;
