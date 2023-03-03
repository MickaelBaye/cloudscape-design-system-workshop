// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import {
  ColumnLayout,
  Container,
  FormField,
  Header,
  Input,
  Textarea,
  SpaceBetween,
  Checkbox
} from '@cloudscape-design/components';

import { useState } from 'react';
import { FormContext } from '../validation/form-context';

export default function SpecializedWorkload() {
  const [wholeSalePrice, setWholeSalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const isEmptyString = (value: string) => !value?.length;
  const [checked, setChecked] = useState(false);
  const [checkedIncluded, setCheckedIncluded] = useState(false); 
  return (
    <FormContext.Consumer>
      {({ isFormSubmitted }) => (
        <Container header={<Header variant="h2">6. Specialized workload</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <Checkbox onChange={({ detail }) => setChecked(detail.checked)} checked={checked}>If it's one of the following - was this signed off by a specialist SA? AL/ML, Connect, IoT, Datawarehouse, Storage migration, SAP migration</Checkbox>
            <FormField label={<>Aditional notes<i> - optional</i></>} stretch={true}></FormField>
            <Textarea onChange={({ detail }) => setAdditionalNotes(detail.value)} value={additionalNotes} />
          </SpaceBetween>
        </Container>
      )}
    </FormContext.Consumer>
  );
}
