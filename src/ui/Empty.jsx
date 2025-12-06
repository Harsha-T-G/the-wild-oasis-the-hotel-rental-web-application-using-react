import styled from "styled-components";

const Box = styled.div`
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & p {
    font-family: "Sono";
    font-size: 3rem;
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;
function Empty({ resourceName }) {
  return (
    <Box>
      <p>No {resourceName} could be found.</p>
    </Box>
  );
}

export default Empty;
