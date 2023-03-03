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

export default function Marketing() {
  const [wholeSalePrice, setWholeSalePrice] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const isEmptyString = (value: string) => !value?.length;
  const [checked, setChecked] = useState(false);
  const [checkedIncluded, setCheckedIncluded] = useState(false);

  return (
    <FormContext.Consumer>
      {({ isFormSubmitted }) => (
        <Container header={<Header variant="h2">3.Checklist validation</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <Checkbox
              onChange={({ detail }) =>
                setChecked(detail.checked)
              }
              checked={checked}
            >
              Is column E ("Required?") updated
            </Checkbox>
            <Checkbox
              onChange={({ detail }) =>
              setCheckedIncluded(detail.checked)
              }
              checked={checkedIncluded}
            >
              Is column G ("SOW Section / Comments") updated with reference to SOW section or page?
            </Checkbox>
            <Checkbox
              onChange={({ detail }) =>
              setCheckedIncluded(detail.checked)
              }
              checked={checkedIncluded}
            >
              For activities that are not fully in scope - is the partner explanation in column G reasonable
            </Checkbox>
            <Checkbox
              onChange={({ detail }) =>
              setCheckedIncluded(detail.checked)
              }
              checked={checkedIncluded}
            >
              Is Assess Analysis Report in scope? (E9, E10, E11 - must be In Scope / To Be Fully Delivered)
            </Checkbox>
            <Checkbox
              onChange={({ detail }) =>
              setCheckedIncluded(detail.checked)
              }
              checked={checkedIncluded}
            >
              Is the overall score ('0-Score' tab, C12) above 80%
            </Checkbox>
            <FormField
              label={
                <>
                  Aditional notes<i> - optional</i>
                </>
              }
              stretch={true}
            ></FormField>
            <Textarea onChange={({ detail }) => setAdditionalNotes(detail.value)} value={additionalNotes} />
          </SpaceBetween>
        </Container>
      )}
    </FormContext.Consumer>
  );
}
