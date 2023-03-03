// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useState } from 'react';
import Container from '@cloudscape-design/components/container';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Multiselect, { MultiselectProps } from '@cloudscape-design/components/multiselect';
import RadioGroup from '@cloudscape-design/components/radio-group';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Checkbox from "@cloudscape-design/components/checkbox";
import Textarea from "@cloudscape-design/components/textarea";

import { fruits, chocolate } from '../../flavors/data';
import { FormContext } from '../validation/form-context';

const options = [...fruits, ...chocolate].map(i => ({ value: i, label: i }));

export default function Ingredients() {
  const [organic, setOrganic] = useState('yes');
  const [selectedIngredients, setSelectedIngredients] = useState<MultiselectProps['selectedOptions']>([]);
  const [checked, setChecked] = useState(false);
  const [checkedIncluded, setCheckedIncluded] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');

  return (
    <FormContext.Consumer>
      {({ isFormSubmitted }) => (
        <Container header={<Header variant="h2">2. Are the following available (docs or links)</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <Checkbox onChange={({ detail }) => setChecked(detail.checked)}checked={checked}>Migration Acceleration Program (MAP) Technical Checklist by Phase and Workload</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Project plan document (SOW)</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Pricing calculator link (sometimes included in the project plan)</Checkbox>
            <Checkbox onChange={({ detail }) => setCheckedIncluded(detail.checked)} checked={checkedIncluded}>Inventory of customer / data points justifying the Pricing calculator amount (at the high level)</Checkbox>
            <FormField label={<>Aditional notes<i> - optional</i></>}stretch={true}></FormField>
            <Textarea onChange={({ detail }) => setAdditionalNotes(detail.value)} value={additionalNotes} />
          </SpaceBetween>
        </Container>
      )}
    </FormContext.Consumer>
  );
}
