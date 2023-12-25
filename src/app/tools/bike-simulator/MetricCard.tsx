import { Card, Metric, Text } from "@tremor/react";

export default (props: { title: string, value: string, units?: string }) => (
  <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>{props.title}</Text>
    <Metric>{props.value}</Metric>
    <Text>{props.units}</Text>
  </Card>
);