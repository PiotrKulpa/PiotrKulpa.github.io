import React from 'react';
import Loader from '../components/Loader';
import useAirtableData from '../utils/useAirtableData';
import { useSelector } from 'react-redux';

import './About.scss'

const About = () => {

  const aboutMeData = useSelector(({ airtableReducer }) => airtableReducer.About)
  const result = aboutMeData[0]?.fields?.content || '';
  const { loading } = useAirtableData('About Me', 'FETCH_ABOUT', aboutMeData) || {};
  if(loading) { return <Loader />}
  return <div dangerouslySetInnerHTML={{__html: result}} />;
}

export default About;
