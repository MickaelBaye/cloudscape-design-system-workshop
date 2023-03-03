// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useState } from 'react';

import Button from '@cloudscape-design/components/button';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
import HelpPanel from '@cloudscape-design/components/help-panel';
import SpaceBetween from '@cloudscape-design/components/space-between';

import Breadcrumbs from '../../components/breadcrumbs';
import Ingredients from './components/ingredients';
import Marketing from './components/marketing';
import Navigation from '../../components/navigation';
import Shape from './components/shape';
import ShellLayout from '../../layouts/shell';
import { FormContext } from './validation/form-context';
import { ContentLayout } from '@cloudscape-design/components';
import ProjectPlanValidation from './components/project-plan-validation';
import CostCalculator from './components/cost-calculator';
import SpecializedWorkload from './components/specialized-workload';

export default function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  return (
    <ShellLayout
      contentType="form"
      breadcrumbs={<Breadcrumbs active={{ text: 'Create review', href: '/create-flavor/index.html' }} />}
      navigation={<Navigation />}
      tools={<HelpPanel header={<h2>Help panel</h2>} />}
    >
      <ContentLayout
        header={
          <Header
            variant="h1"
            description="Create a new review. On creation a review will be shared with MAP team and Partner Investment team."
          >
            Create review
          </Header>
        }
      >
        <SpaceBetween size="m">
          <FormContext.Provider value={{ isFormSubmitted: isFormSubmitted }}>
            <form
              onSubmit={event => {
                setIsFormSubmitted(true);
                event.preventDefault();
              }}
            >
              <Form
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button href="/flavors/index.html" variant="link">
                      Cancel
                    </Button>
                    <Button formAction="submit" variant="primary">
                      Create review
                    </Button>
                  </SpaceBetween>
                }
              >
                <SpaceBetween size="l">
                  <Shape />
                  <Ingredients />
                  <Marketing />
                  <ProjectPlanValidation />
                  <CostCalculator />
                  <SpecializedWorkload />
                </SpaceBetween>
              </Form>
            </form>
          </FormContext.Provider>
        </SpaceBetween>
      </ContentLayout>
    </ShellLayout>
  );
}
