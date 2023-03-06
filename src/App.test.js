import { fireEvent, render } from '@testing-library/react';
import App from './App';

// PREMISE: this is my first time writing tests, I wanted to try anyway :)

test('Check initial jobs', () => {
  const {container} = render(<App />);
  const jobs = container.getElementsByClassName('jobs__item');

  expect(jobs.length).toBe(10);
});

test('Check job values', () => {
  const {container} = render(<App />);
  const job = container.getElementsByClassName('jobs__item')[Math.floor(Math.random() * 10)];
  const company = job.getElementsByClassName('jobs__item__info_company');
  const role = job.getElementsByClassName('jobs__item__info_position');
  const category = job.getElementsByClassName('categories__item');
  
  expect(company.length).toBe(1);
  expect(role.length).toBe(1);
  expect(category.length).toBeGreaterThanOrEqual(1);
});

test('Check filters bar appearence', () => {
  const {container} = render(<App />);
  const job = container.getElementsByClassName('jobs__item')[Math.floor(Math.random() * 10)];
  const category = job.getElementsByClassName('categories__item')[0];

  fireEvent.click(category);
  const filters = container.getElementsByClassName('filters');

  expect(filters.length).toBe(1);
})