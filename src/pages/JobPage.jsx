import React from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'wouter';
import { useFetch } from '../hooks/useFetch';
import Anchor from '../components/Anchor';
import Detail from '../components/Detail';
import { bps } from '../styles';
import { jobMapper } from '../utils/helpers';

const Aside = styled.aside`
  width: 100%;
  max-width: 231px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  .apply {
    color: ${({ theme }) => `${theme.colors.grayLightColor}`};
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.bold}`};
    margin: 36px 0 16px 0;
  }
  .contact {
    color: ${({ theme }) => `${theme.colors.textColor}`};
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.semibold}`};
    a {
      display: inline-block;
      margin-left: 3px;
    }
  }
`;

const Main = styled.main`
  width: calc(100% - 231px);
  padding-left: 77px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${bps.mobile} {
    width: 100%;
    padding-left: 0;
    padding-top: 36px;
  }
`;

const JobPage = ({ params = {} }) => {
  const { id } = params;
  const [_, setLocation] = useLocation();
  // const { data, loading, error } = useFetch('https://remotive.io/api/remote-jobs?limit=1');
  const { data, loading, error } = useFetch('/assets/mocks/jobs.json');
  const jobs = data && data.jobs && data.jobs.map((job) => jobMapper(job));
  const job = (jobs || []).find((job) => String(job.id) === String(id));
  const { url = '' } = job || {};

  return (
    <>
      <Aside className="App-aside">
        <Anchor icon="keyboard_backspace" to="/">
          Back to search
        </Anchor>
        <div className="apply">HOW TO APPLY</div>
        <div className="contact">
          Please email a copy of your resume and online portfolio to 
          {url && <Anchor href={url}>here</Anchor>}
        </div>
      </Aside>

      <Main className="App-main">
        <Detail {...job} />
      </Main>
    </>
  );
};

export default JobPage;
