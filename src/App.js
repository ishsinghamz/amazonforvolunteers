import logo from './logo.svg';
import './App.css';
import "@awsui/global-styles/index.css"
import React from 'react';
import ReactDOM from 'react-dom';

// import AppLayout from "@awsui/components-react/app-layout"
// import Container from "@awsui/components-react/"
// import Button from "@awsui/components-react/button"
import { SpaceBetween, Button, AppLayout, Container, FormField, Form, Input, Select, Header } from '@awsui/components-react';

function App() {
  return (
<AppLayout

      content={
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link">Cancel</Button>
              <Button variant="primary">Next</Button>
            </SpaceBetween>
          }
          header={
            <Header variant="h1" description="Non Profit Organization Signup">
              Non Profit Organization Signup
            </Header>
          }
        >
          <Container header={<Header variant="h2">Organization details</Header>}>
            <SpaceBetween direction="vertical" size="l">
              <FormField label="Organization Name" description="Name of the organization">
                <Input></Input>
              </FormField>
              <FormField label="Address" description="Street Address of the organization">
                <Input></Input>
              </FormField>
              <FormField label="Suite/Unit" description="Suite/Unit Address of the organization">
                <Input></Input>
              </FormField>
              <FormField label="City" description="City of the organization">
                <Input></Input>
              </FormField>
              <FormField label="State/Province" description="State or Province of the organization">
                <Select
                  options={[
                    {
                      label: "Washington",
                      value: "WA"
                    },
                    {
                      label: "Arizona",
                      value: "AZ"
                    },
                    {
                      label: "New York",
                      value: "NY"
                    },
                    {
                      label: "California",
                      value: "CA"
                    }
                  ]}
                  selectedAriaLabel="selected"
                />
              </FormField>
              <FormField label="Zip/Postal Code" description="Zip or Postal code of the organization">
                <Input></Input>
              </FormField>

            </SpaceBetween>
          </Container>
          <Container header={<Header variant="h2">Applicable Categories</Header>}>
          <SpaceBetween direction="vertical" size="l">
          </SpaceBetween>
          </Container>
        </Form>
      }
    />  );
}

export default App;
