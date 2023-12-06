import React, { Ref } from 'react';
import styled from 'styled-components';

export interface SectionProps {
  children: React.ReactNode;
  bgcolor?: string;
  padding?: string;
}

function Section({
  children,
  bgcolor = '#fff',
  padding = '128px 0 132px',
}: SectionProps) {
  return (
    <SectionContainer bgcolor={bgcolor} padding={padding}>
      <InnerContainer>{children}</InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div<{ bgcolor: string; padding: string }>(
  (props) => ({
    width: '100%',
    padding: props.padding,
    backgroundColor: props.bgcolor,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  })
);

const InnerContainer = styled.div`
  width: 1196px;
`;

export default Section;
