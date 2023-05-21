import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import userContext from './userContext';
import Company from './Company';

jest.mock('./api'); // Mocking the JoblyApi module

describe('Company component', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ handle: 'example' }); // Mocking the useParams hook
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders company name and description', async () => {
    const mockCompany = {
      name: 'Example Company',
      description: 'This is an example company.',
    };

    JoblyApi.getCompany.mockResolvedValue(mockCompany);

    render(<Company />);

    await waitFor(() => {
      expect(screen.getByText('Example Company')).toBeInTheDocument();
      expect(screen.getByText('This is an example company.')).toBeInTheDocument();
    });
  });

  test('renders loading message when jobs are being fetched', async () => {
    JoblyApi.getCompany.mockResolvedValue({ name: 'Example Company', description: '...' });
    JoblyApi.getCompany.mockResolvedValueOnce({ name: 'Example Company', description: '...' });

    render(<Company />);

    await waitFor(() => {
      expect(screen.getByText('Loading')).toBeInTheDocument();
    });
  });

  test('renders CompanyJob components for each job', async () => {
    const mockCompany = {
      name: 'Example Company',
      description: 'This is an example company.',
      jobs: [
        { id: 1, title: 'Job 1' },
        { id: 2, title: 'Job 2' },
      ],
    };

    JoblyApi.getCompany.mockResolvedValue(mockCompany);

    render(<Company />);

    await waitFor(() => {
      expect(screen.getByText('Job 1')).toBeInTheDocument();
      expect(screen.getByText('Job 2')).toBeInTheDocument();
    });
  });
});
