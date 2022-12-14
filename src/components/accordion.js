import React, {useState} from 'react';
import {Data} from './Data';
import styled from 'styled-components';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 60vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 5%;
  box-shadow: 2px 2px 2px 2px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: medium;
    margin-left: 5px;
    margin-right: 5px;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #E9EAEA;
  border-top: 1px solid #E9EAEA;

  p {
    font-size: medium;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <IconContext.Provider value={{color: '#dc3545', size: '25px'}}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </div>
                        );
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion;
