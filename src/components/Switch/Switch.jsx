import React from 'react';
import styled from 'styled-components';

const Switch = ({ isEditing, setIsEditing }) => {
  return (
    <StyledWrapper>
      <div className='container'>
        <p className='label'>Editar</p>
        <input
          type="checkbox"
          id="checkboxInput"
          checked={isEditing}
          onChange={() => setIsEditing(!isEditing)}
        />
        <label htmlFor="checkboxInput" className="toggleSwitch">
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .label {
    font-weight: bold;
  }

  /* To hide the checkbox */
  #checkboxInput {
    display: none;
  }

  .toggleSwitch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 40px;
    height: 21px;
    background-color: rgb(82, 82, 82);
    border-radius: 20px;
    cursor: pointer;
    transition-duration: .2s;
  }

  .toggleSwitch::after {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    top: 3px;
    left: 5px;
    background-color: white;
    border-radius: 50%;
    transition-duration: .2s;
    box-shadow: 5px 2px 7px rgba(8, 8, 8, 0.26);
  }

  #checkboxInput:checked+.toggleSwitch::after {
    transform: translateX(100%);
    transition-duration: .2s;
    background-color: white;
  }
  /* Switch background change */
  #checkboxInput:checked+.toggleSwitch {
    background-color: #1C5D99;
    transition-duration: .2s;
  }`;

export default Switch;
