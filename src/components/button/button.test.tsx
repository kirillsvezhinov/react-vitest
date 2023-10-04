import {fireEvent, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { expect, test } from 'vitest'
import Button from './button'

import { renderWithProviders } from '../../utils/test-utils'


test('loads and displays greeting', async () => {
  // ARRANGE
  renderWithProviders(<Button testId='1' />, {
    preloadedState: {
      count: {
        value: 1000
      }
    }
  })
  expect(screen.getByTestId('counter').textContent).toBe("1000")
  fireEvent.click(screen.getByText('button'))
  expect(screen.getByTestId('counter').textContent).toBe("1010")
  fireEvent.click(screen.getByText('button'))
  expect(screen.getByTestId('counter').textContent).toBe("1020")
  await waitFor(() => expect(screen.getByTestId('todo_1').textContent).toBe('first post title'))
})