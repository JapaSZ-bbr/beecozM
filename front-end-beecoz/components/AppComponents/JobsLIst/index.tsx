import { useEffect, useState } from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components";
import { IJobs } from "../../../interfaces/Job/IJobs";
import { IServiceType } from "../../../interfaces/Service/IServiceType";
import { api } from "../../../services/api";
import { AppJobsCard } from "./JobsCard";
import { Flat, Container, Content } from "./styles";
import Icon from "react-native-vector-icons/Entypo";
import { JobsSelecetItem } from "./JobsSelectItem";

interface AppJobsListProps {
  getValue: (value: number) => void;
}

export const AppJobsList = ({ getValue }: AppJobsListProps) => {
  const [jobs, setJobs] = useState<IServiceType[]>([]);
  const [nameText, setNameText] = useState("");
  const [opened, setOpened] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get<{
        serviceType: Array<{ id: number; name: string }>;
      }>("/service_type/read");

      console.log(data.serviceType);

      const jobsAdapter: Array<IServiceType> = data.serviceType.map(
        (serviceType) => {
          return {
            id: serviceType.id,
            service: serviceType.name,
          };
        }
      );

      setJobs(jobsAdapter);
    };

    fetch();
  }, []);

  return (
    <Container onPress={() => setOpened(!opened)}>
      {!opened ? (
        <Content>
          <Text
            style={{
              color: theme.colors.gray_100,
              fontSize: 16,
            }}
          >
            {!nameText ? "Escolha um serviço" : nameText}
          </Text>
          <Icon
            name="chevron-thin-down"
            style={{
              color: theme.colors.gray_100,
              fontSize: 14,
              fontWeight: "100",
            }}
          />
        </Content>
      ) : (
        <>
          <Content>
            <Text
              style={{
                color: theme.colors.gray_100,
                fontSize: 16,
              }}
            >
              Escolha um serviço
            </Text>
            <Icon
              name="chevron-thin-down"
              style={{
                color: theme.colors.gray_100,
                fontSize: 14,
                fontWeight: "100",
              }}
            />
          </Content>
          <Flat
            data={jobs}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <JobsSelecetItem
                data={item}
                onClose={() => setOpened(false)}
                setNameText={(name: string) => {
                  setNameText(name);
                }}
                setValue={(id) => getValue(id)}
              />
            )}
          />
        </>
      )}
    </Container>
  );
};
