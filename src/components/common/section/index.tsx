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
    padding: props.padding,
    width: '100%',
    backgroundColor: props.bgcolor,
    display: 'flex',
    justifyContent: 'center',
  })
);

const InnerContainer = styled.div((props) => ({
  width: 1196,
}));

export default Section;
