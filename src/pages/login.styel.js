import styled from 'styled-components'


export const LoginLayout = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-height: 600px;
`

export const pictureBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
`

export const RowLayout = styled.div`
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
`