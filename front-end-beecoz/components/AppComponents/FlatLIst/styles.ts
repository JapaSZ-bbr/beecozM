import { FlatList } from "react-native";
import { IPost } from '../../../interfaces/IPost';
import styled from "../../../styles/styledComponents";

export const List = styled(FlatList as new () => FlatList<IPost>)`
  flex: 1;
  width: 100%;
`;
