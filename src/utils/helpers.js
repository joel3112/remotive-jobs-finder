import objectPath from 'object-path';
import moment from 'moment';
import { BREAKPOINTS } from './constants';

// Mappers

export const jobMapper = (job) => {
  if (!job) {
    return {};
  }

  const get = objectPath.get;

  return {
    id: get(job, 'id'),
    image: get(job, 'company_logo_url'),
    company: get(job, 'company_name'),
    type: get(job, 'job_type'),
    title: get(job, 'title'),
    location: get(job, 'candidate_required_location'),
    date: get(job, 'publication_date'),
    url: get(job, 'url'),
    category: get(job, 'category'),
    tags: get(job, 'tags'),
    salary: get(job, 'salary'),
    description: get(job, 'description'),
  };
};

// Utils

export const getDeviceConfig = (width) => {
  if (width < 576) {
    return BREAKPOINTS.XS;
  } else if (width < 768) {
    return BREAKPOINTS.SM;
  } else if (width < 992) {
    return BREAKPOINTS.MD;
  } else if (width < 1200) {
    return BREAKPOINTS.LG;
  } else if (width < 1600) {
    return BREAKPOINTS.XL;
  } else {
    return BREAKPOINTS.XXL;
  }
};
export const isMobile = (breakpoint) => breakpoint === BREAKPOINTS.XS;
export const isMobileTablet = (breakpoint) => [BREAKPOINTS.XS, BREAKPOINTS.SM].includes(breakpoint);
export const isMobileTabletMedium = (breakpoint) => [BREAKPOINTS.XS, BREAKPOINTS.SM, BREAKPOINTS.MD].includes(breakpoint);

export const sortArrayByKey = (array, key, descending = false) => {
  const arraySorted = array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
  return descending ? arraySorted.reverse() : arraySorted;
};

export const formattedDate = (date) => {
  return moment(new Date(date), 'YYYYMMDD HH:mm').fromNow();
};
