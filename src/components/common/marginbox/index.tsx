import { Row } from 'antd';
import styled from 'styled-components';

type MargInboxPropsTypes = {
	mt?: number;
	mb?: number;
};

const Container = styled(Row)<MargInboxPropsTypes>(({ mt, mb }) => ({
	marginTop: mt ? mt : 0,
	marginBottom: mb ? mb : 0,
	width: '100%',
}));

export default function MarginBox({ mt, mb }: MargInboxPropsTypes) {
	return <Container mt={mt} mb={mb} />;
}
