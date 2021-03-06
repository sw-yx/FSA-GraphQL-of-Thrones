import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  wonLevel,
  resetLevels,
  gotoLevel,
  backLevel,
  correctAnswer,
  openModal
} from "../store";

class Footer extends React.Component {
  render() {
    const StyledSection1 = StyledSection.extend`justify-content: flex-start;`;
    const StyledSection2 = StyledSection.extend`
      justify-content: space-between;
      flex: 2 1 0%;
    `;
    const StyledSection3 = StyledSection.extend`justify-content: flex-end;`;
    const {
      handleCorrectAnswer,
      wonLevel,
      backLevel,
      menuButtonClick,
      gamestate
    } = this.props;
    const { totalLevels, currentLevel, completedLevels } = gamestate;
    const showNextButton =
      gamestate.correctAnswer || completedLevels.includes(currentLevel);
    const showNextButtonGreen =
      gamestate.correctAnswer && !completedLevels.includes(currentLevel);
    return (
      <StyledNav>
        <StyledSection1>
          <BurgerDiv>
            <TheBody onClick={this.props.menuButtonClick} title="8. The Body">
              <span id="SPAN_5" />
              <Span6> Menu </Span6>
            </TheBody>
          </BurgerDiv>
        </StyledSection1>
        <StyledSection2>
          <Button10 disabled={!currentLevel} onClick={backLevel}>
            Back
          </Button10>
          <div id="DIV_11">
            {currentLevel}/{totalLevels}
          </div>

          {showNextButton
            ? <Button10
                disabled={!showNextButton}
                onClick={() => wonLevel(currentLevel)}
                id="shinybutton"
                style={
                  showNextButtonGreen
                    ? {
                        borderColor: "limegreen",
                        borderWidth: "2px"
                      }
                    : {}
                }
              >
                Next <i />
              </Button10>
            : <div />}
        </StyledSection2>
        <StyledSection3>
          {/*<button id="BUTTON_14" />
          Get Help*/}
          by{" "}
          <a href="https://twitter.com/swyx" target="_blank">
            @swyx
          </a>
        </StyledSection3>
      </StyledNav>
    );
  }
}

const Button10 = styled.button`
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: block;
  height: 38px;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(255, 255, 255);
  white-space: nowrap;
  width: 75.5469px;
  word-break: break-word;
  column-rule-color: rgb(255, 255, 255);
  perspective-origin: 37.7656px 19px;
  transform-origin: 37.7656px 19px;
  caret-color: rgb(255, 255, 255);
  background: rgb(53, 69, 81) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  padding: 8px 20px;
`;

const Span6 = styled.span`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: block;
  height: 20px;
  max-width: 400px;
  min-height: auto;
  min-width: auto;
  text-align: left;
  text-decoration: none solid rgb(255, 255, 255);
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 101.859px;
  word-break: break-word;
  column-rule-color: rgb(255, 255, 255);
  perspective-origin: 50.9219px 10px;
  transform-origin: 50.9219px 10px;
  caret-color: rgb(255, 255, 255);
  border: 0px none rgb(255, 255, 255);
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  overflow: hidden;
  padding: 0px 0px 0px 19.2px;
`;

const TheBody = styled.div`
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(32, 64, 86);
  cursor: pointer;
  display: flex;
  height: 50px;
  left: -8px;
  min-height: auto;
  min-width: auto;
  position: relative;
  right: 8px;
  text-decoration: none solid rgb(32, 64, 86);
  top: 0px;
  width: 155.047px;
  word-break: break-word;
  column-rule-color: rgb(32, 64, 86);
  align-items: center;
  justify-content: flex-start;
  perspective-origin: 77.5156px 25px;
  transform-origin: 77.5156px 25px;
  caret-color: rgb(32, 64, 86);
  border: 0px none rgb(32, 64, 86);
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(32, 64, 86) none 0px;
  padding: 0px 17.6px;
`;

const BurgerDiv = styled.div`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: flex;
  height: 50px;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(255, 255, 255);
  width: 155.047px;
  word-break: break-word;
  column-rule-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
  perspective-origin: 77.5156px 25px;
  transform-origin: 77.5156px 25px;
  caret-color: rgb(255, 255, 255);
  border: 0px none rgb(255, 255, 255);
  flex-flow: column nowrap;
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
`;

const StyledNav = styled.nav`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: flex;
  height: 50px;
  min-height: auto;
  min-width: 960px;
  text-decoration: none solid rgb(255, 255, 255);
  width: 100%;
  word-break: break-word;
  z-index: 14;
  column-rule-color: rgb(255, 255, 255);
  align-items: center;
  perspective-origin: 720px 25px;
  transform-origin: 720px 25px;
  caret-color: rgb(255, 255, 255);
  background: rgb(21, 43, 57) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 0px none rgb(255, 255, 255);
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  padding: 0px 8px;
`;

const StyledSection = styled.section`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: flex;
  height: 50px;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(255, 255, 255);
  // width: 356px;
  word-break: break-word;
  z-index: 1;
  column-rule-color: rgb(255, 255, 255);
  align-items: center;
  perspective-origin: 178px 25px;
  transform-origin: 178px 25px;
  caret-color: rgb(255, 255, 255);
  border: 0px none rgb(255, 255, 255);
  flex: 1 1 0%;
  font: normal normal 300 normal 16px / normal Oxygen, Oxygen, "Segoe UI",
    "Helvetica Neue", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
`;

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    gamestate: state.gamestate
  };
};
/**
 * CONTAINER
 */
const mapDispatch = dispatch => {
  return {
    wonLevel(level) {
      dispatch(wonLevel(level));
      dispatch(openModal());
    },
    backLevel() {
      dispatch(backLevel());
    },

    resetLevels(e) {
      e.preventDefault();
      dispatch(resetLevels());
    },

    gotoLevel(e, level) {
      e.preventDefault();
      dispatch(gotoLevel(level));
      dispatch(openModal());
    },

    handleCorrectAnswer(x) {
      dispatch(correctAnswer());
      return x;
    }
  };
};

export default connect(mapState, mapDispatch)(Footer);
