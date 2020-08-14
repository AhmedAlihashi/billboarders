import React, { useContext, useState } from "react";
import {
  Grid,
  Segment,
  Input as SemanticInput,
  Header,
  Button,
} from "semantic-ui-react";
import AppContext from "../../context/appContext";

const Input = () => {
  const appState = useContext(AppContext);
  const { getChartWeek, clearWeek } = appState;
  const [search, setSearch] = useState("");

  const [firstButton, setFirstButton] = useState(false);
  const [secondButton, setSecondButton] = useState(false);

  const firstButtonClick = () => {
    return setFirstButton(!firstButton), setSecondButton(false);
  };
  const secondButtonClick = () => {
    return setFirstButton(false), setSecondButton(!secondButton);
  };
  return (
    <Segment className="Input">
      <Grid columns="equal">
        {/* Nav */}
        <Grid.Column width={16}>
          <Header as="div" block>
            <Grid columns="equal">
              <Grid.Column>
                <Button
                  toggle
                  active={firstButton}
                  onClick={firstButtonClick}
                  content="Billboard Top 200 Albums "
                />
              </Grid.Column>
              <Grid.Column>
                <Button
                  toggle
                  active={secondButton}
                  onClick={secondButtonClick}
                  content="Billboard Hot 100"
                />
              </Grid.Column>
            </Grid>
          </Header>
        </Grid.Column>

        {/* Search */}
        {firstButton && (
          <>
            <Grid.Column width={2}>
              <Header size="huge" textAlign="center">
                Search
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <SemanticInput
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                size="large"
                disabled={false}
                loading={false}
                placeholder="YYYY-MM-DD"
              />
            </Grid.Column>
            <Grid.Column width={2}>
              {search.length > 9 ? (
                <Button
                  content="Submit"
                  primary
                  onClick={() => getChartWeek(search)}
                />
              ) : null}
            </Grid.Column>
            <Grid.Column width={1}>
              {search.length > 9 ? (
                <Button
                  content="Clear"
                  color="red"
                  onClick={() => clearWeek()}
                />
              ) : null}
            </Grid.Column>
          </>
        )}

        <Grid.Column />
      </Grid>
    </Segment>
  );
};

export default Input;
