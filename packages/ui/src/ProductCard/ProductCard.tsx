import React from "react";
import { Card, Title, Button, Text, Group, Paper } from "@mantine/core";

export const ProductCard: React.FunctionComponent<{
  title?: string;
  description?: string;
}> = ({ title = "", description = "" }) => {
  return (
    <Paper shadow="xl" radius="xl" p="md">
      <Card>
        <Card.Section>
          <Title>{title}</Title>
        </Card.Section>
        <Group>
          <Text>{description}</Text>
        </Group>
        <Button>Buy This</Button>
      </Card>
    </Paper>
  );
};
