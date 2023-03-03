// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
export const variationData = [
  { title: 'ISV', value: 14 },
  { title: 'ENT GFD', value: 32 },
  { title: 'SMB', value: 25 },
  { title: 'ENT ENG', value: 49 },
];

export const breakdownItems = [
  {
    name: 'MAP AnyCustomer A',
    status: { type: 'success', message: 'Approved' },
    molding: 'Assess',
    mixing: '$500.000',
  },
  {
    name: 'MAP AnyCustomer B',
    status: { type: 'success', message: 'Approved' },
    molding: 'Mobilize',
    mixing: '$600.000',
  },
  {
    name: 'MAP AnyCustomer C',
    status: { type: 'success', message: 'Approved' },
    molding: 'Migrate&Modernize',
    mixing: '$700.000',
  },
  {
    name: 'MAP AnyCustomer D',
    status: { type: 'success', message: 'Approved' },
    molding: 'Migrate&Modernize',
    mixing: '$1.000.000',
  },
];

export const productionMetrics = [
  { key: 'Total Reviews', value: '100' },
  { key: 'Total Approved', value: '85' },
  { key: 'Reviewed (this month)', value: '12' },
  { key: 'Total Rejected', value: '15' },
];

export const quote = `Monthly PSA Meeting on ${new Intl.DateTimeFormat('en-US').format(
  new Date()
)} We identified an increasing number of issues related to MAP Credits calulation.`;
export const notes = [
  { name: 'cherry', strong: 1, mild: 5, unnoticed: 14 },
  { name: 'raspberry', strong: 2, mild: 9, unnoticed: 9 },
  { name: 'rose', strong: 2, mild: 3, unnoticed: 15 },
  { name: 'strawberry', strong: 3, mild: 5, unnoticed: 12 },
];
