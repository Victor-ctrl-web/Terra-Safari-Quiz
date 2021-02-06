import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        border: 1px solid ${({ theme }) => theme.colors.success};
      }

      &[data-status="ERROR"] {
        border: 1px solid ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }

  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
