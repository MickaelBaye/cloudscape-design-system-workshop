// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useState } from 'react';
import Container from '@cloudscape-design/components/container';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Tiles from '@cloudscape-design/components/tiles';
import Checkbox from "@cloudscape-design/components/checkbox";
import Textarea from "@cloudscape-design/components/textarea";
import SpaceBetween from '@cloudscape-design/components/space-between';

export default function Shape() {
  const [shape, setShape] = useState('bar');
  const [checked, setChecked] = useState(false);
  const [checkedIncluded, setCheckedIncluded] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');

  return (
    <Container header={<Header variant="h2">1. Is Migration Type 'Assess Business Case Phase' and project type Migration?</Header>}>
      <SpaceBetween direction="vertical" size="l">
        <Checkbox
          onChange={({ detail }) =>
            setChecked(detail.checked)
          }
          checked={checked}
        >
          Checked?
        </Checkbox>
        <Checkbox
          onChange={({ detail }) =>
          setCheckedIncluded(detail.checked)
          }
          checked={checkedIncluded}
        >
          Included?
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
  );
}
