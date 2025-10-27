import styled from "../../../../../styles/styledComponents";
export const Container = styled.View`
  width: 100%;

  margin-bottom: 20px;
  padding-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.main};
`;

export const TitleContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
`;
export const Title = styled.Text`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.white};
`;
export const RegionText = styled.Text`
  color: ${({ theme }) => theme.colors.blue_p};
`;
export const DateText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_100};
`;
export const DescriptionContainer = styled.View`
  width: 100%;
  margin-top: 30px;
`;
export const DescriptionContainerText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;
export const JoinInterestContainer = styled.View`
  width: 100%;
  margin-top: 30px;
`;
