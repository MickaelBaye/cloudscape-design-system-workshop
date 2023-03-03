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

export default function CostCalculator() {
  const [wholeSalePrice, setWholeSalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const isEmptyString = (value: string) => !value?.length;
  const [checked, setChecked] = useState(false);
  const [checkedIncluded, setCheckedIncluded] = useState(false); 
  return (
    <FormContext.Consumer>
      {({ isFormSubmitted }) => (
        <Container header={<Header variant="h2">5. Cost calculator</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <Checkbox onChange={({ detail }) => setChecked(detail.checked)} checked={checked}>Is it provided as a link to https://calculator.aws/, cost for services not covered in this calculator can be provided in separate spreadsheet
Exception: Connect workloads - custom partner ARR estimation spreadsheet can be used
Exception: Migration Evaluator report, MPA report, Cloudamize report</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Did CalcBuster validation return any High or Medium issues? If so - document and approve the rationale.</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Are resources in cost calculation aligned with the scope from SOW/Project plan?</Checkbox>
            <FormField label={<>Aditional notes<i> - optional</i></>} stretch={true}></FormField>
            <Textarea onChange={({ detail }) => setAdditionalNotes(detail.value)} value={additionalNotes} />
          </SpaceBetween>
        </Container>
      )}
    </FormContext.Consumer>
  );
}
