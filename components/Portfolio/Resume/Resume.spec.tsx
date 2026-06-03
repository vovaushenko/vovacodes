import { shallow } from 'enzyme';
import React from 'react';
import Resume from './Resume';
import * as Styled from './Resume.styles';
import { FiGlobe, FiMail, FiPhoneOutgoing } from 'react-icons/fi';
import TextList from '../TextList/TextList';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<Resume />);
};

describe('Resume', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });
  describe('left column', () => {
    it('should render left column', () => {
      const leftColumn = wrap.find(Styled.LeftColumn);
      expect(leftColumn.length).toBe(1);
    });
    it('should render two contact links', () => {
      const contactLinks = wrap.find(Styled.ContactInfo);
      expect(contactLinks.length).toBe(1);
    });
    it('should render contact link icons', () => {
      const globe = wrap.find(FiGlobe);
      expect(globe.length).toBe(1);
      const mail = wrap.find(FiMail);
      expect(mail.length).toBe(2);
      const phone = wrap.find(FiPhoneOutgoing);
      expect(phone.length).toBe(2);
    });

    it('should render two skill lists', () => {
      const leftColumn = wrap.find(Styled.LeftColumn);
      const lists = leftColumn.find(TextList);
      expect(lists.length).toBe(2);
    });
  });

  describe('Right Column', () => {
    it('should render summary header', () => {
      const summary = wrap.find(Styled.Summary);
      expect(summary.length).toBe(1);

      const name = wrap.find(Styled.Name);
      expect(name.length).toBe(1);
    });

    it('should render correct title', () => {
      const title = wrap.find(Styled.Title);
      expect(title.text()).toEqual('Principal Software Engineer');
    });

    it('should render all social links(currently 5)', () => {
      const socialMediaLink = wrap.find(Styled.SocialMediaLink);
      expect(socialMediaLink.length).toBe(5);
    });

    it('should render all professionalExperience', () => {
      const professionalExperience = wrap.find(ProfessionalExperience);
      expect(professionalExperience.length).toBe(4);
    });

    it('should render product highlights and awards sections', () => {
      const projects = wrap.find(Styled.Projects);
      expect(projects.length).toBe(2);
    });
    it('should render education details', () => {
      const edDetails = wrap.find(Styled.EducationDetails);
      expect(edDetails.length).toBe(3);
    });
  });
});
