import React from 'react';
import styled from '@emotion/styled';
import { useFetch } from '../hooks/useFetch';
import CardList from '../components/CardList';
import Filters from '../components/Filters';
import Search from '../components/Search';
import { jobMapper } from '../utils/helpers';
import { bps } from '../styles';

const Nav = styled.nav`
  margin-bottom: 42px;

  ${bps.mobile} {
    margin-bottom: 29px;
  }
`;

const Aside = styled.aside`
  width: 100%;
  max-width: 379px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const Main = styled.main`
  width: calc(100% - 379px);
  padding-left: 32px;
  
  ${bps.mobile} {
    width: 100%;
    padding-left: 0;
    padding-top: 38px;
  }
`;

const HomePage = () => {
  // const { data, loading, error } = useFetch('https://remotive.io/api/remote-jobs?limit=1');
  const { data, loading, error } = useFetch('/assets/mocks/jobs.json');
  const { jobs = [] } = data || {};

  return (
    <>
      <Nav className="App-nav">
        <Search />
      </Nav>

      <Aside className="App-aside">
        <Filters />
      </Aside>

      <Main className="App-main">
        <CardList items={jobs.map((job) => jobMapper(job))} />
      </Main>
    </>
  );
};

export default HomePage;
