import React from 'react';
import useAirtableData from '../utils/useAirtableData';
import { useSelector } from 'react-redux';

const About = () => {

  const aboutMeData = useSelector(({ airtableReducer }) => airtableReducer.About)
  const result = aboutMeData[0]?.fields?.content || '';
  useAirtableData('About Me', 'FETCH_ABOUT', aboutMeData);

  return <div dangerouslySetInnerHTML={{__html: result}} />;
}

export default About;
