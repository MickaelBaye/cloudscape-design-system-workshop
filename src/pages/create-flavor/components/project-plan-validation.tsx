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

export default function ProjectPlanValidation() {
  const [wholeSalePrice, setWholeSalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const isEmptyString = (value: string) => !value?.length;
  const [checked, setChecked] = useState(false);
  const [checkedIncluded, setCheckedIncluded] = useState(false); 
  return (
    <FormContext.Consumer>
      {({ isFormSubmitted }) => (
        <Container header={<Header variant="h2">4. SOW/Project Plan validation</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <Checkbox onChange={({ detail }) => setChecked(detail.checked)} checked={checked}>Executive Summary</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Assumptions</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Scope of Work</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Summary of milestones and deliverables as referenced in the checklist</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Resource and cost estimate</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Tools to be used in delivery</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>All the content referenced in the checklist as "In Scope/To Be Fully Delivered" or "In Scope/To be Partially delivered"</Checkbox>
            <FormField label={<>Aditional notes<i> - optional</i></>} stretch={true}></FormField>
            <Textarea onChange={({ detail }) => setAdditionalNotes(detail.value)} value={additionalNotes} />
          </SpaceBetween>
        </Container>
      )}
    </FormContext.Consumer>
  );
}
